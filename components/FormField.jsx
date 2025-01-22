{/*import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import icons from '../constants/icons'


const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
            <TextInput 
                className={`w-full h-16 px-4 bg-black-100 border-2 rounded-2xl text-white font-psemibold text-base
                    ${isFocused ? 'border-orange-500' : 'border-black-200'}`}
                value={value}
                placeholder={placeholder}
                placeholderTextColor='#7b7b8b'
                onChangeText={handleChangeText}
                secureTextEntry={title === 'Password' && !showPassword}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {title === 'Password' && (
                <TouchableOpacity onPress={() =>
                    setShowPassword(!showPassword)}>
                    <Image 
                      source={!showPassword ? icons.eye : icons.eyehide}
                    
                    />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default FormField*/}
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import icons from '../constants/icons'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
            <View className={`w-full h-16 px-4 bg-black-100 border-2 rounded-2xl flex-row items-center
                ${isFocused ? 'border-orange-500' : 'border-black-200'}`}>
                <TextInput 
                    className='flex-1 text-white font-psemibold text-base'
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor='#7b7b8b'
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                {title === 'Password' && (
                    <TouchableOpacity 
                        onPress={() => setShowPassword(!showPassword)}
                        className="ml-2"
                    >
                        <Image 
                            source={!showPassword ? icons.eye : icons.eyehide}
                            className="w-6 h-6"  // Adjust size as needed
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField;