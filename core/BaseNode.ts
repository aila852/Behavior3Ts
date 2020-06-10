namespace b3 {
    export class BaseNode {
        public id: string;
        public category: string;
        public name: string;
        public title: string;
        public description: string;
        public properties: Object;
        public parameters: Object;

        constructor({ category = "", name = "", title = "", description = "", properties = {} } = {}) {
            this.id = createUUID();
            this.category = category || '';
            this.name = name || '';
            this.title = title || this.name;
            this.description = description || '';
            this.properties = properties || {};
            this.parameters = {};
        }

        public _execute(tick: Tick) {
            this._enter(tick);

            if (!tick.blackboard.get('isOpen', tick.tree.id, this.id)) {
                this._open(tick);
            }

            var status = this._tick(tick);

            if (status !== RUNNING) {
                this._close(tick);
            }

            this._exit(tick);

            return status;
        }


        public _enter(tick: Tick) {
            tick._enterNode(this);
            this.enter(tick);
        }

        public _open(tick: Tick) {
            tick._openNode(this);
            tick.blackboard.set('isOpen', true, tick.tree.id, this.id);
            this.open(tick);
        }

        public _tick(tick: Tick) {
            tick._tickNode(this);
            return this.tick(tick);
        }

        public _close(tick: Tick) {
            tick._closeNode(this);
            tick.blackboard.set('isOpen', false, tick.tree.id, this.id);
            this.close(tick);
        }

        public _exit(tick: Tick) {
            tick._exitNode(this);
            this.exit(tick);
        }

        public enter(tick: Tick) { }

        public open(tick: Tick) { }

        public tick(tick: Tick) { return SUCCESS }

        public close(tick: Tick) { }

        public exit(tick: Tick) { }
    }
}