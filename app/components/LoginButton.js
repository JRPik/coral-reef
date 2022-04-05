import { View , StyleSheet, Text, Platform} from 'react-native';

import React from 'react';
import colors from '../config/colors';

function LoginButton({title}) {
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
        ...Platform.select({
            ios:{
                width: "30%",
                fontFamily: "Avenir",
            },
            android:{
                width: "40%",
                fontFamily: "Roboto",
            },
        }),
    },
    buttonText: {
        textAlign: "center",
        color: colors.backGroundOne,
        fontWeight: "bold",
      },
});

export default LoginButton;