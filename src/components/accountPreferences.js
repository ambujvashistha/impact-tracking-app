import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";

export default function AccountPreferences() {
  return (
    <View style={styles.section}>
      <View style={styles.section}>
        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color="lightgrey" />
          <Text>Notification Preferences</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity>
          <FontAwesome6 name="shield-halved" size={24} color="lightgrey" />
          <Text>Security & App PIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity>
          <Octicons name="sign-out" size={24} color="#e66464" />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
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
