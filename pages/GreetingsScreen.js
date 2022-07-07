import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';

function GreetingsScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.containerOne}>
        <View style={styles.containerOneBox}>
          <Text style={styles.textOne}>14</Text>
          <Text style={styles.textTwo}>Corporations that have {"\n"}evaluated our application</Text>
        </View>
        <View style={styles.containerOneBox}>
          <Text style={styles.textOne}>387</Text>
          <Text style={styles.textTwo}>Porters from all {"\n"}over the world</Text>
        </View>
      </View>

      <View style={styles.containerTwo}>
        <Text style={styles.headerOne}>
          Cost analysis is simple and useful!
        </Text>
        <Text style={styles.headerTwo}>
          With our application {"\n"}you can easily keep track of your expenses
        </Text>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.appButtonText}>Get starting</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerThree}>

      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 2, 30)',
  },
  headerOne: {
    color: 'rgb(232, 215, 168)',
    fontWeight: 'bold',
    fontSize: 38,
    marginTop: 60,
    marginLeft: 25
  },
  headerTwo: {
    color: 'rgb(255, 247, 230)',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 25,

  },
  containerOne: {
    flex: 1,
    flexDirection: 'row',
  },
  textOne: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    marginLeft: 40,
  },
  textTwo: {
    color: 'white',
    fontSize: 18,
    marginLeft: 40,
    marginTop: 10
  },
  containerOneBox: {
    flex: 1,
  },
  containerTwo: {
    flex: 1,
  },
  containerThree: {
    flex: 1
  },
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

});


export default GreetingsScreen;