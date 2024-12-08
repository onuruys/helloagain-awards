import type { Award } from "@interfaces/IAward";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Icon from "./Icon";
import type { Theme } from "@react-navigation/native";
import Description from "./Description";
import { spacing } from "@utils/Constants";
const AwardCard = (props: {
  disableRedeem?: boolean;
  item: Award;
  onSelect?: (award: Award, isSelected: boolean) => void;
  isSelected?: boolean;
  colors: Theme["colors"];
}) => {
  const { item: award, colors } = props;

  const handleSelect = () => {
    props.onSelect?.(award, !props.isSelected);
  };
  if (!award?.name || !award?.image || !award?.is_active) {
    return null; // Skip rendering if essential properties are missing
  }
  return (
    <View
      style={[
        styles.card,
        !award.is_active && styles.inactiveCard,
        {
          backgroundColor: colors.card,
        },
      ]}
    >
      {/* Image */}
      <Image source={{ uri: award.image }} style={styles.image} />

      {/* Fav Icon */}
      <Pressable style={styles.favIcon} onPress={handleSelect}>
        <Icon
          name={props.isSelected ? "heart" : "heart-outline"}
          color={props.isSelected ? "red" : "black"}
        />
      </Pressable>

      {/* Content */}
      <View style={styles.content}>
        {/* Award Name */}
        <Text style={[styles.name, { color: colors.text }]}>{award.name}</Text>

        {/* Description */}
        {award.description && <Description description={award.description} />}

        {/* Needed Points */}
        <Text style={[styles.points]}>Points Required: {award.needed_points}</Text>

        {/* Availability */}
        <Text style={styles.availability}>
          {award.availability > 0
            ? `Available: ${award.availability}`
            : "Out of stock"}
        </Text>

        {/* Validity Period */}
        {award.valid_from && award.valid_until && (
          <Text style={styles.validity}>
            Valid: {new Date(award.valid_from).toLocaleDateString()} -{" "}
            {new Date(award.valid_until).toLocaleDateString()}
          </Text>
        )}

        {/* Progress Bar (if enabled) */}
        {award.show_progress_bar && (
          <View style={styles.progressBar}>
            {/* Simulate a progress bar */}
            <View
              style={[
                styles.progressFill,
                { width: `${(award.availability / 100) * 100}%` },
              ]}
            />
          </View>
        )}
        {!props.disableRedeem && (
          <TouchableOpacity
            disabled={!award.is_active}
            onPress={handleSelect}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Redeem</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AwardCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: spacing.md,
    overflow: "hidden",
    marginVertical: spacing.md,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  inactiveCard: {
    opacity: 0.6,
  },
  image: {
    width: "100%",
    height: 150,
  },
  content: {
    padding: spacing.md,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: spacing.sm,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: spacing.sm,
  },
  points: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: spacing.sm,
  },
  availability: {
    fontSize: 14,
    color: "#888",
    marginBottom: spacing.sm,
  },
  validity: {
    fontSize: 12,
    color: "#999",
  },
  progressBar: {
    height: spacing.sm,
    backgroundColor: "#eee",
    borderRadius: spacing.sm,
    marginTop: spacing.md,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4caf50",
  },
  button: {
    backgroundColor: "#2196F3",
    padding: spacing.md,
    borderRadius: spacing.sm,
    alignSelf: "flex-start",
    alignItems: "center",
    marginTop: spacing.md,
  },
  favIcon: {
    position: "absolute",
    top: spacing.md,
    right: spacing.md,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 50,
    padding: spacing.sm,
  },
  buttonText: { color: "white" },
});
