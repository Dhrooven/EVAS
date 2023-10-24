import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import UserTypes from './src/screens/UserType';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserTypes />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});
export default App;
