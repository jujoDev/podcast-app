# Podcast-app
Podcast-App is a React-based web application built with TypeScript and Vite. It allows users to listen to the top 100 podcasts from iTunes conveniently. The app utilizes React-Router-Dom for routing and Tailwind CSS for styling.

## Installation
To get started with Podcast-App, follow these steps:

1. Clone this repository to your local machine:
```bash
git clone https://github.com/your-username/Podcast-App.git
```

2. Navigate to the project directory:
```bash
cd Podcast-App
```

3. Install dependencies using npm:
```bash
npm install
```

## Usage
### Development Mode
To run the project in development mode, use the following command:
```bash
npm run dev
```

This will start the development server, and you can access the app at your **localhost**.

### Production Mode
To build the project for production, use the following command:
```bash
npm run build
```

This will create an optimized production build in the dist directory.

To serve the production build locally, you can use:
```bash
npm run preview
```

This will start a production server, and you can access the app at your **localhost**.

## Note
As an alternative branch to deploy the application, the branch "feature/allOrigins" uses the https://allorigins.win/ recourse in all API calls to ensure a 200 response from the server. It's not merged in the main branch due to poor response times that can cause a bad experience with the application when testing it. The main branch, although that some podcasts fail at loading, it takes instantly all episodes from the podcasts that don't present any problem with CORS as could be for example "The Joe Budden Podcast" or "Drink Champs".

## Dependencies
- React
- TypeScript
- Vite
- React-Router-Dom
- Tailwind CSS
