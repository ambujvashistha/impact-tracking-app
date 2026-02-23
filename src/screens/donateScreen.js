import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Switch,
} from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import campaignData from "../data/campaignData";

export default function DonateScreen() {
  const [selectedCampaign, setSelectedCampaign] = useState(campaignData[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedType, setSelectedType] = useState("Zakat");
  const [selectedAmount, setSelectedAmount] = useState(5000);
  const [frequency, setFrequency] = useState("One-Time");
  const [taxBenefit, setTaxBenefit] = useState(true);
  const [dedication, setDedication] = useState("For Myself");

  const amounts = [1000, 5000, 10000, 15000, 25000];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Make Your Donation</Text>
        <Text style={styles.headerSub}>
          Empowering the Ummah, one life at a time.
        </Text>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressLabels}>
          <Text style={styles.activeStep}>CAUSE</Text>
          <Text style={styles.activeStep}>AMOUNT</Text>
          <Text style={styles.inactiveStep}>DETAILS</Text>
          <Text style={styles.inactiveStep}>PAYMENT</Text>
        </View>

        <View style={styles.progressBarBackground}>
          <View style={styles.progressFill} />
        </View>

        <Text style={styles.stepText}>Step 2: Selection & Amount</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionLabel}>Selected Project</Text>

        <TouchableOpacity
          style={styles.projectBox}
          onPress={() => setShowDropdown(!showDropdown)}
        >
          <Text>{selectedCampaign.title}</Text>
          <Feather name="chevron-down" size={18} />
        </TouchableOpacity>

        {showDropdown && (
          <View style={styles.dropdown}>
            {campaignData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedCampaign(item);
                  setShowDropdown(false);
                }}
              >
                <Text>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <Text style={styles.sectionLabel}>Donation Type</Text>

        <View style={styles.typeRow}>
          {["Zakat", "Sadaqah", "Fitrana", "General"].map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.typeButton,
                selectedType === type && styles.typeActive,
              ]}
              onPress={() => setSelectedType(type)}
            >
              <Text
                style={[
                  styles.typeText,
                  selectedType === type && styles.typeTextActive,
                ]}
              >
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionLabel}>Dedicate This Donation</Text>

        <View style={styles.dedicateRow}>
          {["For Myself", "For Loved One", "In Memory Of"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.dedicateButton,
                dedication === item && styles.dedicateActive,
              ]}
              onPress={() => setDedication(item)}
            >
              <Text
                style={[
                  styles.dedicateText,
                  dedication === item && styles.dedicateTextActive,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionLabel}>Frequency</Text>

        <View style={styles.frequencyRow}>
          {["One-Time", "Daily", "Weekly"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.freqButton,
                frequency === item && styles.freqActive,
              ]}
              onPress={() => setFrequency(item)}
            >
              <Text
                style={[
                  styles.freqText,
                  frequency === item && styles.freqTextActive,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionLabel}>Choose Amount</Text>

        <View style={styles.amountGrid}>
          {amounts.map((amt) => (
            <TouchableOpacity
              key={amt}
              style={[
                styles.amountButton,
                selectedAmount === amt && styles.amountActive,
              ]}
              onPress={() => setSelectedAmount(amt)}
            >
              <Text
                style={[
                  styles.amountText,
                  selectedAmount === amt && styles.amountTextActive,
                ]}
              >
                ₹{amt.toLocaleString()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TextInput
          placeholder="Enter Custom Amount (Min ₹50)"
          style={styles.input}
          keyboardType="numeric"
        />

        <View style={styles.taxBox}>
          <View>
            <Text style={styles.taxTitle}>TAX BENEFIT</Text>
            <Text style={styles.taxSub}>Generate Tax Certificate (80G)</Text>
          </View>
          <Switch
            value={taxBenefit}
            onValueChange={setTaxBenefit}
            trackColor={{ false: "#ccc", true: "#0f7c4f" }}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.proceedButton}>
          <Text style={styles.proceedText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F6F8" },

  header: {
    backgroundColor: "#0f7c4f",
    padding: 20,
    paddingTop: 50,
  },

  headerTitle: { color: "#fff", fontSize: 20, fontWeight: "700" },
  headerSub: { color: "#d1fae5", marginTop: 6 },

  progressContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  progressLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  activeStep: { color: "#0f7c4f", fontWeight: "700", fontSize: 12 },
  inactiveStep: { color: "#9ca3af", fontSize: 12 },

  progressBarBackground: {
    height: 6,
    backgroundColor: "#e5e7eb",
    borderRadius: 6,
    marginTop: 10,
  },

  progressFill: {
    width: "50%",
    height: 6,
    backgroundColor: "#0f7c4f",
    borderRadius: 6,
  },

  stepText: {
    textAlign: "center",
    marginTop: 8,
    color: "#6b7280",
  },

  content: { padding: 20, paddingBottom: 120 },

  sectionLabel: {
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 8,
  },

  projectBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginTop: 6,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  dropdownItem: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },

  typeRow: { flexDirection: "row", flexWrap: "wrap", gap: 10 },

  typeButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  typeActive: {
    borderColor: "#0f7c4f",
    backgroundColor: "#e6f4ee",
  },

  typeTextActive: { color: "#0f7c4f", fontWeight: "700" },

  dedicateRow: {
    flexDirection: "row",
    backgroundColor: "#e5e7eb",
    borderRadius: 30,
    padding: 4,
  },

  dedicateButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 30,
  },

  dedicateActive: {
    backgroundColor: "#fff",
  },

  dedicateTextActive: {
    fontWeight: "700",
  },

  frequencyRow: { flexDirection: "row", gap: 10 },

  freqButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
  },

  freqActive: { backgroundColor: "#0f7c4f" },

  freqTextActive: { color: "#fff" },

  amountGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },

  amountButton: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
  },

  amountActive: { backgroundColor: "#e6f4ee" },

  amountTextActive: { color: "#0f7c4f", fontWeight: "700" },

  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
  },

  taxBox: {
    marginTop: 20,
    backgroundColor: "#fff7ed",
    padding: 14,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
  },

  proceedButton: {
    backgroundColor: "#0f7c4f",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  proceedText: { color: "#fff", fontWeight: "700" },
});