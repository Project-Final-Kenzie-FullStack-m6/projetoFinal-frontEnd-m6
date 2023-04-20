import React from "react";
import RoutesMain from "./routes";
import AdversimentProvider from "./contexts/adversimentContext";
import UserProvider from "./contexts/AuthUserContext/userContext";
import ApiFipeProvider from "./contexts/ApiFipeContext";

function App() {
  return (
    <><UserProvider>
    <AdversimentProvider>
    <ApiFipeProvider>
      <RoutesMain />
    </ApiFipeProvider>
    </AdversimentProvider>
    </UserProvider>
    </>
  );
}

export default App;
