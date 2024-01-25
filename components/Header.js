import { View, Text, Pressable, Image, TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import profile from '../assets/images/profile.png'

const Header = () => {
  return (
    <View className='py-4'>
        <View className='flex-row justify-between'>
            <Pressable
                className='bg-black w-8 h-8 items-center justify-center rounded-full'
            >
            <Ionicons name='menu' size={20} color={'white'} />
            </Pressable>
            <Pressable
                className='bg-primary w-8 h-8 items-center justify-center rounded-full'
            >
                <Image source={profile} className='h-[30px] w-[40px]' />
            </Pressable>
        </View>
        <View className='py-6'>
            <Text className='font-extrabold text-4xl'>Welcome,</Text>
            <Text className='text-lg text-primary'>Our Fashions Exclusive</Text>
        </View>
        <View className='flex-row relative'>
            <View className='absolute top-2 ml-3'>
                <FontAwesome name='search' size={22} color='#666666' />
            </View>
            <TextInput placeholder='Search Item...' className='flex-1 bg-[#F3F4F5] py-2 rounded-full px-10 -z-10' />
            <Pressable className='bg-black ml-2 w-10 h-10 items-center justify-center rounded-full'>
                <FontAwesome name='sort' size={30} color={'#ffffff'} />
            </Pressable>
        </View>
    </View>
  )
}

export default Header;