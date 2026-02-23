import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import campaignData from "../data/campaignData";

export default function CampaignDetailsScreen({ route, navigation }) {
  const { id } = route.params;

  const campaign = campaignData.find((item) => item.id === id);

  const progress = Math.floor((campaign.raised / campaign.goal) * 100);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: campaign.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{campaign.title}</Text>
        <Text style={styles.location}>{campaign.location}</Text>

        <Text style={styles.amount}>
          ₹{campaign.raised} raised of ₹{campaign.goal}
        </Text>

        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
        </View>

        <Text style={styles.description}>{campaign.description}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Donate", { id: campaign.id })}
        >
          <Text style={styles.buttonText}>Donate Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F6F8" },
  image: { width: "100%", height: 250 },
  content: { padding: 20 },
  title: { fontSize: 22, fontWeight: "700" },
  location: { fontSize: 14, color: "#6b7280", marginVertical: 6 },
  amount: { fontSize: 16, fontWeight: "600", marginVertical: 8 },
  progressBarBackground: {
    height: 8,
    backgroundColor: "#e5e7eb",
    borderRadius: 6,
    marginBottom: 16,
  },
  progressBarFill: {
    height: 8,
    backgroundColor: "#0f7c4f",
    borderRadius: 6,
  },
  description: {
    fontSize: 15,
    color: "#374151",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0f7c4f",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
