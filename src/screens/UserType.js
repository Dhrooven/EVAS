import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import MyButtons from '../components/MyButtons';

const UserTypes = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.Text}>Select the user type</Text>
        <MyButtons text={'Citizen'} styleData={styles.citizenButton} />
        <MyButtons text={'Agent'} styleData={styles.agentButton} />
      </View>
    </SafeAreaView>
  );
};

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
  Text: {
    fontFamily: 'Helvetica',
    fontSize: 22,
    color: 'white',
  },
  citizenButton: {
    color: 'white',
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 30,
    margin: 25,
    // marginLeft: '15%',
    // marginRight: '15%',
    // marginBottom: '20',
  },
  agentButton: {
    color: 'white',
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 30,
    margin: 20,
    // marginLeft: '15%',
    // marginRight: '15%',
    // marginTop: '20',
  },
});
export default UserTypes;