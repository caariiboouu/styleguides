import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { colors } from './constants';
import './styles/index.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.azure,
        },
    },
});

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
