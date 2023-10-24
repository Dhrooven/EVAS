import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MyButtons = props => {
  //   const {text, styleData, onPress} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, props.styleData]}
        onPress={props.onPress}>
        <Text style={[styles.button, props.styleData]}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontFamily: 'TiltNeon-Regular',
    fontSize: 28,
    // fontWeight: 'bold',
  },
});
export default MyButtons;
