import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041,
};

export default function App() {
  const [values, setValues] = useState({
    inputValue: "",
    resultValue: "0.0",
  });

  const { inputValue, resultValue } = values;

  const handlePress = (currency) => {
    if (inputValue === "") {
      setValues({ ...values, resultValue: "0.0" });
      Alert.alert("Please enter input value.");
    } else {
      let result = parseFloat(inputValue * currencyPerRupee[currency]).toFixed(
        4
      );
      setValues({ ...values, inputValue: "", resultValue: result });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.screenView}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputValue}
              selectionColor="#FFF"
              keyboardType="numeric"
              placeholder="Enter Value"
              value={inputValue}
              onChangeText={(input) =>
                setValues({ ...values, inputValue: input })
              }
            />
          </View>
          <View style={styles.convertorButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                handlePress("DOLLAR");
              }}
              style={styles.convertorButton}
            >
              <Text style={styles.convertorButtonText}>USD</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePress("EURO");
              }}
              style={styles.convertorButton}
            >
              <Text style={styles.convertorButtonText}>EURO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePress("POUND");
              }}
              style={styles.convertorButton}
            >
              <Text style={styles.convertorButtonText}>POUND</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePress("RUBEL");
              }}
              style={styles.convertorButton}
            >
              <Text style={styles.convertorButtonText}>RBL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePress("AUSDOLLAR");
              }}
              style={styles.convertorButton}
            >
              <Text style={styles.convertorButtonText}>AUSD</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePress("CANDOLLAR");
              }}
              style={styles.convertorButton}
            >
              <Text style={styles.convertorButtonText}>CAND</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePress("YEN");
              }}
              style={styles.convertorButton}
            >
              <Text style={styles.convertorButtonText}>YEN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePress("DINAR");
              }}
              style={styles.convertorButton}
            >
              <Text style={styles.convertorButtonText}>DINAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePress("BITCOIN");
              }}
              style={styles.convertorButton}
            >
              <Text style={styles.convertorButtonText}>BTC</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  screenView: {
    flex: 1,
  },
  resultContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c1c1c1",
    maxHeight: 70,
    marginLeft: 30,
    marginTop: 50,
    marginRight: 30,
    borderRadius: 15,
  },

  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    maxHeight: 70,
    marginLeft: 30,
    marginTop: 50,
    marginRight: 30,
    borderRadius: 15,
  },

  inputValue: {
    fontSize: 30,
    fontWeight: "300",
    color: "white",
    textAlign: "center",
  },

  resultValue: {
    fontSize: 30,
    fontWeight: "300",
  },

  convertorButtonContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 30,
    marginTop: 50,
    marginRight: 30,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 10,
  },

  convertorButton: {
    backgroundColor: "#c1c1c1",
    height: 50,
    width: "26%",
    margin: 10,
    borderRadius: 15,
  },
  convertorButtonText: {
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontSize: 15,
    fontWeight: "200",
    textAlign: "center",
    marginTop: 15,
  },
});
