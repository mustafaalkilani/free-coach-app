import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Image } from "react-native-expo-image-cache";

const ExerciseCard = ({ exercise, sets, reps, rest, image, restSets }) => {
  return (
    <View style={styles.card}>
      <Image uri={image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{exercise}</Text>
        <Text style={styles.info}>{sets} sets</Text>
        <Text style={styles.info}>{reps} reps per set</Text>
        <Text style={styles.info}>{restSets} rest between sets</Text>
        <Text style={styles.info}>{rest} rest between reps</Text>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SundayComponentNormal = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>صدر:</Text>
      <ExerciseCard
        exercise="بنك بار مستوي"
        sets="4"
        reps="12,10,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="ضغط دامبلز مستوي"
        sets="4"
        reps="12,10,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="همر علوي"
        sets="4"
        reps="12,10,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="تجميع سفلي"
        sets="4"
        reps="12,10,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="بنك بار سفلي"
        sets="4"
        reps="12,10,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <Text style={styles.daytitle}>تراي:</Text>
      <ExerciseCard
        exercise="تراي مستقيم كيبل"
        sets="4"
        reps="12,10,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="تراي كيبل حبل خلف الراس+تراي عكسي مفرد super"
        sets="4"
        reps="12,10,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
    </ScrollView>
  );
};

const MondayComponentNormal = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>ارجل:</Text>
      <ExerciseCard
        exercise=" ماكنة رجل امامي"
        sets="4"
        reps="15,15,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="طعن"
        sets="4"
        reps="15,15,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="ماكنة رجل خلفي"
        sets="4"
        reps="15,15,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="سومو سكوات"
        sets="4"
        reps="15,15,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="خوارج ماكنة"
        sets="4"
        reps="15,15,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="بطات بالبار واقف smeth"
        sets="4"
        reps="15,15,10,8" 
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <Text style={styles.daytitle}>معدة:</Text>
      <ExerciseCard
        exercise="معده طحن"
        sets="4"
        reps="15,15,15,15"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
    </ScrollView>
  );
};

const TuesdayComponentNormal = () => {
  return (
    <View style={styles.restcontainer}>
      <Text style={styles.restDay}>راحة</Text>
    </View>
  );
};

const WednesdayComponentNormal = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>ظهر:</Text>
      <ExerciseCard
        exercise="سحب راس البار قبضه"
        sets="3"
        reps="15,15,12"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="سحب مستقيم واسع"
        sets="3"
        reps="15,15,12"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="منشار دمبل منحني"
        sets="3"
        reps="15,15,12"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="سحب واسع مستقيم جالس من الاعلى"
        sets="3"
        reps="15,15,12"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="قبضه جالس من الاعلى+اسفل ظهر super"
        sets="3"
        reps="15,15,12"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <Text style={styles.daytitle}>باي:</Text>
      <ExerciseCard
        exercise="باي بار مستقيم متوسط"
        sets="4"
        reps="10,10,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="باي لاري ضيق بار"
        sets="4"
        reps="10,10,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="همر دامبلز متناوب"
        sets="4"
        reps="10,10,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
    </ScrollView>
  );
};

const ThursdayComponentNormal = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>الاكتاف:</Text>
      <ExerciseCard
        exercise="سميث امامي"
        sets="4"
        reps="12,12,10,8"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="فلاي دامبلز امامي"
        sets="4"
        reps="12,12,10,8"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="ضغط دامبلز جانبي"
        sets="4"
        reps="12,12,10,8"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="فلاي جانبي دامبلز"
        sets="4"
        reps="12,12,10,8"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="ماكنه خلفي"
        sets="4"
        reps="12,12,10,8"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise=" هز ترابيس"
        sets="4"
        reps="12,12,10,8"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <Text style={styles.daytitle}>معدة:</Text>
      <ExerciseCard
        exercise="معده"
        sets="4"
        reps="15,15,15,15"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
    </ScrollView>
  );
};

const FridayComponentNormal = () => {
  return (
    <View style={styles.restcontainer}>
      <Text style={styles.restDay}>راحة</Text>
    </View>
  );
};

const SaterDayComponentNormal = () => {
  return (
    <View style={styles.restcontainer}>
      <Text style={styles.restDay}>راحة</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    width: windowWidth * 0.96, // 96% of the screen width
  },
  restcontainer: {
    height: windowHeight * 0.90,
    width: windowWidth * 0.96, // 96% of the screen width
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'cneter'

  },
  daytitle: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "right",
    width: "100%",
  },
  restDay: {
    fontSize: 37,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
    width: "100%",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 100,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  info: {
    fontSize: 11,
    color: "#555",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    textAlign: "right",
  },
});

export {
  SundayComponentNormal,
  MondayComponentNormal,
  TuesdayComponentNormal,
  WednesdayComponentNormal,
  ThursdayComponentNormal,
  FridayComponentNormal,
  SaterDayComponentNormal,
};
