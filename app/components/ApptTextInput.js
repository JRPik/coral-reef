import React from 'react';
import { View, TextInput, StyleSheet, Platform} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import colors from '../config/colors';

//render icon if only it is defined that is what icon && means"...otherProps mens you can 
//put other stuff in AppTextInput besides just the icon
function ApptTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            
            {icon && <Icon 
            style={styles.iconImage}
            name={icon} 
            size={20} 
            />}
            <TextInput style={styles.textInput} {...otherProps} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backGroundOne,
        borderRadius: 5,
        flexDirection: "row",
        width: '82%',
        padding: 5,
        marginVertical: 10,
    },
    iconImage:{
        marginRight: 8,
        paddingTop: 8,
    },
    textInput: {
        backgroundColor: colors.backGroundOne,
        height: 25,
        //width: "90%",
        margin: 5,
        borderRadius: 5,
        //paddingLeft: 5,
        fontSize: 16,
        ...Platform.select({
            ios:{
                fontFamily: "Avenir",
            },
            android:{
                fontFamily: "Roboto",
            },
        }),
    },
});

export default ApptTextInput;