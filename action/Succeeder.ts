namespace b3 {
    export class Succeeder extends Action {
        constructor() {
            super({ name: 'Succeeder' });
        }

        public tick(tick) {
            return SUCCESS;
        }
    }
}