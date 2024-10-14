import { ReactNode } from "react";
import { Text, View } from "react-native";

export function StyledText({ children }: { children: ReactNode }) {
  return (
    <View
      style={{
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 24 }}>{children}</Text>
    </View>
  );
}
