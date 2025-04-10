import React from 'react';
import { View } from 'react-native';
import Button from '../../src/components/UI/Button/button.tsx';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = () => (
  <View style={{ padding: 20 }}>
    <Button title="Feed me 🐷" onPress={() => alert('Yum!')} />
  </View>
);

export const Disabled = () => (
  <View style={{ padding: 20 }}>
    <Button title="Not available" disabled />
  </View>
);
