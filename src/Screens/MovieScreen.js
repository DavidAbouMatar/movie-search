import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";
// import { useSelector } from 'react-redux';
import { store } from "../Redux/store";
import { login } from "../Redux/slices/authSlice";
import {
  Searchbar,
  List,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph
} from "react-native-paper";
// import { ListItem, SearchBar, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MovieScreen = (props) => {
  const [movies, setMovies] = useState("");
  useEffect(() => {
    const APIurl =
      "http://www.omdbapi.com/?i=" + props.route.params.uid + "&apikey=5e23775";

    axios({
      method: "get",
      url: APIurl
    }).then((response) => {
      setMovies(response.data);
    });
    console.log(movies);
  }, [props.route.params.uid]);

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
    console.log(movies);
  };

  return (
    <View style={styles.container}>
      {/* <ListItem bottomDivider>
              <Avatar source={{ uri: item.Poster }} rounded />
              <ListItem.Content>
                <ListItem.Title>{`${item.Title} ${item.last_name}`}</ListItem.Title>
                <ListItem.Subtitle>{item.Title}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem> */}

      <Card>
        <Card.Cover source={{ uri: movies.Poster }} />
        {/* <Card.Title title={movies.title}  /> */}
        <Card.Title title={movies.Title} />
        <Card.Actions>
          <Paragraph style={styles.Paragraph}>{movies.Year}</Paragraph>
          <Paragraph style={styles.Paragraph}>{movies.Genre}</Paragraph>
          <Paragraph style={styles.Paragraph}>{movies.Runtime}</Paragraph>
          {/* <Title>imdb Rating:</Title> */}
          {/* <Title>{movies.imdbRating}</Title> */}
        </Card.Actions>

        <Card.Content>
          <Paragraph>{movies.Plot}</Paragraph>
        </Card.Content>

        <Card.Actions>
          <Paragraph style={styles.title}>Release date:</Paragraph>
          <Paragraph style={styles.titleInfo}>{movies.Released}</Paragraph>
        </Card.Actions>

        <Card.Actions>
          <Paragraph style={styles.title}>Director:</Paragraph>
          <Paragraph style={styles.titleInfo}>{movies.Director}</Paragraph>
        </Card.Actions>

        <Card.Actions>
          <Paragraph style={styles.title}>Box office:</Paragraph>
          <Paragraph style={styles.titleInfo}>{movies.BoxOffice}</Paragraph>
        </Card.Actions>

        <Card.Actions>
          <Paragraph style={styles.title}>Story by:</Paragraph>
          <Paragraph style={styles.titleInfo}>{movies.Writer}</Paragraph>
        </Card.Actions>

        <Card.Actions>
          <Paragraph style={styles.title}>Actors:</Paragraph>
          <Paragraph style={styles.titleInfo}>{movies.Actors}</Paragraph>
        </Card.Actions>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  //   card: {

  //     backgroundColor: "#223343"
  //   },
  Paragraph: {
    padding: 15
  },
  title: {
    fontWeight: "bold"
  },
  titleInfo: {
    paddingLeft: 3
  }
});

export default MovieScreen;
