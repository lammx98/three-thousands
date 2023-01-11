/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import { Provider } from 'react-redux';
import {legacy_createStore} from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Counter from './_redux/counter/Counter';
import {store} from './_redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView>
          <Counter />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
