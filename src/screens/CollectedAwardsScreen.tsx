import AwardsList from "@components/AwardsList";
import type { RootState } from "@store/store";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
function CollectedAwardsScreen() {
  const { data } = useSelector((state: RootState) => state.cart) || { data: [] };
  return (
    <View>
      <AwardsList data={data} disableRedeem />
    </View>
  );
}
export default CollectedAwardsScreen;
