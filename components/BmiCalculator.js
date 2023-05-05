import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDq9UB2qs4NtjXgeDA5VvvdjmUKl-WH9uc",
  authDomain: "fittness-app-2854c.firebaseapp.com",
  projectId: "fittness-app-2854c",
  storageBucket: "fittness-app-2854c.appspot.com",
  messagingSenderId: "1041719002340",
  appId: "1:1041719002340:web:7d3dc4a9ba2232282018f1",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [BmiScale, setBmiScale] = useState("");
  const [showNewButton, setShowNewButton] = useState(false);
  const [showNewButtonError, setShowNewButtonError] = useState(false);
  const navigation = useNavigation();

  const calculateBmi = () => {
    if (height !== "" && weight !== "") {
      const arabicHeight = height; // Arabic number string
      const englishHeight = Number(
        arabicHeight.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
          return d.charCodeAt(0) - 1632;
        })
      ); // Convert to English number

      const arabicWeight = weight; // Arabic number string
      const englishWeight = Number(
        arabicWeight.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
          return d.charCodeAt(0) - 1632;
        })
      ); // Convert to English number
      const bmi =
        englishWeight / ((englishHeight / 100) * (englishHeight / 100));
      setBmiResult(bmi.toFixed(2));
      Keyboard.dismiss();

      const arabicAge = age;
      const englishAge = Number(
        arabicAge.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
          return d.charCodeAt(0) - 1632;
        })
      );

      db.collection("users").add({
        firstName: fname,
        lastName: Lname,
        height: englishHeight,
        weight: englishWeight,
        age: englishAge,
        gender: gender,
        bmi: bmi.toFixed(2),
        date: new Date(),
      });

      setShowNewButton(true);
    }
  };

  useEffect(() => {
    switch (true) {
      case bmiResult < 18.5 && bmiResult >= 11.1:
        setBmiScale("تحت الوزن الطبيعي");
        setShowNewButtonError(true);
        break;
      case bmiResult >= 18.5 && bmiResult <= 24.9:
        setBmiScale("طبيعي");
        setShowNewButtonError(true);
        break;
      case bmiResult >= 25 && bmiResult <= 29.9:
        setBmiScale("فوق الوزن الطبيعي");
        setShowNewButtonError(true);
        break;
      case bmiResult >= 30 && bmiResult <= 39.3:
        setBmiScale("مفرط السمنة");
        setShowNewButtonError(true);
        break;
      default:
        break;
    }
  }, [bmiResult]);

  const goToTheNextPage = () => {
    navigation.navigate("MyTables", { bmiResult: bmiResult });
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ justifyContent: "flex-start" }}
    >
      <View style={styles.nameContainer}>
        <View style={[styles.nameTextInputContainer, { paddingRight: 10 }]}>
          <Text style={[styles.label, { textAlign: "right" }]}>
            الاسم الاخير:{" "}
          </Text>
          <TextInput style={styles.name} onChangeText={setLname}></TextInput>
        </View>
        <View style={styles.nameTextInputContainer}>
          <Text style={[styles.label, { textAlign: "right" }]}>
            الاسم الاول:{" "}
          </Text>
          <TextInput style={styles.name} onChangeText={setFname}></TextInput>
        </View>
      </View>
      <Text style={styles.label}>الطول (cm): </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
        keyboardAppearance="light"
      />
      <Text style={styles.label}>الوزن (kg): </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
        keyboardAppearance="light"
      />
      <View>
        <Text style={styles.label}>العمر: </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
          keyboardAppearance="light"
          returnKeyType="done"
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        <Text style={styles.label}>الجنس: </Text>
        <View style={styles.genderContainer}>
          <CheckBox
            checked={gender === "male"}
            onPress={() => setGender("male")}
          />
          <Text style={styles.genderLabel}>ذكر</Text>

          <CheckBox
            checked={gender === "female"}
            onPress={() => setGender("female")}
          />
          <Text style={styles.genderLabel}>انثى</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={calculateBmi}>
        <Text style={styles.buttonText}>أحسب</Text>
      </TouchableOpacity>
      {bmiResult > 0 && bmiResult < 39.3 && (
        <View style={styles.result}>
          <Text style={styles.resultText}> مؤشر كتلة الجسم: {bmiResult}</Text>
          <Text style={styles.resultText}>معدل كتلة جسمك: {BmiScale}</Text>
        </View>
      )}
      {showNewButton && showNewButtonError && (
        <View>
          <TouchableOpacity style={styles.newButton} onPress={goToTheNextPage}>
            <Text style={styles.newButtonText}>اذهب الى جداولي</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    height: 2000,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "right",
  },
  nameTextInputContainer: {
    flexDirection: "column",
    width: "50%",
  },
  nameContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  name: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 16,
    width: "100%",
  },
  genderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  genderLabel: {
    marginHorizontal: 8,
    fontSize: 15,
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 0,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  result: {
    marginTop: 20,
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    marginBottom: 5,
  },
  newButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  newButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
