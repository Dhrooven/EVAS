import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {SafeAreaView, Text, StyleSheet, View} from 'react-native'
import MyButtons from '../components/MyButtons'
import AgentSignIn from './AgentSignIn.js'
import { withNavigation } from 'react-navigation' // Import withNavigation

const Stack = createStackNavigator()

function SignInAgent({navigation}) {
  return (
    <View style={styles.buttonContainer}>
      <MyButtons
        text={'Agent'}
        styleData={styles.agentButton}
        onPress={() => navigation.navigate('AgentSignIn')}
      />
    </View>
  )
}

function SignInCity({navigation}) {
  return (
    <View style={styles.buttonContainer}>
      <MyButtons
        text={'Citizen'}
        styleData={styles.citizenButton}
        onPress={() => navigation.navigate('CitiSignin')}
      />
    </View>
  )
}

const AgentSignInWithNavigation = withNavigation(SignInAgent)
const CitiSignInWithNavigation = withNavigation(SignInCity)

const UserTypes = () => {
  return (
    <View style={styles.container}>
      <AgentSignInWithNavigation />
      <CitiSignInWithNavigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 40,
  },
  customText: {
    fontFamily: 'PlayfairDisplay-SemiBold',
    fontSize: 35,
    color: 'white',
  },
  citizenButton: {
    color: 'white',
    backgroundColor: 'grey',
    padding: 1,
    borderRadius: 30,
    margin: 20,
    // marginLeft: '15%',
    // marginRight: '15%',
    // marginBottom: '20',
  },
  agentButton: {
    color: 'white',
    backgroundColor: 'grey',
    padding: 1,
    borderRadius: 30,
    margin: 20,
    // marginLeft: '15%',
    // marginRight: '15%',
    // marginTop: '20',
  },
})
export default UserTypes
