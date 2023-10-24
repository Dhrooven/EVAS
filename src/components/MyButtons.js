import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MyButtons = props => {
    const {text, styleData} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styleData]}>
        <Text style={[styles.button, styleData]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontFamily: '',
  },
});
export default MyButtons;
