import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import images from '../constants/images'
import icons from '../constants/icons'

const SearchInput = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
      const [isFocused, setIsFocused] = useState(false)
  
      return (
        
              <View className={`w-full h-16 px-4 bg-black-100 border-2 rounded-2xl flex-row items-center space-x-4`}>
                  <TextInput 
                      className='text-base mt-0.5 text-white flex-1 font-pregular'
                      value={value}
                      placeholder='Search for a video topic'
                      placeholderTextColor='#7b7b8b'
                      onChangeText={handleChangeText}
                      secureTextEntry={title === 'Password' && !showPassword}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                  />
                  <TouchableOpacity>
                       <Image 
                          source={icons.search}
                          resizeMode='contain'
                          className='w-5 h-5'
                       />
                  </TouchableOpacity>
              </View>
      )
}

export default SearchInput