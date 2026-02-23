import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AccountPreferences from "../components/accountPreferences";

export default function ImpactScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Image
          source={require("../../assets/doom.jpg")}
          style={styles.avatar}
        />
        <Text style={styles.name}>Dr Doom</Text>
        <Text style={styles.description}>Crazy description of Dr Doom</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <AccountPreferences />
    </ScrollView>
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
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 12,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 8,
  },
  impact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
  },
});
