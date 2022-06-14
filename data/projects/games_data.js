export const games = {
  image: "/img/portfolio/games-project.jpg",
  date: "Nov 2021",
  name: "Games",
  tech: [
    { img: "/svg/html5.svg", name: "HTML5", width: "34.29", height: "40" },
    { img: "/svg/css3.svg", name: "CSS3", width: "34.29", height: "40" },
    { img: "/svg/sass.svg", name: "SCSS", width: "53.38", height: "40" },
    { img: "/svg/js.svg", name: "JavaScript", width: "40", height: "40" },
    { img: "/svg/react.svg", name: "ReactJS", width: "45.71", height: "40" },
    { img: "/svg/next.svg", name: "ReactJS", width: "40", height: "40" },
  ],
  description: (
    <p className="body-text">
      Search and explore 500,000+ games for 50 platforms - including mobiles.
      Containing comprehensive video game data - courtesy of RAWG: videos,
      screenshots, descriptions, genres, ERSB-ratings, Metacritic ratings and
      more... Games utilizes the intersection observer API to provide an
      optional infinite scrolling feature.
    </p>
  ),
  third_party: [{ url: "https://rawg.io/apidocs", name: "RAWG" }],
  project__url: "https://games-inky-seven.vercel.app",
  repo__url: "https://github.com/Dangereye/games",
};
