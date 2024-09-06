import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BookList from '../components/organisms/BookList';

const ExploreBooksScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorer les Livres</Text>
      <BookList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    margin: 20,
  },
});

export default ExploreBooksScreen;
