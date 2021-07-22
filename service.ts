import fetch from 'node-fetch';
import { Collegue } from './models';



export default class Service {

    static async getRequest():Promise<Collegue[]>{

        const response = await fetch('https://c1.cleverapps.io/collegues');
        const data = await response.json();
        return data;

    }

    //TODO
    static async postRequest(){

        const response = await fetch('https://c1.cleverapps.io/collegues', { method: 'POST', body: 'a=1' });
        const data = await response.json();

        console.log(data);
    }

    
    
}