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

//If you want the style to be on both android and ios put it above Platform.select. However,
//if a style is different then put it in it specific platform.
const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        paddingBottom: 5,
        textAlign: "center",
        fontWeight: "bold",

        ...Platform.select({
            ios:{
                fontSize: 12,
                fontFamily: "Avenir",
            },
            android:{
                fontSize: 11,
                fontFamily: "Roboto"
            },
        }),
    },
});

export default AppText;