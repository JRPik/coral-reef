import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native'; //rsf

function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

//rns
const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        paddingBottom: 5,
        textAlign: "center",
        fontWeight: "bold",
        
    },
});

export default AppText;