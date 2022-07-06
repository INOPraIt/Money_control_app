import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

function RegisterScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigation = useNavigation()

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handlesignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log("User sign up - ",user.email);
    })
    .catch(error => alert("An error occurred while registering a user"))
  }

  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log("User is login - ", user.email);
    })
    .catch(error => alert("This account does not exist"))
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTwo}>
        <Text style={styles.headerOne}>
          Sign up
        </Text>
        <Text style={styles.textTwo}>
          To continue you need{"\n"}to log in...
        </Text>
      </View>
      <View style={styles.containerThree}>
        <TextInput
          placeholder='Email'
          placeholderTextColor="grey"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input} />
        <TextInput
          placeholder='Password'
          placeholderTextColor="grey"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input} 
          secureTextEntry/>
        <TouchableOpacity style={styles.appButtonContainer} onPress={handlesignUp}>
          <Text style={styles.appButtonText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.appButtonContainerOne} onPress={handleLogin}>
          <Text style={styles.appButtonTextOne}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(12, 12, 12)',
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
    marginTop: 40
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

export default RegisterScreen;