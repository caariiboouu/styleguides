import * as React from 'react';
import './StyleGuide.css';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { enthusiasm } from '../../reducers/';
// import { StoreState } from '../../types/';

// import Hello from '../../containers/Hello';
import Colors from './Colors';
import Buttons from './Buttons';
import Badges from './Badges';
import Typography from './Typography';
import TextFields from './TextFields';
import Pickers from './DateTimePickers';
import Lists from './Lists';
import ExpansionPanels from './Panels';
import Tables from './Tables';
import Grids from './Grids';

// const store = createStore<StoreState>(enthusiasm, {
//     enthusiasmLevel: 1,
//     languageName: 'TypeScript'
// });

class StyleGuide extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="App">
                    <h1>Style Guide Documentation</h1>
                    {/* <Provider store={store}>
                        <Hello />
                    </Provider> */}
                    <Colors />
                    <Typography />
                    <Badges />
                    <Buttons />
                    <TextFields />
                    <Pickers />
                    <Lists />
                    <ExpansionPanels />
                    <Tables />
                    <Grids />
                </div>
            </div>
        );
    }
}

export default StyleGuide;
