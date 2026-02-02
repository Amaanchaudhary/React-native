import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contacts = [
        {
            uid: "1",
            name: "Anurag Singh",
            status: "I love to code and teach",
            imageURl: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
            uid: "2",
            name: "John Doe",
            status: "I am a Freelancer",
            imageURl: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
            uid: "3",
            name: "Amaan Chaudhary",
            status: "I love to code and Develop App",
            imageURl: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
            uid: "4",
            name: "Alice Smith",
            status: "I am a Designer",
            imageURl: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
            uid: "5",
            name: "Anurag Singh",
            status: "I love to code and teach",
            imageURl: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
            uid: "6",
            name: "Anurag Singh",
            status: "I love to code and teach",
            imageURl: "https://reactnative.dev/img/tiny_logo.png"
        },
    ]
    return (
        <View>
            <Text style={styles.headingText} >ContactList</Text>
            <View style={[styles.cardContainer, styles.elevatedCards]}
            >
                <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
                    {contacts.map(({ uid, name, status, imageURl }) => (
                        <View key={uid} style={styles.userCard}>
                            <Image
                                source={{ uri: imageURl }}
                                style={styles.userImage}
                            />
                            <View>
                                <Text style={styles.userName} >{name}</Text>
                                <Text numberOfLines={1} style={styles.userStatus} >{status}</Text>
                            </View>

                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        color: "#000000",
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    cardContainer: {
        height: 250,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginBottom: 6,
        marginHorizontal: 12,
        borderRadius: 6,
    },
    elevatedCards: {
        backgroundColor: "#ffffff",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    userCard: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        marginVertical: 1,
        backgroundColor: "#8D3DAF",
        borderRadius: 10,
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        marginRight: 12,
    },
    userName: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },
    userStatus: {
        color: "#FFFFFF",
        fontSize: 12,
    }
})

export default ContactList