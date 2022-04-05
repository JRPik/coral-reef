import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function MyTitles({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        ...Platform.select({
            ios:{
                fontSize: 18,
                fontFamily: "Avenir",
            },
            android:{
                fontSize: 20,
                fontFamily: "Roboto"
            },
        }),
    },
});

export default MyTitles;