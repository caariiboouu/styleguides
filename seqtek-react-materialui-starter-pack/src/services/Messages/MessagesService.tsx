import * as React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { observer } from 'mobx-react';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui-icons/Close';

interface MessagesObject {
    messages: Array<any>;
}

interface MessageObject {
    key: number;
    text: string;
    type: string;
    timeout?: number;
}

@observer
class Message extends React.Component {
    props: MessagesObject;
    messages: Array<any>;
    messagesOpen: Array<any>;
    
    constructor(props: MessagesObject) {
        super(props);

        this.messagesOpen = [];
        this.createMessage = this.createMessage.bind(this);
    }

    deleteMessage(index: any) {
        this.messages = this.messages.splice(index, 1);
        return;
    }

    createMessage(message: MessageObject, index: any) {
        this.messagesOpen[index] = true;

        return (
            <Snackbar 
                key={index}
                className={message.type}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={this.messagesOpen[index]}
                message={<div>
                    <span key={'message' + index} className="snackbar-message">{message.text}</span>
                    <IconButton className="snackbar-button" onClick={() => this.deleteMessage(index)}>
                        <Close />
                    </IconButton>
                    </div>}
            />
        );
    }

    render() {
        this.messages = this.props.messages;

        return(
            <div className="snackbar-wrapper">
                {this.messages.map((message, index) => 
                    this.createMessage(message, index)
                )}
            </div>
        );
    }

}

export default Message;