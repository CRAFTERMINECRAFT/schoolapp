import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';

export default class Dashboard extends Component {
  render() {
    return (
      <View style={{
        marginTop: "40%",
        
      }}>
      <Text style={{ textAlign: 'center', topMargin: '10' }}>
          Student Dashboard!
        </Text>
        <Image
          style={styles.iconImage}
          source={require('../assets/homework.png')}></Image>
        
        <Text
          style={styles.hyperlinkStyle}
          onPress={() => {
            Linking.openURL(
              'https://docs.google.com/spreadsheets/d/1zygCk2_MPzMsbj45-6DjT5WupdbTabM44zJoRCyb0ds/edit?usp=sharing'
            );
          }}>
          Today's Homework
        </Text>
        <Image
          style={styles.iconImage}
          source={require('../assets/apptes.jpeg')}></Image>
        <Text
          style={styles.hyperlinkStyle}
          onPress={() => {
            Linking.openURL('https://docs.google.com/spreadsheets/d/1zygCk2_MPzMsbj45-6DjT5WupdbTabM44zJoRCyb0ds/edit?usp=sharing');
          }}>
          Next Step!
        </Text>
        <Image
          style={styles.iconImage}
          source={require('../assets/apptes.jpeg')}></Image>
          <Text
          style={styles.hyperlinkStyle}
          onPress={() => {
            Linking.openURL('https://docs.google.com/spreadsheets/d/1zygCk2_MPzMsbj45-6DjT5WupdbTabM44zJoRCyb0ds/edit?usp=sharing');
          }}>
          Step 3
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconImage: {
    width: '100%',
    height: '200%',
    resizeMode: 'contain',
  },
  hyperlinkStyle: {
    color: 'blue',
    marginLeft:"40%"
  },
});
