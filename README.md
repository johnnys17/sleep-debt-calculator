# Sleep Debt Calculator

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-blue)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![Node.js](https://img.shields.io/badge/Node.js-14%2B-green)](https://nodejs.org/)

A beginner-friendly JavaScript exercise to calculate sleep debt over a week. It prompts for your actual sleep hours each day (Monday-Sunday), compares against an ideal amount (default: 8 hours/night), and outputs the total debt or surplus. Perfect for practicing functions, loops, conditionals, and console I/O.

This is based on the classic freeCodeCamp "Sleep Debt Calculator" challenge—clean, modular code with room for extensions like data persistence or a web UI.

## Features
- **Daily Input**: User enters sleep hours for each day of the week via console prompts.
- **Debt Calculation**: Sums actual vs. ideal hours (56 total for 7x8) and reports over/under.
- **User-Friendly Output**: Personalized messages like "You got 5 hours more sleep this week. Sweet!" or "You have 10 hours of sleep debt. Catch up!".
- **Modular Design**: Separate functions for getting sleep data, summing totals, and computing debt.
- **Extensible**: Easy to add averages, visualizations (e.g., via Chart.js), or save to a file.

## Tech Stack
- **Language**: JavaScript (ES6+)
- **Runtime**: Node.js (for console execution)
- **No Dependencies**: Pure vanilla JS—runs anywhere!
