import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

function HomeScreen() {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Greetings")
      })
  }

  return (
    <View>
      <Text>Home - {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.appButtonContainer} onPress={handleSignOut}>
          <Text style={styles.appButtonText}>SIGN UP</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "rgb(250, 224, 30)",
    paddingVertical: 10,
    width: 200,
    paddingHorizontal: 12,
    marginTop: 25,
    marginLeft: 25,
  },
  appButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
})

export default HomeScreen;
