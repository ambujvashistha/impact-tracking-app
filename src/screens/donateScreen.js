import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function QuickDonation() {
  return (
    <View style={styles.container}>
      <View style={styles.donationSection}>
        <Text style={styles.sectionTitle}>DONATION TYPE</Text>

        <View style={styles.donationOptions}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 16 }}
          >
            <TouchableOpacity style={styles.donateButton}>
              <Entypo name="wallet" size={24} color="#007c4f" />
              <Text style={styles.donateButtonText}>Zakat</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.donateButton}>
              <FontAwesome5
                name="hand-holding-heart"
                size={24}
                color="#007c4f"
              />
              <Text style={styles.donateButtonText}>Sadaqa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.donateButton}>
              <Feather name="gift" size={24} color="#007c4f" />
              <Text style={styles.donateButtonText}>General</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.donateButton}>
              <FontAwesome5 name="star-of-life" size={24} color="#007c4f" />
              <Text style={styles.donateButtonText}>Relief</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>

      <View style={styles.amountSection}>
        <Text style={styles.sectionTitle}>SELECT AMOUNT</Text>

        <View style={styles.amountRow}>
          <TouchableOpacity style={styles.amountButton}>
            <Text style={styles.amountValue}>500</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.amountButton}>
            <Text style={styles.amountValue}>1,000</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.amountButton}>
            <Text style={styles.amountValue}>2,000</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.amountRow}>
          <TouchableOpacity style={styles.amountButton}>
            <Text style={styles.amountValue}>5,000</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.amountButton}>
            <Text style={styles.amountValue}>10K</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.amountButton}>
            <Text style={styles.amountValue}>15K</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: "#1f2937",
  },
  donationOptions: {},
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  donateButton: {
    width: "30%",
    backgroundColor: "#f3f4f6",
    borderRadius: 20,
    paddingVertical: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  donateButtonText: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c4ebdd",
    position: "absolute",
    top: 10,
    right: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "gray",
    marginBottom: 12,
  },
  donationSection: {
    marginBottom: 20,
    paddingHorizontal: 20,
  }, 
  amountButton: {
    width: "27%",
    backgroundColor: "#f3f4f6",
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginRight: 12,
  },
  amountSection: {
    paddingHorizontal: 20,
    gap: 10,
  },amountRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});
