import Fitness from "../../../assets/images/services/fitness.png";
import MusclesBuilding from "../../../assets/images/services/muscles.png";
import Yoga from "../../../assets/images/services/yoga.png";
export const servicesData = [
  {
    id: 1,
    name: "one-day visit",
    image: Fitness,
    price: "20/DAY",
    descriptions: [
      { id: 0, items1: "Unlimited Access to Home Club" },
      { id: 1, items2: "Fitness Training" },
      { id: 2, items3: "Training session with a Club" },
      { id: 3, items4: "Over 25 free group fitness classes" },
      { id: 4, items5: "Functional movement screen" },
      { id: 5, items6: "Movement screen" },
    ],
  },
  {
    id: 2,

    name: "monthly pass",
    image: Yoga,
    price: "49/MO",
    descriptions: [
      { id: 0, items1: "Unlimited Access to Home Club" },
      { id: 1, items2: "Fitness Training" },
      { id: 2, items3: "Training session with a Club" },
      { id: 3, items4: "Over 15 free group fitness classes" },
      { id: 4, items5: "Functional movement screen" },
      { id: 5, items6: "Movement screen" },
    ],
  },
  {
    id: 3,
    name: "yearly pass",
    image: MusclesBuilding,
    price:"89/YR",
    descriptions: [
      { id: 0, items1: "Unlimited Access to Home Club" },
      { id: 1, items2: "Fitness Training" },
      { id: 2, items3: "Training session with a Club" },
      { id: 3, items4: "Over 35 free group fitness classes" },
      { id: 4, items5: "Functional movement screen" },
      { id: 5, items6: "Movement screen" },
    ],
  },
];
