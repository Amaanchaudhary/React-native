import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "Password must be atleat 4 characters")
    .max(16, "Password can be maximum 16 characters")
    .required("Password is required"),

})

export default function App() {
  const [password, setPassword] = React.useState("");
  const [isPassGenerated, setIsPassGenerated] = React.useState(false);

  const [lowerCase, setLowerCase] = React.useState(true);
  const [upperCase, setUpperCase] = React.useState(false);
  const [numbers, setNumbers] = React.useState(false);
  const [symbols, setSymbols] = React.useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let charecterList = "";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+";

    if (upperCase) {
      charecterList += upperCaseChars
    }
    if (lowerCase) {
      charecterList += lowerCaseChars
    }
    if (numbers) {
      charecterList += numberChars
    }
    if (symbols) {
      charecterList += symbolChars
    }

    const password = createPassword(charecterList, passwordLength);
    setPassword(password)
    setIsPassGenerated(true)
  }

  const createPassword = (chars: string, passwordLength: number) => {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.floor(Math.random() * chars.length);
      result += chars.charAt(characterIndex);
    }
    return result;
  }

  const resetPasswordState = () => {
    setPassword("")
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  }

  return (
    <View>
      <Text>Password Generator</Text>
    </View>
  )
}

const styles = StyleSheet.create({})