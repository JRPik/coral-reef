import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

//This will allow us to use the same font headings through the whole app.
//It will also figure out which OS we are using and use a style that
//Is built for that OS.
function MyHeading({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        paddingBottom: 5,
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default MyHeading;