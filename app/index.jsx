import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link,router,Redirect } from 'expo-router';
import '@/global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants/index'; 
import  CustomButton from '@/components/CustomButton'
import 'react-native-url-polyfill/auto'

export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className='w-full  items-center h-full px-4'>
            <Image 
              source={images.logo}
              className='w-[130px] h-[84px]'
              resizeMode='contain'
            />

            <Image 
               source={images.cards}
               className='max-w-[380px] w-full h-[300px]'
               resizeMode='contain'
            />
            <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              Unlock a world of limitless opportunities with</Text>
            <Text className='text-secondary-200 text-center text-3xl mt-5'>Riffany</Text>
            <Image 
                source={images.path}
                className='w-[136px] h-[15px] absolute-bottom-2 -right-28'
             />            
            </View>
            
         <Text className='text-sm font-pregular text-gray-100 text-center mt-7'>Where inspiration meets innovation: 
          Your creative odyssey starts with Riffany
          </Text>
        <CustomButton 
           title='Continue with Email'
           handlePress={() => router.push('/(auth)/sign-in')}
           containerStyles ="w-full mt-7"
        />  
        </View>
      </ScrollView>
    </SafeAreaView>
  )

}

