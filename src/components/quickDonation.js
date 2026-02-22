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
      <Text style={styles.title}>Quick Donation</Text>

      <View style={styles.donationOptions}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.donateButton}>
            <Entypo name="wallet" size={24} color="#007c4f" />
            <Text style={styles.donateButtonText}>Zakat</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.donateButton}>
            <FontAwesome5 name="hand-holding-heart" size={24} color="#007c4f" />
            <Text style={styles.donateButtonText}>Sadaqa</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.donateButton}>
            <Feather name="gift" size={24} color="#007c4f" />
            <Text style={styles.donateButtonText}>General</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.donateButton}>
            {/* <View style={styles.circle}> */}
              <FontAwesome5 name="star-of-life" size={24} color="#007c4f" />
            {/* </View> */}
            <Text style={styles.donateButtonText}>Relief</Text>
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
    width: "48%",
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
});
