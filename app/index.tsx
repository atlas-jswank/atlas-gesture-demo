import { ToDoItem, ToDoItemSquare } from "@/components/ToDoItem";
import { useData } from "@/hooks/useData";
// import { data } from "@/lib/data";
import { FlatList, SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function Page() {
  const { data, loading, refresh, loadMore } = useData();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ToDoItem {...item} />}
          refreshing={loading}
          onRefresh={refresh}
          onEndReached={() => {
            loadMore();
          }}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
