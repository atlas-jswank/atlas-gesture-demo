import { Text, View } from "react-native";
import { StyledText } from "./StyledText";

export const ToDoItem = ({ text }: { text: any }) => {
  return <StyledText>{text}</StyledText>;
};

export const ToDoItemSquare = ({ text }: { text: any }) => {
  return (
    <View
      style={{
        backgroundColor: "#333",
        padding: 14,
        margin: 8,
        height: 75,
        width: 75,
        borderRadius: 10,
      }}
    >
      <Text style={{ color: "white" }}>{text}</Text>
    </View>
  );
};
