import React from 'react';
import { Image as RNImage, StyleSheet } from 'react-native';

interface ImageProps {
  source: { uri: string };
  style?: any;
}

const Image: React.FC<ImageProps> = ({ source, style }) => {
  return <RNImage source={source} style={[styles.image, style]} />;
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export default Image;
