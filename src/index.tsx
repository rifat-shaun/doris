import ReactDOM from "react-dom/client";
import "@fontsource/tenor-sans";
import "typeface-dosis";
import "typeface-marcellus";
import { App } from "./App";
import "./index.css";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
