import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Chip from 'material-ui/Chip';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';

const decorate = withStyles(({ palette, spacing, typography }) => ({
    root: {
        marginTop: spacing.unit * 3,
        flexGrow: 1,
    },
    heading: {
        fontSize: typography.pxToRem(15),
        fontWeigtht: typography.fontWeightRegular,
    },
    secondaryHeading: {
        fontSize: typography.pxToRem(15),
        color: palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        textAlign: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${palette.divider}`,
        padding: `${spacing.unit}px ${spacing.unit * 2}px`,
    },
    link: {
        color: palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

type ClassKey = 'root' | 'heading' | 'secondaryHeading' | 'icon' | 'details' | 'column' | 'helper' | 'link';

class ExpansionPanels extends React.Component<WithStyles<ClassKey>> {

    constructor(props: WithStyles<ClassKey>) {
        super(props);
    }

    render() {

        const classes = this.props.classes;

        return (
            <div className="sg-section">
                <div className="sg-display">
                    <h2 className="sg-h2">Expansion Panels</h2>
                    <div className={classes.root}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>Expansion Panel 1</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>Expansion Panel 2</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel disabled={true}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
                            </ExpansionPanelSummary>
                        </ExpansionPanel>
                    </div>
                    <div className={classes.root}>
                        <ExpansionPanel defaultExpanded={true}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <div className={classes.column}>
                                    <Typography className={classes.heading}>Location</Typography>
                                </div>
                                <div className={classes.column}>
                                    <Typography 
                                        className={classes.secondaryHeading}
                                    >
                                            Select trip destination
                                    </Typography>
                                </div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.details}>
                                <div className={classes.column} />
                                <div className={classes.column}>
                                    <Chip label="Barbados" onDelete={() => { return; }} />
                                </div>
                                <div className={`${classes.column} ${classes.helper}`}>
                                    <Typography variant="caption">
                                        Select your destination of choice<br />
                                        <a href="#sub-labels-and-columns" className={classes.link}>
                                            Learn more
                                        </a>
                                    </Typography>
                                </div>
                            </ExpansionPanelDetails>
                            <Divider />
                            <ExpansionPanelActions>
                                <Button size="small">Cancel</Button>
                                <Button size="small" color="primary">
                                    Save
                                </Button>
                            </ExpansionPanelActions>
                        </ExpansionPanel>
                    </div>
                </div>
            </div>
        );
    }
}

export default decorate<{}>(ExpansionPanels);