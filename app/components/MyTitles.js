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
        fontWeight: "bold",
        ...Platform.select({
            ios:{
                fontSize: 18,
                fontFamily: "Avenir",
                /*******The reason there is a center here and not android is because when you
                put the center on the android it goes over to the right more when you
                have a back button.*******/
                textAlign: "center",
            },
            android:{
                fontSize: 20,
                fontFamily: "Roboto",
                left: "25%",
            },
        }),
    },
});

export default MyTitles;