import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { listRepos } from './reducer';

class RepoList extends Component {
    componentDidMount() {
        this.props.listRepos('googlicius');
    }

    renderItem({ item }) {
        return (
            <View style={styles.item}>
                <Text>{item.name}</Text>
            </View>
        )
    }

    render() {
        const { repos, error } = this.props;
        return (
            <FlatList
                style={styles.container}
                data={repos}
                renderItem={this.renderItem}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});

const mapStateToProps = state => {
    let storedRepositories = state.repos.map(repo => ({ key: repo.id.toString(), ...repo }));
    return {
        repos: storedRepositories
    }
}

const mapDispatchToProps = {
    listRepos
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);