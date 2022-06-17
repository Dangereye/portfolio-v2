export default function ThirdParty({ project }) {
  return (
    <>
      {project.third_party.length > 0 && (
        <div className="third-party">
          <h4 className="heading heading--h3">Third party</h4>
          <div className="btns tags">
            {project.third_party.map((link, i) => (
              <a
                key={`${project.name}-api-${i}`}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn--tag"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

ThirdParty.defaultProps = {
  project: { third_party: [] },
};
