import react, { JSX } from 'react';

import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
} from 'react-native';



const AppPro = (): JSX.Element => {
    const isDarkMode = useColorScheme() === "dark"
    return (
        <View style={style.container}>
            <Text style={isDarkMode ? style.whiteText : style.blackText} >Hello World</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", //Left to right alignment, different than web
        justifyContent: "center", //Top to bottom alignment
        // backgroundColor: "#808080",
    },
    whiteText: {
        color: "#FFFFFF"
    },
    blackText: {
        color: "#000000"
    }
})

export default AppPro;