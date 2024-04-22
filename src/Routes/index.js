
import LayoutDefault from "../layout/LayoutDefault";

import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import LoginPage from "../pages/Login";
import SlidePack from "../components/SlidePack";
import LayoutReservation from "../layout/LayoutReservation";
import Register from "../components/Register";
import Login from "../components/Login";
import Reservation from "../pages/Reservation";
import WeddingConference from "../components/Weddingconference";
import ProfileTemplate from "../pages/ProfileTemplate";


export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "hotel-offers",
        element: <SlidePack/>
      },
      {
        path: "wedding-conference",
        element: <WeddingConference/>
      },
    ]
  }, 
  {
    path: "*",
    element: <Error404/>
  },
  {
    path: "member",
    element: <LoginPage/>,
    children: [
      {
        index: true,
        element: <Login/>,
      },
      {
        path: "sign-up",
        element: <Register/>
      },
      
    ]
  },
  {
    path: "profile",
    element: <ProfileTemplate/>
  }, 
  {
    path: "hotel-offers",
    element: <SlidePack/>
  },
  {
    path: "/reservation",
    element: <LayoutReservation />,
    children: [
      {
        index: true,
        element: <Reservation />
      },
    ]
  },
];

