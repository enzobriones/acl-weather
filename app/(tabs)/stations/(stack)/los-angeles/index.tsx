import { View, Text } from 'react-native'
import React from 'react'
import StationTop from '@/components/stations/StationTop'
import StationBottom from '@/components/stations/StationBottom'

const LosAngelesScreen = () => {
  return (
    <View className='flex-1'>
      <StationTop title='Pluviometría'>
        <View>
          <Text>Gráfico</Text>
        </View>
      </StationTop>
      <StationBottom title='Temperatura'>
        <View></View>
      </StationBottom>
    </View>
  )
}

export default LosAngelesScreen