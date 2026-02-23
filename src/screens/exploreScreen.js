import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import campaignData from "../data/campaignData";

export default function ExploreScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Food", "Water", "Health", "Education"];

  const filteredData = campaignData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  const renderItem = ({ item }) => {
    const progress = Math.floor((item.raised / item.goal) * 100);

    return (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />

        <View style={styles.cardContent}>
          <Text style={styles.category}>{item.location}</Text>

          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.description}>
            {item.description.slice(0, 80)}...
          </Text>

          <View style={styles.progressRow}>
            <Text style={styles.percent}>{progress}% Raised</Text>
            <Text style={styles.goal}>Goal: ₹{item.goal / 100000}L</Text>
          </View>

          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
          </View>

          <View style={styles.bottomRow}>
            <View>
              <Text style={styles.amountLabel}>AMOUNT RAISED</Text>
              <Text style={styles.amount}>
                ₹{(item.raised / 100000).toFixed(2)}L
              </Text>
            </View>

            <TouchableOpacity
              style={styles.donateButton}
              onPress={() => navigation.navigate("Campaign", { id: item.id })}
            >
              <Text style={styles.donateText}>Donate Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Feather name="search" size={18} color="#9ca3af" />
          <TextInput
            placeholder="Search campaigns..."
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity style={styles.filterIcon}>
          <Feather name="sliders" size={18} />
        </TouchableOpacity>
      </View>

      <View style={styles.filterRow}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterChip,
              activeFilter === filter && styles.filterActive,
            ]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text
              style={[
                styles.filterText,
                activeFilter === filter && styles.filterTextActive,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F6" },

  searchContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },

  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    borderRadius: 14,
    height: 45,
  },

  searchInput: {
    marginLeft: 8,
    flex: 1,
  },

  filterIcon: {
    marginLeft: 10,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 14,
  },

  filterRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 15,
  },

  filterChip: {
    backgroundColor: "#e5e7eb",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },

  filterActive: {
    backgroundColor: "#0f7c4f",
  },

  filterText: {
    fontSize: 13,
  },

  filterTextActive: {
    color: "#fff",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 200,
  },

  cardContent: {
    padding: 16,
  },

  category: {
    fontSize: 12,
    color: "#0f7c4f",
    marginBottom: 4,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },

  description: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 12,
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },

  percent: {
    fontWeight: "700",
    color: "#0f7c4f",
  },

  goal: {
    fontSize: 12,
    color: "#6b7280",
  },

  progressBarBackground: {
    height: 8,
    backgroundColor: "#e5e7eb",
    borderRadius: 6,
    marginBottom: 12,
  },

  progressBarFill: {
    height: 8,
    backgroundColor: "#0f7c4f",
    borderRadius: 6,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  amountLabel: {
    fontSize: 10,
    color: "#6b7280",
  },

  amount: {
    fontWeight: "700",
  },

  donateButton: {
    backgroundColor: "#0f7c4f",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
  },

  donateText: {
    color: "#fff",
    fontWeight: "600",
  },
});
