import React from "react";
import { View, Text, TextInput } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";


export default class Login extends React.Component {
    static navigationOptions = {
        header: null
    };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#2D2D2D' }}>
        <Text>Login</Text>
        <TextInput style={{ placeholder:'Hey', width: 380, height: 40, borderRadius: 10, borderColor: 'gray', borderWidth: 1}} />
        <TextInput style={{ marginTop: 80, width: 380, height: 40, borderRadius: 10, borderColor: 'gray', borderWidth: 1}} />
      </View>
    );
  }
}