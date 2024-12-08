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

const AwardCard = (props: {
  disableRedeem?: boolean;
  item: Award;
  onSelect?: (award: Award, isSelected: boolean) => void;
  isSelected?: boolean;
}) => {
  const handleSelect = () => {
    props.onSelect?.(award, !props.isSelected);
  };
  const { item: award } = props;
  // Validation for required properties
  if (!award?.name || !award?.image || !award?.is_active) {
    return null; // Skip rendering if essential properties are missing
  }

  return (
    <View style={[styles.card, !award.is_active && styles.inactiveCard]}>
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
        <Text style={styles.name}>{award.name}</Text>

        {/* Description */}
        {award.description && (
          <Text style={styles.description}>{award.description}</Text>
        )}

        {/* Needed Points */}
        <Text style={styles.points}>Points Required: {award.needed_points}</Text>

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
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
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
    padding: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  points: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  availability: {
    fontSize: 14,
    color: "#888",
    marginBottom: 10,
  },
  validity: {
    fontSize: 12,
    color: "#999",
  },
  progressBar: {
    height: 5,
    backgroundColor: "#eee",
    borderRadius: 5,
    marginTop: 10,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4caf50",
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  favIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 50,
    padding: 5,
  },
  buttonText: { color: "white" },
});
