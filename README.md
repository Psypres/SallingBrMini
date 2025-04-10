# 🎮 SallingMiniBr – React Native Playground

<div align="center">
  
[![Made with React Native](https://img.shields.io/badge/React_Native-0.79-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Platforms](https://img.shields.io/badge/Platforms-Android%20%7C%20iOS-green?style=for-the-badge&logo=android&logoColor=white)](https://reactnative.dev/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/)

A modern **React Native** app starter built with performance, structure, and storytelling in mind.  
Designed for prototyping consumer-facing experiences – starting with **Fætter BR** mini-games and toy browsing.

[Features](#-features) • [Getting Started](#%EF%B8%8F-getting-started) • [Documentation](#-documentation) • [Contributing](#-contributing)

<img src="https://via.placeholder.com/800x400.png?text=SallingMiniBr+App+Preview" alt="SallingMiniBr Preview" width="800"/>

</div>

---

## 🧠 Project Goals

- 🔁 Reusable components with atomic design principles
- 🎨 Design token-driven styling (Fætter BR color palette)
- 🧸 Gamified mascot experience (feed/play)
- 🚀 Quick iteration for new features and concepts
- 📱 Cross-platform from day one

---

## 🛠️ Stack

| Tech              | Description                          |
| ----------------- | ------------------------------------ |
| React Native 0.79 | Cross-platform core                  |
| TypeScript        | Strong typing and tooling            |
| NativeWind        | Tailwind-style utility classes       |
| React Navigation  | Navigation made simple               |
| JSON Mock Data    | Lightweight prototyping for toys     |
| Custom Hooks      | `useContrastColor` for accessibility |

---

## ⚙️ Getting Started

> Make sure you've set up your environment:  
> 👉 https://reactnative.dev/docs/environment-setup

### 📦 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 🚇 2. Start Metro bundler

```bash
npm start
# or
yarn start
```

### 📱 3. Run on Android

```bash
npm run android
# or
yarn android
```

> Emulator not working? Plug in a device with USB Debugging enabled!

---

## ✨ Features

- 🎯 Component-based architecture
- 🧩 Custom `ProductCard` with image, name & price
- 🐻 Interactive `MascotFeeder` component with feed & play mechanics
- 🍔 Hunger status bar with mood-based colors
- 🎮 Real-time state updates when feeding or playing with mascots
- 🎨 Dynamic contrast text with `useContrastColor()`
- 📂 Logical file structure with `/src`

---

## 📁 File Structure

```
/src
  /components     → Reusable UI (e.g. ProductCard, Button, MascotFeeder)
  /screens        → App screens (Home, Mascot)
  /styles         → Design tokens (colors, spacing)
  /utils          → Custom hooks (e.g. useContrastColor)
  /models         → Mascot logic and domain models
  /data           → Static toy data (toys.json)
```

---

## 🧪 Contrast Color Hook

Easily calculate whether to show dark or light text based on background:

```ts
const {getContrastColor} = useContrastColor();
const textColor = getContrastColor('#FFD700'); // → "#000000"
```

> Perfect for dynamic UI and accessibility-friendly color palettes.

---

## 🧸 MascotFeeder Component

Our new `MascotFeeder` component connects the visual `Mascot` with the data model to create an interactive experience:

```tsx
<MascotFeeder initialName="Bamseven" initialEmoji="🧸" />
```

Features:

- Real-time hunger status tracking with color-coded progress bar
- Interactive "Feed" and "Play" buttons using our custom Button component
- Dynamic mood changes based on hunger level
- Persistent state management for each mascot instance

---

## 🚀 What's Next?

- ⏳ Add backend/API integration (fallback to JSON mock)
- 🕹️ Enhance mascot mini-game with more interactions
- 📍 Add geolocation for "store check-in" system
- 🧠 Add animation & state management with context or Zustand

---

## 💬 Author

**Michael Hovgaard** – [github.com/Psypres](https://github.com/Psypres)  
Crafted with love, React, and a little ADHD-driven curiosity.

---

## 🏁 License

This project is open source and available under the MIT License.

---

## ✨ Inspiration

> "Sometimes the best user experience comes from someone who also designs worlds, not just UIs."  
> – You, probably.

---

## 📚 Documentation

| Resource          | Link                                  |
| ----------------- | ------------------------------------- |
| API Reference     | [View Docs](./docs/api.md)            |
| Component Library | [View Storybook](./docs/storybook.md) |
| Architecture      | [View Design](./docs/architecture.md) |
| Contributing      | [View Guidelines](./CONTRIBUTING.md)  |

---

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 💖 Support

Give a ⭐️ if this project helped you!

<a href="https://www.buymeacoffee.com/your-username" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="150">
</a>

---

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for more information on what has changed recently.
