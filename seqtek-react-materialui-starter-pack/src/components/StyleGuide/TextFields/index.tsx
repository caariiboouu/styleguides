import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import { FormGroup, FormControl, FormLabel, FormControlLabel, FormHelperText } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Radio from 'material-ui/Radio';
import Switch from 'material-ui/Switch';
import Grid from 'material-ui/Grid';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';
import green from 'material-ui/colors/green';

// Style attributes for inline styling
const styles = {
    block: {
        maxWidth: 250,
    },
    margin: {
        marginBottom: 25,
        width: '75%',
        maxWidth: 'initial',
    },
    toggle: {
        marginBottom: 16,
    },
    thumbOff: {
        backgroundColor: '#ffcccc',
    },
    trackOff: {
        backgroundColor: '#ff9d9d',
    },
    thumbSwitched: {
        backgroundColor: 'red',
    },
    trackSwitched: {
        backgroundColor: '#ff9d9d',
    },
    labelStyle: {
        color: 'red',
    },
    customWidth: {
        width: 150,
    },
    formControlMargin: {
        marginTop: 20,
    }
};

// Styling at a class level
const decorate = withStyles(({ spacing }) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: spacing.unit * 2,
    },
    checked: {
        color: green[500],
        '& + $bar': {
            backgroundColor: green[500],
        },
    },
    bar: {},
}));

type ClassKey = 'root' | 'formControl' | 'selectEmpty' | 'checked' | 'bar';

class TextFields extends React.Component<WithStyles<ClassKey>> {

    state = {
        value: 1,
        age: '',
        name: 'hai',
        checkedA: true,
        checkedB: true,
        checkedF: true,
    };

    constructor(props: WithStyles<ClassKey>) {
        super(props);
    }

    handleChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSwitchChange = (name: string) => (event: any) => {
      this.setState({ [name]: event.target.checked });
    }

    render() {
        const classes = this.props.classes;

        return (
            <div className="sg-section" id="sg-typography">
                <div className="sg-display">
                    <h2 className="sg-h2">Text Fields, Selects, and Switches</h2>
                    <Grid container={true}>
                        <Grid item={true} xs={6}>
                            <h3>Text Fields</h3>
                            <TextField
                                label="Floating Label as Hint Text"
                                placeholder="Floating Label as Hint Text"
                                style={styles.margin}
                            /><br />
                            <TextField
                                placeholder="Password Field"
                                label="Password"
                                type="password"
                                style={styles.margin}
                            /><br />
                            <TextField
                                label="MultiLine and Floating Label"
                                placeholder="MultiLine and Floating Label"
                                multiline={true}
                                style={styles.margin}
                            /><br />
                            <TextField
                                error={true}
                                label="Error Field"
                                placeholder="Error Field"
                                style={styles.margin}
                            /><br />
                            <TextField
                                disabled={true}
                                placeholder="Disabled Hint Text"
                                label="Floating Label Text"
                                defaultValue="Disabled With Floating Label"
                                style={styles.margin}
                            />
                        </Grid>
                        <Grid item={true} xs={6}>
                            <h3>Checkbox and Radios</h3>
                            <Grid container={true}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Checkbox Selection</FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Simple Checkbox"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox disabled={true} />}
                                            label="Disabled unckecked"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={true} disabled={true} />}
                                            label="Disabled checked"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                            <Grid container={true}>
                                <FormControl component="fieldset" style={styles.formControlMargin} >
                                    <FormLabel component="legend">Radio Selection</FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            value="shipSpeed"
                                            control={<Radio />}
                                            label="Simple Radio"
                                        />
                                        <FormControlLabel
                                            value="enterprise"
                                            control={<Radio />}
                                            label="Disabled unchecked"
                                            disabled={true}
                                        />
                                        <FormControlLabel
                                            value="community"
                                            label="Disabled checked"
                                            control={<Radio />}
                                            disabled={true}
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container={true}>
                        <Grid item={true} xs={6}>
                            <h3>Switches</h3>
                            <div style={styles.block}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={this.state.checkedA}
                                            onChange={this.handleSwitchChange('checkedA')}
                                            value="checkedA"
                                        />
                                    }
                                    label="Secondary"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={this.state.checkedB}
                                            onChange={this.handleSwitchChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Primary"
                                />
                                <FormControlLabel 
                                    control={<Switch value="checkedC" />} 
                                    label="Uncontrolled" 
                                />
                                <FormControlLabel 
                                    disabled={true} 
                                    control={<Switch value="checkedD" />} 
                                    label="Disabled Off" 
                                />
                                <FormControlLabel 
                                    disabled={true} 
                                    control={<Switch checked={true} value="checkedE" />} 
                                    label="Disabled On" 
                                />
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={this.state.checkedF}
                                            onChange={this.handleSwitchChange('checkedF')}
                                            value="checkedF"
                                            classes={{
                                                checked: classes.checked,
                                                bar: classes.bar,
                                            }}
                                        />
                                    }
                                    label="Custom color"
                                />
                            </div>
                        </Grid>
                        <Grid item={true} xs={6}>
                            <h3>Selects</h3>
                            <div>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="age-simple">Age</InputLabel>
                                    <Select
                                        value={this.state.age}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'age',
                                            id: 'age-simple',
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="age-helper">Age</InputLabel>
                                    <Select
                                        value={this.state.age}
                                        onChange={this.handleChange}
                                        input={<Input name="age" id="age-helper" />}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>Some important helper text</FormHelperText>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <Select
                                        value={this.state.age}
                                        onChange={this.handleChange}
                                        displayEmpty={true}
                                        name="age"
                                        className={classes.selectEmpty}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>Without label</FormHelperText>
                                </FormControl>
                                <FormControl className={classes.formControl} disabled={true}>
                                    <InputLabel htmlFor="name-disabled">Name</InputLabel>
                                    <Select
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        input={<Input name="name" id="name-disabled" />}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="hai">Hai</MenuItem>
                                        <MenuItem value="olivier">Olivier</MenuItem>
                                        <MenuItem value="kevin">Kevin</MenuItem>
                                    </Select>
                                    <FormHelperText>Disabled</FormHelperText>
                                </FormControl>
                                <FormControl className={classes.formControl} error={true}>
                                    <InputLabel htmlFor="name-error">Name</InputLabel>
                                    <Select
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        name="name"
                                        renderValue={value => `⚠️  - ${value}`}
                                        input={<Input id="name-error" />}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="hai">Hai</MenuItem>
                                        <MenuItem value="olivier">Olivier</MenuItem>
                                        <MenuItem value="kevin">Kevin</MenuItem>
                                    </Select>
                                    <FormHelperText>Error</FormHelperText>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="name-input">Name</InputLabel>
                                    <Input id="name-input" />
                                    <FormHelperText>Alignment with an input</FormHelperText>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="name-readonly">Name</InputLabel>
                                    <Select
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        input={<Input name="name" id="name-readonly" />}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="hai">Hai</MenuItem>
                                        <MenuItem value="olivier">Olivier</MenuItem>
                                        <MenuItem value="kevin">Kevin</MenuItem>
                                    </Select>
                                    <FormHelperText>Read only</FormHelperText>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="age-simple">Age</InputLabel>
                                    <Select
                                        value={this.state.age}
                                        onChange={this.handleChange}
                                        input={<Input name="age" id="age-simple" />}
                                        autoWidth={true}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>Auto width</FormHelperText>
                                </FormControl>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default decorate<{}>(TextFields);
