// src/models/Mascot.ts

export default class Mascot {
  name: string
  hunger: number
  mood: string
  

  constructor(name: string) {
    this.name = name
    this.hunger = 100
    this.mood = 'Happy'
  }

  feed(amount: number = 10) {
    this.hunger = Math.min(100, this.hunger + amount)
    this.updateMood()
  }

  play() {
    this.hunger = Math.max(0, this.hunger - 5)
    this.updateMood()
  }

  updateMood() {
    if (this.hunger > 80) {
      this.mood = 'Happy'
    } else if (this.hunger > 40) {
      this.mood = 'Hungry'
    } else {
      this.mood = 'Sad'
    }
  }

  status(): string {
    return `${this.name} is ${this.mood} (${this.hunger}% full)`
  }
}
