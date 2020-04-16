import * as React from 'react';
import Grid from 'material-ui/Grid';

class Typography extends React.Component {
    render() {
        return (
            <div className="sg-section" id="sg-typography">
                <div className="sg-display">
                    <h2 className="sg-h2">typography</h2>
                    <Grid container={true}>
                        <Grid item={true} xs={6}>
                            <h3>Font Stacks</h3>
                            <p>
                                <strong>body * </strong><br />
                                <strong>&nbsp; &nbsp; &nbsp;font-family: </strong>'Euclidflex', sans-serif;
                            </p>
                            <p>
                                <strong>h1, h2, h3, h4, h5, h6</strong><br />
                                <strong>&nbsp; &nbsp; &nbsp;font-family: </strong>'Agendamedium', sans-serif;<br />
                                <strong>&nbsp; &nbsp; &nbsp;font-weight: </strong>600
                            </p>
                            <div>
                                <h1>h1. Heading 1</h1>
                                <h2>h2. Heading 2</h2>
                                <h3>h3. Heading 3</h3>
                                <h4>h4. Heading 4</h4>
                                <h5>h5. Heading 5</h5>
                                <h6>h6. Heading 6</h6>
                            </div>
                        </Grid>
                        <Grid item={true} xs={6}>
                            <h3>Address</h3>
                            <address>
                                <strong>Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.</strong><br />
                                Visit us at:<br />
                                Example.com<br />
                                Box 564, Disneyland<br />
                                USA
                            </address>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Typography;
