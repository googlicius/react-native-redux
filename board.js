import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default class Board extends React.Component {
    state = {
        selectedCell: null
    }

    componentWillMount() {
        this.setState({playground: this.props.playground })
    }
    toggleSelected = (index) => {
        this.setState({ selectedCell: index });
    }

    moving = (i, index) => {
        // Check a move is valid or not
        const validMove = () => {
            const steps = Math.abs(this.state.selectedCell - index);
            return steps == 14 || steps == 2;
        }

        // Position of chess to kill.
        const dieChess = () => (index + this.state.selectedCell) / 2;

        if (validMove()) {
            const playground = [...this.state.playground]
            const chessToKill = dieChess();
            playground[index] = 2;
            playground[this.state.selectedCell] = 1;
            playground[chessToKill] = 1;
            this.setState({ playground });
            this.setState({ selectedCell: null })
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
                return <Text>{i}</Text>
        }
    }

    renderCell = (i, index) => {

        return (
            <View key={index} style={[styles.cell_default, i == 0 ? styles.cell_disabled : null]} onPress={this.moving}>
                {this.renderChess(i, index)}
            </View>
        )
    }

    resetPlayground = () => {
        this.setState({ playground: this.props.playground });
    }

    render() {
        const { playground } = this.state;
        return (
            <View style={styles.board}>
                {playground.map(this.renderCell)}
                <TouchableOpacity style={styles.reset_btn} onPress={this.resetPlayground}>
                    <Text>Reset</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const Chess = ({ selected, toggleSelected }) => {
    return (
        <TouchableOpacity onPress={toggleSelected} style={[styles.chess, selected ? styles.chess_selected : null]} />
    )
}

const styles = StyleSheet.create({
    cell_default: {
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: '#ccc',
        borderBottomColor: '#ccc',
        borderStyle: 'solid',
        borderWidth: 1,
        marginLeft: -1,
        marginTop: -1,
        backgroundColor: 'white',
        width: Dimensions.get('window').width / 7.1,
        height: Dimensions.get('window').width / 7.1
    },
    cell_disabled: {
        backgroundColor: '#ccc'
    },
    chess: {

        justifyContent: 'center',
        backgroundColor: 'blue',
        width: '80%',
        height: '80%',
        borderRadius: 10
    },
    chess_selected: {
        backgroundColor: 'tomato'
    },
    board: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderStyle: 'solid',
        // borderWidth: 1,
        // borderColor: '#ccc',
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').width
    },
    row: {
        flexDirection: 'row'
    },
    reset_btn: {
        backgroundColor: 'whitesmoke',
        padding: 15,
        margin: 15,
    },
    defdkjf: {
    }
})