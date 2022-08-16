import React from "react";
import { useState } from "react";

function Faq() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data = [
    {
      id: 1,
      question: "How many Hungry Wolves will be part of this collection?",
      answer:
        "There will be 6,000 Alpha & Beta Hungry Wolves generated. After the first 6,000 are distributed, no more Alpha or Beta Hungry Wolves will be minted.",
    },
    {
      id: 2,
      question: "How many traits are being incorporated into the project?",
      answer:
        "There will be 6,000 Alpha & Beta Hungry Wolves generated. After the first 6,000 are distributed, no more Alpha or Beta Hungry Wolves will be minted.",
    },
    {
      id: 3,
      question: "What is the price for a Hungry Wolf?",
      answer:
        "There will be 6,000 Alpha & Beta Hungry Wolves generated. After the first 6,000 are distributed, no more Alpha or Beta Hungry Wolves will be minted.",
    },
    {
      id: 4,
      question: "When will the sale start?",
      answer:
        "There will be 6,000 Alpha & Beta Hungry Wolves generated. After the first 6,000 are distributed, no more Alpha or Beta Hungry Wolves will be minted.",
    },
    {
      id: 5,
      question: "What are the mint phases?",
      answer:
        "There will be 6,000 Alpha & Beta Hungry Wolves generated. After the first 6,000 are distributed, no more Alpha or Beta Hungry Wolves will be minted.",
    },
    {
      id: 6,
      question: "Where can I talk with my pack?",
      answer:
        "There will be 6,000 Alpha & Beta Hungry Wolves generated. After the first 6,000 are distributed, no more Alpha or Beta Hungry Wolves will be minted.",
    },
    {
      id: 7,
      question: "What is dominance?",
      answer:
        "There will be 6,000 Alpha & Beta Hungry Wolves generated. After the first 6,000 are distributed, no more Alpha or Beta Hungry Wolves will be minted.",
    },
    {
      id: 8,
      question: "What's the difference between Alpha & Beta Wolves?",
      answer:
        "There will be 6,000 Alpha & Beta Hungry Wolves generated. After the first 6,000 are distributed, no more Alpha or Beta Hungry Wolves will be minted.",
    },
    {
      id: 9,
      question: "What is the contract for Hungry Wolves?",
      answer:
        "There will be 6,000 Alpha & Beta Hungry Wolves generated. After the first 6,000 are distributed, no more Alpha or Beta Hungry Wolves will be minted.",
    },
    {
      id: 10,
      question: "How do I join a Wolfpack?",
      answer:
        "There will be 6,000 Alpha & Beta Hungry Wolves generated. After the first 6,000 are distributed, no more Alpha or Beta Hungry Wolves will be minted.",
    },
    {
      id: 11,
      question: "How often will Sheep be airdropped?",
      answer:
        "There will be 6,000 Alpha & Beta Hungry Wolves generated. After the first 6,000 are distributed, no more Alpha or Beta Hungry Wolves will be minted.",
    },
    {
      id: 12,
      question: "Wait, we can eat the sheep?",
      answer:
        "There will be 6,000 Alpha & Beta Hungry Wolves generated. After the first 6,000 are distributed, no more Alpha or Beta Hungry Wolves will be minted.",
    },
    {
      id: 13,
      question: "What if I have additional questions?",
      answer:
        "There will be 6,000 Alpha & Beta Hungry Wolves generated. After the first 6,000 are distributed, no more Alpha or Beta Hungry Wolves will be minted.",
    },
    {
      id: 14,
      question: "What's the difference between Lil Lambs & Scrumptious Sheep?",
      answer:
        "There will be 6,000 Alpha & Beta Hungry Wolves generated. After the first 6,000 are distributed, no more Alpha or Beta Hungry Wolves will be minted.",
    },
    {
      id: 15,
      question: "There are collectible Lil Lambs & Scrumptious Sheep?",
      answer:
        "There will be 6,000 Alpha & Beta Hungry Wolves generated. After the first 6,000 are distributed, no more Alpha or Beta Hungry Wolves will be minted.",
    },
    {
      id: 16,
      question: "You can upgrade your wolf nft?",
      answer:
        "There will be 6,000 Alpha & Beta Hungry Wolves generated. After the first 6,000 are distributed, no more Alpha or Beta Hungry Wolves will be minted.",
    },
  ];

  return (
    <div className="pt-[147px] bg-herobg w-full h-full  pb-[47px]">
      <div className="max-w-[1280px]  mx-auto px-5">
        <h2 className="uppercase font-bold font-condensed text-white text-6xl leading-72 tracking-0.15  ">
          faq
        </h2>
        <div className="pt-9 columns-2 gap-5 text-white">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="border-2 inline-block w-full border-[#5F5D64] bg-[#2A282F] rounded-twenty  mb-5"
            >
              <div
                onClick={() => toggle(index)}
                className="flex justify-between items-center"
              >
                <h3 className="font-bold cursor-pointer py-[34px]  px-[30px] text-[18px] uppercase tracking-wider font-condensed leading-[22px] ">
                  {item.question}
                </h3>
                {selected === index ? (
                  <div className="shadow-icons bg-[#2F68FF] w-[26px] h-[26px] mr-3  transition duration-200 rounded-full flex justify-center items-center">
                    <i class="fa-solid fa-minus "></i>
                  </div>
                ) : (
                  <div className="w-[26px] h-[26px] mr-3 cursor-pointer bg-[#5D5D5E] rounded-full flex justify-center items-center">
                    <i class="fa-solid fa-plus p-[6px]  text-white  w-full h-full"></i>
                  </div>
                )}
              </div>
              <div className={selected === index ? "visible" : "hidden"}>
                <p className="font-medium py-6 px-[30px] text-base tracking-0.005 text-white font-barlow ">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
