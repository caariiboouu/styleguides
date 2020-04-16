import * as React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

function Buttons() {
    return (
        <div className="sg-section">
            <div className="sg-display">
                <Grid container={true}>
                    <Grid item={true} xs={12}>
                        <h2 className="sg-h2">Buttons</h2>
                        <Button variant="raised" color="default" style={{ margin: 12 }}>
                            Default
                        </Button>
                        <Button variant="raised" color="primary" style={{ margin: 12 }}>
                            Primary
                        </Button>
                        <Button variant="raised" color="secondary" style={{ margin: 12 }}>
                            Secondary
                        </Button>
                        <Button variant="raised" color="secondary" disabled={true} style={{ margin: 12 }}>
                            Disabled
                        </Button>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Button variant="raised" color="primary" style={{ margin: 12 }}>
                            Save (positive Call To Action)
                        </Button>
                        <Button variant="raised" className="button warn" style={{ margin: 12 }}>
                            Warn (tasks with temporary affect)
                        </Button>
                        <Button variant="raised" className="button danger" style={{ margin: 12 }}>
                            Danger (tasks with permanent affect)
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Buttons;
