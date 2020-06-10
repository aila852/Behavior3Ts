namespace b3 {
    export class Priority extends Composite {
        constructor({children = []} = {}) {
            super({
                name: 'Priority',
                children
            });
        }

        public tick(tick) {
            for (var i = 0; i < this.children.length; i++) {
                var status = this.children[i]._execute(tick);

                if (status !== FAILURE) {
                    return status;
                }
            }

            return FAILURE;
        }
    }
}