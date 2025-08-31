# PM Portfolio Website

A modern, responsive portfolio website designed specifically for Project Managers with a technical background in R&D, mechanical, and biomedical engineering.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling, hover effects, and form validation
- **Technical Focus**: Emphasizes your engineering background while showcasing PM skills
- **Easy Customization**: Simple to update with your personal information

## 📁 File Structure

```
PM Portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization Guide

### 1. Personal Information

**Update in `index.html`:**

- **Name**: Replace "Your Name" throughout the file
- **Title**: Update "Project Manager & R&D Engineer" 
- **Email**: Replace "your.email@university.edu"
- **Phone**: Replace "+1 (555) 123-4567"
- **Location**: Replace "Your City, State"
- **Social Links**: Update LinkedIn, GitHub, Twitter URLs

### 2. Hero Section

**Update the hero description** to reflect your specific background:

```html
<p class="hero-description">
    Bridging the gap between technical innovation and strategic project delivery. 
    PhD student in mechanical and biomedical engineering with a passion for 
    transforming complex research into successful projects.
</p>
```

**Update statistics** in the profile card:
- Years of R&D experience
- Number of projects completed
- Number of publications

### 3. About Section

**Customize the about text** to tell your story:

- Your journey from R&D to Project Management
- Specific areas of expertise
- Key achievements and milestones
- Your unique value proposition

### 4. Experience Timeline

**Update the timeline section** with your actual experience:

- **PhD Student**: Add your university, research focus, and achievements
- **Research Assistant**: Include previous positions and responsibilities
- **Education**: Add your Master's and Bachelor's degrees

**Example structure:**
```html
<div class="timeline-item">
    <div class="timeline-content">
        <div class="timeline-header">
            <h3>Your Position</h3>
            <span class="timeline-date">2022 - Present</span>
        </div>
        <h4>Institution/Company Name</h4>
        <p>Department/Division</p>
        <ul>
            <li>Key achievement or responsibility</li>
            <li>Another important point</li>
            <li>Project management highlight</li>
        </ul>
    </div>
</div>
```

### 5. Projects Section

**Replace the example projects** with your actual projects:

**For each project, include:**
- Project name and description
- Your role and responsibilities
- Technologies/methodologies used
- Key metrics (timeline, team size, budget, outcomes)
- Relevant tags

**Example project structure:**
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-[relevant-icon]"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Detailed description of the project, your role, and outcomes.</p>
        <div class="project-tags">
            <span class="tag">Project Management</span>
            <span class="tag">Your Domain</span>
            <span class="tag">Technology</span>
        </div>
        <div class="project-metrics">
            <div class="metric">
                <span class="metric-value">12</span>
                <span class="metric-label">Months</span>
            </div>
            <div class="metric">
                <span class="metric-value">8</span>
                <span class="metric-label">Team Members</span>
            </div>
            <div class="metric">
                <span class="metric-value">$500K</span>
                <span class="metric-label">Budget</span>
            </div>
        </div>
    </div>
</div>
```

### 6. Skills Section

**Update your skills** in three categories:

**Project Management Skills:**
- Agile/Scrum methodologies
- Risk management
- Stakeholder management
- Budget planning
- Team leadership

**Technical Skills:**
- CAD design (SolidWorks, AutoCAD)
- Finite Element Analysis
- Biomechanics
- Medical device design
- Research methodologies

**Tools & Software:**
- Project management tools (Jira, MS Project, Asana)
- Design software (SolidWorks, MATLAB, etc.)
- Analysis tools
- Communication platforms

**Adjust skill levels** by changing the width percentage in CSS:
```css
.skill-progress { width: 85%; } /* Change this value */
```

### 7. Images and Media

**Add your photos:**
- Replace the profile image placeholder in the hero section
- Add your photo in the about section
- Include project images in the projects section

**To add images:**
1. Place your images in the same folder
2. Replace the `<i class="fas fa-user-circle"></i>` with `<img src="your-image.jpg" alt="Your Name">`
3. Update the CSS to style your images appropriately

### 8. Color Scheme

**Customize colors** in `styles.css`:

- **Primary Blue**: `#2563eb` (used for links, highlights)
- **Accent Yellow**: `#fbbf24` (used for highlights, buttons)
- **Gradient**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` (hero background)

## 🛠️ Technical Customization

### Adding New Sections

To add a new section (e.g., Certifications, Publications):

1. **Add HTML structure** in `index.html`
2. **Add CSS styling** in `styles.css`
3. **Add navigation link** in the navbar
4. **Add JavaScript animations** if needed

### Form Integration

The contact form is currently set up for demonstration. To make it functional:

1. **For email integration**: Use services like Formspree, Netlify Forms, or EmailJS
2. **For backend processing**: Set up a server-side script (PHP, Node.js, etc.)

### SEO Optimization

**Add meta tags** in the `<head>` section:
```html
<meta name="description" content="Your Name - Project Manager & R&D Engineer Portfolio">
<meta name="keywords" content="project management, R&D, mechanical engineering, biomedical engineering">
<meta name="author" content="Your Name">
```

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-friendly navigation
- Optimized layouts for small screens
- Touch-friendly interactions
- Fast loading times

## 🚀 Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Get a custom URL instantly

### Option 3: Traditional Web Hosting
1. Upload files to your web hosting provider
2. Point your domain to the hosting
3. Your portfolio will be live

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Support

If you need help customizing your portfolio:

1. **Check this README** for common customization tasks
2. **Review the code comments** for guidance
3. **Test changes** in a local environment first
4. **Backup your files** before making major changes

## 🎯 Next Steps

1. **Customize the content** with your personal information
2. **Add your projects** and achievements
3. **Update skills** and experience
4. **Add your photos** and media
5. **Test on different devices**
6. **Deploy to your preferred platform**
7. **Share your portfolio** with potential employers

## 📝 License

This portfolio template is free to use and modify for personal and commercial projects.

---

**Good luck with your PM portfolio! 🚀** 