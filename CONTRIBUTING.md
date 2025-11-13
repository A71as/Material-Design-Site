# Contributing to Material Design Gallery

Thank you for your interest in contributing to the Material Design Gallery project! This guide will help you get started.

## 🎯 Project Philosophy

This project transforms Swiss design principles into Google's Material Design language while maintaining:
- **Authenticity**: 100% Material Design specification compliance
- **Accessibility**: WCAG AA standards throughout
- **Performance**: Optimized for fast loading and smooth interactions
- **Quality**: Professional code standards and documentation

## 🚀 Getting Started

### Prerequisites
- Basic understanding of HTML, CSS, and Material Design principles
- Text editor (VS Code recommended)
- Web browser for testing
- Python 3.x for local development server

### Local Development
1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Navigate to project: `cd material-design-gallery`
4. Start development server: `npm run dev` or `python -m http.server 8000`
5. Open browser to `http://localhost:8000`

## 📝 Development Guidelines

### Material Design Standards
- Follow Google's Material Design specifications exactly
- Use the established CSS variable system for consistency
- Maintain 8dp grid system alignment
- Implement proper elevation and motion curves
- Ensure color contrast meets accessibility standards

### Code Style
- Use semantic HTML5 elements
- Follow BEM methodology for CSS classes when applicable
- Maintain consistent indentation (2 spaces)
- Add comments for complex interactions
- Keep CSS organized with clear sections

### Accessibility Requirements
- Include proper ARIA labels and roles
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios (WCAG AA)
- Use semantic heading hierarchy

## 🎨 Design System

### Colors
```css
--md-primary: #6200EE;           /* Purple 500 */
--md-primary-variant: #3700B3;   /* Purple 700 */
--md-secondary: #03DAC6;         /* Teal 200 */
--md-secondary-variant: #018786; /* Teal 700 */
```

### Typography
- Use established Material type scale variables
- Roboto font family throughout
- Proper letter spacing and line heights
- Responsive typography scaling

### Spacing
- Follow 8dp baseline grid system
- Use spacing token variables
- Maintain consistent margins and padding

## 🔧 Making Changes

### Before You Start
1. Check existing issues to avoid duplication
2. Create an issue for major changes
3. Follow the established patterns in existing code

### Development Process
1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes following the guidelines above
3. Test across different browsers and devices
4. Run accessibility checks
5. Update documentation if needed

### Testing Your Changes
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Verify responsive design at different screen sizes
- Check accessibility with screen readers
- Validate HTML and CSS
- Test keyboard navigation

## 🎯 Types of Contributions

### Welcome Contributions
- Bug fixes and improvements
- Accessibility enhancements
- Performance optimizations
- Documentation improvements
- Additional Material Design components
- Mobile experience improvements

### Content Additions
- Material Design history updates
- Designer profile additions
- Design principle explanations
- Code examples and demos

## 📋 Pull Request Process

1. Ensure your code follows the style guidelines
2. Update documentation for any new features
3. Add or update comments for complex code
4. Test thoroughly across browsers and devices
5. Create a clear pull request description

### Pull Request Template
```
## Description
Brief description of changes made

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Accessibility enhancement

## Testing
- [ ] Tested in Chrome/Edge
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested on mobile devices
- [ ] Accessibility validated
- [ ] Keyboard navigation verified

## Screenshots
Include screenshots for visual changes
```

## 🐛 Reporting Issues

### Bug Reports
Include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser and device information
- Screenshots if applicable

### Feature Requests
Include:
- Clear description of the proposed feature
- Use case and benefits
- How it aligns with Material Design principles
- Implementation suggestions (if any)

## 🏆 Recognition

Contributors will be recognized in:
- Project documentation
- GitHub contributors list
- Special mentions for significant contributions

## 📚 Resources

### Material Design
- [Material Design Guidelines](https://material.io/design)
- [Material Components](https://material.io/components)
- [Material Color Tool](https://material.io/resources/color)

### Accessibility
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Best Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Tools
- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE Accessibility Checker](https://wave.webaim.org/)

## 💬 Getting Help

- Create an issue for questions about contributing
- Review existing code for patterns and examples
- Check the project documentation

## 📄 License

By contributing, you agree that your contributions will be licensed under the same MIT License that covers the project.

---

Thank you for contributing to making this Material Design gallery even better! 🎨✨