namespace b3 {
    export class Decorator extends BaseNode {
        protected child: BaseNode;

        constructor({child = null, name = 'Decorator', title = "", properties = {}} = {}) {
            super({
                category: DECORATOR,
                name,
                title,
                properties,
            });
            this.child = child;
        }
    }
}