import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [5, 5],
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Click Here To Pick An Image From Gallery" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 500, height: 500 }} />}
    </View>
  );
}