import React from "react";
import RoutesMain from "./routes";
import AdversimentProvider from "./contexts/adversimentContext";

function App() {
  return (
    <>
    <AdversimentProvider>
      <RoutesMain />
    </AdversimentProvider>
    </>
  );
}

export default App;
