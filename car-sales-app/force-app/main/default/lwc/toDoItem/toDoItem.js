import { LightningElement, api } from 'lwc';

export default class ToDoItem extends LightningElement {
    @api todoId;
    @api todoName;
    @api done = false;

    updateHandler(event) {
        const eventDetails = {
            'id': event.target.closest("c-to-do-item").dataset.index
        }
        const updateEvent = new CustomEvent("update", {'detail': eventDetails});
        this.dispatchEvent(updateEvent);
    }

    deleteHandler() {
        const deleteEvent = new CustomEvent("delete");
        this.dispatchEvent(deleteEvent);
    }

    get containerClass() {
        return this.done ? "todo completed" : "todo upcoming";
    }

    get iconName() {
        return this.done ? "utility:add" : "utility:check";
    }


}