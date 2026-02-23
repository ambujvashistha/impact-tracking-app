import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useState } from "react";
import {
  Feather,
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

export default function DonateScreen() {
  const [selectedType, setSelectedType] = useState("Zakat");
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const amounts = [500, 1000, 2000, 5000, 10000, 25000];

  const donationTypes = [
    { label: "Zakat", icon: <Entypo name="wallet" size={20} /> },
    { label: "Sadaqa", icon: <FontAwesome5 name="hand-holding-heart" size={18} /> },
    { label: "Lillah", icon: <Feather name="heart" size={20} /> },
  ];

  const paymentMethods = [
    {
      label: "UPI",
      icon: <Feather name="smartphone" size={20} />,
    },
    {
      label: "Card",
      icon: <Feather name="credit-card" size={20} />,
    },
    {
      label: "NetBanking",
      icon: <MaterialIcons name="account-balance" size={20} />,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>DONATION TYPE</Text>

        <View style={styles.typeRow}>
          {donationTypes.map((type) => (
            <TouchableOpacity
              key={type.label}
              style={[styles.typeButton, selectedType === type.label && styles.typeButtonActive, ]}
              onPress={() => setSelectedType(type.label)}>
              <View style={styles.typeContent}>
                {type.icon}
                <Text
                  style={[styles.typeText, selectedType === type.label && styles.typeTextActive,]}>
                  {type.label}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>SELECT AMOUNT</Text>

        <View style={styles.amountGrid}>
          {amounts.map((amt) => (
            <TouchableOpacity
              key={amt}
              style={[ styles.amountButton, selectedAmount === amt && styles.amountButtonActive]}
              onPress={() => setSelectedAmount(amt)}>
              <Text style={[ styles.amountText, selectedAmount === amt && styles.amountTextActive,]}>
                ₹{amt >= 10000 ? amt / 1000 + "k" : amt.toLocaleString()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TextInput placeholder="Enter custom amount" style={styles.customInput} keyboardType="numeric" />

        <View style={styles.recurringCard}>
          <View style={styles.recurringRow}>
            <Feather name="refresh-ccw" size={20} color="#0f7c4f" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.recurringTitle}>Monthly Recurring</Text>
              <Text style={styles.recurringSub}>
                Automate your rewards every month
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={styles.cardTitle}>Donor Details</Text>
            <Text style={styles.editText}>Edit</Text>
          </View>
          <Text style={styles.detailText}>Full Name</Text>
          <Text style={styles.detailValue}>Ahmed Siddiqui</Text>
          <Text style={styles.detailText}>Email Address</Text>
          <Text style={styles.detailValue}>ahmed.s@example.com</Text>
        </View>

        <Text style={styles.sectionTitle}>SECURE PAYMENT</Text>

        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.label}
            style={[ styles.paymentButton, paymentMethod === method.label && styles.paymentActive, ]} onPress={() => setPaymentMethod(method.label)} >
            <View style={styles.paymentRow}>
              {method.icon}
              <Text style={[ styles.paymentText, paymentMethod === method.label && styles.paymentTextActive, ]}>
                {method.label}
              </Text>
            </View>

            <MaterialIcons name={ paymentMethod === method.label ? "radio-button-checked" : "radio-button-unchecked" } size={20}
              color={paymentMethod === method.label ? "#0f7c4f" : "#9ca3af"}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.totalLabel}>TOTAL AMOUNT</Text>
          <Text style={styles.totalAmount}>
            ₹{selectedAmount.toLocaleString()}.00
          </Text>
        </View>

        <TouchableOpacity style={styles.donateButton}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.donateButtonText}>Complete Donation</Text>
            <Feather
              name="arrow-right"
              size={18}
              color="#fff"
              style={{ marginLeft: 6 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F8",
  },
  content: {
    padding: 20,
    paddingBottom: 120,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#6b7280",
    marginTop: 20,
    marginBottom: 12,
  },
  typeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  typeButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    alignItems: "center",
  },
  typeButtonActive: {
    borderColor: "#0f7c4f",
    backgroundColor: "#e6f4ee",
  },
  typeText: {
    fontWeight: "600",
  },
  typeTextActive: {
    color: "#0f7c4f",
  },
  amountGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  amountButton: {
    width: "30%",
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 16,
    marginBottom: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  amountButtonActive: {
    borderColor: "#0f7c4f",
    backgroundColor: "#e6f4ee",
  },
  amountText: {
    fontWeight: "600",
  },
  amountTextActive: {
    color: "#0f7c4f",
  },
  customInput: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginTop: 8,
  },
  recurringCard: {
    backgroundColor: "#dff2e9",
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
  },
  recurringTitle: {
    fontWeight: "700",
  },
  recurringSub: {
    fontSize: 12,
    color: "#6b7280",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: "700",
  },
  editText: {
    color: "#0f7c4f",
    fontWeight: "600",
  },
  detailText: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 6,
  },
  detailValue: {
    fontWeight: "600",
  },
  paymentButton: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  paymentActive: {
    borderColor: "#0f7c4f",
    backgroundColor: "#e6f4ee",
  },
  paymentText: {
    fontWeight: "600",
  },
  paymentTextActive: {
    color: "#0f7c4f",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
  },
  totalLabel: {
    fontSize: 12,
    color: "#6b7280",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f7c4f",
  },
  donateButton: {
    backgroundColor: "#0f7c4f",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  donateButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
  typeContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  recurringRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  paymentButton: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  paymentRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
