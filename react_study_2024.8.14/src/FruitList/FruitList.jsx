import React from "react";
import Card from "./Card";

const FruitList = () => {
  const fruitList = [
    {
      name: "Orange",
      calorie: 46,
      macro: {
        p: 11.8,
        f: 0.1,
        c: 0.9,
      },
      image:
        "https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590_1280.jpg",
    },
    {
      name: "Apple",
      calorie: 57,
      macro: {
        p: 15.5,
        f: 0.2,
        c: 0.1,
      },
      image:
        "https://cdn.pixabay.com/photo/2017/09/26/13/42/apple-2788662_1280.jpg",
    },
    {
      name: "Kiwi fruit",
      calorie: 53,
      macro: {
        p: 13.5,
        f: 0.1,
        c: 1.0,
      },
      image:
        "https://cdn.pixabay.com/photo/2016/05/19/12/38/kiwi-1402844_1280.jpg",
    },
    {
      name: "Peach",
      calorie: 40,
      macro: {
        p: 10.2,
        f: 0.1,
        c: 0.6,
      },
      image:
        "https://cdn.pixabay.com/photo/2016/07/16/20/48/peaches-1522680_1280.jpg",
    },
  ];

  return (
    <div className="fruit-list">
      {fruitList.map((fruit) => (
        <Card key={fruit.name} {...fruit} />
      ))}
    </div>
  );
};

export default FruitList;
