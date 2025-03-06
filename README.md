# NOVA - Stealth Startup Landing Page

A modern, responsive landing page for a stealth startup called NOVA. This project showcases a sleek design with a space-themed background and prominent call-to-action buttons for user engagement.

## Features

- Beautiful space-themed UI with Tailwind CSS
- Email waitlist signup with validation
- Google Form integration for people who want to get involved
- Prominent binary choice buttons at the center of the screen
- Small animated logo with glow effect
- Responsive design for all device sizes
- Smooth scrolling navigation
- Glassmorphism design elements
- Interactive buttons with hover effects

## Preview

The landing page includes:
- A stunning space background with gradient overlay
- Two main sections: Hero and About
- Email signup form with validation
- Large, prominent "Join Waitlist" and "Get Involved" buttons as a binary choice
- Small animated rocket logo
- Success message after joining the waitlist

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `src/App.js` - Main component with the landing page implementation
- `src/index.js` - React entry point
- `src/index.css` - Tailwind CSS imports and custom styles

## Design Principles

- **Minimalist Aesthetic**: Clean design that focuses on the message
- **Visual Hierarchy**: Important elements stand out through size, color, and positioning
- **Binary Choice Architecture**: Clear options presented to users for decision-making
- **Responsive Layout**: Adapts seamlessly to different screen sizes
- **Consistent Branding**: Cohesive color scheme and typography
- **Engaging Visuals**: Animated elements and visual cues to draw attention

## Technologies Used

- React
- Tailwind CSS
- Lucide React (for icons)

## License

MIT 

# Framework Zero Website

This is the website for Framework Zero, featuring email subscription functionality using Google Sheets as a backend.

## Latest Update

The Google Apps Script has been successfully deployed with the following details:
- **Deployment ID**: AKfycbzoNCwmapJEdAax6IrB-arVQvcsekCrbxSUOtP3U6AONjRunMhmiDTUqNDvlL90R-D_
- **Web app URL**: https://script.google.com/macros/s/AKfycbzoNCwmapJEdAax6IrB-arVQvcsekCrbxSUOtP3U6AONjRunMhmiDTUqNDvlL90R-D_/exec
- **Version**: 5
- **Deployment Date**: Latest update with compatibility fixes

Recent changes:
- Updated to use the latest Google Apps Script deployment
- Fixed Google Apps Script compatibility issue:
  - Removed CORS headers that were causing errors
  - Simplified the response handling for better compatibility
- The React app uses a form submission approach that works without CORS headers
- Updated button functionality:
  - "Follow" button scrolls to the email signup form
  - "Get Involved" button links to the Google Form at https://forms.gle/NrNJ2dynq5DVMRWUA

## Google Apps Script Integration Setup

Follow these steps to set up the email subscription form with Google Sheets:

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it "Framework Zero Subscribers" or something similar

### Step 2: Set Up Google Apps Script

1. In your Google Sheet, go to Extensions > Apps Script
2. Delete any code in the editor and paste the contents of the `google-apps-script.js` file from this repository
3. Save the project with a name like "Framework Zero Form Handler"

### Step 3: Test the Script in the Editor

1. After saving the script, run the `testDoPost` function by selecting it from the dropdown menu and clicking the "Run" button
2. Check the execution logs (View → Logs) to make sure it's working correctly
3. Verify that a test entry has been added to your spreadsheet

### Step 4: Deploy the Google Apps Script

1. Click on "Deploy" > "New deployment"
2. Select "Web app" as the deployment type
3. Set the following options:
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click "Deploy"
5. Copy the Web app URL that is generated

### Step 5: Update Your React App

1. In `src/App.js`, update the `scriptURL` variable in the `handleSubmit` function with your Web app URL from Step 4

### Step 6: Test Your Integration

1. Run your React app
2. Fill out the email form and click "Follow"
3. Check your Google Sheet to verify the data was recorded
4. You should also receive an email notification if the email functionality is set up correctly

## Implementation Details

The form submission uses a reliable approach that works well with Google Apps Script:

1. Creates a hidden form and iframe
2. Submits the form to the iframe to prevent page navigation
3. Cleans up the DOM elements after submission
4. Shows a success message to the user

This approach avoids CORS issues that can occur with direct fetch requests to Google Apps Script.

### Submission Timing

The form submission process typically takes less than a second to complete. The implementation includes:

- Visual feedback during submission (button changes to "Processing...")
- A short delay (800ms) before showing the success message
- Console logs at each step of the process for debugging

If the submission seems to take longer than expected, check the browser console for any error messages.

## Troubleshooting

### Common Issues

- **Form Not Submitting**: Make sure the script URL is correct and the script is deployed as a web app
- **Deployment Errors**: Make sure you've authorized the script properly in Google Apps Script
- **Data Not Appearing**: Check your script logs in Apps Script editor (View → Logs in the Apps Script editor)
- **Email Notifications Not Working**: Make sure you're logged in with the correct Google account and have granted the necessary permissions

### "Invalid JSON data" Error

If you encounter an "Invalid JSON data" error:

1. Make sure your Google Apps Script is properly deployed as a web app
2. Run the `testDoPost` function in the Apps Script editor to verify it works
3. Check the Apps Script logs for any errors (View → Logs in the Apps Script editor)
4. Try redeploying the script with a new version number
5. Ensure your spreadsheet exists and is accessible to the account running the script

### "Data Not Appearing in Google Sheets" Issue

If form submissions aren't appearing in your Google Sheet:

1. **Check Script Permissions**: Make sure your Google Apps Script has permission to access and modify the spreadsheet
2. **Verify Script Deployment**: Ensure the script is properly deployed as a web app with "Anyone" access
3. **Run the Test Function**: Execute the `testDoPost` function in the Apps Script editor to verify it can write to the sheet
4. **Check Error Logs**: Look for any errors in the Apps Script logs (View → Logs)
5. **Verify Sheet Name**: The script looks for a sheet named "Submissions" - make sure it exists or can be created
6. **Check Browser Console**: Look for any submission errors in your browser's developer console

Common error: `TypeError: ContentService.createTextOutput(...).setMimeType(...).setHeader is not a function`
- Solution: Use the simplified version of the script without CORS headers

## Development

To run the website locally:

```bash
npm install
npm start
```

The site will be available at http://localhost:3000 