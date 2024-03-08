import React from "react";
import "./App.css";
import AppRoutes from "./Routes/AppRoutes";
import { MultiProvider } from "./Providers/MultiProvider";

function App() {
  return (
    <MultiProvider>
      <AppRoutes />
    </MultiProvider>
  );
}

export default App;
