import 'react-native-gesture-handler'
import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import UserTypes from './src/screens/UserType'
import test from './src/screens/test'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {withFormik} from 'formik'
//import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'tomato',
//     secondary: 'yellow',
//   },
// };

// const navigator = createStackNavigator({
//   Home: UserTypes
// }, {
//   initialRouteName: "UserTypes",
//   defaultNavigationOptions: {
//     title: "EVAS"
//   }
// })

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="test" component={test} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
    //</PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
})
export default App
