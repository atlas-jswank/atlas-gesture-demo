import { ToDoItem } from "@/components/ToDoItem";
import { data } from "@/lib/data";
import { View, StyleSheet } from "react-native";

export default function Page() {
  return (
    <>
      <View style={styles.container}>
        {data.map((item) => (
          <ToDoItem key={item.id} {...item} />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
