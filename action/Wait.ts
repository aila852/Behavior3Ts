namespace b3 {
    export class Wait extends Action {

        private endTime: number = 0;
        constructor({milliseconds = 0} = {}) {
            super({
                name: 'Wait',
                title: 'Wait <milliseconds>ms',
                properties: { milliseconds: 0 },
            });

            this.endTime = milliseconds;
        }

        public open(tick) {
            var startTime = (new Date()).getTime();
            tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
        }

        public tick(tick) {
            var currTime = (new Date()).getTime();
            var startTime = tick.blackboard.get('startTime', tick.tree.id, this.id);

            if (currTime - startTime > this.endTime) {
                return SUCCESS;
            }

            return RUNNING;
        }
    }
}