import MoviePoster from '../components/MoviePoster'
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text } from 'react-native';
import { getMovies } from '../lib/api/movies';
import { useEffect, useState } from 'react';

const GalleryScreen = () => {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    getMovies().then((movies) => setMovies(movies))
  })

  return (
    <View>
      <ScrollView>
        {!!movies ? movies.map((movie) => (
          <MoviePoster key={movie.imdbID} image={movie.Poster} />
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

export default GalleryScreen;
