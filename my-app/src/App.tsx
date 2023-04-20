import React from "react";
import RoutesMain from "./routes";
import AdversimentProvider from "./contexts/adversimentContext";
import ApiFipeProvider from "./contexts/ApiFipeContext";

function App() {
  return (
    <>
    <AdversimentProvider>
      <ApiFipeProvider>
        <RoutesMain />
      </ApiFipeProvider>
    </AdversimentProvider>
    </>
  );
}

export default App;
