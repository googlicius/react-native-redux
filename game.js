import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const Chess = ({ selected, toggleSelected }) => (
    <TouchableOpacity onPress={toggleSelected} style={[styles.chess, selected ? styles.chess_selected : null]} />
)

export default class Game extends React.Component {
    state = {
        selectedCell: null,
        playground: [],
        histories: []
    }

    componentWillMount() {
        this.setState({playground: this.props.playground })
    }

    toggleSelected = (index) => {
        this.setState({ selectedCell: index });
    }

    moving = (i, index) => {
        // Position of chess to kill.
        const chessToKill = (index + this.state.selectedCell) / 2;
        const playground = [...this.state.playground]

        // Check a move is valid or not
        const validMove = () => {
            const steps = Math.abs(this.state.selectedCell - index);
            return (steps == 14 || steps == 2) && playground[chessToKill] == 2;
        }

        if (validMove()) {
            playground[index] = 2;
            playground[this.state.selectedCell] = 1;
            playground[chessToKill] = 1;
            this.setState(prevState => {
                return { playground, histories: [...prevState.histories, prevState.playground] }
            });
            this.setState({ selectedCell: null });
        }
    }

    renderChess = (i, index) => {
        switch (i) {
            case 2:
                const { selectedCell } = this.state;
                return <Chess selected={selectedCell == index} toggleSelected={() => this.toggleSelected(index)} />

            case 1:
                return (
                    <TouchableWithoutFeedback onPress={() => this.moving(i, index)}>
                        <View style={{ width: '100%', height: '100%' }} />
                    </TouchableWithoutFeedback>
                )

            default:
                return null
        }
    }

    renderCell = (i, index) => (
        <View key={index} style={[styles.cell_default, i == 0 ? styles.cell_disabled : null]}>
            {this.renderChess(i, index)}
        </View>
    )

    reset = () => {
        this.setState({ playground: this.props.playground });
    }

    undo = () => {
        const playground = this.state.histories.pop();
        if(playground) {
            this.setState({ playground })
        }
    }

    render() {
        const { playground } = this.state;
        return (
            <View>
                <View style={styles.board}>
                    {playground.map(this.renderCell)}
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.reset_btn} onPress={this.reset}>
                        <Text>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.reset_btn} onPress={this.undo}>
                        <Text>Undo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cell_default: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: Dimensions.get('window').width / 7,
        height: Dimensions.get('window').width / 7
    },
    cell_disabled: {
        backgroundColor: '#eee'
    },
    chess: {
        justifyContent: 'center',
        backgroundColor: 'steelblue',
        width: '80%',
        height: '80%',
        borderRadius: 10
    },
    chess_selected: {
        backgroundColor: 'tomato'
    },
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderStyle: 'solid'
    },
    btns: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    reset_btn: {
        backgroundColor: 'whitesmoke',
        padding: 10 
    },
    defdkjf: {
    }
})