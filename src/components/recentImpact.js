import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

const stories = [
  {
    id: "1",
    title: "New community kitchen opened in Bihar",
    description: "Serving 200+ hot meals daily to needy families.",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600",
  },
  {
    id: "2",
    title: "Clean water project completed in Yemen",
    description: "Safe drinking water accessible to over 1,500 villagers.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=600",
  },
];

export default function RecentImpact() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity>
          <Text style={styles.link}>READ FULL STORY →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Recent Impact</Text>
        <TouchableOpacity>
          <Text style={styles.seeStories}>See Stories</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={stories}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        scrollEnabled={false}
        contentContainerStyle={{ gap: 14 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  seeStories: {
    fontSize: 14,
    color: "#0f7c4f",
    fontWeight: "600",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 14,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  description: {
    fontSize: 13,
    color: "#6b7280",
    marginVertical: 4,
  },
  link: {
    fontSize: 12,
    color: "#0f7c4f",
    fontWeight: "600",
  },
});
