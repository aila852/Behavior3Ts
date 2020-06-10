namespace b3 {
    export class Blackboard {
        private _baseMemory: Object;
        private _treeMemory: Object;

        constructor() {
            this._baseMemory = {};
            this._treeMemory = {};
        }

        private _getTreeMemory(treeScope) {
            if (!this._treeMemory[treeScope]) {
                this._treeMemory[treeScope] = {
                    'nodeMemory': {},
                    'openNodes': [],
                    'traversalDepth': 0,
                    'traversalCycle': 0,
                };
            }
            return this._treeMemory[treeScope];
        }

        private _getNodeMemory(treeMemory, nodeScope) {
            var memory = treeMemory.nodeMemory;
            if (!memory[nodeScope]) {
                memory[nodeScope] = {};
            }
            return memory[nodeScope];
        }

        private _getMemory(treeScope, nodeScope) {
            var memory = this._baseMemory;
            if (treeScope) {
                memory = this._getTreeMemory(treeScope);
                if (nodeScope) {
                    memory = this._getNodeMemory(memory, nodeScope);
                }
            }
            return memory;
        }

        public set(key, value, treeScope = null, nodeScope = null) {
            var memory = this._getMemory(treeScope, nodeScope);
            memory[key] = value;
        }

        public get(key, treeScope = null, nodeScope = null) {
            var memory = this._getMemory(treeScope, nodeScope);
            return memory[key];
        }

        public destory(): void {
            this._baseMemory = {};
            this._treeMemory = {};
        }
    }
}