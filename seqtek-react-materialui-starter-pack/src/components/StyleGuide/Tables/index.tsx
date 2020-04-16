import * as React from 'react';
import { withStyles, WithStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

let id = 0;

function createData(
    name: string, 
    calories: number, 
    fat: number, 
    carbs: number, 
    protein: number
) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const decorate = withStyles(({ palette, spacing, typography }) => ({
    root: {
        width: '100%',
        marginTop: spacing.unit * 3,
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: palette.background.default,
        },
    },
    head: {
        backgroundColor: palette.common.black,
        color: palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}));

const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

type ClassKey = 'root' | 'table' | 'row' | 'head' | 'body';

class Tables extends React.Component<WithStyles<ClassKey>> {

    constructor(props: WithStyles<ClassKey>) {
        super(props);
    }

    render() {
        const classes = this.props.classes;

        return (
            <div className="sg-section">
                <div className="sg-display">
                    <h2 className="sg-h2">Tables</h2>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell numeric={true}>Calories</TableCell>
                                    <TableCell numeric={true}>Fat (g)</TableCell>
                                    <TableCell numeric={true}>Carbs (g)</TableCell>
                                    <TableCell numeric={true}>Protein (g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map(n => {
                                    return (
                                        <TableRow className={classes.row} key={n.id}>
                                            <TableCell>{n.name}</TableCell>
                                            <TableCell numeric={true}>{n.calories}</TableCell>
                                            <TableCell numeric={true}>{n.fat}</TableCell>
                                            <TableCell numeric={true}>{n.carbs}</TableCell>
                                            <TableCell numeric={true}>{n.protein}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default decorate<{}>(Tables);