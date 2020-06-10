namespace b3 {
    export class Repeater extends Decorator {
        private maxLoop: number = 0;
        constructor({maxLoop = -1, child = null} = {}) {
            super({
                child,
                name: 'Repeater',
                title: 'Repeat <maxLoop>x',
                properties: { maxLoop: -1 },
            });

            this.maxLoop = maxLoop;
        }

        open(tick) {
            tick.blackboard.set('i', 0, tick.tree.id, this.id);
        }

        tick(tick) {
            if (!this.child) {
                return ERROR;
            }

            var i = tick.blackboard.get('i', tick.tree.id, this.id);
            var status = SUCCESS;

            while (this.maxLoop < 0 || i < this.maxLoop) {
                status = this.child._execute(tick);

                if (status == SUCCESS || status == FAILURE) {
                    i++;
                } else {
                    break;
                }
            }

            tick.blackboard.set('i', i, tick.tree.id, this.id);
            return status;
        }

    }
}