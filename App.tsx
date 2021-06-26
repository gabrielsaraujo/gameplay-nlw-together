import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

//ignorando um Warning da IDE.
LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.'])

import { AuthProvider } from './src/hooks/auth'

import { Routes } from './src/routes'; //Se eu deixo padrão o nome da pasta, sem informar o arquivo index, o programa sempre vai procurar um arquivo index.
import { Background } from './src/components/Background';


export default function app() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}