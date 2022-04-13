import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native'; //rsf

import defaultStyles from "../config/styles"

//This will allow us to use the same font through the whole app.
//It will also figure out which OS we are using and use a style that
//Is built for that OS.
function AppText({children}) {
    return (
        <Text style={defaultStyles.coralText}>{children}</Text>
    );
}


export default AppText;