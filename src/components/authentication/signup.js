import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Button from '../common/button';

module.exports = React.createClass({

  getInitialState: function(){
    return {
      username: '',
      firstPassword: '',
      secondPassword: ''
    }
  },

  render: function(){

    return (
      <View style={styles.container}>
        <Text style={styles.title}>You can sign up here:</Text>
        <Text style={styles.label}>Username:</Text>
        <TextInput style={styles.input} value={this.state.username} onChangeText={this.usernameChange}/>
        <Text style={styles.label}>Password:</Text>
        <TextInput style={styles.input} value={this.state.firstPassword} onChangeText={this.firstPassChange}/>
        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput style={styles.input} value={this.state.secondPassword} onChangeText={this.secondPassChange}/>
        <Button text={"Create Account"} onPress={this.signUpPress}/>
      </View>
    );
  },

  usernameChange: function(text){
    this.setState({username: text});
  },

  firstPassChange: function(text){
    this.setState({firstPassword: text});
  },

  secondPassChange: function(text){
    this.setState({secondPassword: text});
  },

  signUpPress: function(){
    console.log('Username: ', this.state.username);
    console.log('First Password: ', this.state.firstPassword);
    console.log('Second Password: ', this.state.secondPassword);
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  title: {
    fontSize: 30
  },

  label: {
    fontSize: 18
  },

  input: {
    padding: 4,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },

  error: {
    color: 'red'
  }
});
