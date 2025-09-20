# 📚 Delibrary – Responsive Bookshelf (React + MUI + Open Library) 📚

Delibrary is a responsive, dark-mode bookshelf app powered by the Open Library API. It showcases books in clean Material UI cards with smooth loading states and interactive details.

<img src="https://i.snipboard.io/1AX30b.jpg" width="800" alt="image">

Live data is fetched from Open Library:

-   Trending: `https://openlibrary.org/trending/daily.json`
-   Subject search: `https://openlibrary.org/search.json?subject={subject}&limit={value}`
-   General search: `https://openlibrary.org/search.json?q={query}&limit={value}`
-   Covers: `https://covers.openlibrary.org/b/id/{coverId}-L.jpg`
-   Work details: `https://openlibrary.org{workKey}.json`

## Features

-   Dark-mode Material UI design with responsive grid
-   Top navigation with active highlighting and mobile drawer
-   Pages:
    -   Home: hero section and CTA
    -   Trending: daily trending and curated subjects
    -   Browse: search by query with skeletons and empty states
    -   Random: “Surprise me” subject shuffler showing 12 books with fade-in
    -   About: creative profile with tabs/stepper and a small book showcase
-   Card list with Axios loading, skeleton placeholders, and error awareness
-   Clickable cards open a rich Book View (Backdrop) with cover, rating, subjects, and description with Read more/less

## Tech stack

-   React 19, React Router 7
-   Material UI 7 (+ Emotion)
-   Axios for API requests
-   Vite for dev/build

## Getting started

Prerequisites: Node 18+ recommended.

1. Install dependencies
    - Run: npm install
2. Build for production
    - Run: npm run build

## Project structure

```
src/
  App.jsx                # Routes: Home, Trending, Browse, Random, About
  main.jsx               # Theme (dark), Router, app bootstrap
  components/
	 AppBar.jsx           # Top navigation with mobile drawer
	 CardList.jsx         # Fetches and renders books (trending/subject/search)
	 Card.jsx             # Book card (cover, title, author, rating)
	 CardView.jsx         # Backdrop dialog with details and Read more
  pages/
	 Home.jsx             # Landing hero
	 Trending.jsx         # Trending + curated subjects
	 Browse.jsx           # Search flow with skeletons and empty state
	 Random.jsx           # Subject shuffler with fade-in results
	 About.jsx            # Creative profile with tabs/stepper + mini bookshelf
```

## Conventions

-   React best practices: component reuse (CardList/Card/CardView), minimal local state, hooks-driven effects
-   Separation of concerns: pages for screens, components for shared UI
-   DRY API integration: CardList handles trending/subject/search in one place
-   UX polish: Skeletons, spinners, Backdrop dialog, smooth transitions

## Notes

-   This is a client-side app; API calls go directly to Open Library. Rate limits/errors are handled with loading states and friendly messages.
-   Cover images may be missing for some works; a placeholder image is shown.

## License

This project is for educational/demo purposes. Open Library content is provided by https://openlibrary.org/ under their terms.
