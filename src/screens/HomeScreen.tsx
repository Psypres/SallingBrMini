import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import MascotFeeder from '../components/mascot/MascotFeeder';
import tokens from '../styles/tokens';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Velkommen til Fætter BR App 🎉</Text>

      <MascotFeeder initialName="Bamseven" initialEmoji="🧸" />
      <MascotFeeder initialName="Robotven" initialEmoji="🤖" />
      <MascotFeeder initialName="Dino" initialEmoji="🦖" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: tokens.spacing.xl,
    paddingHorizontal: tokens.spacing.md,
    alignItems: 'center',
    backgroundColor: tokens.colors.surface,
  },
  title: {
    fontSize: tokens.fontSize.xl,
    fontWeight: tokens.fontWeight.bold as any,
    marginBottom: tokens.spacing.lg,
    textAlign: 'center',
    color: tokens.colors.primary,
  },
});

export default HomeScreen;
