import { BiLocationPlus } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineAttachEmail } from "react-icons/md";
export const footerData = [
  {
    _id: 0,
    title: "Our Classes",
    subLinks: [
      {
        _id: 0,
        name: "Fitness Classes",
      },
      {
        _id: 1,
        name: "Power Yoga",
      },
      {
        _id: 0,
        name: "Full-Body Strength",
      },
      {
        _id: 0,
        name: "Aerobics Classes",
      },
    ],
  },
  {
    _id: 1,
    title: "Working Hours",
    subLinks: [
      {
        _id: 0,
        day: "Saturday to Monday",
        time: "10.00am to 09.00pm",
      },
      {
        _id: 1,
        day: "Tuesday to Thursday",
        time: "10.00am to 09.00pm",
      },
      {
        _id: 2,
        day: "Friday",
        time: "Close",
      },
    ],
  },
  {
    _id: 2,
    title: "Office Address",
    subLinks: [
      {
        _id: 0,
        locationIcon: <BiLocationPlus />,
        locationIconText: "Dhaka Bangladesh",
      },
      {
        _id: 1,
        phoneIcon: <BsFillTelephoneFill />,
        phoneIconText: "+880 1753730986",
      },
      {
        _id: 2,
        emailIcon: <MdOutlineAttachEmail />,
        emailIconText: "mohammadfaysal731@gmail.com",
      },
    ],
  },
  {
    _id: 3,
    title: "Follow Us",
    subLinks: [
      {
        _id: 0,
        icon1: <FaFacebookSquare />,
        icon2: <FaLinkedin />,
        icon3: <IoLogoYoutube />,
      },
    ],
  },
];
