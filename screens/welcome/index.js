import { ActivityIndicator } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={styles.logo} source={require("./logo.png")} />
          <Text style={styles.text}>
            Let's build something amazing together!
          </Text>
        </View>
        <Text style={styles.footer}>Made with ❤️ by Crowdbotics</Text>
      </ScrollView>
    <TextInput style={styles.bGvLpYRr} value="DDD"></TextInput><ActivityIndicator style={styles.ghEonbYm}></ActivityIndicator><Text style={styles.UqXpXIeu}>Lorem ipsum…</Text></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: 700
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0",
    fontWeight: 700,
    marginBottom: 20
  },
  bGvLpYRr: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  ghEonbYm: {
    width: 50,
    height: 50
  },
  UqXpXIeu: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default WelcomeScreen;