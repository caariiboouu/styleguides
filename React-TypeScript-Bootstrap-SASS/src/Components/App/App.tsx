import * as React from 'react';
import { Button } from 'reactstrap';
import './App.scss';

import logo from '../../logo.svg';

interface IProps {
    something: string,
    else: string,
}

class App extends React.Component<IProps> {
    public props: any;

    constructor(props: any) {
        super(props);
        console.log(props.anything);
    }

    public render() {
        return (
            <div className="container-fluid App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="content">
                    <div className="row">
                        <div className="col-xs-8">
                            <p className="App-intro">
                                To get started, edit <code>src/App.tsx</code> and save to reload.
                            </p>
                        </div>
                        <div className="col-xs-4">
                            <Button color="danger">Awesome Button</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
