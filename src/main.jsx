import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/testimonials",
    element: (
      <>
        <Header />
        <Testimonials />
        <Footer />
      </>
    ),
  },
  {
    path: "/iet",
    element: (
      <>
        <Header />
        <IET />
        <Footer />
      </>
    ),
  },
  {
    path: "/mexico",
    element: (
      <>
        <Header />
        <Mexico />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
