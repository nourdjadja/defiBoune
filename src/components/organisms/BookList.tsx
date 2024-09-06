import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import BookItem from '../molecules/BookItem';
import Button from '../atoms/Button';
import { fetchBooks } from '../../services/api';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: {
      thumbnail: string;
    };
  };
}

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchBooks(page).then((data) => {
      setBooks((prevBooks) => [...prevBooks, ...data]);
    });
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const renderItem = ({ item }: { item: Book }) => (
    <BookItem
      title={item.volumeInfo.title}
      author={item.volumeInfo.authors?.join(', ') || 'Unknown'}
      imageUrl={item.volumeInfo.imageLinks?.thumbnail || ''}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button title="Charger plus" onPress={loadMore} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BookList;
