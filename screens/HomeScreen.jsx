import Movie from '../components/Movie';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { getMovies } from '../lib/api/movies';

const HomeScreen = () => {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    getMovies().then((movies) => setMovies(movies))
  })

  return (
    <View>
      <ScrollView className="flex-1 w-full px-4 gap-2">
        {!!movies ? movies.map((movie) => (
          <Movie key={movie.imdbID} data={movie} />
        )) : (
          <View className="flex items-center justify-center">
            <Text>Cargando...</Text>
          </View>
        )}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;
