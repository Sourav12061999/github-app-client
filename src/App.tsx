import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Students from "./Pages/Students/Students";
import Error from "./Pages/Error/Error";
import Done from "./Pages/Done/Done";
import Pending from "./Pages/Pending/Pending";
import Wrong from "./Pages/Wrong Username/Wrong";
import Active from "./Pages/Active/Active";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/Done" element={<Done />} />
        <Route path="/Pending" element={<Pending />} />
        <Route path="/Active" element={<Active />} />
        <Route path="/Wrong_Username" element={<Wrong />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  </ChakraProvider>
);
