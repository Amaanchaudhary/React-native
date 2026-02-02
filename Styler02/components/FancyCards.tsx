import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cards = ({ card }: { card: any }) => {

    return (
        <View style={[styles.cards, styles.elevatedCards]}>
            <Image
                source={{
                    uri: card?.image
                }}
                style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{card?.title}</Text>
                <Text style={styles.cardLocation}>{card?.location}</Text>
                <Text style={styles.cardDescription}>{card?.description}</Text>
                <View style={styles.cardFooter}>
                    <Text style={styles.footerText}>{card?.footer}</Text>
                </View>
            </View>
        </View>
    )
}

const data = [
    {
        image: "https://www.udantravel.com/upload/udan65410india-best-places-to-visit-agra.jpg",
        title: "Taj Mahal",
        location: "Agra, UP",
        description: "The Taj Mahal is situated in Agra. It was built by Mughal emperor Shah Jahan for his deceased wife Mumtaz Mahal. This place is a pride of India and is one of the seven wonders of the world.",
        footer: "Paid Vehicle Parking and Guide Available",
    },
    {
        image: "https://www.udantravel.com/upload/udan65410india-best-places-to-visit-agra.jpg",
        title: "Taj Mahal",
        location: "Agra, UP",
        description: "The Taj Mahal is situated in Agra. It was built by Mughal emperor Shah Jahan for his deceased wife Mumtaz Mahal. This place is a pride of India and is one of the seven wonders of the world.",
        footer: "Paid Vehicle Parking and Guide Available",
    },
    {
        image: "https://www.udantravel.com/upload/udan65410india-best-places-to-visit-agra.jpg",
        title: "Taj Mahal",
        location: "Agra, UP",
        description: "The Taj Mahal is situated in Agra. It was built by Mughal emperor Shah Jahan for his deceased wife Mumtaz Mahal. This place is a pride of India and is one of the seven wonders of the world.",
        footer: "Paid Vehicle Parking and Guide Available",
    },
    {
        image: "https://www.udantravel.com/upload/udan65410india-best-places-to-visit-agra.jpg",
        title: "Taj Mahal",
        location: "Agra, UP",
        description: "The Taj Mahal is situated in Agra. It was built by Mughal emperor Shah Jahan for his deceased wife Mumtaz Mahal. This place is a pride of India and is one of the seven wonders of the world.",
        footer: "Paid Vehicle Parking and Guide Available",
    },
    {
        image: "https://www.udantravel.com/upload/udan65410india-best-places-to-visit-agra.jpg",
        title: "Taj Mahal",
        location: "Agra, UP",
        description: "The Taj Mahal is situated in Agra. It was built by Mughal emperor Shah Jahan for his deceased wife Mumtaz Mahal. This place is a pride of India and is one of the seven wonders of the world.",
        footer: "Paid Vehicle Parking and Guide Available",
    },
]




export default function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <ScrollView horizontal>
                {data?.map((card: any, index) => (
                    <Cards card={card} key={index} />
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    cards: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 10,
        marginHorizontal: 16,
        padding: 8
    },
    elevatedCards: {
        backgroundColor: "#ffffff",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    cardBody: {
        flex: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8
    },
    cardLocation: {
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        fontSize: 12,
        marginBottom: 4,
        color: "#242B2E",
    },
    cardFooter: {
        flex: 1,
        justifyContent: "flex-end"
    },
    footerText: {
        fontSize: 12,
        color: "#BF2024"
    }
})