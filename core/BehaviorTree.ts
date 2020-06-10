namespace b3 {
    export class BehaviorTree {
        public id: string;
        public title: string;
        public description: string;
        public properties: Object;
        public root: BaseNode;
        public debug: Object;

        constructor() {
            this.id = createUUID();
            this.title = 'The behavior tree';
            this.description = 'Default description';
            this.properties = {};
            this.root = null;
            this.debug = null;
        }

        tick(target: any, blackboard: Blackboard, time: number = 0) {
            if (!blackboard) {
                throw 'The blackboard parameter is obligatory and must be an ' +
                'instance of b3.Blackboard';
            }

            var tick = new Tick();
            tick.debug = this.debug;
            tick.target = target;
            tick.blackboard = blackboard;
            tick.tree = this;
            tick.time = time;

            var state = this.root._execute(tick);

            var lastOpenNodes = blackboard.get('openNodes', this.id);
            var currOpenNodes = tick._openNodes.slice(0);

            var start = 0;
            var i;
            for (i = 0; i < Math.min(lastOpenNodes.length, currOpenNodes.length); i++) {
                start = i + 1;
                if (lastOpenNodes[i] !== currOpenNodes[i]) {
                    break;
                }
            }

            for (i = lastOpenNodes.length - 1; i >= start; i--) {
                lastOpenNodes[i]._close(tick);
            }

            blackboard.set('openNodes', currOpenNodes, this.id);
            blackboard.set('nodeCount', tick._nodeCount, this.id);

            return state;
        }
    }
}
