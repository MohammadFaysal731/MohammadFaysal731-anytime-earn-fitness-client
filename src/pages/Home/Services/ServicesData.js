import Fitness from "../../../assets/images/services/fitness.png";
import Yoga from "../../../assets/images/services/yoga.png";
import MusclesBuilding from "../../../assets/images/services/muscles.png";
export const servicesData = [
  {
    _id: 0,
    name: "ONE-DAY VISIT",
    image: Fitness,
    price: "20/DAY",
    descriptions: [
      { _id: 0, items1: "Unlimited Access to Home Club" },
      { _id: 1, items2: "Fitness Training" },
      { _id: 2, items3: "Training session with a Club" },
      { _id: 3, items4: "Over 25 free group fitness classes" },
      { _id: 4, items5: "Functional movement screen" },
      { _id: 5, items6: "Movement screen" },
    ],
  },
  {
    _id: 1,

    name: "MONTHLY PASS",
    image: Yoga,
    price: "49/MO",
    descriptions: [
      { _id: 0, items1: "Unlimited Access to Home Club" },
      { _id: 1, items2: "Fitness Training" },
      { _id: 2, items3: "Training session with a Club" },
      { _id: 3, items4: "Over 15 free group fitness classes" },
      { _id: 4, items5: "Functional movement screen" },
      { _id: 5, items6: "Movement screen" },
    ],
  },
  {
    _id: 2,
    name: "YEARLY PASS",
    image: MusclesBuilding,
    price:"89/YR",
    descriptions: [
      { _id: 0, items1: "Unlimited Access to Home Club" },
      { _id: 1, items2: "Fitness Training" },
      { _id: 2, items3: "Training session with a Club" },
      { _id: 3, items4: "Over 35 free group fitness classes" },
      { _id: 4, items5: "Functional movement screen" },
      { _id: 5, items6: "Movement screen" },
    ],
  },
];
