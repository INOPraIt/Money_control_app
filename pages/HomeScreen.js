import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';
import CreditCard from "./components/CreditCard";
import Charts from './components/Charts/Charts';


function HomeScreen() {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Greetings")
      })
  }

  let date = new Date();

  return (
    <View style={styles.container}>
      <View style={styles.app}>
        <CreditCard
          name={auth.currentUser?.email}
          date={date.toISOString().split('T')[0]} suffix="3904"
        />
      </View>
      <View style={styles.containerTwo}>

      </View>
      <View style={styles.containerThree}>
        <TouchableOpacity 
          style={styles.appButtonContainer}
          onPress={() => navigation.navigate('Settings')}
          >
          <Text style={styles.appButtonText}>Add Graph</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Charts />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    width: 600,
    marginTop: 30,
    marginLeft: 15
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 2, 30)',
  },
  containerTwo: {
    flex: 1,
  },
  containerThree: {
    flex: 1,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "rgb(250, 224, 30)",
    paddingVertical: 10,
    width: 330,
    paddingHorizontal: 12,
    marginTop: 115,
    marginLeft: 15,
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
