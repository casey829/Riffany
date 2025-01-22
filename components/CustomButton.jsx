import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
     onPress={handlePress}
     activeOpacity={0.7}
    className={`bg-secondary-200 rounded-xl min-h-[62px] justify-center text-center ${containerStyles}`}>
    <View>
      <Text className='text-primary font-psemibold text-lg text-center'>{title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default CustomButton