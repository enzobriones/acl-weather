import { View, Text } from "react-native";
import React from "react";
import CustomButton from "../shared/CustomButton";

interface Props {
  title: string;
  children: React.ReactNode;
}

const StationBottom = ({ title, children }: Props) => {
  return (
    <View className="flex-1 gap-y-5 items-start p-5">
      <Text className="font-kanit-black text-2xl">{title}</Text>
      <View className="w-full h-[200px] border rounded-lg p-1">{children}</View>
      <View className="flex flex-row w-full gap-x-5">
        <CustomButton className="w-[8rem]" color="primary">
          1 hora
        </CustomButton>
        <CustomButton className="w-[8rem]" color="secondary">
          1 día
        </CustomButton>
        <CustomButton className="w-[8rem]" color="tertiary">
          1 semana
        </CustomButton>
      </View>
    </View>
  );
};

export default StationBottom;
