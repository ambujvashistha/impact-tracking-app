import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import campaignData from "../data/campaignData";

export default function CampaignScreen({ route, navigation }) {
  const { id } = route.params;

  const campaign = campaignData.find((item) => item.id === id);
  const progress = Math.floor((campaign.raised / campaign.goal) * 100);

  const timelineData = [
    {
      time: "2 HOURS AGO",
      text: "Truckload of essential medicine delivered to relief camp.",
    },
    {
      time: "5 HOURS AGO",
      text: "500 hot meals distributed to displaced families.",
    },
    {
      time: "10 DAYS AGO",
      text: "100 shelter units set up in relief camps.",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
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

          <Text style={styles.sectionHeading}>About this campaign</Text>
          <Text style={styles.description}>{campaign.description}</Text>

          <Text style={styles.sectionHeading}>Live Updates</Text>

          <View style={styles.timelineContainer}>
            {timelineData.map((item, index) => (
              <View key={index} style={styles.timelineItem}>
                <View style={styles.timelineLeft}>
                  <View style={styles.timelineDot} />
                  {index !== timelineData.length - 1 && (
                    <View style={styles.timelineLine} />
                  )}
                </View>

                <View style={styles.timelineContent}>
                  <Text style={styles.timelineTime}>{item.time}</Text>
                  <View style={styles.timelineCard}>
                    <Text style={styles.timelineText}>{item.text}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.donateButton} onPress={() => navigation.navigate("Donate", { id })} >
          <Text style={styles.donateButtonText}>Donate Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F8",
  },
  scrollContent: {
    paddingBottom: 120,
  },
  image: {
    width: "100%",
    height: 260,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  location: {
    fontSize: 14,
    color: "#6b7280",
    marginVertical: 6,
  },
  amount: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 8,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: "#e5e7eb",
    borderRadius: 6,
    marginBottom: 20,
  },
  progressBarFill: {
    height: 8,
    backgroundColor: "#0f7c4f",
    borderRadius: 6,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 22,
  },

  timelineContainer: {
    marginTop: 10,
  },
  timelineItem: {
    flexDirection: "row",
    marginBottom: 20,
  },
  timelineLeft: {
    width: 30,
    alignItems: "center",
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#0f7c4f",
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: "#d1d5db",
    marginTop: 4,
  },
  timelineContent: {
    flex: 1,
  },
  timelineTime: {
    fontSize: 11,
    color: "#6b7280",
    fontWeight: "700",
    marginBottom: 6,
  },
  timelineCard: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
  },
  timelineText: {
    fontSize: 14,
    color: "#374151",
  },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
  },
  donateButton: {
    backgroundColor: "#0f7c4f",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  donateButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});