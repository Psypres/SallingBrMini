// src/styles/tokens.ts
const tokens = {
  colors: {
    primary: "#D62828", // Rød – BR's hovedfarve
    primaryDark: "#A81E22", // Mørk rød
    accent: "#FFD700", // Gul – kontrast og energi
    blue: "#005BAC", // Sekundær (brug til info/links)
    background: "#FFFFFF", // Hvid – baggrund
    surface: "#F9F9F9", // Lille hvid – elementer
    text: "#1E1E1E", // Mørk tekst
    textMuted: "#666666", // Lille hvid – elementer
    border: "#E0E0E0"
  },
  spacing: {
    xs: 4, // 4px
    sm: 8, // 8px
    md: 16, // 16px
    lg: 24, // 24px
    xl: 32 // 32px
  },
  radius: {
    sm: 4, // 4px
    md: 8, // 8px
    lg: 16, // 16px
    pill: 999 // 999px
  },
  fontSize: {
    sm: 14, // 14px
    md: 16, // 16px
    lg: 20, // 20px
    xl: 28 // 28px
  },
  fontWeight: {
    regular: "400", // 400
    bold: "700" // 700
  },
  shadow: {
    default: {
      shadowColor: "#000", // Sort  
      shadowOffset: { width: 0, height: 2 }, // 2px
      shadowOpacity: 0.1, // 10%
      shadowRadius: 4, // 4px
      elevation: 2 // 2px
    }
  }
}

export default tokens;
