import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RegistrationForm from "./RegistrationForm";
import SignUpForm from "./SignUpForm";
import Pagination from "./pagination/Pagination";
import HeroSection1 from "./comoponents/HeroSection1";
import Navbar from "./comoponents/Navbar";
import Child1 from "./comoponents/Child1";
import { useSelector } from "react-redux";

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
  // <div>
  //   <h1>Example</h1>
  //   <div>
  //     {/* Display content for the current page */}
  //     <p>{pageContent[currentPage]}</p>

  //     {/* Pagination Component */}
  //     <Pagination
  //       currentPage={currentPage}
  //       onPageChange={onPageChange}
  //       isNextDisabled={isNextDisabled}
  //     />
  //   </div>
  // </div>
  // <SignUpForm />
  // <HeroSection1 />
  // <Navbar />

  const [val, setValue] = useState(1);
  const data = useSelector((c) => {
    return c.show.value;
  });

  return (
    <>
      <div className="App">
        <h1>App-{data}</h1>
        <Child1 value={val} />
      </div>
    </>
  );
}

export default App;
