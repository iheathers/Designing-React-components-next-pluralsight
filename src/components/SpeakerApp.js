import { useState } from "react";

import Header from "./Header";
import SpeakerControl from "./SpeakerControl";

const SpeakerApp = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      <Header theme={theme} />
      <SpeakerControl theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default SpeakerApp;
