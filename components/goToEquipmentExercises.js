import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
} from "react-native";

import {SundayComponentUnder, MondayComponentUnder, TuesdayComponentUnder, WednesdayComponentUnder, ThursdayComponentUnder, FridayComponentUnder, SaterDayComponentUnder} from "./equipmentEx/equipmentExOne";
import { SundayComponentNormal, MondayComponentNormal, TuesdayComponentNormal, ThursdayComponentNormal, FridayComponentNormal, SaterDayComponentNormal, WednesdayComponentNormal } from "./equipmentEx/equipmentExTwo";
import { SundayComponentOver,  FridayComponentOver,  MondayComponentOver, SaterDayComponentOver, ThursdayComponentOver, TuesdayComponentOver, WednesdayComponentOver } from "./equipmentEx/equipmentExThree";
import { SundayComponentObesity, FridayComponentObesity, MondayComponentObesity, SaterDayComponentObesity, ThursdayComponentObesity, TuesdayComponentObesity, WednesdayComponentObesity } from "./equipmentEx/exuipmentExFour";
export default function MyTables({ route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalsVisible, setModalsVisible] = useState(Array(7).fill(false));
  const [modalIndex, setModalIndex] = useState(-1);
  const bmiResult = route.params.bmiResult;

  const openModal = (index) => {
    setModalIndex(index);
    let newModalsVisible = [...modalsVisible];
    newModalsVisible[index] = true;
    setModalsVisible(newModalsVisible);
  };

  const closeModal = () => {
    let newModalsVisible = [...modalsVisible];
    newModalsVisible[modalIndex] = false;
    setModalsVisible(newModalsVisible);
    setModalIndex(-1);
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

  const componentsUnder = [
    <SundayComponentUnder />,
    <MondayComponentUnder />,
    <TuesdayComponentUnder />,
    <WednesdayComponentUnder />,
    <ThursdayComponentUnder />,
    <FridayComponentUnder />,
    <SaterDayComponentUnder />,
  ];
  const componentsNoraml = [
    <SundayComponentNormal />,
    <MondayComponentNormal />,
    <TuesdayComponentNormal />,
    <WednesdayComponentNormal />,
    <ThursdayComponentNormal />,
    <FridayComponentNormal />,
    <SaterDayComponentNormal />,
  ]
  const componentsOver = [
    <SundayComponentOver />, 
    <MondayComponentOver />,
    <TuesdayComponentOver />,
    <WednesdayComponentOver />,
    <ThursdayComponentOver />,
    <FridayComponentOver />,
    <SaterDayComponentOver />,
  ]
  const componentsObesity = [
    <SundayComponentObesity />,
    <MondayComponentObesity />,
    <TuesdayComponentObesity />,
    <WednesdayComponentObesity />,
    <ThursdayComponentObesity />,
    <FridayComponentObesity />,
    <SaterDayComponentObesity />,
  ]
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scroll}>
      {Array.from({ length: 7 }, (_, index) => (
            <TouchableOpacity
              style={[styles.caloriesLinkOneContainer, { minHeight: 50 }]}
              onPress={() => openModal(index)}
              key={index}
            >
              <Text style={styles.caloriesLink}>{weekDay[index]}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
      {Array.from({ length: 7 }, (_, index) => (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalsVisible[index]}
          key={index}
        >
          <TouchableWithoutFeedback>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                onPress={() => closeModal(index)}
                style={styles.xContainer}
              >
                <Text style={styles.modalClose}>X</Text>
              </TouchableOpacity>
              {bmiResult < 18.5 ? (
                index === 0 ? (
                  componentsUnder[0]
                ) : index === 1 ? (
                  componentsUnder[1]
                ) : index === 2 ? (
                  componentsUnder[2]
                ) : index === 3 ? (
                  componentsUnder[3]
                ) : index === 4 ? (
                  componentsUnder[4]
                ) : index === 5 ? (
                  componentsUnder[5]
                ) : index === 6 ? (
                  componentsUnder[6]
                ) : null
              ) : null}
              {bmiResult >= 18.5 && bmiResult <= 24.9 ? (
                index === 0 ? (
                  componentsNoraml[0]
                ) : index === 1 ? (
                  componentsNoraml[1]
                ) : index === 2 ? (
                  componentsNoraml[2]
                ) : index === 3 ? (
                  componentsNoraml[3]
                ) : index === 4 ? (
                  componentsNoraml[4]
                ) : index === 5 ? (
                  componentsNoraml[5]
                ) : index === 6 ? (
                  componentsNoraml[6]
                ) : null
              ) : null}
              {bmiResult >= 25 && bmiResult <= 29.9 ? (
                index === 0 ? (
                  componentsOver[0]
                ) : index === 1 ? (
                  componentsOver[1]
                ) : index === 2 ? (
                  componentsOver[2]
                ) : index === 3 ? (
                  componentsOver[3]
                ) : index === 5 ? (
                  componentsOver[4]
                ) : index === 5 ? (
                  componentsOver[5]
                ) : index === 6 ? (
                  componentsOver[6]
                ) : null
              ) : null}
              {bmiResult >= 30 ? (
                index === 0 ? (
                  componentsObesity[0]
                ) : index === 1 ? (
                  componentsObesity[1]
                ) : index === 2 ? (
                  componentsObesity[2]
                ) : index === 3 ? (
                  componentsObesity[3]
                ) : index === 4 ? (
                  componentsObesity[4]
                ) : index === 5 ? (
                  componentsObesity[5]
                ) : index === 6 ? (
                  componentsObesity[6]
                ) : null
              ) : null}
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      ))}
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  caloriesLinkOneContainer: {
    minHeight: 50,
    marginBottom: 5,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 2,
  },
  caloriesLink: {
    fontSize: 20,
    color: "#3498db",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    width: windowWidth * 0.9,
    textAlign: "center",
    paddingTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  xContainer: {
    alignSelf: "flex-end",
    paddingRight: 20,
    paddingTop: 20,
  },
  modalClose: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#3498db",
  },
  modalHeader: {
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: {
    paddingBottom: 20,
  },
});
