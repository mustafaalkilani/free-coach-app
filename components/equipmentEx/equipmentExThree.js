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

const SundayComponentOver = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>صدر:</Text>
      <ExerciseCard
        exercise="بنش مستوي"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="بنش علوي"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="بنش سفلي"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="تجميع ماكنة"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="همر علوي"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="همر سفلي"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
    </ScrollView>
  );
};

const MondayComponentOver = () => {
  return (
    <View style={styles.restcontainer}>
      <Text style={styles.restDay}>راحة</Text>
    </View>
  );
};

const TuesdayComponentOver = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>رجل:</Text>
      <ExerciseCard
        exercise="دفاش ماكنة"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="ماكنة امامي"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="ماكنة خلفي"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="دواخل"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="خوارج"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="بطات ماكنة"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="dead left"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
    </ScrollView>
  );
};

const WednesdayComponentOver = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>كتف:</Text>
      <ExerciseCard
        exercise="ضغط ماكنة جانبي"
        sets="3"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="ضغط ماكنة امامي"
        sets="3"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="فلاي جانبي دامبلز"
        sets="3"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="فلاي امامي بار"
        sets="3"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="فلاي جانبي مفرد كيبل"
        sets="3"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="فلاي دامبلز خلفي"
        sets="4"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="ماكنة خلفي + هز ترابيس"
        sets="4"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="همر دامبلز متناوب"
        sets="4"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
    </ScrollView>
  );
};

const ThursdayComponentOver = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>باي:</Text>
      <ExerciseCard
        exercise="باي بار متوسط مستقيم"
        sets="4"
        reps="15,15,12,10"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="باي لاري ضيق"
        sets="4"
        reps="15,15,12,10"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="باي همر دامبلز تبادل"
        sets="4"
        reps="15,15,12,10"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <Text style={styles.daytitle}>تراي:</Text>

      <ExerciseCard
        exercise="تراي مستقيم كيبل"
        sets="4"
        reps="15,15,12,10"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="تراي مقلوب كيبل مفرد"
        sets="4"
        reps="15,15,12,10"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="تراي كيك باك"
        sets="4"
        reps="15,15,12,10"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
    </ScrollView>
  );
};

const FridayComponentOver = () => {
  return (
    <View style={styles.restcontainer}>
      <Text style={styles.restDay}>راحة</Text>
    </View>
  );
};

const SaterDayComponentOver = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>ظهر:</Text>
      <ExerciseCard
        exercise="سحب بالبار اعوج منحني"
        sets="4"
        reps="15,15,12,10"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="سحب ارضي قبضة"
        sets="4"
        reps="15,15,12,10"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="سحب مستقيم واسع"
        sets="4"
        reps="15,15,12,10"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="منشار"
        sets="4"
        reps="15,15,12,10"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="سحب متوسط من الاعلى جالس"
        sets="4"
        reps="15,15,12,10"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="لاس كيبل"
        sets="4"
        reps="15,15,12,10"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="اسفل ظهر"
        sets="4"
        reps="15,15,12,10"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    width: windowWidth * 0.96, // 96% of the screen width
  },
  restcontainer: {
    height: windowHeight * 0.9,
    width: windowWidth * 0.96, // 96% of the screen width
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "cneter",
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
  SundayComponentOver,
  MondayComponentOver,
  TuesdayComponentOver,
  WednesdayComponentOver,
  ThursdayComponentOver,
  FridayComponentOver,
  SaterDayComponentOver,
};
