import { useState } from "react";

import Speaker from "./Speaker";

import { data } from "../../SpeakerData";

console.log({ data });

const SpeakerList = ({ showSessions }) => {
  const [speakerData, setSpeakerData] = useState(data);

  //   Blew my mind: I realized that the same object was just spread out to new variable 'updatedSpeakerData', updatedSpeakerData is a new array that simply points to same object
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
