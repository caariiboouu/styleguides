import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import CommentIcon from 'material-ui-icons/Comment';

const decorate = withStyles(({ palette, spacing }) => ({
    root: {
        width: '10%',
        maxWidth: 360,
        backgroundColor: palette.background.paper,
    },
    nested: {
        paddingLeft: spacing.unit * 4,
    },
    listTop: {
        marginTop: '36px',
    }
}));

type ClassKey = 'root' | 'nested' | 'listTop';

class Lists extends React.Component<WithStyles<ClassKey>> {
    state = {
        open: true,
        checked: [0],
    };

    handleClick = () => {
        this.setState({ open: !this.state.open });
    }

    constructor(props: WithStyles<ClassKey>) {
        super(props);
    }

    handleToggle = (value: number) => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    }

    render() {

        const classes = this.props.classes;

        return (
            <div className="sg-section">
                <div className="sg-display">
                    <h2 className="sg-h2">Lists</h2>
                    <List
                        component="nav"
                        subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
                    >
                        <ListItem button={true}>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText inset={true} primary="Sent mail" />
                        </ListItem>
                        <ListItem button={true} disabled={true}>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText inset={true} primary="Drafts (disabled list item)" />
                        </ListItem>
                        <ListItem button={true} onClick={this.handleClick}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText inset={true} primary="Inbox" />
                            {this.state.open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.open} timeout="auto" unmountOnExit={true}>
                            <List component="div" disablePadding={true}>
                                <ListItem button={true} className={classes.nested}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText inset={true} primary="Starred" />
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                    <List
                        component="nav"
                        subheader={<ListSubheader component="div">List Controls</ListSubheader>}
                        className={classes.listTop}
                    >
                        {[0, 1, 2, 3].map(value => (
                            <ListItem
                                key={value}
                                role={undefined}
                                dense={true}
                                button={true}
                                onClick={this.handleToggle(value)}
                            >
                                <Checkbox
                                    checked={this.state.checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple={true}
                                />
                                <ListItemText primary={`Line item ${value + 1}`} />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="Comments">
                                        <CommentIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </div>
        );
    }
}

export default decorate<{}>(Lists);