import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const history = [
  {
    id: "1",
    title: "Emergency Flood Relief",
    date: "12 Jan 2024",
    amount: "$1,000",
    status: "Completed",
  },
  {
    id: "2",
    title: "Medical Aid for Gaza",
    date: "03 Jan 2024",
    amount: "$750",
    status: "Completed",
  },
  {
    id: "3",
    title: "Clean Water Project",
    date: "20 Dec 2023",
    amount: "$500",
    status: "Completed",
  },
];

export default function DonationHistory() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.left}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Donation History</Text>
        
        <TouchableOpacity>
          <Text style={{ color: "#007c4f", fontSize: 18, fontWeight: "500" }}>View Statement</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },
  left: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
  date: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 4,
  },
  right: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0f7c4f",
  },
  status: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    }
});
