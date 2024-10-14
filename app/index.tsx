import { ToDoItem } from "@/components/ToDoItem";
import { data } from "@/lib/data";
import { SafeAreaView, StyleSheet } from "react-native";

export default function Page() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        {data.map((item) => (
          <ToDoItem key={item.id} {...item} />
        ))}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
