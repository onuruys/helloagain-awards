import AwardsList from "@components/AwardsList";
import { fetchBounties } from "@reducers/bountySlice";
import type { AppDispatch, RootState } from "@store/store";
import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

function AwardsScreen() {
  const { data, loading } = useSelector((state: RootState) => state.bounties);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    // fetchBounties();
    if (!data.length && !loading) {
      dispatch(fetchBounties());
    }
  }, []);

  return (
    <View>
      <AwardsList data={data} />
    </View>
  );
}

export default AwardsScreen;
