export const games = {
  image: "/img/portfolio/games-project.webp",
  date: "Nov 2021",
  name: "Games",
  tech: [
    { image: "/svg/html5.svg", name: "HTML5", width: "34.29", height: "40" },
    { image: "/svg/css3.svg", name: "CSS3", width: "34.29", height: "40" },
    { image: "/svg/sass.svg", name: "SCSS", width: "53.38", height: "40" },
    { image: "/svg/js.svg", name: "JavaScript", width: "40", height: "40" },
    { image: "/svg/react.svg", name: "React.js", width: "45.71", height: "40" },
    { image: "/svg/next.svg", name: "Next.js", width: "40", height: "40" },
  ],
  description: (
    <p className="body-text">
      Search and explore 500,000+ games for 50 platforms - including mobiles.
      Containing comprehensive video game data - courtesy of RAWG: videos,
      screenshots, descriptions, genres, ERSB ratings, Metacritic ratings and
      more... Games utilises the intersection observer API to provide an
      optional infinite scrolling feature.
    </p>
  ),
  apis: [
    { name: "RAWG", anchor: "https://rawg.io/apidocs" },
    {
      name: "Local storage",
      anchor:
        "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
    },
    {
      name: "Intersection observer",
      anchor:
        "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",
    },
  ],
  third_party: [],
  project__anchor: "https://games-inky-seven.vercel.app",
  repo__anchor: "https://github.com/Dangereye/games",
};
