import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.containerTwo}>
            <Text style={styles.headerOne}>
              Adding a graph
            </Text>
            <Text style={styles.textTwo}>
              Here you can add a schedule that will help you keep track of your expenses.
            </Text>
          </View>
          <View style={styles.containerThree}>
            <TextInput
              placeholder='Housing expenses'
              placeholderTextColor="grey"
              style={styles.input} />
            <TextInput
              placeholder='Apartment expenses'
              placeholderTextColor="grey"
              style={styles.input}
              secureTextEntry />
            <TextInput
              placeholder='Equipment costs'
              placeholderTextColor="grey"
              style={styles.input} />
            <TextInput
              placeholder='Car expenses'
              placeholderTextColor="grey"
              style={styles.input}
              secureTextEntry />
            <TextInput
              placeholder='Furniture expenses'
              placeholderTextColor="grey"
              style={styles.input} />
            <TextInput
              placeholder='Food expenses'
              placeholderTextColor="grey"
              style={styles.input}
              secureTextEntry />
            <TextInput
              placeholder='Utility costs'
              placeholderTextColor="grey"
              style={styles.input} />
            <TextInput
              placeholder='Other expenses'
              placeholderTextColor="grey"
              style={styles.input}
              secureTextEntry />
          </View>
          <TouchableOpacity style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Add graph</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 2, 30)',
  },
  containerInput: {
    flex: 1,
  },
  headerOne: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 45,
    marginTop: 30,
    marginLeft: 25
  },
  containerTwo: {
    flex: 1
  },
  scrollView: {
    marginHorizontal: 20,
  },
  containerThree: {
    flex: 2
  },
  input: {
    color: 'grey',
    fontSize: 25,
    marginTop: 30,
    marginLeft: 25,
  },
  textTwo: {
    color: 'grey',
    fontSize: 20,
    marginLeft: 25,
    marginTop: 10
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "rgb(255, 91, 91)",
    paddingVertical: 10,
    width: 300,
    height: 60,
    paddingHorizontal: 12,
    marginLeft: 25,
    marginTop: 40,
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
    textTransform: "uppercase"
  },
  appButtonContainerOne: {
    elevation: 8,
    backgroundColor: "rgb(250, 224, 30)",
    paddingVertical: 10,
    width: 300,
    height: 60,
    paddingHorizontal: 12,
    marginLeft: 25,
    marginTop: 40
  },
  appButtonTextOne: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
    textTransform: "uppercase"
  },
})

export default SettingsScreen;
