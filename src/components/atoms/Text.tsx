import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

interface TextProps {
  children: React.ReactNode;
  style?: any;
}

const Text: React.FC<TextProps> = ({ children, style }) => {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Text;
