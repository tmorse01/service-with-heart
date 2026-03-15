import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/shared/Header.jsx";
import "./index.css";
import {
  Home,
  About,
  Testimonials,
  Contact,
  IET,
  Mexico,
} from "./components/pages/";

import Footer from "./components/shared/Footer.jsx";
import theme from "./theme.js";

const Layout = ({ children }) => (
  <>
    <Header />
    <Box as="main" id="main-content">
      {children}
    </Box>
    <Footer />
  </>
);

const router = createBrowserRouter([
  { path: "/", element: <Layout><Home /></Layout> },
  { path: "/about", element: <Layout><About /></Layout> },
  { path: "/testimonials", element: <Layout><Testimonials /></Layout> },
  { path: "/iet", element: <Layout><IET /></Layout> },
  { path: "/mexico", element: <Layout><Mexico /></Layout> },
  { path: "/contact", element: <Layout><Contact /></Layout> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
