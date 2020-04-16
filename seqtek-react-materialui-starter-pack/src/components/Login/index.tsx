import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import ButtonRow from '../Buttons';
import Api from '../../services/Api';
import MessageStore from '../../stores/Messages/MessageStore';

interface LoginState {
    userName: string;
    password: string;
    loginStatus: string;
    showPassword: boolean;
    buttonDisabled: boolean;
    buttonText: string;
    isLoggedIn: boolean;
}

const decorate = withStyles(({ spacing }) => ({
    root: {
        display: 'flex',
    },
    margin: {
        margin: spacing.unit,
    },
    withoutLabel: {
        marginTop: spacing.unit * 3,
    },
    textField: {
        flexBasis: 200,
    },
    formControl: {
        display: 'block',
        margin: spacing.unit,
        padding: spacing.unit * 2,
    },
}));

type ClassKey = 'root' | 'paper' | 'margin' | 'withoutLabel' | 'textField' | 'formControl';

// https://demo.verinovum.com/api/authentication

class Login extends React.Component<WithStyles<ClassKey>> {
    api = new Api('');

    state: LoginState = {
        userName: '',
        password: '',
        loginStatus: '',
        showPassword: false,
        buttonDisabled: false,
        buttonText: 'Login',
        isLoggedIn: false,
    };

    constructor(props: WithStyles<ClassKey>) {
        super(props);
    }

    componentDidMount() {
        this.setState({
            userName: 'justin.jiles',
            password: 'Sunleigh@6922'
        });
    }

    handleChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    }

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    }

    handleClickLogin = (event: any) => {
        
        this.setState({ buttonDisabled: true, buttonText: 'Logging In' });

        this.api.setApiUrl('');
        
        this.api.put(
            'https://demo.verinovum.com/api/Authentication?setCookie=True', 
            {
                userName: this.state.userName,
                password: this.state.password
            }
        )
        .then(
            (data: any) => {
                this.setState({ 
                    isLoggedIn: true,
                    buttonDisabled: false,
                    buttonText: 'Login'
                });

                localStorage.setItem('vSession', data.SessionId);

                this.tryApi();

                return data;
            },
            (error) => {
                this.setState({ 
                    isLoggedIn: false,
                    buttonDisabled: false,
                    buttonText: 'Login'
                });
                // Error handling goes here
            }
        );
    }

    tryApi() {
        localStorage.getItem('vsession');

        this.api.get('https://demo.verinovum.com/api/Authentication?setCookie=True&getOnly=true')
            .then(
                (data: any) => {
                    this.api.resetApiUrl();
                    
                    MessageStore.addMessage(
                        'Welcome, ' + data.SystemUser.FullName + '. You are now logged in', 
                        'success'
                    );

                    console.log(data);
                },
                (error) => {
                    console.log(error);
                }
            );        
    }

    render() {

        const classes = this.props.classes;

        return (
            <Paper className="paper-content-wrapper">
                <h3 className="sg-h3">Login</h3>
                <Grid container={true} style={{marginTop: '24px'}}>
                    <Grid item={true} xs={12}>
                        {/* <LoginText isLoggedIn={this.state.isLoggedIn} /> */}
                        <FormControl fullWidth={true} className={`${classes.margin} ${classes.textField}`}>
                            <TextField 
                                id="userName"
                                name="userName"
                                label="Username"
                                placeholder="Username"
                                value={this.state.userName} 
                                onChange={this.handleChange} 
                            />
                        </FormControl>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <FormControl fullWidth={true} className={`${classes.margin} ${classes.textField}`}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                id="password"
                                name="password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={this.handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            onMouseDown={this.handleMouseDownPassword}
                                        >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <ButtonRow>
                    <Button 
                        id="loginButton"
                        color="primary" 
                        variant="raised" 
                        onClick={this.handleClickLogin}
                        disabled={this.state.userName === '' || this.state.password === '' || this.state.buttonDisabled}
                    >
                        {this.state.buttonText}
                    </Button>
                </ButtonRow>
            </Paper>
        );
    }
}
// disabled={this.state.userName === '' || this.state.password === '' || this.state.buttonDisabled}
export default decorate<{}>(Login);