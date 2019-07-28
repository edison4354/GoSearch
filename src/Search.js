import React, {Component} from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput, Icon } from "react-native"
import LinearGradient from 'react-native-linear-gradient';

export default class Search extends Component {

    static navigationOptions = {
        header: null
      };

    constructor(props){
        super(props)
        this.state = {
          hashtag: '',
          hash: '',
          showTheThing: false,
        }
    }

    _addPress() {
        this.setState({showTheThing: true})
     }
    
      
  render() {
    const {navigate} = this.props.navigation;
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
                //Search engine for ideas
                placeholder="Enter number of locations you want"
                style={styles.yourPasswordTextInput}
                returnKeyLabel = {"next"}
                onChangeText={(text) => this.setState({hashtag:text})}/>
          </View>
          <Text style={styles.justText2}>Enter down below topics</Text>
          <View
            style={styles.loginFieldsView}>
            <TextInput
                autoCorrect={false}
                placeholder="Ex: developer"
                style={styles.yourPasswordTextInput}
                returnKeyLabel = {"next"}
                onChangeText={(text) => this.setState({hashtag:text})}/>
          </View>
            { this.state.showTheThing && 
                <View
                style={styles.loginFieldsView}>
                <TextInput
                    autoCorrect={false}
                    placeholder="Ex: photography"
                    style={styles.yourPasswordTextInput}
                    returnKeyLabel = {"next"}
                    onChangeText={(text) => this.setState({hashtag:text})}/>
              </View>
            }
          <View style={{alignSelf: "stretch",}}>
            <TouchableOpacity 
                onPress={() => this._addPress()}
                style={styles.loginButton2}>
                <Text style={styles.loginButtonText}>Add more hashtags</Text>
            </TouchableOpacity>
            <Text style={styles.loginButtonText}>{this.state.hash}</Text>
          </View>
          <View style={{alignSelf: "stretch",}}>
            <TouchableOpacity
                onPress={() => navigate('MapGo')}
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
    passwordContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingBottom: 10,
      },
      inputStyle: {
        flex: 1,
      },
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
    height: 42,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
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
  loginButton2: {
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
  },
  loginButtonText: {
    color: "rgb(90, 184, 138)",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
  },
  justText2: {
    color: "#000000",
    fontSize: 22,
    marginTop: 5,
    marginBottom: 5,
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
