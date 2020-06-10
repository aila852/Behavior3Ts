namespace b3 {
    export class Error extends Action {
        constructor() {
            super({ name: 'Error' });
        }

        public tick(tick) {
            return ERROR;
        }
    }
}