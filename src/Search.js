import React, {Component} from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native"
import LinearGradient from 'react-native-linear-gradient';

export default class LogIn extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  })

  onSearchPressed = () => {

    const { navigate } = this.props.navigation

    navigate("Map")
  }

  render() {
    return(
      <LinearGradient style={{flex: 1}} colors={["rgb(90, 184, 138)", "rgb(45, 45, 45)"]}>
        <View
          style={styles.loginView}>
          <Text
            style={styles.logInText}>GoSearch</Text>
          {/* <Text
            style={styles.welcomeBackText}>Bienvenido.{"\n"}Introduce tus detalles abajo.</Text> */}
          <View
            style={styles.loginFieldsView}>
            <TextInput
              autoCorrect={false}
              placeholder="Search your interest..."
              secureTextEntry={true}
              style={styles.yourPasswordTextInput}/>
            <TouchableOpacity
                onPress={this.onSearchPressed}
                style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationBarItemIcon: {
    tintColor: "white",
  },
  headerLeftContainer: {
    flexDirection: "row",
    marginLeft: 8,
  },
  navigationBarItem: {
  },
  loginView: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  loginViewLinearGradient: {
    flex: 1,
  },
  logInText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 72,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 200,
  },
  welcomeBackText: {
    color: "white",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    marginTop: 20,
  },
  loginFieldsView: {
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 25,
    shadowOpacity: 1,
    alignSelf: "stretch",
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
  },
  yourNicknameTextInput: {
    color: "black",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    padding: 0,
    height: 20,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 14,
  },
  separatorView: {
    backgroundColor: "black",
    opacity: 0.1,
    height: 1,
    marginTop: 16,
  },
  yourPasswordTextInput: {
    backgroundColor: "transparent",
    padding: 0,
    color: "black",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    height: 20,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 8,
  },
  loginButton: {
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 25,
    shadowOpacity: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    alignSelf: "stretch",
    height: 45,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 50,
  },
  loginButtonText: {
    color: "rgb(90, 184, 138)",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
  },
  loginButtonImage: {
    resizeMode: "contain",
    marginRight: 10,
  },
  forgotYourPasswordButtonText: {
    color: "white",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
  },
  forgotYourPasswordButton: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    // width: 150,
    height: 18,
    marginBottom: 19,
  },
  forgotYourPasswordButtonImage: {
    resizeMode: "contain",
    marginRight: 10,
  },
})
