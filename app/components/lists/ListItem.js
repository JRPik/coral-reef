//FROM OUR THIRD-PARTIES
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

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
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 10,
  },
  subTitle:{
    color: defaultStyles.colors.medium
  },
  title: {
    fontWeight: "700",
  },
});

export default ListItem;