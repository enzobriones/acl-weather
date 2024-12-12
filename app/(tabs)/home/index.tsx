import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomButton from '@/components/shared/CustomButton';
import { router } from 'expo-router';

const HomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className='gap-y-3'>
        <View>
          <Image
            source={require("../../../assets/images/inacap-logo.png")}
            resizeMode="cover"
            style={{ width: 250, height: 200, borderRadius: 10 }}
          />
          <Text className='font-kanit-light text-center text-xl'>INACAP Los Ángeles</Text>
        </View>
        <View>
          <Text className='text-center text-4xl font-kanit-black'>¡Bienvenid@!</Text>
          <Text className='text-center text-3xl font-kanit-regular'>ACL Weather</Text>
        </View>
        <CustomButton onPress={() => router.push('/stations')} color='tertiary'>Comenzar</CustomButton>
      </View>
    </View>
  );
}

export default HomeScreen