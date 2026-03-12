# The Rustic Plate - Restaurant Website

**Course:** CSCI 39548 - Practical Web Development (Homework 1)

## Project Overview

This project is a fully responsive restaurant website built for "The Rustic Plate." It is designed to provide a seamless user experience across desktop and mobile devices, utilizing vanilla HTML, SCSS/CSS, and JavaScript. Originally designed as an SPA, the project has been optimized into a clean **multi-page structure** with dedicated HTML files for improved organization and performance.

## Features & Rubric Fulfillment

### Header & Navigation
- **Fixed Header:** A stylized logo and navigation links that remain accessible at all times.
- **Multi-Page Navigation:** Standard HTML links provide reliable switching between Home, Menu, Gallery, About, and Contact pages.

### Hero Section
- **Home Page:** Large, visually appealing banner image with the restaurant's name and a call-to-action button that links directly to the menu.

### Menu Page
- **Structured Layout:** A CSS Grid-based layout using cards to display 6 distinct food items with high-quality images, titles, descriptions, and prices.

### Image Gallery
- **Custom Slider:** A JavaScript-powered image slider displaying 6 high-quality images of the restaurant's interior, food, and atmosphere.

### About Section
- **Origin Story:** Details the restaurant's farm-to-table mission and history, presented in a responsive side-by-side layout (on desktop).

### Contact Page
- **Functional Form:** A responsive contact form (Name, Email, Message) with basic validation.
- **Interactive Map:** An embedded Google Map showing the restaurant's location in New York City.

### Footer Section
- Displays business hours, a brief description, and social media links with custom styling.

### Mobile-Friendly Design
- **Responsive Layout:** Implemented using CSS @media queries for tablets and mobile phones.
- **Hamburger Menu:** A functional JavaScript-powered menu for smaller screens to ensure easy navigation on the go.
- **Vertical Stacking:** Layouts (like the contact form and about section) stack vertically on smaller screens for optimal readability.

## Technologies Used

- **HTML5:** Semantic structure and content across multiple pages.
- **SCSS/CSS3:** Modular styling using SCSS variables and nesting, compiled to standard CSS. Utilizes CSS Grid, Flexbox, and Media Queries.
- **Vanilla JavaScript:** DOM manipulation for the image slider, mobile menu toggling, and basic form feedback.

## How to Run the Project

The project is built with static files and can be run locally:

1. Download or clone the repository.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).
3. If you wish to modify the styles, edit `style.scss` and recompile it using Sass (`npx sass style.scss style.css`).

## Live Demo

Live URL: [https://ethanwaldo.github.io/rustic-plate-demo-site/](https://ethanwaldo.github.io/rustic-plate-demo-site/)
