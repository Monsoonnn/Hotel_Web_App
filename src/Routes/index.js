
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
import ProfileTemplate from "../pages/Profile";
import ProfileGeneral from "../components/ProfileGeneral";
import ChangePasswordForm from "../components/ChangePasswordForm";
import InfoForm from "../components/InfoForm";
import SocialLinksForm from "../components/SocialLinkForm";
import ConnectionsForm from "../components/ConnectionsForm";
import NotificationsForm from "../components/NotificationsForm";
import LayoutBooking from "../layout/LayoutBooking";
import SearchHotel from "../pages/SearchHotel";
import Ctwedding from "../components/Ctwedding";
import Ctconference from "../components/Ctconference";

import Jobs from "../pages/Jobs";

import Careers from "../pages/Careers";
import Confirm from "../pages/Confirm";
import News from "../pages/News";
import NewDetail from "../pages/News/Detail";
import AboutUs from "../pages/AboutUs";
import LayoutManager from "../layout/LayoutManager";

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
        element: <SlidePack />
      },
      {
        path: "wedding-conference",
        element: <WeddingConference />
      },
      {
        path: "weddingp",
        element: <Ctwedding />,
      },
      {
        path: "conferencep",
        element: <Ctconference />,
      },
      {
        path: "jobs",
        element: <Jobs />
      },
      {
        path: "careers",
        element: <Careers />
      },
      {
        path: "reservation",
        element: <Reservation />
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "/news/:newsID",
        element: <NewDetail />
      },
      {
        path: "about-us",
        element: <AboutUs />
      }
    ]
  },
  {
    path: "*",
    element: <Error404 />
  },
  {
    path: "member",
    element: <LoginPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <Register />,
      },
    ],
  },
  {
    path: "profile",
    element: <ProfileTemplate />,
    children: [
      {
        index: true,
        element: <ProfileGeneral />,
      },
      {
        path: "account-change-password",
        element: <ChangePasswordForm />,
      },
      {
        path: "account-info",
        element: <InfoForm />,
      },
      {
        path: "account-social-links",
        element: <SocialLinksForm />,
      },
      {
        path: "account-connections",
        element: <ConnectionsForm />,
      },
      {
        path: "account-notifications",
        element: <NotificationsForm />,
      }
    ],
  },
  {
    path: "booking",
    element: <LayoutBooking />,
    children: [
      {
        index: true,
        element: <SearchHotel />
      },
      {
        path: "confirm",
        element: <Confirm />
      }
    ]
  },
  {
    path: "manager",
    element: <LayoutManager />,
    children: [
      {
      },
    ],
  },
];

