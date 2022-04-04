import { expect } from 'chai'
import 'mocha'
import * as Solve from "../src/index"

describe ('SORT TEST', () => {
    let Bubble: Solve.BubbleSort = new Solve.BubbleSort()
    let Bsolver: Solve.Solver = new Solve.Solver([2, 3, 5, 1], Bubble)

    it ("Bubble Sort", () => {
        expect(Bsolver.logic()).to.eql([1, 2, 3, 5])
    });

    let Merge: Solve.MergeSort = new Solve.MergeSort()
    let Msolver: Solve.Solver = new Solve.Solver([2, 3, 5, 1], Merge)

    it ("Merge Sort", () => {
        expect(Msolver.logic()).to.eql([1, 2, 3, 5])
    });
});

