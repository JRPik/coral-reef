import { Platform } from 'react-native';

import colors from './colors';

export default {
  colors,
  text: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    ...Platform.select({
      ios: {
          fontFamily: "Avenir", 
      },
      android: {
          fontFamily: "Roboto",
      },
    }),
  },//END OF TEXT
  coralText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    ...Platform.select({
      ios:{
        fontFamily: "Avenir",
        paddingVertical: 2,
      },
      android:{
        fontFamily: "Roboto",
        paddingBottom: 14,
      },
    }),
  },//END OF CORALTEXT
  haveAcctText: {
    marginTop: 5,
    fontSize: 15,
    textAlign: "center",
    color: colors.backGroundOne,
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        marginBottom: -15,
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },//END OF HAVEACCTTEXT
  newestCoralText: {
    position: "absolute",
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        fontSize: 20,
        paddingTop: 5,
        left: "34%",
        fontFamily: "Avenir",
      },
      android: {
        marginTop: 5,
        left: "28%",
        fontSize: 21,
      },
    }),
  },//END OF NEWESTCORALTEXT
}//END OF DEFAULT STYLES