# GitHub Skills - Unit Testing Site

Welcome to the unit testing site for the GitHub Skills "Introduction to GitHub" course!

## 🎯 Purpose

This testing site helps learners validate their understanding of GitHub fundamentals through interactive quizzes for each unit in the course.

## 📚 Available Units

1. **Unit 1: Create a Branch** - Learn about Git branches and how to create them
2. **Unit 2: Commit a File** - Understand commits and version control
3. **Unit 3: Open a Pull Request** - Master pull requests and collaboration
4. **Unit 4: Merge Your Pull Request** - Complete the workflow by merging changes

## 🚀 How to Use

### Option 1: Using GitHub Pages (Recommended)

1. Enable GitHub Pages in your repository settings
2. Set the source to the main/master branch
3. Visit the URL provided by GitHub Pages

### Option 2: Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/esparzavivianne203-hash/skills-introduction-to-github.git
   cd skills-introduction-to-github
   ```

2. Open the site in your browser:
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python3 -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. Navigate to `http://localhost:8000` in your browser

## 📖 Site Structure

```
.
├── index.html          # Main landing page
├── styles.css          # Global styles
├── script.js           # Interactive functionality
├── units/              # Individual unit test pages
│   ├── unit1.html      # Unit 1: Create a Branch
│   ├── unit2.html      # Unit 2: Commit a File
│   ├── unit3.html      # Unit 3: Open a Pull Request
│   └── unit4.html      # Unit 4: Merge Your Pull Request
└── TESTING_SITE_README.md  # This file
```

## ✨ Features

- **Interactive Quizzes**: Test your knowledge with multiple-choice questions
- **Instant Feedback**: Get immediate results on your answers
- **Progress Tracking**: See your score after completing each unit
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Clean UI**: GitHub-inspired design for a familiar experience
- **Navigation**: Easy movement between units and back to home

## 🎨 Customization

You can customize the testing site by:

1. **Adding More Questions**: Edit the unit HTML files in the `units/` directory
2. **Changing Styles**: Modify `styles.css` to match your preferred design
3. **Adding New Units**: Create new HTML files following the existing pattern
4. **Updating Content**: Edit the question text and answer options

## 🧪 Testing Your Changes

After making changes, always test:

1. All quiz functionality works correctly
2. Navigation between pages is smooth
3. Responsive design on different screen sizes
4. All links work properly

## 📝 Contributing

To contribute to this testing site:

1. Create a new branch for your changes
2. Make your improvements
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project follows the same license as the main GitHub Skills repository - MIT License.

## 🆘 Support

If you encounter issues:

- Check that all files are in the correct locations
- Ensure your browser supports modern JavaScript and CSS
- Try clearing your browser cache
- Open browser developer tools to check for errors

## 🎓 Learning Resources

- [GitHub Skills](https://skills.github.com/)
- [GitHub Docs](https://docs.github.com/)
- [Git Documentation](https://git-scm.com/doc)

---

Happy learning! 🚀
