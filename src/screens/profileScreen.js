import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/doom.jpg")}
          style={styles.avatar}
        />
       <Text style={styles.name}>John Doe</Text>
        <Text style={styles.description}>Crazy description of John Doe</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Total Impact</Text>
        <Text style={styles.sectionValue}>$12,345</Text>
      </View>
      <View style={styles.impact}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lives Touched</Text>
          <Text style={styles.sectionValue}>1,234</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Campaigns</Text>
          <Text style={styles.sectionValue}>56</Text>
        </View>
      </View>

      <View style={styles.sectionTax}>
        <Text style={styles.sectionTaxTitle}>Tax Savings</Text>
        <Text style={styles.sectionTaxText}>
          Download your FY 2024-25 tax-exempt certificate now.
        </Text>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Total Impact</Text>
        <Text style={styles.sectionValue}>$12,345</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Total Impact</Text>
        <Text style={styles.sectionValue}>$12,345</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.section}>
          <TouchableOpacity>
            <Text>Notification Preferences</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <TouchableOpacity>
            <Text>Security & App PIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <TouchableOpacity>
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: "#649b75",
    borderRadius: 8,
  },
  editButtonText: {
    color: "#ffffff",
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
