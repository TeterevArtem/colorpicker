import { useState } from "react";
import Color from "./components/Color";
import "./App.css";

const defaultColors = ["#e41b1b", "#e3804a", "#f7cd36", "#2ba650", "#5250f2"];
const defaultNames = ["Red", "Orange", "Yellow", "Green", "Blue"];

export default function App() {
  const [colors, setColors] = useState(defaultColors);
  const [names, setNames] = useState(defaultNames);
  const [active, setActive] = useState(null);
  const [isShowSettings, setShowSettings] = useState(false);

  const handleClick = (index) => {
    setActive(index);
  };

  const changeColors = (e, index) => {
    let newColors = [...colors];
    newColors.splice(index, 1, e.target.value);
    setColors(newColors);
  };

  const changeNames = (e, index) => {
    let newNames = [...names];
    newNames.splice(index, 1, e.target.value);
    setNames(newNames);
  };

  const toggleSettings = () => {
    setShowSettings((prev) => !prev);
  };

  return (
    <>
      <div className="bg" style={{ backgroundColor: colors[active] || "#ddd" }}>
        <div className="wrapper">
          {[0, 1, 2, 3, 4].map((num) => {
            return (
              <Color
                key={num}
                index={num}
                isActive={active === num}
                name={names[num]}
                onClick={handleClick}
                color={colors[num]}
              />
            );
          })}
        </div>
      </div>

      <button onClick={toggleSettings} className="settings-btn">
        {isShowSettings ? "Hide" : "Show"} settings
      </button>

      {isShowSettings && (
        <div className="settings">
          {[0, 1, 2, 3, 4].map((num) => (
            <div className="settings-line" key={num}>
              <input
                type="color"
                value={colors[num]}
                onChange={(e) => changeColors(e, num)}
              />
              <input
                type="text"
                value={names[num]}
                onChange={(e) => changeNames(e, num)}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
