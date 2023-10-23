import MovieDetail from "../components/MovieDetail";
import MovieList from "../components/MovieList";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movie List" component={MovieList} />
      <Stack.Screen
        name="Movie Detail"
        component={MovieDetail}
        options={({ route }) => ({
          title: route.params.movieTitle,
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
