import { formatCurrency } from "@/lib/utils";
import { Image, Text, View } from "react-native";

/**
 * Render a compact card showing an upcoming subscription's icon, formatted price, days-left label, and name.
 *
 * @param name - Subscription display name
 * @param price - Numeric subscription price
 * @param daysLeft - Days remaining until the next billing; when greater than 1 shows "`{n} days left`", otherwise shows "Last day"
 * @param icon - Image source for the subscription icon
 * @param currency - Currency code used by `formatCurrency` to format `price`
 * @returns A React element representing the upcoming subscription card
 */
export default function UpcomingSubscriptionCard({
  name,
  price,
  daysLeft,
  icon,
  currency,
}: UpcomingSubscription) {
  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <Image source={icon} className="upcoming-icon" />
        <View>
          <Text className="upcoming-price">
            {formatCurrency(price, currency)}
          </Text>
          <Text className="upcoming-meta" numberOfLines={1}>
            {daysLeft > 1 ? `${daysLeft} days left` : "Last day"}
          </Text>
        </View>
      </View>
      <Text className="upcoming-name" numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
}
