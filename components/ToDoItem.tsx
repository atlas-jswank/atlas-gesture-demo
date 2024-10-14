import { Alert, Text, View } from "react-native";
import { StyledText } from "./StyledText";
import {
  Gesture,
  GestureDetector,
  Swipeable,
} from "react-native-gesture-handler";
import { Action } from "./Action ";

export const ToDoItem = ({ text }: { text: any }) => {
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      Alert.alert("Double tapped: " + text);
    })
    .runOnJS(true);

  const longPress = Gesture.LongPress()
    .onStart(() => {
      Alert.alert("Long pressed: " + text);
    })
    .runOnJS(true);
  return (
    <Swipeable
      renderLeftActions={() => <Action text="Complete" color="green" />}
      renderRightActions={() => <Action text="Delete" color="red" />}
      onSwipeableOpen={(direction) => {
        direction === "left"
          ? Alert.alert("Swipe from left")
          : Alert.alert("Swipe from right");
      }}
    >
      <GestureDetector gesture={Gesture.Exclusive(doubleTap, longPress)}>
        <StyledText>{text}</StyledText>
      </GestureDetector>
    </Swipeable>
  );
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
