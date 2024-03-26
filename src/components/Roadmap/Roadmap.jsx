import React from "react";
import { useHorizontalScroll } from "../../lib/hooks/useHorizontalScroll";
import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {
  const roadmap_items = [
    {
      roadmapTitle: "Q1 Recruiting a Developer Team",
      title: "Recruiting a Developer Team",
      info: [
        <>
        <li>1. Providing Knowledge About Vision and Mission to the</li>
        <li>2. Development Team Explaining the Road Map for Achieving</li>
        <li>3. Goals Provides an understanding of the benefits and advantages for developers</li>
        </>
      ],
    },
    {
      roadmapTitle: "Q2 Create Smart Contract IDBit ( IDT ) V1",
      title: "Create Smart Contract IDBit ( IDT ) V1",
      info: [
        <>
        <li>1. Create a Token Contract</li>
        <li>2. Create a Sale Contract</li>
        <li>3. Build the Ico website idbit.org</li>
        </>,
      ],
    },

    {
      roadmapTitle: "Q3 Fundraising to Finance the Project",
      title: "Fundraising to Finance the Project",
      info: [
        <>
        <li>1. Conducted First Token Sale of 10,000,000 IDT to Initial Investors (Full Explanation)</li>
        <li>2. Selling IDT Tokens to the General Public on the idbit.org Site for IDR 70,000,000 (Full Explanation)</li>
        <li>3. Closes Sale and Starts Adding Liquidity in Global Markets</li>
        <li>4. Distributing IDT in the Global Market</li>
        <li>5. Branding and Special Promotions</li>
        <li>6. Manage Legality and Community Representative Offices</li>
        </>,
      ],
    },

    {
      roadmapTitle: "Q4 Building Advanced Projects",
      title: "Building Advanced Projects",
      info: [
        <>
        <li>1. Launching App Exchange Application</li>
        <li>2. Building a Token Generation Project</li>
        <li>3. Building a Public Voting Application</li>
        </>,
      ],
    },
  ];

  const scrollRef = useHorizontalScroll();

  return (
    <section id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">OUR Roadmap</span>
              <h2 className="title">
                Bigtech Strategy and <br /> Project <span>Plan</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="bt-roadmap_x bt-roadmap-scrollbar"
              // ref={scrollRef}
              // style={{ overflow: "auto" }}
            >
              <div className="bt-roadmap-wrap">
                {roadmap_items.map((x, index) => (
                  <RoadmapItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
