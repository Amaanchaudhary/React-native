import { StyleSheet, Text, View, Linking, Alert, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

export default function ActionCards() {

    async function openWebsite(link: string) {
        Linking.openURL(link)
    }

    const { width } = Dimensions.get("window");

    const styles = StyleSheet.create({
        headingText: {
            color: "#FFFFFF",
            fontSize: 24,
            fontWeight: "bold",
            paddingHorizontal: 8,
            paddingVertical: 8,
        },
        cards: {
            width: width - 24,
            marginHorizontal: 12,
            height: 360,
            borderRadius: 6,
            marginVertical: 10,
            // padding: 8
        },
        elevatedCards: {
            backgroundColor: "#4D4E4E",
            elevation: 3,
            shadowOffset: {
                width: 1,
                height: 1
            }
        },
        headerContainer: {
            display: "flex",
            height: "14%",
            alignItems: "center",
            justifyContent: "center",
        },
        headerText: {
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "400",
            paddingHorizontal: 8,
            paddingTop: 4,
        },
        cardImage: {
            height: 200,
            // borderRadius: 8,
            marginBottom: 2
        },
        bodyContainer: {
            paddingHorizontal: 8,
            paddingVertical: 6,
        },
        cardDescription: {
            color: "#FFFFFF",
            fontSize: 14,
        },
        footerContainer: {
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: 8,
        },
        socialLinkText: {
            fontWeight: 500,
            color: "#000000",
            borderRadius: 10,
            paddingHorizontal: 16,
            paddingVertical: 2,
            backgroundColor: "#FFFFFF"
        },
    })

    return (
        <View>
            <Text style={styles.headingText} >Blog Card</Text>
            <View style={[styles.elevatedCards, styles.cards]}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>What's new in Javascript 21 - ES12</Text>
                </View>
                <Image source={{
                    uri: "https://www.syncfusion.com/blogs/wp-content/uploads/2022/04/Top-10-JavaScript-ES12-Features-That-Make-Everyday-Coding-Easier.jpg"
                }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3} style={styles.cardDescription}>
                        JavaScript ES12 brings practical improvements that make code cleaner, safer,
                        and easier to maintain. Explore ten essential features that help write efficient code,
                        avoid bugs,and simplify development without changing how you think about JavaScript.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite("https://www.instagram.com/ll_amaan_ll_/")}
                    >
                        <Text style={styles.socialLinkText}>Follow Me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite("https://www.syncfusion.com/blogs/post/top-10-javascript-es12-features-you-should-use")}
                    >
                        <Text style={styles.socialLinkText}>Read More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

