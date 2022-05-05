//IMPORTS FROM OUR THIRD-PARTIES
import { StatusBar } from "expo-status-bar";
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, Button
  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from 'react';
import { collection, getDocs, doc, deleteDoc, onSnapshot, query } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
//IMPORT FROM OUR CODE
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";
import { app, db } from '../../firebase';

//Main coral component. This will show the coral that was uploaded most recent.
MainCoral = (props) => (
  <View style={[styles.newestCoralContainer]}>
    <Image source={{uri:props.image}} style={styles.newestCoralImage} />
    <Text style={defaultStyles.newestCoralText}>
      {props.location}: {props.name}{" "}
    </Text>
  </View>
);

//Information that is gathered to present our other entries. These entries are from
//everyone who has the app and has uploaded information to it
CoralPosts = (props) => (
  <View style={[styles.entryContainer]}>
    <TouchableOpacity style={styles.entryImage} onPress={props.func} onLongPress={() => props.function(props.id)}>
      <Image source={{uri:props.image}} style={styles.entryImage} />
    </TouchableOpacity>
    <View>
      <AppText>{props.name}</AppText>
    </View>
    <View>
      <AppText>{props.location}</AppText>
    </View>
  </View>
);

//component to be rendered
export default function GroupCoralEntries({ navigation }) {
  useEffect(() => {
    fetchEntries();
  }, [coralEntries])
  const [coralEntries, setCoralEntries] = useState([])
  const storage = getStorage();
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState();
  const fetchEntries=async()=>{
    const q = query(collection(db, "CoralReefProject/Entries/EntriesCollection"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setCoralEntries([])
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let data = doc.data()
        data.id = doc.id
        setCoralEntries(coralEntries => [...coralEntries, data]);
      });
    });
  }

  const moreOptions = (id) => {
    setModalVisible(true)
    setId(id)
  }

  const deleteEntry = async() => {
    await deleteDoc(doc(db, "CoralReefProject/Entries/EntriesCollection", id));
    setModalVisible(false)
  }

  const pressMain = () => {
    navigation.navigate("Coral");
  };

  return (
    <SafeAreaView>
      <ScrollView>
      { coralEntries.length > 0 &&
        <TouchableOpacity onPress={pressMain}>
          <View style={styles.mainCoralInfo}>
            <MainCoral
              name={coralEntries[0].coralName}
              image={coralEntries[0].image}
              location={coralEntries[0].timeText}
            />
          </View>
        </TouchableOpacity> 
      } 
        <View style={styles.entriesInfo}>
          {coralEntries && coralEntries.map(coral => { return (
            <CoralPosts
              func={pressMain}
              function={moreOptions}
              key={coral.id}
              id={coral.id}
              name={"Coral Name: " + coral.coralName}
              image={coral.image}
              location={"Time: " + coral.timeText}
            />
          )})}
        </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Button
              onPress={deleteEntry}
              title="Delete"
            />
              
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.modalText}>Hide Options</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  entriesInfo: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingLeft: "2%",
  },
  entryContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    backgroundColor: defaultStyles.colors.backGroundThree,
    justifyContent: "space-evenly",
    ...Platform.select({
      ios: {
        width: "35%",
        borderRadius: 50,
        overflow: "hidden",
      },
      android: {
        width: "45%",
        height: 150,
        borderRadius: 30,
        marginRight: 10,
        overflow: "hidden",
        elevation: 5,
      },
    }),
  },
  entryImage: {
    justifyContent: "center",
    ...Platform.select({
      ios: {
        width: "100%",
        height: 150,
        flexBasis: "100%",
      },
      android: {
        width: "100%",
        height: "10%",
        flexBasis: "92%",
        paddingBottom: 15,
      },
    }),
  },
  mainCoralInfo: {
    flex: 1,
    alignItems: "center",
  },
  newestCoralContainer: {
    height: "100%",
    justifyContent: "flex-start",
    borderColor: defaultStyles.colors.primary,
    flexDirection: "column",
    backgroundColor: defaultStyles.colors.backGroundThree,
    borderRadius: 20,
    padding: 10,
    ...Platform.select({
      ios: {
        paddingTop: 10,
        width: "80%",
      },
      android: {
        width: "92%",
        elevation: 5,
      },
    }),
  },
  newestCoralImage: {
    resizeMode: "cover",
    overflow: "hidden",
    width: "75%",
    left: "12%",
    ...Platform.select({
      ios: {
        height: 250,
        marginTop: 24,
      },
      android: {
        marginTop: 23,
        height: 150,
      },
    }),
  },
  // https://reactnative.dev/docs/modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    margin: 5,
    padding: 10
  },
  modalText: {
    fontWeight: "bold",
    fontSize: 20
  }
});
