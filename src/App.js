import logo from './logo.svg';
import './App.css';
import AllRoute from './components/AllRoute';
import { NavigationType, useLocation, useNavigationType } from "react-router-dom";
import { useEffect } from 'react';
const useBackButton = () => {
  const navType = useNavigationType();
  return navType === NavigationType.Pop;
};

const useScrollToTop = () => {
  const { pathname } = useLocation();

  const isPop = useBackButton();

  const scrollToTop = () => window.scrollTo(0, 0);

  useEffect(() => {
    scrollToTop();
  }, [pathname, isPop]);

  useEffect(() => {
    window.addEventListener("beforeunload", scrollToTop);
    return () => {
      window.removeEventListener("beforeunload", scrollToTop);
    };
  }, []);
};
function App() {
  useScrollToTop()
  return (
    <AllRoute />
  );
}

export default App;
