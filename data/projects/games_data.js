export const games = {
  image: "/img/portfolio/games-project.webp",
  date: "Nov 2021",
  name: "Games",
  tech: [
    { image: "/svg/html5.svg", name: "HTML5", width: "34.29", height: "40" },
    { image: "/svg/css3.svg", name: "CSS3", width: "34.29", height: "40" },
    { image: "/svg/sass.svg", name: "SCSS", width: "53.38", height: "40" },
    {
      image: "/svg/js.svg",
      name: "JavaScript ES6+",
      width: "40",
      height: "40",
    },
    {
      image: "/svg/react.svg",
      name: "React: 17.0.2",
      width: "45.71",
      height: "40",
    },
    {
      image: "/svg/next.svg",
      name: "Next: 12.1.0",
      width: "40",
      height: "40",
    },
  ],
  description: (
    <p className="body-text">
      Search and explore 500,000+ games for 50 platforms - including mobiles.
      Containing comprehensive video game data - courtesy of RAWG: videos,
      screenshots, descriptions, genres, ERSB ratings, Metacritic ratings and
      more... Additional features include optional infinite scrolling and a
      light or dark theme.
    </p>
  ),
  apis: [
    { name: "RAWG", anchor: "https://rawg.io/apidocs" },

    {
      name: "Fetch",
      anchor: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
    },
    {
      name: "Intersection observer",
      anchor:
        "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",
    },
  ],
  third_party: [
    {
      name: "React icons",
      anchor: "https://react-icons.github.io/react-icons/",
    },
  ],
  project__anchor: "https://games-inky-seven.vercel.app",
  repo__anchor: "https://github.com/Dangereye/games",
};
