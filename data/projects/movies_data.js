export const movies = {
  image: "/img/portfolio/movies-project.jpg",
  date: " Jan 2021",
  name: "Movies",
  tech: [
    { img: "/svg/html5.svg", name: "HTML5", width: "34.29", height: "40" },
    { img: "/svg/css3.svg", name: "CSS3", width: "34.29", height: "40" },
    { img: "/svg/sass.svg", name: "SCSS", width: "53.38", height: "40" },
    { img: "/svg/js.svg", name: "JavaScript", width: "40", height: "40" },
    { img: "/svg/react.svg", name: "ReactJS", width: "45.71", height: "40" },
  ],
  description: (
    <p className="body-text">
      Search and explore millions of movies, television shows and people. Peruse
      upcoming releases or re-discover forgotten favourites. We'll help keep you
      up to date with who or what is currently popular and trending. Other
      features include trailers, cast biographies and services to watch, buy,
      rent and stream content.
    </p>
  ),
  apis: [{ url: "https://www.themoviedb.org/documentation/api", name: "TMDB" }],
  third_party: [
    { url: "https://www.youtube.com/", name: "YouTube" },
    { url: "https://react-icons.github.io/react-icons/", name: "React icons" },
    {
      url: "https://v5.reactrouter.com/web/guides/quick-start",
      name: "React router",
    },
    { url: "https://react-query.tanstack.com/", name: "React query" },
  ],
  project__url: "https://pux-movies.netlify.app/",
  repo__url: "https://github.com/Dangereye/Movies",
};
