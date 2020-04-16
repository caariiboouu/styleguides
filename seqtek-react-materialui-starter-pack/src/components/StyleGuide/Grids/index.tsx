import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { colors } from '../../../constants';

const decorate = withStyles(({ palette, spacing }) => ({
    root: {
        flexGrow: 1,
        padding: spacing.unit * 2,
    },
    paper: {
        padding: spacing.unit * 2,
        textAlign: 'center',
        color: colors.secondary,
    },
}));

type ClassKey = 'root' | 'paper';

class Grids extends React.Component<WithStyles<ClassKey>> {

    constructor(props: WithStyles<ClassKey>) {
        super(props);
    }

    render() {
        const classes = this.props.classes;

        return (
            <div className="sg-section">
                <div className="sg-display">
                    <h2 className="sg-h2">Grids</h2>
                    <div className={classes.root}>
                        <Grid container={true} spacing={24}>
                            <Grid item={true} xs={12}>
                                <Paper className={classes.paper}>xs=12</Paper>
                            </Grid>
                            <Grid item={true} xs={6}>
                                <Paper className={classes.paper}>xs=6</Paper>
                            </Grid>
                            <Grid item={true} xs={6}>
                                <Paper className={classes.paper}>xs=6</Paper>
                            </Grid>
                            <Grid item={true} xs={3}>
                                <Paper className={classes.paper}>xs=3</Paper>
                            </Grid>
                            <Grid item={true} xs={3}>
                                <Paper className={classes.paper}>xs=3</Paper>
                            </Grid>
                            <Grid item={true} xs={3}>
                                <Paper className={classes.paper}>xs=3</Paper>
                            </Grid>
                            <Grid item={true} xs={3}>
                                <Paper className={classes.paper}>xs=3</Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default decorate<{}>(Grids);
