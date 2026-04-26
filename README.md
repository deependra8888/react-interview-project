# React Interview Project

A clean, production-ready React project with JavaScript and React Router setup for interview preparation.

## Project Setup

This project is built with:
- **React** 18.x
- **JavaScript** (ES6+)
- **React Router v6** for client-side routing
- **Create React App** for build configuration

## Directory Structure

```
src/
├── App.js                 # Main app component with routing
├── App.css               # App styling
├── index.js              # Entry point
├── index.css             # Global styles
└── pages/
    ├── Home.js           # Home page component
    ├── About.js          # About page component
    └── NotFound.js       # 404 error page component
```

## Prerequisites

- Node.js (LTS version recommended - v14 or higher)
- npm (comes with Node.js) or yarn

## Local Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm start
```

The application will automatically open at `http://localhost:3000` in your browser.

- Hot reload is enabled by default
- Any changes to files will be automatically reflected

### 3. Test Routing

- Navigate to `/` → Shows Home page
- Navigate to `/about` → Shows About page
- Navigate to any undefined route → Shows 404 page
- Use the navigation links in the header to test routing

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Project Features

✅ Clean, empty boilerplate ready for implementation
✅ React Router v6 setup with basic routing
✅ Navigation component with working links
✅ Three page components (Home, About, NotFound)
✅ Responsive styling with Flexbox
✅ Git repository initialized
✅ Hot reload enabled for development
✅ Production build ready

## Pre-Interview Checklist

Before your interview, verify:
- [ ] Project runs locally: `npm start`
- [ ] Dependencies installed successfully
- [ ] Navigation works (click Home/About links)
- [ ] Hot reload works (edit a component and save)
- [ ] GitHub repository is connected and accessible
- [ ] You can pull/push changes to GitHub
- [ ] Application is accessible via localhost:3000
- [ ] No console errors or warnings

## GitHub Setup

The repository is already initialized with Git. To push to GitHub:

```bash
# Add your remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push initial setup
git branch -M main
git push -u origin main
```

## Interview Tips

1. **Implementation** (60 minutes): Focus on writing clean, maintainable code
2. **Demo** (10 minutes): Showcase functionality and explain your approach
3. **GitHub**: Ensure all code is pushed and repository is accessible

## Troubleshooting

### Port 3000 already in use
```bash
# Use a different port
PORT=3001 npm start
```

### Dependencies installation issues
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Hot reload not working
- Check that your IDE is configured to save files automatically
- Try restarting the development server

## Learn More

- [React Documentation](https://reactjs.org/)
- [React Router Documentation](https://reactrouter.com/)
- [Create React App Documentation](https://create-react-app.dev/)

---

Good luck with your interview! 🚀
