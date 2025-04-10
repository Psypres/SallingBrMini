import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MascotProps {
  name?: string;
  emoji?: string;
}

export class Mascot extends Component<MascotProps> {
  render() {
    const { name = 'Fætter BR', emoji = '🧸' } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 16,
  },
  emoji: {
    fontSize: 100,
  },
  name: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
});
