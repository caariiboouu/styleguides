import * as React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

class Home extends React.Component {
    render() {
        return (
            <Paper className="paper-content-wrapper">
                <ul>
                    <li><Link to="/styleguide">Style Guide</Link></li>
                </ul>
            </Paper>
        );
    }
}

export default Home;