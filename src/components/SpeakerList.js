import { useState } from "react";

import Speaker from "./Speaker";

import { data } from "../../SpeakerData";

const SpeakerList = ({ showSessions }) => {
  const [speakerData, setSpeakerData] = useState(data);

  const handleFavoriteToggle = (speakerID) => {
    const selectedSpeaker = speakerData.find(
      (speaker) => speaker.id === speakerID
    );

    selectedSpeaker.favorite = !selectedSpeaker.favorite;

    const updatedSpeakerData = [...speakerData];

    setSpeakerData(updatedSpeakerData);
  };

  return (
    <div className="container speakers-list">
      <div className="row">
        {speakerData.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={() => handleFavoriteToggle(speaker.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpeakerList;
