import Movie from '../components/Movie';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import { useEffect, useState } from 'react';
import { getMovies } from '../lib/api/movies';

const HomeScreen = () => {
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


  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <ScrollView className="px-4">
          {movies.map((movie) => (
            <View className="my-4">
              <Movie key={movie.imdbID} data={movie} />
            </View>
          ))}
        </ScrollView>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;
