import AwardsList from "@components/AwardsList";
import type { Award } from "@interfaces/IAward";
import AwardService from "@services/AwardService";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
function AwardsScreen() {
  const [data, setData] = useState<Award[]>([]);
  useEffect(() => {
    AwardService.GetAwards()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <View>
      <AwardsList data={data} />
    </View>
  );
}
export default AwardsScreen;
