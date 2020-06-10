namespace b3 {
    export class Action extends BaseNode {
        constructor({name = 'Action', title = "", properties={}} = {}) {
            super({
                category: ACTION,
                name,
                title,
                properties,
            });
        }
    }
}