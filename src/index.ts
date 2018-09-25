import * as Lib from 'ts-library'

class Startup {
    public static main(): number {
        
        let d = Lib.sum(12, 99);

        console.log(d);

        console.log('Hello World');
        return 0;
    }
}

Startup.main();