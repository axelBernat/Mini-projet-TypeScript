const readline = require('readline');

export default class Presentation{
    constructor(){

    }
    
    
    public static demarrer(): void{

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("1. Lister les collegues \n99. Sortir", (answer:string) => {
            // TODO: Log the answer in a database
            switch (answer) {
                case "1":
                    console.log(">> Liste des clients");
                    console.log("1. Lister les collegues \n99. Sortir");
                    break;

                case "99":
                    console.log(">> Au revoir");
                    break;

                default:
                    break;
            }
            rl.close();
        });
        
    }
}