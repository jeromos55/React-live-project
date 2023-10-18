import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";
// import "./styles.css";
import StarRating from "./StarRating";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} />
    <StarRating maxRating={10} />
    <StarRating />
  </StrictMode>
);
