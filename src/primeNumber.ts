/**
 * Clase para manejar números primos
 */
export class primeNumber {

    private static primeNumber: primeNumber;
    
    /**
     * Constructor privado para seguir el patrón singleton
     */
    private constructor() {}

    /**
     * Si la clase aun no se ha instanciado, se llama al constructor, si no se devuelve
     * la instancia ya creada para preservar el patrón singleton
     * @returns 
     */
    public static getPrimeNumber(): primeNumber {
        if (!primeNumber.primeNumber) {
          primeNumber.primeNumber = new primeNumber();
        }
        return primeNumber.primeNumber;
    }

    /**
     * Devuelve un array con los primeros números primos hasta max
     * @param max 
     * @returns 
     */
    public firstPrimes(max: number): number[] {
        let result: number[] = [];

        for (let i: number = 2; i < max; ++i) {

            let isPrime: boolean = true;
            for (let j = 2; j < i; ++j) {
                if (i % j === 0){
                    isPrime = false;
                }
            }

            if(isPrime)  result.push(i); 
        }
        return result;
    }

    /**
     * Devuelve un array con los números primos entre min y max
     * @param min 
     * @param max 
     * @returns 
     */
    public range(min: number, max: number) {
        let result: number[] = [];

        if (min < 2) min = 2;

        for (let i: number = min; i < max; ++i) {

            let isPrime: boolean = true;
            for (let j = 2; j < i; ++j) {
                if (i % j === 0){
                    isPrime = false;
                }
            }

            if(isPrime)  result.push(i); 
        }
        return result;
    }
}
