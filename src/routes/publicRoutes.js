import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import Services from "../pages/Home/Services/Services";
import Testimonials from "../pages/Institution/Testimonials/Testimonials";
import Trainers from "../pages/Institution/Trainers/Trainers";
import NotFound from "../pages/NotFound";
import OnlineCourse from "../pages/Home/OnlineCourse";
import Routines from "../pages/Schedule/Routines";
import ScheduleByClasses from "../pages/Schedule/ScheduleByClasses";
import ScheduleByDay from "../pages/Schedule/ScheduleByDay";
import Shop from "../pages/Shop/Shop";
import SignIn from "../pages/SignIn";
import SingUp from "../pages/SingUp";

export const publicRoutes =[
  {path:"/",name:"Home",Comment:Home},
  {path:"/shop",name:"Shop",Comment:Shop},
  {path:"/trainers",name:"Trainers",Comment:Trainers},
  {path:"/testimonials",name:"Testimonials",Comment:Testimonials},
  {path:"/pricing",name:"Pricing",Comment:Services},
  {path:"/routines",name:"Routines",Comment:Routines},
  {path:"/schedule-by-day",name:"ScheduleByDay",Comment:ScheduleByDay},
  {path:"/schedule-by-classes",name:"ScheduleByClasses",Comment:ScheduleByClasses},
  {path:"/about",name:"About",Comment:About},
  {path:"/contact",name:"Contact",Comment:Contact},
  {path:"/online-course",name:"OnlineCourse",Comment:OnlineCourse},
  {path:"/sing-up",name:"SingUP",Comment:SingUp},
  {path:"/sign-in",name:"SignIn",Comment:SignIn},
  {path:"*",name:"NotFound",Comment:NotFound},

]