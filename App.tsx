import React from 'react';
import { SignIn } from './src/screens/SignIn'; //Se eu deixo padrão o nome da pasta, sem informar o arquivo index, o programa sempre vai procurar um arquivo index.

export default function app() {
  return (
    <SignIn />
  )
}