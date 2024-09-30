import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SecuretechavHomepage from "./pages/SecuretechavHomepage";
import AboutUs from "./pages/Aboutuspage";
import ContactUs from "./pages/ContactUspage";
import Solutionpage from "./pages/solutionpage"
import Chatbot from "./components/Chatbot";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Securetechav";
        metaDescription = "Welcome to the Securetechav Homepage";
        break;
      case "/AboutUs":
        title = "About Us";
        metaDescription = "Learn more about us on the About Us page.";
        break;
      default:
        title = "Securetechav";
        metaDescription = "Securetechav Website";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<SecuretechavHomepage />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Contactus" element={<ContactUs />} />
      <Route path="/Solutionpage" element={<Solutionpage />} />
    </Routes>
    <Chatbot />
    </div>
  );
}

export default App;
