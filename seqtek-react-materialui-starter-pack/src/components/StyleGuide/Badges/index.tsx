import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import MailIcon from 'material-ui-icons/Mail';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

//
// create override classes
const decorate = withStyles(({ spacing }) => ({
    margin: {
        margin: spacing.unit * 2,
    },
    padding: {
        padding: `0 ${spacing.unit * 2}px`,
    }
}));

//
// instead of having to maintain this list in multiple places
// assign to a type that we can pass around
type ClassKey = 'margin' | 'padding';

//
// create the component class with styles
// this will pass in the classes we created above
class Badges extends React.Component<WithStyles<ClassKey>> {

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
                    <h2 className="sg-h2">Badges</h2>
                    <div>
                        <Badge className={classes.margin} badgeContent={4} color="primary">
                            <MailIcon />
                        </Badge>
                        <Badge className={classes.margin} badgeContent={10} color="secondary">
                            <MailIcon />
                        </Badge>
                        <IconButton className={classes.margin}>
                            <Badge badgeContent={400} color="primary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                    </div>
                    <AppBar position="static" style={{marginBottom: '18px' }}>
                        <Tabs value={0}>
                            <Tab
                                label={<Badge className={classes.padding} color="secondary" badgeContent={4}>
                                    Item One
                                </Badge>}
                            />
                            <Tab label="Item Two" />
                            <Tab label="Item Three" />
                        </Tabs>
                    </AppBar>
                    <Badge color="primary" badgeContent={4} className={classes.margin}>
                        <Typography className={classes.padding}>Typography</Typography>
                    </Badge>
                    <Badge color="primary" badgeContent={4} className={classes.margin}>
                        <Button variant="raised">Button</Button>
                    </Badge>
                </div>
            </div>
        );
    }
}

export default decorate<{}>(Badges);