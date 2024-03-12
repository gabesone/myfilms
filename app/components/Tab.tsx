// components/Tab.js
import { useState } from "react";
import { TabProps } from "../types";

const Tab = ({ defaultTab, tabs }: TabProps) => {
  const [activeTab, setActiveTab] = useState<number>(defaultTab);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tab">
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-item ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;
