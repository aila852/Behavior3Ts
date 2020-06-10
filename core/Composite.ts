namespace b3 {
    export class Composite extends BaseNode {
        public children: BaseNode[];

        constructor({children = [], name = 'Composite', title="", properties={}} = {}) {
            super({
                category: COMPOSITE,
                name,
                title,
                properties,
            });
            this.children = (children).slice(0);
        }
    }
}