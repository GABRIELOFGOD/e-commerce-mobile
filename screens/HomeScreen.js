import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import AdsCard from '../components/AdsCard'

const HomeScreen = () => {
  return (
    <SafeAreaView className='bg-white flex-1 px-4 font-Poppins'>
      <Header />
      <AdsCard />
    </SafeAreaView>
  )
}

export default HomeScreen;

