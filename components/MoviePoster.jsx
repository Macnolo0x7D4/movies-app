const { View, Image } = require("react-native");

const MoviePoster = ({ image }) => {
  return (
    <View className="w-full px-8 my-4">
      <Image className="w-full h-96 rounded-md" source={{ uri: image }} />
    </View>
  );
};

export default MoviePoster;
