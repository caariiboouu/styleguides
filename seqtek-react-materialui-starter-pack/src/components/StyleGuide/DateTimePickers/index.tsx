import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

//
// create override classes
const decorate = withStyles(({ palette, spacing }) => ({
    textField: {
        marginLeft: spacing.unit,
        marginRight: spacing.unit,
        width: 200,
    },
    note: {
        color: palette.primary.main,
        paddingBottom: spacing.unit * 3,
    },
}));

//
// instead of having to maintain this list in multiple places
// assign to a type that we can pass around
type ClassKey = 'textField' | 'note';

//
// create the component class with styles
// this will pass in the classes we created above
class Pickers extends React.Component<WithStyles<ClassKey>> {

    //
    // pass in the class overrides to the props object
    constructor(props: WithStyles<ClassKey>) {
        super(props);
    }

    render() {
        //
        // get the classes from the props object
        const classes = this.props.classes;
        
        return (
            <div className="sg-section">
                <div className="sg-display">
                    <h2 className="sg-h2">Date/Time Pickers</h2>
                    <p className={classes.note}>
                        <strong>Note: </strong> 
                        It appears that Google has removed the pop-over Date/Time Picker. 
                        Their current fall back is the HTML 5 date picker
                    </p>                    
                    <div style={{clear: 'both'}}>&nbsp;</div>
                    <Grid container={true}>
                        <Grid item={true} xs={4}>
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item={true} xs={4}>                            
                            <TextField
                                id="time"
                                label="Alarm clock"
                                type="time"
                                defaultValue="07:30"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                            />
                        </Grid>
                        <Grid item={true} xs={4}>
                            <TextField
                                id="datetime-local"
                                label="Next appointment"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default decorate<{}>(Pickers);