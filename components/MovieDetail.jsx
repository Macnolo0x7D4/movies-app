import Rating from "./Rating";
import { Text, View, Image, ScrollView, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { getMovie } from "../lib/api/movies";

const MovieDetail = ({ route }) => {
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null)

  const getData = async () => {
    try {
      setMovie(await getMovie(route.params.movieId))
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <ScrollView>
          <View className="w-full">
            <Image className="h-52 object-none object-center" source={{ uri: movie.Poster }} />
          </View>
          <View className="py-6 px-4">
            <View>
              <Text className="font-medium text-3xl">{movie.Title}</Text>
              <Text className="mt-2">{movie.Year} | {movie.Rated} | {movie.Runtime}</Text>
            </View>
            <View className="mt-6">
              <Text>
                <Text className="font-bold">Director: </Text>{movie.Director}
              </Text>
              <Text className="">
                <Text className="font-bold">Actors: </Text>{movie.Actors}
              </Text>
            </View>
            <View className="mt-6">
              <Text>{movie.Plot}</Text>
            </View>
            {
              movie.Awards && (
                <View className="mt-6">
                  <Text className="font-bold text-yellow-600">{movie.Awards}</Text>
                </View>
              )
            }
            <View className="mt-6">
              <Text className="font-bold">Rating:</Text>
              {movie.Ratings?.map((rating, i) => (
                <Rating key={i} source={rating.Source} value={rating.Value} />
              ))}
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  )
}

export default MovieDetail;
