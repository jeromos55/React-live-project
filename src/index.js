import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./styles.css";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars.</p>
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    {/* <StarRating maxRating={5} />
    <StarRating size={24} color="black" className="test" defaultRating={3} />
    <Test /> */}
  </StrictMode>
);
