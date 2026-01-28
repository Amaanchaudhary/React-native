import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
    return (
        <View>
            <Text style={style.headingText}>FlatCards</Text>
            <View style={style.container}>
                <View style={[style.card, style.cardOne]}>
                    <Text style={style.CardText}>RED</Text>
                </View>
                <View style={[style.card, style.cardTwo]}>
                    <Text style={style.CardText}>GREEN</Text>
                </View>
                <View style={[style.card, style.cardThree]}>
                    <Text style={style.CardText}>BLUE</Text>
                </View>
                <View style={[style.card, style.cardOne]}>
                    <Text style={style.CardText}>RED</Text>
                </View>
                <View style={[style.card, style.cardTwo]}>
                    <Text style={style.CardText}>GREEN</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 500,
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 8,
        // flexWrap: "wrap"
    },
    card: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardOne: {
        backgroundColor: "#EF5354"
    },
    cardTwo: {
        backgroundColor: "#53ef68"
    },
    cardThree: {
        backgroundColor: "#6353ef"
    },
    CardText: {
        color: "#FFFFFF"
    }
})

export default FlatCards