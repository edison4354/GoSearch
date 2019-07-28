import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class Fetch extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://cyfer-go-search.herokuapp.com/recommendation?topLocationsCount=5&hashtag=explore', {
        method: 'GET'})
      .then((response) => response.json())
      .then((responseJson) => {   
        console.log(responseJson)
        this.setState({
                response: false,
                heroku: true
              })
        })
      .catch((error) =>{
        console.error(error);
      });
}

  render(){
    return(
      <View style={{flex: 1}}>
        <Text>
            
        </Text>
      </View>
    );
  }
}