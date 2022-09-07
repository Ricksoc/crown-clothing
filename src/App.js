import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route
          path="/shop"
          element={
            <div>
              <h1>This is a shop</h1>
            </div>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
