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

const SundayComponentUnder = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>صدر:</Text>
      <ExerciseCard
        exercise="بنش علوي"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="تجميع كيبل علوي"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="بنش مستوي"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="تجميع مستوي ماكنه"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="ضغط دامبلز سفلي"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="تجميع ماكنه سفلي"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <Text style={styles.daytitle}>تراي:</Text>
      <ExerciseCard
        exercise="تراي مستقيم كيبل +تراي كيبل SUPER"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
    </ScrollView>
  );
};

const MondayComponentUnder = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>كتاف:</Text>
      <ExerciseCard
        exercise="ضغط دامبلز جانبي"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="فلاي بار امامي"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="فلاي دامبل جانبي"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="نشر دامبلز خلفي"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="ماكنة خلفي"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="هزترابيس + سحب ترابيس بار"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
    </ScrollView>
  );
};

const TuesdayComponentUnder = () => {
  return (
    <View style={styles.restcontainer}>
      <Text style={styles.restDay}>راحة</Text>
    </View>
  );
};

const WednesdayComponentUnder = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>ظهر:</Text>
      <ExerciseCard
        exercise="سحب مستقيم واسع من الاعلى"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="منشار كيبل منحني"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="بار عكسي T"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="سحب قبضة من الاعلى جالس"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="سحب مستقيم واسع"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="لاس كيبل"
        sets="4"
        reps="15,15,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <Text style={styles.daytitle}>باي:</Text>
      <ExerciseCard
        exercise="باي دامبلز تبادل"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="باي لاري متوسط + باي حبل كيبل SUPERI"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
    </ScrollView>
  );
};

const ThursdayComponentUnder = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.daytitle}>ارجل:</Text>
      <ExerciseCard
        exercise="ماكنة امامي"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="سكوات بار"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="دفاش همر"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="ارجل خلفي"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="سومو سكوات"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="خوارج ماكنة"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <ExerciseCard
        exercise="بطات بار واقف"
        sets="4"
        reps="15,12,12,10"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
      <Text style={styles.daytitle}>معدة:</Text>
      <ExerciseCard
        exercise="معدة"
        sets="4"
        reps="15,15,15,15"
        rest="2.5-2 min"
        restSets="4-3 min"
        image="https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/young-man-doing-barbell-lunges-6876360-5625157.gif?alt=media&token=cc05589e-40a2-4019-a0ca-de3e118e66fb"
      />
    </ScrollView>
  );
};

const FridayComponentUnder = () => {
  return (
    <View style={styles.restcontainer}>
      <Text style={styles.restDay}>راحة</Text>
    </View>
  );
};

const SaterDayComponentUnder = () => {
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
  SundayComponentUnder,
  MondayComponentUnder,
  TuesdayComponentUnder,
  WednesdayComponentUnder,
  ThursdayComponentUnder,
  FridayComponentUnder,
  SaterDayComponentUnder
};
