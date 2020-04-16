import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const decorate = withStyles(({ spacing }) => ({
    margin: {
        margin: spacing.unit * 2,
    },
    padding: {
        padding: spacing.unit * 2,
    },
    textAlign: {
        textAlign: 'right',
    },
}));

type ClassKey = 'margin' | 'padding' | 'textAlign';

class ButtonRow extends React.Component<WithStyles<ClassKey>> {

    constructor(props: WithStyles<ClassKey>) {
        super(props);
    }

    render() {

        const classes = this.props.classes;

        return (
            <Grid className={classes.margin} container={true}>
                <Grid item={true} xs={12} className={`${classes.textAlign} ${classes.padding}`}>
                    {this.props.children}
                </Grid>
            </Grid>
        );

    }
}

export default decorate<{}>(ButtonRow);