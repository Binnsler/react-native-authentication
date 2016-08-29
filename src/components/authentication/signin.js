import React from 'react';
import Parse from 'parse/react-native';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import Button from '../common/button';

module.exports = React.createClass({

  getInitialState: function(){
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },

  userOnChange: function(text){
    this.setState({username: text});
    console.log(this.state.username)
  },

  passOnChange: function(text){
    this.setState({password: text});
  },

  render: function(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Sign-in</Text>
        <Text style={styles.label}>Username:</Text>
        <TextInput style={styles.input} value={this.state.username} onChangeText={this.userOnChange}/>
        <Text style={styles.label}>Password:</Text>
        <TextInput style={styles.input} secureTextEntry={true} value={this.state.password} onChangeText={this.passOnChange}/>
        <Text style={styles.error}>{this.state.errorMessage}</Text>
        <Button text={"Sign In"} onPress={this.onPress}/>
        <Button text={"I need an account :/"} onPress={this.signUpPress}/>
      </View>
    );
  },

  onPress: function(){
    Parse.User.logIn(this.state.username, this.state.password, {
      success: function(user){
        this.setState({errorMessage: ''});
      }.bind(this),
      error: function(data, error){
        this.setState({errorMessage: error.message});
      }.bind(this)
    });
  },

  signUpPress: function(){
    this.props.navigator.push({name: 'signup'});
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
