import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {SafeAreaView, Text, StyleSheet, View} from 'react-native'
import MyButtons from '../components/MyButtons'
import {State} from 'react-native-gesture-handler'
import AgentSignIn from '../screens/AgentSignIn.js'

const Stack = createStackNavigator();

function AgenSignin({navigation}) {
  return (
    <View style={styles.buttonContainer}>
      <MyButtons
        text={'Agent'}
        styleData={styles.agentButton}
        onPress={navigation.navigate('AgentSignIn')}
      />
    </View>
  )
}

function CitiSignIn({navigation}) {
  return (
    <View style={styles.buttonContainer}>
      <MyButtons
        text={'Citizen'}
        styleData={styles.citizenButton}
        onPress={navigation.navigate('CitiSignin')}
      />
    </View>
  )
}

const UserTypes = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='UserTypes'>
        <Stack.Screen name='AgenSignIn' component={AgenSignin} />
//        <Stack.Screen name='Citizen' component={CitiSignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
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
