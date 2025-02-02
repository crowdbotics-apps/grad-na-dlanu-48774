import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'column',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>
          <View style={styles.row1}></View>
          <View style={styles.row2}></View>
          <View style={styles.row3}></View>
      </ScrollView>
    <TextInput style={styles.AKwwkClr} value="SDA"></TextInput></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  row1: {
    flex: 1
  },
  row2: {
    flex: 1
  },
  row3: {
    flex: 1
  },
  AKwwkClr: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  }
});
export default Untitled6;