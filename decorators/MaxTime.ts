namespace b3 {
    export class MaxTime extends Decorator {
        private maxTime: number = 0;
        constructor({maxTime = 0, child = null} = {}) {
            super({
                child,
                name: 'MaxTime',
                title: 'Max <maxTime>ms',
                properties: { maxTime: 0 },
            });

            if (!maxTime) {
                throw 'maxTime parameter in MaxTime decorator is an obligatory parameter';
            }

            this.maxTime = maxTime;
        }

        open(tick) {
            var startTime = (new Date()).getTime();
            tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
        }

        tick(tick) {
            if (!this.child) {
                return ERROR;
            }

            var currTime = (new Date()).getTime();
            var startTime = tick.blackboard.get('startTime', tick.tree.id, this.id);

            var status = this.child._execute(tick);
            if (currTime - startTime > this.maxTime) {
                return FAILURE;
            }

            return status;
        }
    }
}