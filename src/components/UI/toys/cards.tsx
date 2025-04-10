import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import tokens from '../../../styles/tokens'

interface ToyCardProps {
  id: string
  name: string
  emoji: string
  price: number
  category: string
  rarity: string
  onPress?: () => void
}

const ToyCard = ({ id, name, emoji, price, category, rarity, onPress }: ToyCardProps) => {
  const rarityColors: Record<string, string> = {
    common: tokens.colors.textMuted,
    rare: '#6495ED',
    legendary: tokens.colors.accent
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.details}>
        <Text style={styles.price}>{price} kr</Text>
        <View style={[styles.rarityBadge, { backgroundColor: rarityColors[rarity] || tokens.colors.textMuted }]}>
          <Text style={styles.rarityText}>{rarity}</Text>
        </View>
      </View>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: tokens.colors.surface,
    borderRadius: tokens.radius.md,
    padding: tokens.spacing.md,
    marginBottom: tokens.spacing.sm,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    width: '100%',
  },
  emoji: {
    fontSize: 36,
    marginBottom: tokens.spacing.sm,
  },
  name: {
    fontSize: tokens.fontSize.lg,
    fontWeight: tokens.fontWeight.bold as any,
    marginBottom: tokens.spacing.xs,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: tokens.spacing.xs,
  },
  price: {
    fontSize: tokens.fontSize.md,
    fontWeight: tokens.fontWeight.bold as any,
    color: tokens.colors.primary,
  },
  rarityBadge: {
    paddingHorizontal: tokens.spacing.sm,
    paddingVertical: tokens.spacing.xs / 2,
    borderRadius: tokens.radius.sm,
  },
  rarityText: {
    fontSize: tokens.fontSize.sm,
    color: '#fff',
    fontWeight: tokens.fontWeight.bold as any,
  },
  category: {
    fontSize: tokens.fontSize.sm,
    color: tokens.colors.textMuted,
    textTransform: 'capitalize',
  },
})

export default ToyCard