import MoviePoster from "../components/MoviePoster";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, ActivityIndicator } from "react-native";
import { getMovies } from "../lib/api/movies";
import { useEffect, useState } from "react";

const GalleryScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    try {
      setMovies(await getMovies());
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
          {movies.map((movie) => (
            <MoviePoster key={movie.imdbID} image={movie.Poster} />
          ))}
        </ScrollView>
      )}
      <StatusBar style="auto" />
    </View>
  );
};

export default GalleryScreen;
