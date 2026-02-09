import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { JSX, PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

export default function CurrencyButton({ name, flag }: CurrencyButtonProps): JSX.Element {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag} >{flag}</Text>
            <Text style={styles.country} >{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: "center"
    },
    flag: {
        fontSize: 28,
        color: "#000000",
        marginBottom: 4,
    },
    country: {
        fontSize: 12,
        color: "#000000"
    }
})