namespace b3 {
    export class Inverter extends Decorator {
        constructor({child = null} = {}) {
            super({
                child,
                name: 'Inverter',
            });
        }

        tick(tick) {
            if (!this.child) {
                return ERROR;
            }

            var status = this.child._execute(tick);

            if (status == SUCCESS) {
                status = FAILURE;
            } else if (status == FAILURE) {
                status = SUCCESS;
            }

            return status;
        }

    }
}