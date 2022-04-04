

    export interface Strategy {
        execute(data: number[]): number[];
    }

    export class Solver {
        constructor(private data: number[], private strategy: Strategy) {}

        logic(): number[] {
            return this.strategy.execute(this.data);
        }
    }
