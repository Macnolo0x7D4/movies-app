import { TouchableOpacity } from 'react-native-gesture-handler';
import Movie from '../components/Movie';
import { getMovies } from '../lib/api/movies';
import { useEffect, useState } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';

const MovieList = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    try {
      setMovies(await getMovies())
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
    navigation.push('Movie Detail', { movieTitle: movie.Title, movieId: movie.imdbID })
  }

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <ScrollView className="px-4">
          {movies.map((movie) => (
            <TouchableOpacity onPress={() => goToDetail(movie)} className="my-4">
              <Movie key={movie.imdbID} data={movie} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  )
}

export default MovieList;
