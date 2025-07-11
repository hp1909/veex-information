# Veex App Support Website

A modern, responsive support website for the Veex mobile application, designed for deployment on GitHub Pages to meet Apple App Store requirements.

## Overview

This project provides a comprehensive support page for the Veex app, including FAQ sections, contact information, and essential app details required by the Apple App Store.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive FAQ**: Expandable questions and answers for common user queries
- **Contact Form**: Direct email integration for user support requests
- **App Information**: Essential details about the Veex application
- **Privacy & Terms**: Modal windows for privacy policy and terms of service
- **Modern UI**: Clean, professional design with smooth animations

## Project Structure

```
landing-page/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript for interactive features
└── README.md           # Project documentation
```

## Files Description

### index.html
- Main page structure with semantic HTML
- FAQ section with expandable items
- Contact form for user inquiries
- App information and developer details
- Modal windows for privacy policy and terms

### styles.css
- Modern CSS with flexbox and grid layouts
- Responsive design with mobile-first approach
- Smooth animations and hover effects
- Professional color scheme and typography

### script.js
- FAQ toggle functionality
- Contact form email integration
- Modal window management
- Smooth scrolling and animations
- Keyboard accessibility (ESC to close modals)

## Deployment to GitHub Pages

1. **Create Repository**:
   ```bash
   # Create a new repository on GitHub
   # Clone it locally or upload files directly
   ```

2. **Upload Files**:
   - Upload `index.html`, `styles.css`, and `script.js` to your repository
   - Commit and push to the main branch

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save settings

4. **Access Your Site**:
   - Your site will be available at: `https://[username].github.io/[repository-name]`
   - Use this URL as your App Store support URL

## App Store Integration

This website satisfies Apple App Store requirements by providing:

- **Support Information**: Comprehensive FAQ and contact details
- **Developer Contact**: Direct email contact (hoangphuc1909@live.com)
- **App Details**: Version, compatibility, and feature information
- **Privacy Policy**: Required privacy information for app users
- **Terms of Service**: User agreement and app usage terms

## Customization

### Contact Information
Update the email address in both `index.html` and `script.js`:
```javascript
// In script.js
const mailtoLink = `mailto:your-email@example.com?subject=...`;
```

### App Information
Modify app details in the "App Information" section of `index.html`:
```html
<p><strong>App Name:</strong> Your App Name</p>
<p><strong>Developer:</strong> Your Name</p>
```

### Styling
Customize colors and fonts in `styles.css`:
```css
/* Update primary colors */
background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
```

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized CSS with minimal dependencies
- Vanilla JavaScript (no external libraries)
- Responsive images and layouts
- Fast loading times
- SEO-friendly structure

## License

This project is created for the Veex app by Nguyen Hoang Phuc. Feel free to adapt for your own app support needs.

## Support

For questions about this website template or the Veex app:
- Email: hoangphuc1909@live.com
- Response time: Within 24 hours

---

**Note**: This website is specifically designed to meet Apple App Store support URL requirements and can be easily customized for other mobile applications.