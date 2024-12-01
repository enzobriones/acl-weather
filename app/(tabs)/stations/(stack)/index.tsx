import { View, Text, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const StationsScreen = () => {
  return (
    <View className="flex-1 px-4 mt-4">
      <View className="gap-4 p-4">
        <Text className="font-kanit-black text-3xl text-center">Estaciones meteorológicas</Text>
        <Image
          source={require('../../../../assets/images/stations-hero.jpg')}
          resizeMode="cover"
          style={{ width: 350, height: 200, borderRadius: 10 }}
        />
        <Text className="font-kanit-regular text-lg">
          Aquí encontrarás las estaciones de Ecowitt disponibles, presiona los botones que encontrarás abajo de este texto para visualizar la información de la estación meteorológica.
        </Text>
      </View>
      <View className="flex-1 gap-y-5">
        <CustomButton
          onPress={() => router.push("/stations/los-angeles")}
          color="primary"
        >
          Los Ángeles
        </CustomButton>
        <CustomButton
          onPress={() => router.push("/stations/el-rosal")}
          color="secondary"
        >
          El Rosal
        </CustomButton>
        <CustomButton
          onPress={() => router.push("/stations/bocatoma")}
          color="tertiary"
        >
          Bocatoma Tucapel
        </CustomButton>
      </View>
    </View>
  );
};

export default StationsScreen;
