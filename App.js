import 'react-native-gesture-handler'
import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import UserTypes from './src/screens/UserType'
import test from './src/screens/test'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {withFormik} from 'formik'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="UserTypes" component={UserTypes} options={{ title: 'Select the user type' }} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
})
export default App
