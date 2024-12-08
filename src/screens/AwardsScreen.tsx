import AwardsList from "@components/AwardsList";
import BottomTabs from "@components/BottomTabs";
import { fetchBounties } from "@reducers/bountySlice";
import type { AppDispatch, RootState } from "@store/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function AwardsScreen() {
  const { data, loading } = useSelector((state: RootState) => state.bounties);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (!data.length && !loading) {
      dispatch(fetchBounties());
    }
  }, []);

  return (
    <>
      <AwardsList data={data} />
      <BottomTabs />
    </>
  );
}

export default AwardsScreen;
