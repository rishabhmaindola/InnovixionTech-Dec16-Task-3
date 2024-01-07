import React, { useState } from "react";

import plusIcon from "../../assets/plus.png";
// import microphone from "../../assets/mic.svg";
// import history from "../../assets/history.svg";

import "./Sidebar.css";

function Sidebar(props) {
  
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];
  
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
      {/* <img src={microphone} alt="Speak" height="40px" width="20px" />
      <img src={history} alt="History" height="60px" width="20px" /> */}
    </div>
  );
}

export default Sidebar;