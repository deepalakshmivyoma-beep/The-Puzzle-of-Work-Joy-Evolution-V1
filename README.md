# 🎯 Vyoma प्रश्नोत्तरी (Prashnottari)

A beautiful, culturally authentic Sanskrit quiz application built with React and TypeScript, featuring the elegant Digital Sanskrit theme.

## ✨ Features

### 🎨 **Digital Sanskrit Theme**
- **Authentic Design**: Inspired by [Digital Sanskrit](https://digitalsanskrit.com/)
- **Vyoma Logo**: Official branding throughout the app
- **Traditional Colors**: Deep navy, rich brown, traditional gold, and Sanskrit pink
- **Devanagari Typography**: Perfect Sanskrit script rendering with Noto Sans Devanagari

### 📚 **प्रश्नोत्तरी (Prashnottari) Experience**
- **Sanskrit Terminology**: Authentic Sanskrit words throughout the interface
- **Cultural Respect**: Honoring Sanskrit tradition and education
- **Educational Focus**: Designed for Sanskrit language learning
- **Professional Quality**: Academic-grade presentation

### 🏗️ **Technical Excellence**
- **React + TypeScript**: Modern, type-safe development
- **Local Storage**: No external dependencies, all data stored locally
- **Responsive Design**: Perfect on all devices
- **Accessibility**: WCAG compliant design
- **Performance**: Optimized loading and smooth animations

## 🎯 Available प्रश्नोत्तरी Themes

### 📖 **Sanskrit Quizzes**
1. **रामायण** (Ramayana) - Questions from Maharshi Valmiki's Ramayana
2. **महाभारतम्** (Mahabharata) - Questions from Maharshi Vedavyasa's Mahabharata  
3. **संस्कृत व्याकरणम्** (Sanskrit Grammar) - Fundamental Sanskrit grammar questions

## 🚀 Quick Start

### **Prerequisites**
- Node.js 16+ 
- npm or yarn

### **Installation**
```bash
# Clone the repository
git clone <repository-url>
cd vyoma-online-quiz

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Usage**
1. **Login**: Enter your email (no password required)
2. **Choose Theme**: Select from available प्रश्नोत्तरी themes
3. **Take Quiz**: Answer questions with beautiful Sanskrit interface
4. **View Results**: See your score and review answers
5. **Track Progress**: View your quiz history

## 🎨 **User Interface**

### **Login Page**
- Vyoma logo with "प्रश्नोत्तरी" title
- Email-only authentication
- Traditional Indian styling
- Glass-morphism design

### **Dashboard**
- Available प्रश्नोत्तरी themes
- Beautiful theme cards with descriptions
- Sanskrit quiz names in Devanagari script
- Progress tracking and history

### **Quiz Interface**
- Rich question display
- Multiple choice options
- Progress indicators
- Smooth navigation

### **Results Page**
- Score visualization with circular progress
- Answer review with color coding
- Performance feedback
- Retake and navigation options

## 🏗️ **Project Structure**

```
src/
├── components/
│   ├── Dashboard.tsx + .css     # Main dashboard
│   ├── Login.tsx + .css        # Authentication
│   ├── Quiz.tsx + .css         # Quiz interface
│   └── Results.tsx + .css      # Results display
├── data/questions/
│   ├── index.ts                # Quiz registry
│   ├── ramayana.json          # Ramayana questions
│   ├── mahabharata.json       # Mahabharata questions
│   └── sanskrit-grammar.json  # Grammar questions
├── utils/
│   └── localStorage.ts         # Score management
├── App.tsx + .css             # Main app
└── main.tsx                   # Entry point
```

## 🎯 **Key Features**

### **Cultural Authenticity**
- **Devanagari Script**: Perfect Sanskrit rendering
- **Sanskrit Terminology**: प्रश्नोत्तरी, प्रारंभ करें, समाप्त करें
- **Traditional Colors**: Authentic Indian palette
- **Educational Context**: Suitable for Sanskrit studies

### **User Experience**
- **Easy Login**: Email-only authentication
- **Intuitive Navigation**: Clear interface flow
- **Progress Tracking**: Score history and attempts
- **Responsive Design**: Works perfectly on all devices

### **Technical Excellence**
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized loading and rendering
- **Accessibility**: WCAG compliant design
- **Maintainability**: Clean, organized code

## 🎨 **Design System**

### **Color Palette**
```css
:root {
  --primary-bg: #0a192f;        /* Deep navy blue */
  --secondary-bg: #5c4033;      /* Rich brown */
  --accent-gold: #b8860b;       /* Traditional gold */
  --accent-pink: #e06666;       /* Sanskrit pink */
  --text-light: #ffffff;        /* Pure white */
  --devanagari-pink: #e06666;   /* Sanskrit text */
  --devanagari-gold: #f0e68c;   /* Sanskrit gold */
}
```

### **Typography**
- **Primary Font**: Noto Sans Devanagari (Google Fonts)
- **Fallback**: Inter, system-ui, Avenir
- **Weights**: 400, 500, 600, 700
- **Sanskrit Support**: Perfect Devanagari rendering

### **Visual Effects**
- **Glass Morphism**: Modern transparency with traditional colors
- **Shimmer Animations**: Subtle light effects on cards
- **Hover States**: Smooth transforms and color transitions
- **Drop Shadows**: Enhanced depth and dimension

## 📱 **Responsive Design**

### **Mobile Optimization**
- Touch-friendly interface
- Optimized typography
- Smooth animations
- Perfect readability

### **Desktop Enhancement**
- Rich hover effects
- Enhanced animations
- Professional appearance
- Optimal spacing

## 🎯 **Perfect For**

### **Educational Use**
- Sanskrit language learning
- Cultural education
- Academic assessment
- Traditional knowledge

### **Personal Learning**
- Self-study Sanskrit
- Quiz practice
- Knowledge testing
- Cultural exploration

### **Professional Development**
- Educational technology
- Cultural applications
- Language learning tools
- Academic projects

## 🚀 **Development**

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run type-check   # TypeScript type checking
npm run lint         # ESLint code linting
```

### **Technology Stack**
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS with custom properties
- **Storage**: Browser localStorage
- **Fonts**: Google Fonts (Noto Sans Devanagari)

## 🎉 **Result**

A beautiful, culturally authentic quiz application that:

✅ **Honors Sanskrit Tradition** - Authentic terminology and design
✅ **Provides Excellent UX** - Smooth, intuitive interface  
✅ **Maintains Readability** - Clear, accessible text throughout
✅ **Works Perfectly** - Responsive, fast, and reliable
✅ **Educates Users** - Meaningful Sanskrit learning experience

## 📚 **Sanskrit Learning**

This application is designed to support Sanskrit education through:

- **Authentic Content**: Questions from classical Sanskrit texts
- **Cultural Context**: Traditional Indian aesthetics and terminology
- **Educational Focus**: Learning-oriented design and content
- **Professional Quality**: Academic-grade presentation

## 🌟 **Contributing**

This project is designed for Sanskrit education and cultural preservation. Contributions that enhance the educational value or cultural authenticity are welcome.

## 📄 **License**

This project is designed for educational and cultural purposes, honoring the Sanskrit tradition and supporting Sanskrit language learning.

---

**Ready to start your प्रश्नोत्तरी journey!** 🚀📚✨

*Experience the beauty of Sanskrit learning with authentic cultural theming and professional educational design.*