//FROM OUR THIRD-PARTIES
import React from 'react';
import { Image, StyleSheet, Platform, Text, View } from 'react-native';

//FROM OUR CODE
import defaultStyles from "../../config/styles"


//this componet will show the individual who posted the coral(listItem)
function ListItem({ image, title, subTitle}) {
  return(
    <View style={styles.container}>
        <Image style={styles.itemImg} source={image} />
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
      flexDirection: "row",
  },
  itemImg: {
    borderRadius: 30,
    marginRight: 10,
    marginLeft: 10,
    ...Platform.select({
        ios: {
            width: 60,
            height: 60,
        },
        android: {
            width: 40,
            height: 40,
        },
      }),  
  },
  subTitle:{
    color: defaultStyles.colors.medium,
    ...Platform.select({
      ios: {
          fontSize: 8,
          fontFamily: "Avenir",
      },
      android: {
          fontSize: 10,
          fontFamily: "Roboto",
      },
    }),
  },
  title: {
    fontWeight: "700",
    ...Platform.select({
      ios: {
          fontSize: 10,
          fontFamily: "Avenir",
      },
      android: {
          fontSize: 13,
          fontFamily: "Roboto",
      },
    }),
  },
});

export default ListItem;