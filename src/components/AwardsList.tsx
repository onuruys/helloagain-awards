import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  type FlatListProps,
} from "react-native";
import type { Award } from "@interfaces/IAward";
import { useDispatch, useSelector } from "react-redux";
import { type RootState, type AppDispatch } from "@store/store";
import { openSuccess, openWarning } from "@reducers/modalSlice";
import AwardCard from "./AwardItem";
import { addToCart, removeFromCart } from "@reducers/cartSlice";
import Loading from "./Loading";
import Error from "./Error";
function AwardsList(
  props: Omit<FlatListProps<Award>, "renderItem"> & {
    disableRedeem?: boolean;
  }
) {
  const { disableRedeem = false } = props;
  const {
    data: bounties,
    loading,
    error,
    errorMessage,
  } = useSelector((state: RootState) => state.bounties);

  const { data: cart } = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch<AppDispatch>();

  const handleSelect = (award: Award, isSelected: boolean) => {
    // if (award.is_active && award.availability > 0) {
    //   dispatch(addToCart(award));
    //   dispatch(openSuccess("Successfully added to cart"));
    //   return;
    // }

    // console.log(award.is_active, award.availability);

    // if (award.is_active) {
    //   dispatch(openWarning("This award is not available"));
    //   return;
    // }

    // if (award.availability <= 0) {
    //   dispatch(openWarning("This award is not active"));
    //   return;
    // }

    // if (!award.is_active && award.availability <= 0) {
    //   dispatch(openWarning("This award is not available"));
    //   return;
    // }
    if (isSelected) {
      if (award.availability <= 0) {
        dispatch(openWarning("This award is not available"));
        return;
      }

      if (!award.is_active) {
        dispatch(openWarning("This award is not active"));
        return;
      }

      dispatch(addToCart(award));
      dispatch(openSuccess("Successfully added to Awards"));
    }
    if (!isSelected) {
      dispatch(removeFromCart(award.id));
      dispatch(openSuccess("Successfully removed from Awards"));
    }
  };

  const renderAward = ({ item }: { item: Award }) => {
    const isInCart = cart.some((cartItem) => cartItem.id === item.id);

    return (
      <AwardCard
        disableRedeem={disableRedeem || isInCart}
        onSelect={handleSelect}
        item={item}
        isSelected={isInCart}
      />
    );
  };

  if (loading) return <Loading />;
  if (error) return <Error message={errorMessage} />;

  return (
    <SafeAreaView>
      <FlatList
        keyboardShouldPersistTaps="handled"
        horizontal={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAward}
        initialNumToRender={4}
        windowSize={4}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
        // data={bounties}
        {...props}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {},
  container: {
    padding: 16,
  },
});

export default AwardsList;
