import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

export const LoadingScreen = () => {
  return (
    <Container>
      <ActivityIndicator size={56} color="#d2d2d2" />
    </Container>
  );
};
