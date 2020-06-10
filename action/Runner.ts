namespace b3 {
    export class Runner extends Action {
        constructor() {
            super({ name: 'Runner' });
        }

        public tick(tick) {
            return RUNNING;
        }
    }
}