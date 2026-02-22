import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function QuickDonation() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Donation</Text>

      <View style={styles.donationOptions}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.donateButton}>
            <Text style={styles.donateButtonText}>Donate Now</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.donateButton}>
            <Text style={styles.donateButtonText}>Donate Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.donateButton}>
            <Text style={styles.donateButtonText}>Donate Now</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.donateButton}>
            <Text style={styles.donateButtonText}>Donate Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
