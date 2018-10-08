/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Linking, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width
type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {
      env: 'blockpass-local',
      clientId: 'clientId',
      refId: 'refId',
      session: 'session',
      redirect: 'https://www.google.com.vn',
      tabIndex: 0
    }
  }

  openAppLink = () => {
    let appLink = this.getLink()
    Linking.openURL(appLink).catch(err => alert('An error occurred: ' + err));
  }

  getLink = () => {
    return `${this.state.env}://service-register/${this.state.clientId}?refid=${this.state.refId}&session=${this.state.session}&redirect=${this.state.redirect}`
  }

  onChange = (key, val) => {
    this.setState({ [key]: val })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Blockpass App Link</Text>
          <View style={styles.wrapTab}>
            <TouchableOpacity
              style={[styles.tab, this.state.tabIndex == 0 && { backgroundColor: '#4388FF' }]}
              onPress={() => {
                this.onChange('tabIndex', 0)
                this.onChange('env', 'blockpass-local')
              }}
            >
              <Text style={this.state.tabIndex == 0 ? { color: 'white' } : { color: 'black' }}>Local Env</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, this.state.tabIndex == 1 && { backgroundColor: '#4388FF' }]}
              onPress={() => {
                this.onChange('tabIndex', 1)
                this.onChange('env', 'blockpass-staging')
              }}
            >
              <Text style={this.state.tabIndex == 1 ? { color: 'white' } : { color: 'black' }}>Staging Env</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, this.state.tabIndex == 2 && { backgroundColor: '#4388FF' }]}
              onPress={() => {
                this.onChange('tabIndex', 2)
                this.onChange('env', 'blockpass')
              }}
            >
              <Text style={this.state.tabIndex == 2 ? { color: 'white' } : { color: 'black' }}>Production Env</Text>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.input} placeholder='ClientId' value={this.state.clientId} underlineColorAndroid='transparent' onChangeText={this.onChange.bind(this, 'clientId')} />
          <TextInput style={styles.input} placeholder='RefId' value={this.state.refId} underlineColorAndroid='transparent' onChangeText={this.onChange.bind(this, 'refId')} />
          <TextInput style={styles.input} placeholder='Session' value={this.state.session} underlineColorAndroid='transparent' onChangeText={this.onChange.bind(this, 'session')} />
          <TextInput style={styles.input} placeholder='Redirect' value={this.state.redirect} underlineColorAndroid='transparent' onChangeText={this.onChange.bind(this, 'redirect')} />
          <Text style={{ marginTop: 20 }}>App link: "{this.getLink()}"</Text>
          <TouchableOpacity onPress={this.openAppLink} style={styles.button}>
            <Text style={styles.btnText}>Open App Link</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  input: {
    width: SCREEN_WIDTH - 20,
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  button: {
    backgroundColor: '#4388FF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20,
  },
  btnText: {
    color: 'white'
  },
  wrapTab: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#4388FF',
    marginTop: 40
  },
  tab: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#4388FF',
    fontWeight: 'bold',
    fontSize: 25
  }
});
