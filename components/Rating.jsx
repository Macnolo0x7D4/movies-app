import { View, Text } from "react-native";

const Rating = ({ source, value }) => {
  let bgClass = 'bg-[#F5C518]';
  let textClass = 'text-black';

  switch (source) {
    case "Rotten Tomatoes":
      bgClass = 'bg-[#FA320A]'
      textClass = 'text-white'
      break;
    case "Metacritic":
      bgClass = 'bg-black'
      textClass = 'text-white'
      break;
  }

  return (
    <View className={"mt-3 px-4 py-2 rounded-md flex-1 flex-row justify-between " + bgClass}>
      <Text className={"font-bold " + textClass}>{source}</Text>
      <Text className={textClass}>{value}</Text>
    </View>
  )
}

export default Rating;
