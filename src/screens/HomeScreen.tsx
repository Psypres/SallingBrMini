import React from 'react';
import { Text, StyleSheet, ScrollView, View, ActivityIndicator } from 'react-native';
import MascotFeeder from '../components/mascot/MascotFeeder';
import ToyCard from '../components/UI/toys/cards';
import tokens from '../styles/tokens';
import { useToys } from '../hooks/useToys';

const HomeScreen = () => {
  // Use the custom hook to handle all data fetching logic
  const { toys, loading, error } = useToys();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Velkommen til Fætter BR App 🎉</Text>

      <View style={styles.mascotsContainer}>
        <MascotFeeder initialName="Bamseven" initialEmoji="🧸" />
        <MascotFeeder initialName="Robotven" initialEmoji="🤖" />
        <MascotFeeder initialName="Dino" initialEmoji="🦖" />
      </View>
      
      <Text style={styles.sectionTitle}>Vores legetøj</Text>
      
      {loading ? (
        <ActivityIndicator size="large" color={tokens.colors.primary} style={styles.loader} />
      ) : error ? (
        <Text style={styles.errorMessage}>{error}</Text>
      ) : null}
      
      <View style={styles.toysContainer}>
        {toys.map(toy => (
          <View key={toy.id} style={styles.toyCard}>
            <ToyCard
              id={toy.id}
              name={toy.name}
              emoji={toy.emoji}
              price={toy.price}
              category={toy.category}
              rarity={toy.rarity}
              onPress={() => console.log(`Selected: ${toy.name}`)}
            />
          </View>
        ))}
      </View>
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
  sectionTitle: {
    fontSize: tokens.fontSize.lg,
    fontWeight: tokens.fontWeight.bold as any,
    marginTop: tokens.spacing.lg,
    marginBottom: tokens.spacing.md,
    alignSelf: 'flex-start',
    color: tokens.colors.text,
  },
  mascotsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    flexWrap: 'wrap',
  },
  toysContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  toyCard: {
    width: '48%',
    marginBottom: tokens.spacing.md,
  },
  loader: {
    marginVertical: tokens.spacing.lg,
  },
  errorMessage: {
    color: '#E57373',
    marginBottom: tokens.spacing.md,
    fontSize: tokens.fontSize.sm,
  },
});

export default HomeScreen;
