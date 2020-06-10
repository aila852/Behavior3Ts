namespace b3 {
    export class Failer extends Action {
        constructor() {
            super({ name: 'Failer' });
        }

        public tick(tick) {
            return FAILURE;
        }
    }
}