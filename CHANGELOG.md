# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2023-10-18

### Added

- Created new `MascotFeeder` component that integrates the Button component with the Mascot model
- Added hunger status bar with color indicators based on mood (green, yellow, red)
- Implemented feed and play mechanics with real-time UI updates
- Each mascot instance now maintains its own state
- Dynamic mood system based on hunger levels

### Fixed

- Resolved maximum call stack size exceeded error in Storybook configuration
- Fixed case sensitivity issues in file imports
- Temporarily disabled Storybook to ensure stable application performance

### Changed

- Updated HomeScreen to use the new MascotFeeder component
- Enhanced the project README with details about the new MascotFeeder component
- Improved UI with consistent spacing and styling based on design tokens

### Coming Soon

- Additional mascot interactions
- Saving mascot state between app sessions
- More animations and visual feedback
- Store check-in system integration
