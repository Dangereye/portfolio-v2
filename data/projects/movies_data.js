export const movies = {
  image: "/img/movies-project.jpg",
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
      Explore millions of movies, television shows, cast & crew. Check out new
      upcoming releases, or re-discover old favourites. View trailers, read
      biographies, learn who or what is popular - right now! You'll probably
      find a few gems along the way - that you didn't know existed!
      <br />
      <span>Caution</span> - can cause unexplained time loss.
    </p>
  ),
  third_party: [
    { url: "https://www.themoviedb.org/documentation/api", name: "#tmdb-api" },
    { url: "https://www.youtube.com/", name: "#youtube" },
    { url: "https://react-icons.github.io/react-icons/", name: "#react-icons" },
    {
      url: "https://v5.reactrouter.com/web/guides/quick-start",
      name: "#react-router",
    },
    { url: "https://react-query.tanstack.com/", name: "#react-query" },
  ],
  project__url: "https://pux-movies.netlify.app/",
  repo__url: "https://github.com/Dangereye/Movies",
};
