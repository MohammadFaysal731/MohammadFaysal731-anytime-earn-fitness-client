import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import Services from "../pages/Home/Services/Services";
import NotFound from "../pages/NotFound";
import Shop from "../pages/Shop/Shop";
import SignIn from "../pages/SignIn";
import SingUp from "../pages/SingUp";
import Trainers from "../pages/Trainers/Trainers";

export const publicRoutes = [
  { path: "/", name: "Home", Comment: Home },
  { path: "/shop", name: "Shop", Comment: Shop },
  { path: "/trainers", name: "Trainers", Comment: Trainers },
  { path: "/services", name: " Services", Comment: Services },
  { path: "/pricing", name: "Pricing", Comment: Services },
  { path: "/about", name: "About", Comment: About },
  { path: "/contact", name: "Contact", Comment: Contact },
  { path: "/sing-up", name: "SingUP", Comment: SingUp },
  { path: "/sign-in", name: "SignIn", Comment: SignIn },
  { path: "*", name: "NotFound", Comment: NotFound },
];
