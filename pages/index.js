import { data } from "../SpeakerData";

import Header from "../src/components/Header";
import SpeakerList from "../src/components/SpeakerList";
import SpeakersToolbar from "../src/components/SpeakerToolbar";

const IndexPage = () => {
  return (
    <>
      <Header />
      <SpeakersToolbar />
      <SpeakerList data={data} />
    </>
  );
};

export default IndexPage;
