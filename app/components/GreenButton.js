import { View , StyleSheet, Text, Platform} from 'react-native';

import React from 'react';
import colors from '../config/colors';

function GreenButton({title}) {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.primary,
        alignSelf: "center",
        borderRadius: 20,
        padding: 10,
        justifyContent: "space-between",
        ...Platform.select({
            ios:{
                width: "125%",
                fontFamily: "Avenir",
                marginTop: 20,
            },
            android:{
                width: "120%",
                fontFamily: "Roboto",
                marginTop: 10,
            },
        }),
    },
    buttonText: {
        textAlign: "center",
        color: colors.backGroundOne,
        fontWeight: "bold",
      },
});

export default GreenButton;