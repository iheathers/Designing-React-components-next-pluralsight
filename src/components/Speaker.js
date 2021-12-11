const Session = ({ session }) => {
  const { title, room } = session;

  return (
    <span className="session w-100">
      {title} <strong>Room: {room.name}</strong>
    </span>
  );
};

const SessionList = ({ sessions }) => {
  return (
    <div className="sessionBox card h-250">
      {sessions.map((session) => (
        <Session key={session.id} session={session} />
      ))}
    </div>
  );
};

const SpeakerImg = ({ id, firstName, lastName }) => {
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <img
        className="contain-fit"
        src={`/images/speaker-${id}.jpg`}
        width="300"
        alt={`${firstName} ${lastName}`}
      />
    </div>
  );
};

const SpeakerBio = ({
  bio,
  company,
  favorite,
  twitterHandle,
  last: lastName,
  first: firstName,
}) => {
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {firstName} {lastName}
        </h3>
      </div>
      <div>
        <p>{bio}</p>
        <div className="social d-flex flex-row mt-4">
          <div className="company">
            <h5>Company</h5>
            <h6>{company}</h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

const Speaker = ({ speaker }) => {
  const { id, sessions, last: lastName, first: firstName } = speaker;

  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <SpeakerImg id={id} firstName={firstName} lastName={lastName} />
        <SpeakerBio {...speaker} />
      </div>
      <SessionList sessions={sessions} />
    </div>
  );
};

export default Speaker;
