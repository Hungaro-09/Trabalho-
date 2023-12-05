import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { StatusBar } from "native-base";
import {NavigationContainer} from '@react-navigation/native'

import Rotas from './src/Rotas'

export default function App(){
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#152F40" barStyle="light-content"/>
      <Rotas/>
    </NavigationContainer>
  );
}