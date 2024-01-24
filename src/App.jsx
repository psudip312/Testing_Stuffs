import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RegistrationForm from "./RegistrationForm";
import SignUpForm from "./SignUpForm";
import Pagination from "./pagination/Pagination";

function App() {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Number of pages in the example

  const onPageChange = (newPage) => {
    // Ensure the newPage is within the valid range (1 to totalPages)
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const isNextDisabled = currentPage === totalPages;

  // Mock data for each page
  const pageContent = {
    1: "Content for Page 1",
    2: "Content for Page 2",
    3: "Content for Page 3",
    4: "Content for Page 4",
    5: "Content for Page 5",
  };

  return (
    <>
      <div>
        <h1>Example</h1>
        <div>
          {/* Display content for the current page */}
          <p>{pageContent[currentPage]}</p>

          {/* Pagination Component */}
          <Pagination
            currentPage={currentPage}
            onPageChange={onPageChange}
            isNextDisabled={isNextDisabled}
          />
        </div>
      </div>
      <SignUpForm />
    </>
  );
}

export default App;
