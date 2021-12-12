import { useState } from "react";

import { data } from "../SpeakerData";

import Header from "../src/components/Header";
import SpeakerList from "../src/components/SpeakerList";
import SpeakersToolbar from "../src/components/SpeakerToolbar";

const IndexPage = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      <Header theme={theme} />
      <SpeakersToolbar theme={theme} setTheme={setTheme} />
      <SpeakerList data={data} />
    </div>
  );
};

export default IndexPage;
