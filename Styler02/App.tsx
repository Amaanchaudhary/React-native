import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCards from './components/ActionCards'
import ContactList from './components/ContactList'

const App = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatCards />
                <ElevatedCards />
                <FancyCards />
                <ActionCards />
                <ContactList />
                <ActionCards />
            </ScrollView>
        </SafeAreaView>
    )
}

export default App