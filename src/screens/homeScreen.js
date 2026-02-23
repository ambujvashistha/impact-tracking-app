import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import QuickDonation from "../components/quickDonation";
import UrgentRelief from "../components/urgentRelief";
import RecentImpact from "../components/recentImpact";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.logoRow}>
              <Ionicons name="leaf-outline" size={22} color="#fff" />
              <Text style={styles.foundationText}>Jamiat Foundation</Text>
            </View>

            <Ionicons name="notifications-outline" size={22} color="#fff" />
          </View>

          <View style={styles.verseCard}>
            <Text style={styles.verseTitle}>QURAN VERSE</Text>
            <Text style={styles.verseText}>
              "And whatever you spend in good - it is for yourselves"
            </Text>
            <Text style={styles.verseRef}>Al-Baqarah 2:272</Text>
          </View>
        </View>

        <View style={styles.statsWrapper}>
          <View style={styles.statsCard}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>50K+</Text>
              <Text style={styles.statLabel}>Lives</Text>
            </View>

            <View style={styles.statDivider} />

            <View style={styles.statItem}>
              <Text style={styles.statNumber}>₹2.4Cr</Text>
              <Text style={styles.statLabel}>Raised</Text>
            </View>

            <View style={styles.statDivider} />

            <View style={styles.statItem}>
              <Text style={styles.statNumber}>12K+</Text>
              <Text style={styles.statLabel}>Donors</Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.searchBox}>
            <Feather name="search" size={18} color="#9ca3af" />
            <TextInput
              placeholder="Search campaigns..."
              style={styles.searchInput}
            />
          </View>

          <UrgentRelief />
          <QuickDonation />
          <RecentImpact />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  header: {
    backgroundColor: "#0f7c4f",
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 90,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  foundationText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  verseCard: {
    marginTop: 20,
    backgroundColor: "#1b8a5a",
    borderRadius: 16,
    padding: 16,
  },

  verseTitle: {
    color: "#d1fae5",
    fontSize: 12,
    marginBottom: 6,
  },

  verseText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },

  verseRef: {
    color: "#d1fae5",
    fontSize: 12,
    marginTop: 6,
    textAlign: "right",
  },

  statsWrapper: {
    marginTop: -45,
    paddingHorizontal: 20,
  },

  statsCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 18,
    paddingHorizontal: 10,
    elevation: 6,
  },

  statItem: {
    flex: 1,
    alignItems: "center",
  },

  statNumber: {
    fontWeight: "700",
    fontSize: 16,
  },

  statLabel: {
    fontSize: 12,
    color: "#6b7280",
  },

  statDivider: {
    width: 1,
    backgroundColor: "#e5e7eb",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 25,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 45,
    marginBottom: 20,
  },

  searchInput: {
    marginLeft: 8,
    flex: 1,
  },
});
