import { LightningElement, track } from 'lwc';
import carsJson from './carData.js';

const columns = [
     {label: 'name', fieldName: 'car', type: 'text'},
     {label: 'Model', fieldName: 'car_model', type: 'text'},
     {label: 'Color', fieldName: 'car_color', type: 'text'},
     {label: 'Year', fieldName: 'car_model_year', type: 'text'},
     {label: 'VIN', fieldName: 'car_vin', type: 'text'},
     {label: 'Price', fieldName: 'price', type: 'price'},
     {label: 'Availability', fieldName: 'availability', type: 'boolean'},
];
const carsData = carsJson().cars;
export default class OppTable extends LightningElement {
    @track error;
    @track columns = columns;
    @track data = carsData;
    @track opps; 
    @track showTable = false;
    @track recordsToDisplay = []; 
    @track rowNumberOffset;

    connectedCallback() {
            let recs = [];
            for(let i=0; i<this.data.length; i++){
                let opp = {};
                opp.rowNumber = ''+(i+1);
                opp = Object.assign(opp, this.data[i]);
                recs.push(opp);
            }
            this.opps = recs;
            this.showTable = true;    
    }
    //Capture the event fired from the paginator component
    handlePaginatorChange(event){
        this.recordsToDisplay = event.detail;
        this.rowNumberOffset = this.recordsToDisplay[0].rowNumber-1;
    }
}