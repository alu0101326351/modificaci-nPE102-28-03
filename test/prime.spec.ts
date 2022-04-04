import 'mocha'
import { expect } from 'chai'
import { primeNumber } from '../src/primeNumber'


describe ("PRIME NUMBER TEST", () => {
    const myTest: primeNumber = primeNumber.getPrimeNumber();
    it ("Metodo firstPrime()", () => {
        expect(myTest.firstPrimes(10)).to.eqls([2, 3, 5, 7]);
        expect(myTest.firstPrimes(14)).to.eqls([2, 3, 5, 7, 11, 13]);
        expect(myTest.firstPrimes(0)).to.eqls([]);
        expect(myTest.firstPrimes(-1)).to.eqls([]);
    });

    
    it ("Metodo range()", () => {
        expect(myTest.range(0, 10)).to.eqls([2, 3, 5, 7]);
        expect(myTest.range(5, 14)).to.eqls([5, 7, 11, 13]);
        expect(myTest.range(0, 4)).to.eqls([2, 3]);
        expect(myTest.range(-1, 0)).to.eqls([]);
    });

    it ("getPrimeNumber()", () => {
        const myTest2 = primeNumber.getPrimeNumber();
        const myTest3 = primeNumber.getPrimeNumber();
        expect(myTest).to.equal(myTest2);
        expect(myTest).to.equal(myTest3);
        expect(myTest2).to.equal(myTest3);
    });
});
