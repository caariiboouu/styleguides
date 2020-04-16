import { observable } from 'mobx';

class MessageStore {
    messages: Array<any>;

    constructor() {
        this.messages = observable([]);
    }

    addMessage(text: string, type: string) {
        let index = this.messages.length;
        this.messages.push({
            key: index + 1,
            text: text,
            type: type
        });
    }

    removeMessage(index: number) {
        this.messages.splice(index, 1);
    }
}

export default new MessageStore();