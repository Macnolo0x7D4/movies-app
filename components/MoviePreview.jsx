import { Text, View, Image } from "react-native";
import { capitalizeString } from "../utils/utils";

const Movie = ({ data: { Title, Year, Type, Poster } }) => {
  return (
    <View className="w-full flex-1 flex-row gap-4">
      <View>
        <Image
          className="rounded-md"
          source={{ width: 96, height: 96, uri: Poster }}
        />
      </View>
      <View className="flex-1 overflow-hidden">
        <Text className="text-xl leading-5 whitespace-break-spaces font-bold">
          {Title}
        </Text>
        <Text className="pt-2">
          {Year} | {capitalizeString(Type ?? "N/A")}
        </Text>
      </View>
    </View>
  );
};

export default Movie;
