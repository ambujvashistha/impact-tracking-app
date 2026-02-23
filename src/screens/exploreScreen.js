import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import campaignData from "../data/campaignData";

export default function ExploreScreen({ navigation }) {
  const renderItem = ({ item }) => {
    const progress = Math.floor((item.raised / item.goal) * 100);

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("CampaignDetails", { id: item.id })}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.location}>{item.location}</Text>
          <Text style={styles.progress}>{progress}% funded</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={campaignData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F6F8" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: { width: "100%", height: 180 },
  content: { padding: 16 },
  title: { fontSize: 18, fontWeight: "700" },
  location: { fontSize: 14, color: "#6b7280", marginVertical: 4 },
  progress: { fontSize: 14, color: "#0f7c4f", fontWeight: "600" },
});
