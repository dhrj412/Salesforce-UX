import { LightningElement, track } from 'lwc';
import carsJson from './carData.js';

const carsData = carsJson().cars;

export default class Recomm extends LightningElement {
    @track data = carsData;
    
    connectedCallback() {
        this.getRandomItems();
        //refresh recomms every 1 minute
        setInterval( () => {
            this.getRandomItems();
        },1000*60);
    }

    // shuffles the data object and selects 5 abvailable objects
    getRandomItems() {
        const shuffled = this.data.sort(() => 0.5 - Math.random());
        const result = shuffled.filter(obj => {
            return obj.availability === true
        });
        
        this.data = result.slice(0, 6);
    }

    get recomms() {
        return this.data && this.data.length ? this.data : [];
    }
}