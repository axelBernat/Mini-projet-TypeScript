const readline = require('readline');
import Service from "./service";

export default class Presentation{
    constructor(){

    }
    
    
    public static demarrer(): void{

        

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("1. Lister les collegues\n3. Créer un collègue\n99. Sortir\n", (answer:string) => {
            // TODO: Log the answer in a database
            switch (answer) {
                case "1":
                    console.log(">> Liste des clients");   
                    Service.getRequest().then(data => {
                        for (const user of data) {
                            console.log(`Id: ${user.id} Nom: ${user.nom} Prénom: ${user.prenom}`);
                        }
                    })
                    console.log("1. Lister les collegues \n99. Sortir");
                    break;

                case "99":
                    console.log(">> Au revoir");
                    break;

                case "3":
                    // TODO
                    rl.question(">> Créer un collègue\n", (answer: string) => {
                        console.log(`>> Nom :`);
                        console.log(">> Prénom :");
                        console.log(">> Id :");
                    })
                    
                    break;

                default:
                    console.log("Tapper 1. Lister les collegues ou 99. Sortir");
                    break;
            }
            
            rl.close();
        });
        
    }
}