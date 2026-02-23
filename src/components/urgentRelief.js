import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const campaigns = [
  {
    id: "1",
    title: "Assam Flood Relief",
    description:
      "Providing food, clean water, and shelter to families affected by floods.",
    progress: 65,
    image: "https://picsum.photos/400/250?1",
  },
  {
    id: "2",
    title: "Kerala Landslide Support",
    description: "Emergency aid for displaced families and rescue operations.",
    progress: 48,
    image: "https://picsum.photos/400/250?2",
  },
  {
    id: "3",
    title: "Bihar Food Crisis",
    description: "Supplying essential ration kits to rural communities.",
    progress: 72,
    image: "https://picsum.photos/400/250?3",
  },
];

export default function UrgentRelief() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Urgent</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.progressBarBackground}>
          <View
            style={[styles.progressBarFill, { width: `${item.progress}%` }]}
          />
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.progressText}>
            {item.progress}% of target reached
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Donate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Urgent Relief</Text>
      <FlatList
        data={campaigns}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 5 }}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    color: "#111827",
  },
  card: {
    width: 300,
    backgroundColor: "#ffffff",
    borderRadius: 18,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
  },
  badge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "#dc2626",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 6,
    color: "#111827",
  },
  description: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 12,
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: "#e5e7eb",
    borderRadius: 6,
    marginBottom: 10,
  },
  progressBarFill: {
    height: 6,
    backgroundColor: "#0f7c4f",
    borderRadius: 6,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressText: {
    fontSize: 12,
    color: "#6b7280",
  },
  button: {
    backgroundColor: "#0f7c4f",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
  },
});
