import { LightningElement, track } from 'lwc';

export default class FeedbackManager extends LightningElement {
    @track time = "";
    @track greeting = "";
    @track todos= [];

    connectedCallback(){
        this.getTime();

        setInterval( () => {
            this.getTime();
        },1000*30);
    }

    getTime(){
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();

        this.time = `${this.getHour(hour)}:${this.getDoubleDigit(min)} ${this.getMidDay(hour)}`;
        this.setGreeting(hour);
    }
    
    setGreeting(hour){
        if (hour < 12) {
            this.greeting = "Good Morning";
        } else if (hour >+ 12 && hour < 17) {
            this.greeting = "Good Afternoon";
        } else {
            this.greeting = "Good Evening";
        }
    }

    getHour(hour){
        return hour === 0 ? 12 : hour > 12 ? (hour-12) : hour;
    }

    getMidDay(hour){
        return hour >=12 ? "PM" : "AM";
    }

    getDoubleDigit(digit) {
        return digit<10 ? "0"+digit : digit;
    }

    addTodoHandler(){
        const inputBox = this.template.querySelector("lightning-input");
        if(inputBox.value) {
            const todo = {
                todoId: this.todos.length,
                todoName: inputBox.value,
                done:false,
                todoDate: new Date()
            }
            this.todos.push(todo);
            inputBox.value = "";
        } 
    }

    get upcomingTasks() {
        return this.todos && this.todos.length ? this.todos.filter( todo => !todo.done) : [];
    }

    get completedTasks() {
        return this.todos  &&  this.todos.length ? this.todos.filter( todo => todo.done) : [];
    }

    updateHandler(event) {
        this.todos[event.detail.id].done = !this.todos[event.detail.id].done;
    }

    deleteHandler() {
        this.todos.pop();
    }
}