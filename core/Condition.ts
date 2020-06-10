namespace b3 {
    export class Condition extends BaseNode {
        constructor({name = 'Condition', title = "", properties = {}} = {}) {
            super({
                category: CONDITION,
                name,
                title,
                properties,
            });
        }
    }
}