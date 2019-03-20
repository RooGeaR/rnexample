import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = ({ placeName }) => {
    return (
        <TouchableOpacity>
            <View style={styles.listItem}>
                <Text style={styles.listText}>{ placeName }</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'powderblue'
    },
    listText: {
        color: 'steelblue'
    }
});

export default ListItem;
