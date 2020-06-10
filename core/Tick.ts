namespace b3 {
    export class Tick {
        public tree: BehaviorTree;
        public debug: Object;
        public target: Object;
        public blackboard: Blackboard;
        public time:number;
        public _openNodes: any[];
        public _nodeCount: number;

        constructor() {
            this.tree = null;
            this.debug = null;
            this.target = null;
            this.blackboard = null;
            this.time = 0;
            this._openNodes = [];
            this._nodeCount = 0;
        }

        public _enterNode(node) {
            this._nodeCount++;
            this._openNodes.push(node);
        }

        public _openNode(node) {

        }

        public _tickNode(node){

        }

        public _closeNode(node){
            this._openNodes.pop();
        }

        public _exitNode(node){

        }

    }
}