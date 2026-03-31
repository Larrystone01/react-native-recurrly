import { Text, TouchableOpacity, View } from "react-native";

/**
 * Renders a list heading with a title and a "View all" action.
 *
 * @param title - The heading text to display.
 * @returns A React element containing the heading and an action button.
 */
export default function ListHeading({ title }: ListHeadingProps) {
  return (
    <View className="list-head">
      <Text className="list-title">{title}</Text>
      <TouchableOpacity className="list-action">
        <Text className="list-action-text">View all</Text>
      </TouchableOpacity>
    </View>
  );
}
