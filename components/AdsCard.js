import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import bag from '../assets/images/product1.png'

const AdsCard = () => {
  return (
    <View className='flex-row bg-secondary w-[75%] rounded-xl overflow-hidden justify-between'>
      <View className='p-3 my-auto'>
        <Text className='text-4xl font-extrabold'>50% Off</Text>
        <Text className='font-semibold text-lg'>On Everything Today</Text>
        <Text className='font-light text-xs py-3 text-primary'>With code:FSCREATION</Text>
        <TouchableOpacity
            className='bg-black w-20 items-center justify-center rounded-full h-8'
        >
            <Text className='text-white font-bold'>Get Now</Text>
        </TouchableOpacity>
      </View>
      <View className='-z-20 -ml-52'>
        <Image source={bag} />
      </View>
    </View>
  )
}

export default AdsCard