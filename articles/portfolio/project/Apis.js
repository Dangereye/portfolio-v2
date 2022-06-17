export default function Apis({ project }) {
  return (
    <>
      {project.apis.length > 0 && (
        <div className="apis">
          <h4 className="heading heading--h3">APIs</h4>
          <div className="btns tags">
            {project.apis.map((link, i) => (
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

Apis.defaultProps = {
  project: { apis: [] },
};
