import React from "react";

export default function Test() {
  const data = [
    {
      age: "Couscous",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      age: "Tajine",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      age: "Tacos",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      age: "Rfissa",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
    {
      age: "Rfissa",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    },
  ];

  return (
    <section className="cardContainer">
      {data.map((item) => (
        <>
          <div className="cardTest">
            <h1>{item.age}</h1>
            <p>
              {item.description}
            </p>
            <div className="cardButton">
              <button className="">Details</button>
            </div>
          </div>
        </>
      ))}
    </section>
  );
}
