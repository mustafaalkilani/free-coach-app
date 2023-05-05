import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const UnderWeight = ({ day }) => {
  const [documentData, setDocumentData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeFirebase = async () => {
      // Initialize Firebase
      const firebaseConfig = {
        apiKey: "AIzaSyDq9UB2qs4NtjXgeDA5VvvdjmUKl-WH9uc",
        authDomain: "fittness-app-2854c.firebaseapp.com",
        projectId: "fittness-app-2854c",
        storageBucket: "fittness-app-2854c.appspot.com",
        messagingSenderId: "1041719002340",
        appId: "1:1041719002340:web:7d3dc4a9ba2232282018f1",
      };
      firebase.initializeApp(firebaseConfig);

      const db = firebase.firestore();

      // Get a reference to the document you want to fetch
      const docRef = db.collection("UnderWeight").doc(`day : ${day}`);

      // Use getDoc to retrieve the document
      const docSnap = await docRef.get();

      docRef.onSnapshot((doc) => {
        if (doc.exists) {
          setDocumentData(doc.data());
        } else {
          console.log("No such document!");
          console.log(day);
        }
        setIsLoading(false); // Set isLoading to false when the data is fetched
      });
    };

    initializeFirebase();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>خطة غذائية للأشخاص النحيلين</Text>
      {isLoading ? ( // Show the spinner if isLoading is true
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <React.Fragment>
          <Text style={styles.text}>
            اليوم: {documentData && documentData.TextOne}
          </Text>
          <View style={styles.mealContainer}>
            <Text style={styles.subtitle}>
              {documentData && documentData.TitleTwo}
            </Text>
            <Text style={styles.mealText}>
              {documentData && documentData.TextTwo}
            </Text>
          </View>
          <View style={styles.mealContainer}>
            <Text style={styles.subtitle}>
              {documentData && documentData.TitleThree}
            </Text>
            <Text style={styles.mealText}>
              {documentData && documentData.TextThree}
            </Text>
          </View>
          <View style={styles.mealContainer}>
            <Text style={styles.subtitle}>
              {documentData && documentData.TitleFour}
            </Text>
            <Text style={styles.mealText}>
              {documentData && documentData.TextFour}
            </Text>
          </View>
        </React.Fragment>
      )}
    </View>
  );
};

const DailyCalories = () => {
  return <UnderWeight day={"الاحد"} />;
};

const UnderWeightEatTwo = () => {
  return <UnderWeight day={"الاثنين"} />;
};

const UnderWeightEatThree = () => {
  return <UnderWeight day={"الثلاثاء"} />;
};

const UnderWeightEatFour = () => {
  return <UnderWeight day={"الاربعاء"} />;
};

const UnderWeightEatFive = () => {
  return <UnderWeight day={"الخميس"} />;
};

const UnderWeightEatSix = () => {
  return <UnderWeight day={"الجمعة"} />;
};

const UnderWeightEatSeven = () => {
  return <UnderWeight day={"السبت"} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#555",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#555",
    textAlign: "right",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: "#555",
    textAlign: "center",
  },
  mealContainer: {
    marginBottom: 20,
  },
  mealText: {
    fontSize: 16,
    color: "#555",
    textAlign: "right",
  },
});
export {
  DailyCalories,
  UnderWeightEatTwo,
  UnderWeightEatThree,
  UnderWeightEatFour,
  UnderWeightEatFive,
  UnderWeightEatSix,
  UnderWeightEatSeven,
};
