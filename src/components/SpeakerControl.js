import { useState } from "react";

import SpeakerList from "./SpeakerList";
import SpeakersToolbar from "./SpeakerToolbar";

const SpeakerControl = ({ theme, setTheme }) => {
  const [showSessions, setShowSessions] = useState(true);

  return (
    <>
      <SpeakersToolbar
        theme={theme}
        setTheme={setTheme}
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      />
      <SpeakerList showSessions={showSessions} />
    </>
  );
};

export default SpeakerControl;
