import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore Campaigns</Text>
        <Text style={styles.subtitle}>Discover causes and make an impact</Text>
      </View>

      <View style={styles.listContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6f8",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#666",
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
