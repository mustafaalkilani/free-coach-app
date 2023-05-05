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

const SundayComponentObesity = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>ظهر:</Text>
      <ExerciseCard
        exercise="T ماكنة"
        sets="4"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="سحب بالبار منحني مقلوب"
        sets="4"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="سحب قبضة أرضي"
        sets="4"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="سحب واسع أرضي"
        sets="4"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="سحب متوسط من الأعلى جالس"
        sets="4"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="نشر منحني"
        sets="4"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="أسفل ظهر"
        sets="4"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
    </ScrollView>
  );
};

const MondayComponentObesity = () => {
  return (
    <View style={styles.restcontainer}>
      <Text style={styles.restDay}>راحة</Text>
    </View>
  );
};

const TuesdayComponentObesity = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>رجل:</Text>
      <ExerciseCard
        exercise="سكوات"
        sets="4"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="ماكنة امامي"
        sets="4"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="dead left"
        sets="4"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="دواخل"
        sets="4"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="خوارج"
        sets="4"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="بطات ماكنة"
        sets="4"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
    </ScrollView>
  );
};

const WednesdayComponentObesity = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>كتف:</Text>
      <ExerciseCard
        exercise="ضغط ماكنة امامي"
        sets="3"
        reps="15,15,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="فلاي بار امامي"
        sets="3"
        reps="15,15,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="ضغط ماكنة جانبي"
        sets="3"
        reps="15,15,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="فلاي جانبي دامبلز"
        sets="3"
        reps="15,15,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="ماكنة خلفي"
        sets="3"
        reps="15,15,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="سحب ترابيس بار"
        sets="4"
        reps="12,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="هز ترابيس"
        sets="4"
        reps="15,15,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
    </ScrollView>
  );
};

const ThursdayComponentObesity = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>باي:</Text>
      <ExerciseCard
        exercise="باي تبادل واقف"
        sets="4"
        reps="12,10,8,6"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="باي لاري ضيق"
        sets="4"
        reps="12,10,8,6"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="باي همر تبادل جالس الكوع خلف الجسم"
        sets="4"
        reps="12,10,8,6"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <Text style={styles.daytitle}>تراي:</Text>

      <ExerciseCard
        exercise="تراي مستقيم كيبل"
        sets="4"
        reps="12,10,8,6"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="نراي دامبل جالس خلف الرأس"
        sets="4"
        reps="12,10,8,6"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="تراي كيبل مقلوب"
        sets="4"
        reps="12,10,8,6"
        rest="60"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
    </ScrollView>
  );
};

const FridayComponentObesity = () => {
  return (
    <View style={styles.restcontainer}>
      <Text style={styles.restDay}>راحة</Text>
    </View>
  );
};

const SaterDayComponentObesity = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>صدر:</Text>
      <ExerciseCard
        exercise="ضغط دمبلز مستوي"
        sets="4"
        reps="15,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="بنش علوي"
        sets="4"
        reps="15,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="تجميع سفلي"
        sets="4"
        reps="15,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="همر مستوي"
        sets="4"
        reps="15,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="تجميع ماكنة"
        sets="4"
        reps="15,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="همر علوي"
        sets="4"
        reps="15,12,10,8"
        rest="2.5-2 min"
        restSets="4-3 min"
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
  SundayComponentObesity,
  MondayComponentObesity,
  TuesdayComponentObesity,
  WednesdayComponentObesity,
  ThursdayComponentObesity,
  FridayComponentObesity,
  SaterDayComponentObesity,
};
