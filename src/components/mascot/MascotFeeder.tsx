import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Mascot } from './Mascot';
import Button from '../UI/Button/button';
import MascotModel from '../../models/mascot';
import tokens from '../../styles/tokens';

interface MascotFeederProps {
  initialName?: string;
  initialEmoji?: string;
}

const MascotFeeder: React.FC<MascotFeederProps> = ({
  initialName = 'Fætter BR',
  initialEmoji = '🧸'
}) => {
  // Create a mascot model instance
  const [mascot] = useState(() => new MascotModel(initialName));
  
  // Track rendering updates
  const [update, setUpdate] = useState(0);
  
  // Handler for feeding the mascot
  const handleFeed = () => {
    mascot.feed(15); // Feed by 15 units
    setUpdate(prev => prev + 1); // Force re-render
  };
  
  // Handler for playing with the mascot
  const handlePlay = () => {
    mascot.play();
    setUpdate(prev => prev + 1); // Force re-render
  };
  
  return (
    <View style={styles.container}>
      <Mascot name={mascot.name} emoji={initialEmoji} />
      
      <View style={styles.statsContainer}>
        <Text style={styles.statusText}>{mascot.status()}</Text>
        <View style={styles.hungerBar}>
          <View 
            style={[
              styles.hungerFill, 
              { width: `${mascot.hunger}%` },
              mascot.mood === 'Happy' ? styles.happyColor : 
              mascot.mood === 'Hungry' ? styles.hungryColor : styles.sadColor
            ]} 
          />
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button 
          title={`Feed ${mascot.name} 🍔`} 
          onPress={handleFeed} 
          style={styles.button}
        />
        <Button 
          title={`Play with ${mascot.name} 🎮`} 
          onPress={handlePlay} 
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: tokens.spacing.lg,
  },
  statsContainer: {
    width: '80%',
    marginTop: tokens.spacing.md,
    marginBottom: tokens.spacing.lg,
  },
  statusText: {
    fontSize: tokens.fontSize.md,
    textAlign: 'center',
    marginBottom: tokens.spacing.sm,
    fontWeight: tokens.fontWeight.bold as any,
  },
  hungerBar: {
    height: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: tokens.radius.pill,
    overflow: 'hidden',
  },
  hungerFill: {
    height: '100%',
  },
  happyColor: {
    backgroundColor: '#4CAF50', // Green for happy
  },
  hungryColor: {
    backgroundColor: '#FFC107', // Yellow/amber for hungry
  },
  sadColor: {
    backgroundColor: '#F44336', // Red for sad
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: tokens.spacing.md,
  },
  button: {
    marginHorizontal: tokens.spacing.sm,
  }
});

export default MascotFeeder; 