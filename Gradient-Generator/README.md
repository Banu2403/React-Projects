# 🎨 Gradient Generator

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Chakra UI](https://img.shields.io/badge/Chakra_UI-2.8-319795?logo=chakraui&logoColor=white)](https://chakra-ui.com/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/gradient-generator-it-inno/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A **React + Vite** web application that lets you generate linear CSS gradients interactively.  
Designed for **frontend developers** and **UI engineers** who want an elegant, fast, and modular tool for creating gradient-based designs.

---

## 🧭 Overview

The **Gradient Generator** is a small yet extensible project showcasing:
- Modern **React architecture** (Hooks + reusable components)
- **Instant gradient rendering**
- **Live CSS export**
- **Type-safe styling flow** using Chakra UI

It’s both a developer tool and a practical example of clean, composable frontend design.

---

## 🚀 Live Demo

👉 **[View Demo on Netlify](https://gradient-generator-it-inno.netlify.app/)**

---

## 🧩 Features

✅ Real-time gradient preview  
✅ Color pickers for two-color gradients  
✅ Direction selection (to top, left, right, diagonal, etc.)  
✅ One-click CSS copy functionality  
✅ Responsive and accessible design via Chakra UI  
✅ Modular, component-driven architecture  

---

## 🧱 Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | [React 18](https://react.dev/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| UI Framework | [Chakra UI](https://chakra-ui.com/) |
| Styling | Custom CSS |


---

## 🧠 Architecture

- **ColorPicker**: Handles user input for primary and secondary colors.  
- **DirectionSelector**: Dropdown for gradient direction.  
- **GradientPreview**: Renders the visual gradient dynamically.  
- **App.jsx**: Orchestrates state management and component communication.

### State Flow
> `App.jsx` maintains `color1`, `color2`, and `direction` state using React Hooks.  
> Props are passed down to stateless components for rendering and user interaction.

---

## 📁 Project Structure
```
Gradient-Generator/
├── src/
│ ├── components/
│ │ ├── ColorPicker.jsx
│ │ ├── DirectionSelector.jsx
│ │ └── GradientPreview.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── public/
├── package.json
└── README.md
```
## ⚖️ License

Licensed under the **MIT License** © 2025 **[Isgandarli Banu](https://github.com/Banu2403)**

---


MIT License

Copyright (c) 2025 Gözəlim Banu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

