import React, { useState } from "react";
import { UserProvider } from "./UserContext";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <UserProvider>
      <div>
        <button onClick={() => setCurrentPage("home")}>Homeに戻る</button>
        <button onClick={() => setCurrentPage("about")}>Aboutページへ</button>
        {currentPage === "home" ? <HomePage /> : <AboutPage />} 
      </div>
    </UserProvider>
  );
};

export default App;