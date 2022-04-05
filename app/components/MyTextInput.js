
import { Text, StyleSheet, View, Platform } from 'react-native';

import colors from '../config/colors';

function MyTextInput({placeholder}) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{placeholder}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignContent: "center",
        ...Platform.select({
            ios:{
                width: "40%",
                backgroundColor: colors.backGroundOne,
            },
            android:{
                width: "82%",
                backgroundColor: colors.backGroundTwo,
                margin: 5,
                borderRadius:10,
            },
        }),
    },
    inputText: {
        backgroundColor: colors.backGroundOne,
        height: 40,
        margin: 10,
        padding: 10,
        ...Platform.select({
            ios:{
                width: "200%",
                fontFamily: "Avenir",
                shadowColor: colors.shadowOne,
                shadowOpacity: 0.3,
                shadowRadius: 8,
                shadowOffset: { height: 1, width: 0.3 },
            },
            android:{
                fontFamily: "Roboto",  
                width: "92%",
                borderRadius: 5,            
            },
        }),
      },  
});

export default MyTextInput;