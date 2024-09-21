import React from "react";
import Kanbas from "./Kanbas";
import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";


export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          {/* making Kanbas a landing page is optional. Both info mentioned in the assignment description and lecture will be considered as right solution. See https://piazza.com/class/m0mf6mduttu4nn/post/103_f2  */}
          <Route path="/" element={<Navigate to="/Labs/Lab1" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
// export default App;
