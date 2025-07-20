# 📰 NewsWave - React News App

**NewsWave** is a responsive news web application built using React and a NewsAPI. It allows users to browse top headlines from various categories and switch between countries using a dropdown with flags.

## 🌐 Features

- 📁 Multiple categories: Business, Entertainment, Sports, Technology, etc.
- 🌍 Country selection
- ⚡️ React Router v6 for seamless navigation
- 📦 Fully functional using React + Bootstrap
- 📱 Responsive design for mobile & desktop

## 🚀 Tech Stack

- React with Vite
- React Router v6
- Bootstrap 5 & Bootstrap Icons
- NewsAPI : https://saurav.tech/NewsAPI/top-headlines/category/general/in.json
- Country flag API: [flagsapi.com](https://flagsapi.com)

## ⚙️ How It Works

- **Routing & Navigation**
The app uses React Router v6 to handle category-based navigation. Each category (e.g., Business, Sports) has its own route (e.g., /business, /sports) which renders the News component with the selected category.

- **Country Selection**
A dropdown in the navbar allows users to switch between countries (e.g., India, USA, UK). Selecting a country updates the country state in the App component, which is passed down as a prop to the News component. The flag icon is dynamically fetched using FlagsAPI.

- **Fetching News**
The News component fetches top headlines based on the selected category and country using static JSON endpoints from https://saurav.tech/NewsAPI.

- **Component Re-rendering**
Changing either the route or the selected country causes the News component to re-fetch data and display updated articles. React's key prop ensures the component re-renders correctly on prop change.