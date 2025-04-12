# Public Assets

This directory contains static assets for the Framework Zero website.

## Contents

### `index.html`
The main HTML file that serves as a template for the React application. It includes:
- Meta tags for SEO and responsive design
- Font imports
- Title and description
- Root div for the React application

### `images/`
Directory containing image assets for the website, including:
- Framework Zero logo (placeholder)
- Any other static images used in the site

## Asset Usage

When referencing assets from within the React application, you can use the public URL path directly. For example:

```jsx
// In a React component
<img src="/images/logo.png" alt="Framework Zero Logo" />
```

React will automatically handle the path resolution for public assets. 