import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import {
  DailyCalories,
  UnderWeightEatTwo,
  UnderWeightEatThree,
  UnderWeightEatFour,
  UnderWeightEatFive,
  UnderWeightEatSix,
  UnderWeightEatSeven,
} from "./underWehghitEat";
import {
  NormalWehghitOne,
  NormalWehghitTwo,
  NormalWehghitThree,
  NormalWehghitFour,
  NormalWehghitFive,
  NormalWehghitSix,
  NormalWehghitSeven,
} from "./normalWehghitEat";
import {
  OverWehghitOne,
  OverWehghitTwo,
  OverWehghitThree,
  OverWehghitFour,
  OverWehghitFive,
  OverWehghitSix,
  OverWehghitSeven,
} from "./overwehightEat";
import {
  ExtaOverWehghit,
  ExtaOverWehghitTwo,
  ExtaOverWehghitThree,
  ExtaOverWehghitFour,
  ExtaOverWehghitFive,
  ExtaOverWehghitSix,
  ExtaOverWehghitSeven,
} from "./extraOverWehgithEat";

export default function MyTables({ navigation, route }) {
  const goToEquipmentExercises = () => {
    navigation.navigate("goToEquipmentExercises", {
      bmiResult: route.params.bmiResult,
    });
  };

  const bmiResult = route.params.bmiResult;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalsVisible, setModalsVisible] = useState(Array(7).fill(false));

  const openModal = (index) => {
    let newModalsVisible = [...modalsVisible];
    newModalsVisible[index] = true;
    setModalsVisible(newModalsVisible);
  };

  const closeModal = (index) => {
    let newModalsVisible = [...modalsVisible];
    newModalsVisible[index] = false;
    setModalsVisible(newModalsVisible);
  };
  const weekDay = [
    "الاحد",
    "الاثنين",
    "الثلاثاء",
    "الاربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>غذائي:</Text>
      </View>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ justifyContent: "flex-start" }}
      >
        <View style={styles.caloriesLinkOneContainer}>
          {Array.from({ length: 7 }, (_, index) => (
            <TouchableOpacity
              style={[styles.caloriesLinkOneContainer, { minHeight: 50 }]}
              onPress={() => openModal(index)}
              key={index}
            >
              <Text style={styles.caloriesLink}>{weekDay[index]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>تمارين اللياقة:</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={goToEquipmentExercises}
          >
            <Text style={styles.buttonText}>تمارين في الصالة رياضية</Text>
          </TouchableOpacity>
        </View>
      </View>
      {Array.from({ length: 7 }, (_, index) => (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalsVisible[index]}
          key={index}
        >
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              {bmiResult < 18.5 ? (
                index === 0 ? (
                  <DailyCalories />
                ) : index === 1 ? (
                  <UnderWeightEatTwo />
                ) : index === 2 ? (
                  <UnderWeightEatThree />
                ) : index === 3 ? (
                  <UnderWeightEatFour />
                ) : index === 4 ? (
                  <UnderWeightEatFive />
                ) : index === 5 ? (
                  <UnderWeightEatSix />
                ) : index === 6 ? (
                  <UnderWeightEatSeven />
                ) : null
              ) : null}
              {bmiResult >= 18.5 && bmiResult <= 24.9 ? (
                index === 0 ? (
                  <NormalWehghitOne />
                ) : index === 1 ? (
                  <NormalWehghitTwo />
                ) : index === 2 ? (
                  <NormalWehghitThree />
                ) : index === 3 ? (
                  <NormalWehghitFour />
                ) : index === 4 ? (
                  <NormalWehghitFive />
                ) : index === 5 ? (
                  <NormalWehghitSix />
                ) : index === 6 ? (
                  <NormalWehghitSeven />
                ) : null
              ) : null}
              {bmiResult >= 25 && bmiResult <= 29.9 ? (
                index === 0 ? (
                  <OverWehghitOne />
                ) : index === 1 ? (
                  <OverWehghitTwo />
                ) : index === 2 ? (
                  <OverWehghitThree />
                ) : index === 3 ? (
                  <OverWehghitFour />
                ) : index === 5 ? (
                  <OverWehghitFive />
                ) : index === 5 ? (
                  <OverWehghitSix />
                ) : index === 6 ? (
                  <OverWehghitSeven />
                ) : null
              ) : null}
              {bmiResult >= 30 ? (
                index === 0 ? (
                  <ExtaOverWehghit />
                ) : index === 1 ? (
                  <ExtaOverWehghitTwo />
                ) : index === 2 ? (
                  <ExtaOverWehghitThree />
                ) : index === 3 ? (
                  <ExtaOverWehghitFour />
                ) : index === 4 ? (
                  <ExtaOverWehghitFive />
                ) : index === 5 ? (
                  <ExtaOverWehghitSix />
                ) : index === 6 ? (
                  <ExtaOverWehghitSeven />
                ) : null
              ) : null}
              <TouchableOpacity
                onPress={() => closeModal(index)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  scroll: {
    flex: 1,
    height: 120,
  },
  headerContainer: {
    marginBottom: 24,
    textAlign: "right",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3498db",
    textAlign: "right",
  },
  caloriesLinkOneContainer: {
    width: "100%",
    marginBottom: 5,
  },
  caloriesLink: {
    fontSize: 20,
    color: "#3498db",
    textAlign: "right",
    marginLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3498db",
    marginBottom: 20,
    textAlign: "right",
  },
  buttonsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 50,
    width: 50,
    height: 50,
    padding: 10,
    zIndex: 10,
  },
  closeButtonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#00FFFF",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
