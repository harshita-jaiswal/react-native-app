/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TextInput, Button
} from 'react-native';
import { shutterstock } from 'shutterstock';

// import { AppRegistry, TextInput } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const v2 = shutterstock.v2({
    clientId: '2d944-8e420-69d23-cbe5d-06988-f50c2',
    clientSecret: '7d4d4-c5c8f-34830-ab20e-81c11-35319',
    accessToken: 'v2\\/MmQ5NDQtOGU0MjAtNjlkMjMtY2JlNWQtMDY5ODgtZjUwYzIvMjAzMDQzMjE1L2N1c3RvbWVyLzMvbjNhOUJuQ1FuaVp1U1g0cUhNbi0zaWNKX0VZS3NZa0Y4bWNLRFVQNS1VR0owa2pNaDJUUmlLdktPME5PNUZ5THpJSlNFOXJIaElyTjBnVlhSMnp5ODRLbDNYb2tfNUFLaHFwNXhrLXpwNm50N3ZhRXdHWTNZWjBpUmNTeDRQcDI1NmVOWUE4a09RU21vR2dZSi1kdG1JMGgtN25ieFZRYXl6NExpQnZ4a3JIRGZaUFRJSjA2bTRWbUFZSzFTTzA0VWdJRHhCUGdRMWFMNk8yTk1KNkhQZw'
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
          text: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
      this.setState({
          text: 'hello'
      });
        v2.image.search('donkey', (err, data) => {
            if (err) throw err;

            console.log(data);
        });
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        {/*<TextInput*/}
            {/*inlineImageLeft='search_icon'*/}
        {/*/>*/}
        <TextInput
            // style={{height: 40, width:200, borderColor: 'gray', borderWidth: 1}}
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
        />
        <Button style={styles.submitButton}
            onPress={this.onSubmit}
            title="GO"
            color="#841584"
        />
        {/*<Text style={styles.instructions}>*/}
          {/*{instructions}*/}
        {/*</Text>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
  },
  instructions: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,
  },
  input: {
    height: 40,
      width: 200,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      // textDecorationLine: none
  },
  submitButton: {
    backgroundColor: 'gray',
      // marginTop: 20,
    },
});
