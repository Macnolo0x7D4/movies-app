import MoviePreview from "../components/MoviePreview";
import { getMovies } from "../lib/api/movies";
import { useEffect, useState } from "react";
import {
  ScrollView,
  ActivityIndicator,
  View,
  TouchableOpacity,
} from "react-native";

const MovieList = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    try {
      setMovies(await getMovies("star wars"));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const goToDetail = (movie) => {
    navigation.push("Movie Detail", {
      movieTitle: movie.Title,
      movieId: movie.imdbID,
    });
  };

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <View>
          <ScrollView className="px-4">
            {movies.map((movie) => (
              <TouchableOpacity
                key={movie.imdbID}
                onPress={() => goToDetail(movie)}
                className="my-4"
              >
                <MoviePreview data={movie} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default MovieList;
