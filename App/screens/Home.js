import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: '#1f9ac0',
    fontFamily: 'Kanit_900Black_Italic',
    fontSize: 90,
    textAlign: 'center',
    fontWeight: '500',
    textShadowColor: '#00394d',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1
  }
});

export default () => {

  return(
    <ImageBackground source={require('../assets/blur.jpg')} style={styles.backgroundImage}>
      <StatusBar translucent={false} barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Prem Picks</Text>
      </SafeAreaView>
    </ImageBackground>
  )
}