import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground } from 'react-native';

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
    fontFamily: 'Kanit_400Regular_Italic',
    fontSize: 70,
    textShadowColor: '#00394d',
    textShadowOffset: { width: 2, height: 2 }
  }
});

export default () => {

  return(
    <ImageBackground source={require('../assets/blur.jpg')} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>PremPicks</Text>
      </SafeAreaView>
    </ImageBackground>
  )
}