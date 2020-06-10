namespace b3 {
    export class Limiter extends Decorator {
        private maxLoop = 0
        constructor({child = null, maxLoop = 0} = {}) {
            super({
                child,
                name: 'Limiter',
                title: 'Limit <maxLoop> Activations',
                properties: { maxLoop: 1 },
            });

            if (!maxLoop) {
                throw 'maxLoop parameter in Limiter decorator is an obligatory parameter';
            }

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

            if (i < this.maxLoop) {
                var status = this.child._execute(tick);

                if (status == SUCCESS || status == FAILURE)
                    tick.blackboard.set('i', i + 1, tick.tree.id, this.id);

                return status;
            }

            return FAILURE;
        }

    }
}