export default function ArticleHeading({ first, second }) {
  return (
    <>
      <div className="article-heading-lead">{first}</div>
      <h2 className="article-heading">{second}</h2>
    </>
  );
}

ArticleHeading.defaultProps = {
  first: "first heading ",
  second: "Second heading",
};
