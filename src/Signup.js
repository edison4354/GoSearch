import React from "react";
import { View, Text, TextInput } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Login extends React.Component {
    static navigationOptions = {
        header: null
    };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Signup</Text>
        <TextInput style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1}} />
      </View>
    );
  }
}