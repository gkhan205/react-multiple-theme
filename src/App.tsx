import { useTheme } from "./ThemeProvider.tsx";

function App() {
  const { theme, onThemeChange } = useTheme();

  return (
    <div className={theme}>
      <div className="app-container">
        <h1>React Multiple Theme App</h1>
        <div className="button-container">
          <button
            className="theme-button"
            onClick={() => onThemeChange("light")}
          >
            Light Theme
          </button>
          <button
            className="theme-button"
            onClick={() => onThemeChange("dark")}
          >
            Dark Theme
          </button>
          <button
            className="theme-button"
            onClick={() => onThemeChange("blue")}
          >
            Blue Theme
          </button>
          <button className="theme-button" onClick={() => onThemeChange("red")}>
            Red Theme
          </button>
          <button
            className="theme-button"
            onClick={() => onThemeChange("orange")}
          >
            Orange Theme
          </button>
          <button
            className="theme-button"
            onClick={() => onThemeChange("purple")}
          >
            Purple Theme
          </button>
        </div>
        <div className="content">
          <p>This is a paragraph of text to showcase the theme colors.</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          <div className="card">
            <h2>Card Title</h2>
            <p>This is a card component to showcase the theme colors.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
