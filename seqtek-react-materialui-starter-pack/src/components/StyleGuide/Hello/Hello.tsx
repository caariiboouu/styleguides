import * as React from 'react';
import './Hello.css';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <Paper style={{ padding: '12px' }}>
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <div>
                    <Button variant="raised" color="secondary" onClick={onDecrement}>remove enthusiasm</Button>
                    <Button variant="raised" color="primary" onClick={onIncrement}>add enthusiasm</Button>
                </div>
            </div>
        </Paper>
    );
}

export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}