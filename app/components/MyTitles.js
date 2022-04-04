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
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default MyTitles;