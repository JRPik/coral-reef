import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native'; //rsf


//This will allow us to use the same font through the whole app.
//It will also figure out which OS we are using and use a style that
//Is built for that OS.
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