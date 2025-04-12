# Source Code Structure

This directory contains the React components and styling for the Framework Zero website.

## Key Files

### `index.js`
Entry point for the React application. Renders the main App component to the DOM.

### `index.css`
Global CSS styles for the application. Uses Tailwind CSS for styling.

### `App.js`
Main React component that renders the Framework Zero website. 

#### Component Structure:
- **Header**: Contains the Framework Zero logo
- **Main Content**: Contains the description of Framework Zero and its mission
- **Call-to-Action Button**: "Get Involved" button that links to the contact email
- **Footer**: Contains copyright information

## Styling

The website uses Tailwind CSS for styling. The application has a clean, minimalist design to focus on the content and message.

## Component Design

The components follow a functional approach, with each component responsible for a specific part of the UI. The Button component is designed to be reusable with different variants (primary, secondary, accent).

## State Management

The application currently doesn't require complex state management, so it uses React's built-in state management through the `useState` hook for simple state needs. 