import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Searchbar, Card, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";



const HomeScreen = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState("");

  const navigation = useNavigation();

  const updateSearch = (search) => {
    setSearch(search);

    const APIurl = "http://www.omdbapi.com/?s=" + search + "&apikey=5e23775";

    axios({
      method: "get",
      url: APIurl
    }).then((response) => {
      setMovies(response.data);
    });

  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search for a movie ..."
        onChangeText={(search) => updateSearch(search)}
        value={search}
      />

      <FlatList
        numColumns={1}
        horizantal={false}
        data={movies.Search}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MovieScreen", { uid: item.imdbID })
            }
          >
            <Card style={styles.card}>
              <Card.Content>
                <Title>{item.Title}</Title>
                <Card.Cover source={{ uri: item.Poster }} />
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  tittle: {
    Color: "white"
  }
});

export default HomeScreen;
