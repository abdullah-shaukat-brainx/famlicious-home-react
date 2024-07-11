import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Layout/Home/Home";
import Contact from "./Layout/Contact/Contact";
import PrivacyPolicy from "./Layout/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./Layout/TermsAndConditions/TermsAndConditions";
import About from "./Layout/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
