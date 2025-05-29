import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import MyBookingsPage from "../pages/MyBookingsPage.jsx";
import BookingPage from "../pages/BookingPage.jsx";
import BookingSuccess from "../pages/BookingSuccess.jsx";
import RootLayout from "../layouts/RootLayout.jsx";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "my-bookings", element: <MyBookingsPage /> },
      { path: "booking/:id", element: <BookingPage /> },
      { path: "booking/success", element: <BookingSuccess /> },
    ],
  },
];

export default routes;
