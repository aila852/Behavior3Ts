namespace b3 {
    export class Sequence extends Composite {
        constructor({children = []} = {}) {
            super({
                name: 'Sequence',
                children
            });
        }

        public tick(tick) {
            for (var i = 0; i < this.children.length; i++) {
                var status = this.children[i]._execute(tick);

                if (status !== SUCCESS) {
                    return status;
                }
            }
            return SUCCESS;
        }
    }
}