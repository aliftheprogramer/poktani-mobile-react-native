// ...existing code...
import { OnboardingFooter } from "@/src/components/OnboardingFooter";
import { StyleSheet, View } from "react-native";
import { OnboardingHeader } from "../src/components/OnboardingHeader";
// ...existing code...


export default function Index() {
  return (
      <View style={styles.container}>
          <OnboardingHeader />
          <OnboardingFooter/>
      </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#163020",
    alignItems: "center",
    justifyContent: "space-around",
  }
})