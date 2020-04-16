import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';

const decorate = withStyles(({ palette, spacing }) => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    appBar: {
        margin: 0,
        top: 0,
    },
    padding: {
        padding: `0 ${spacing.unit * 2}px`,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}));

type ClassKey = 'root' | 'flex' | 'appBar' | 'padding' | 'menuButton';

class MenuAppBar extends React.Component<WithStyles<ClassKey>> {
    state = {
        auth: true,
        anchorEl: undefined,
    };

    constructor(props: WithStyles<ClassKey>) {
        super(props);
    }

    handleChange = (event: any, checked: boolean) => {
        this.setState({ auth: checked });
    }

    handleMenu = (event: any) => {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleClose = () => {
        this.setState({ anchorEl: null });
    }

    render() {
        const classes = this.props.classes;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar} style={{ position: 'fixed' }}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            React/Material UI Starter Pack
                        </Typography>
                        {auth && (
                            <div>
                                <IconButton aria-haspopup={true} onClick={this.handleMenu} color="inherit">
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    aria-owns={open ? 'menu-list-grow' : undefined}
                                    anchorEl={anchorEl}
                                    id="menu-appbar"
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default decorate<{}>(MenuAppBar);