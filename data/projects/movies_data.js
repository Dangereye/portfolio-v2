export const movies = {
  image: "/img/portfolio/movies-project.webp",
  date: " Jan 2021",
  name: "Movies",
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
      name: "React: 17.0.1",
      width: "45.71",
      height: "40",
    },
  ],
  description: (
    <p className="body-text">
      Search and explore millions of movies, television shows and people. Peruse
      upcoming releases or re-discover forgotten favourites. Stay up to date
      with who or what is currently popular and trending. Other features include
      trailers, cast biographies and services to watch, buy, rent and stream
      content.
    </p>
  ),
  apis: [
    { name: "TMDB", anchor: "https://www.themoviedb.org/documentation/api" },
    ,
    {
      name: "Fetch",
      anchor: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
    },
  ],
  third_party: [
    { name: "YouTube", anchor: "https://www.youtube.com/" },
    {
      name: "React icons",
      anchor: "https://react-icons.github.io/react-icons/",
    },
    {
      name: "React router",
      anchor: "https://v5.reactrouter.com/web/guides/quick-start",
    },
    { name: "React query", anchor: "https://react-query.tanstack.com/" },
  ],
  project__anchor: "https://pux-movies.netlify.app/",
  repo__anchor: "https://github.com/Dangereye/Movies",
};
