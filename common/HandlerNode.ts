namespace b3 {
    export class HandlerNode extends Action {
        private handle:GodRoad.Handler;
        constructor(handle: GodRoad.Handler) {
            super({ name: 'HandlerNode' });
            this.handle = handle;
        }

        public open(tick: Tick) {
            if(this.handle){
                this.handle.excute();
            }
        }

        public tick(tick) {
            return SUCCESS;
        }
    }
}