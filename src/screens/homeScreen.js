import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity,TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import QuickDonation from "../components/quickDonation";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topSection}>
          <Image
            source={require("../../assets/doom.jpg")}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.name}>Dr Doom</Text>
            <Text style={styles.description}>Crazy description of Dr Doom</Text>
          </View>

          <TouchableOpacity>
            <Ionicons name="notifications" size={24} color="grey" />
          </TouchableOpacity>
        </View>

        <View style={styles.totalImpact}>
          <Text style={styles.totalImpactText}>Your Total Impact</Text>
          <Text style={styles.totalImpactTitle}>12 Families</Text>
          <Text style={styles.totalImpactText}>
            Supported through your generous contributions.
          </Text>
        </View>
        <TextInput style={styles.searchInput} placeholder="Search campaigns (eg: Assam Relief)"></TextInput>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <QuickDonation />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#F5F6F8",
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 12,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 2,
  },
  impact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  section: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#888",
  },
  sectionValue: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
  },
  editButton: {
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#c4ebdd",
    borderRadius: 8,
  },
  editButtonText: {
    color: "#007c4f",
    fontSize: 14,
    fontWeight: "500",
  },
  signOutText: {
    color: "#ff4d4d",
    fontSize: 16,
    fontWeight: "500",
  },
  downloadButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  downloadButtonText: {
    color: "#007c4f",
    fontSize: 14,
    fontWeight: "500",
  },
  sectionTax: {
    backgroundColor: "#007c4f",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
  },
  sectionTaxTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 8,
  },
  sectionTaxText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#ffffff",
    marginTop: 10,
    marginBottom: 12,
  },totalImpact: {
    backgroundColor: "#007c4f",
    display: "flex",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    marginTop: 20,
    alignItems: "column",
    justifyContent: "space-evenly",
  },
  totalImpactTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 8,
  },
  totalImpactText: {
    fontSize: 16,
    color: "#ffffff",
  },
  topSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    gap: 16,
    },
    searchInput: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    width: "100%",
    }
});
