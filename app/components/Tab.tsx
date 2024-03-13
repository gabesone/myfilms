// components/Tab.js
import { useState } from "react";
import {
  Cast,
  Companies,
  Crew,
  Director,
  Genres,
  Languages,
  TabProps,
} from "../types";
import { MovieCard, MovieCardDetails } from "./Cards";

const Tab = ({ defaultTab, tabs }: TabProps) => {
  const [activeTab, setActiveTab] = useState<number>(defaultTab);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className="flex flex-wrap space-x-8 text-xl text-gray-500/90 items-center justify-center">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`hover:text-white transition duration-300 cursor-pointer  ${
              activeTab === index ? "text-white border-b-2 border-white" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            <div className="">{tab.nav}</div>
          </div>
        ))}
      </div>
      <div className="tab-content mt-16 text-white">
        {/* {tabs[activeTab].storyline} */}
        {activeTab === 0 ? (
          <MovieCardDetails
            poster={tabs[0].poster}
            runtime={tabs[0].runtime}
            overview={tabs[0].overview}
            status={tabs[0].status}
            genres={tabs[0].genres as Genres[]}
            released={tabs[0].released}
            languages={tabs[0].languages as Languages[]}
            production={tabs[0].production as Companies[]}
            homepage={tabs[0].homepage!}
            credits={tabs[0].credits as { cast: Cast[]; crew: Crew[] }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Tab;
