import { Text, View } from "react-native";

export const Action = ({
  text,
  color,
}: {
  text: string;
  color: "red" | "green";
}) => {
  return (
    <View style={{ flex: 0, backgroundColor: color, justifyContent: "center" }}>
      <Text
        style={{
          color: "#000503",
          paddingHorizontal: 10,
          fontWeight: "600",
          padding: 20,
        }}
      >
        {text}
      </Text>
    </View>
  );
};
