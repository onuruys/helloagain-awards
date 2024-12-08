import type { Award } from "@interfaces/IAward";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const AwardCard = (props: { item: Award; onSelect?: (award: Award) => void }) => {
  const handleSelect = () => {
    if (award.is_active && award.availability > 0) {
      props.onSelect?.(award);
      console.log("Selected Award:", award.id);
    }
  };
  const { item: award } = props;
  // Validation for required properties
  if (!award?.name || !award?.image || !award?.is_active) {
    return null; // Skip rendering if essential properties are missing
  }

  return (
    <TouchableOpacity
      style={[styles.card, !award.is_active && styles.inactiveCard]}
      onPress={handleSelect}
      disabled={!award.is_active}
    >
      {/* Image */}
      <Image source={{ uri: award.image }} style={styles.image} />

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
      </View>
    </TouchableOpacity>
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
});
