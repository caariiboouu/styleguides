import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import MenuAppBar from '../AppBar';
import Home from '../Home';
import StyleGuide from '../StyleGuide';
import Message from '../../services/Messages/MessagesService';
import MessageStore from '../../stores/Messages/MessageStore';

class App extends React.Component {

    render() {
        return (
            <div>
                <Message messages={MessageStore.messages} />
                <MenuAppBar />
                <div className="container">
                    <div className="App">
                        <Switch>
                            <Route exact={true} path="/" component={Home} />
                            <Route path="/styleguide" component={StyleGuide} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
