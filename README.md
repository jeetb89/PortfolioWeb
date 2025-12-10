# 🚀 Jeet Raj - Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Full Stack Developer and AI/ML Engineer. Built with React, Tailwind CSS, and Framer Motion for smooth animations and an engaging user experience.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.5-38B2AC?logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.12-0055FF?logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Features

- 🎨 **Modern UI/UX Design** - Beautiful gradient themes with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Smooth Animations** - Powered by Framer Motion for engaging interactions
- 🎯 **Interactive Navigation** - Smooth scroll navigation with active section highlighting
- 💼 **Work Experience Timeline** - Visual timeline showcasing professional journey
- 🛠️ **Technical Skills Showcase** - Interactive skill cards with tooltips
- 🚀 **Featured Projects** - Dynamic project cards with GitHub and live demo links
- 📧 **Contact Form** - Integrated Formspree for seamless email communication
- 📊 **GitHub Activity** - GitHub contribution calendar integration
- 🎭 **Dark Theme** - Eye-friendly dark color scheme
- ⬆️ **Back to Top Button** - Smooth scroll to top functionality
- 📈 **Scroll Progress Bar** - Visual indicator of page scroll progress

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **Tailwind CSS 3.3.5** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Animation library
- **Lucide React** - Icon library
- **React Type Animation** - Typing animation effects
- **Tippy.js** - Tooltip library

### Additional Libraries
- **React GitHub Calendar** - GitHub contribution visualization
- **Formspree** - Contact form backend

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/jeetb89/portfolio.git
   cd portfolio
   ```

2. **Navigate to the UI directory**
   ```bash
   cd ui
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - The app will automatically open at `http://localhost:3000`

## 🚀 Usage

### Development
```bash
npm start
```
Runs the app in development mode at `http://localhost:3000`

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `build` folder.

### Run Tests
```bash
npm test
```
Launches the test runner in interactive watch mode.

## 📁 Project Structure

```
portfolio/
├── ui/
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Nav.js              # Navigation bar
│   │   │   ├── Techstack.js        # Technical skills section
│   │   │   ├── WorkExperience.js   # Work experience timeline
│   │   │   ├── ProfessionalHighlights.js  # Key metrics
│   │   │   ├── FeaturedProjects.js # Featured projects grid
│   │   │   ├── MoreProjects.js     # More projects section
│   │   │   ├── GetInTouch.js       # Contact form
│   │   │   ├── Footer.js           # Footer component
│   │   │   ├── ScrollProgress.js   # Scroll progress bar
│   │   │   └── BackToTop.js        # Back to top button
│   │   ├── Pages/
│   │   │   └── Home.js             # Main page component
│   │   ├── data/
│   │   │   └── data.js             # Data configuration
│   │   ├── Media/                 # Images and assets
│   │   ├── App.js                 # Root component
│   │   └── index.js               # Entry point
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## 🎨 Sections

1. **Hero Section** - Introduction with typing animation
2. **Technical Skills** - Categorized skill showcase
3. **Always Learning & Growing** - Continuous learning statement
4. **Work Experience** - Timeline of professional experience
5. **Professional Highlights** - Key achievements and metrics
6. **Featured Projects** - Showcase of major projects
7. **More Projects** - Link to GitHub for additional projects
8. **Get In Touch** - Contact form and information
9. **Footer** - Social links and quick navigation

## 📧 Contact Form Setup

The contact form uses Formspree for email handling. To set it up:

1. Visit [Formspree](https://formspree.io/)
2. Create a free account
3. Create a new form and get your form endpoint
4. Update the Formspree endpoint in `ui/src/Components/GetInTouch.js`:
   ```javascript
   const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ENDPOINT");
   ```

For detailed instructions, see `ui/FORMSPREE_SETUP.md`

## 🎯 Customization

### Update Personal Information
- Edit `ui/src/data/data.js` for personal details
- Update links in `ui/src/Components/Footer.js`
- Modify work experience in `ui/src/Components/WorkExperience.js`
- Update projects in `ui/src/Components/FeaturedProjects.js`

### Change Colors and Theme
- Modify Tailwind classes in components
- Update gradient colors in `bg-gradient-to-r from-purple-400 to-pink-500`
- Customize colors in `tailwind.config.js`

### Add/Remove Sections
- Add new components in `ui/src/Components/`
- Import and add to `ui/src/Pages/Home.js`
- Update navigation links in `ui/src/Components/Nav.js`

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Set the root directory to `ui`
4. Deploy!

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://jeetb89.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🔗 Links

- **Portfolio**: [Your Portfolio URL]
- **GitHub**: [https://github.com/jeetb89](https://github.com/jeetb89)
- **LinkedIn**: [https://www.linkedin.com/in/jeetraj-bisht-9aa969211/](https://www.linkedin.com/in/jeetraj-bisht-9aa969211/)
- **Email**: bishtjeet89@gmail.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for amazing animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Lucide](https://lucide.dev/) for beautiful icons
- [Formspree](https://formspree.io/) for form handling
- [React GitHub Calendar](https://github.com/grubersjoe/react-github-calendar) for GitHub activity visualization

## 👨‍💻 Author

**Jeet Raj**

- Full Stack Developer & AI/ML Engineer
- 2+ Years of Experience
- Specialized in JavaScript, Python, React.js, Node.js
- Passionate about building scalable solutions

---

⭐ If you like this project, please give it a star on GitHub!
