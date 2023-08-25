
export const movies = {
  image: "/img/portfolio/movies-project.webp",
  date: "Dec 2022",
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
      image: "/svg/typescript.svg",
      name: "TypeScript: 4.9.4",
      width: "40",
      height: "40",
    },
    {
      image: "/svg/react.svg",
      name: "React: 18.2.0",
      width: "45.71",
      height: "40",
    },
  ],
  description: (
    <p className="body-text">
      Search and explore millions of movies, television shows and personalities. Browse upcoming releases, rediscover favourites, and stay up-to-date on the latest trends. Use our filters to find exactly what you're looking for, including trailers, teasers, ratings, and reviews. With endless options, you'll never run out of things to watch.
    </p>
  ),
  apis: [
    { name: "TMDB", anchor: "https://www.themoviedb.org/documentation/api" },
    ,
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
    { name: "YouTube", anchor: "https://www.youtube.com/" },
    {
      name: "React icons",
      anchor: "https://react-icons.github.io/react-icons/",
    },
    {
      name: "React router",
      anchor: "https://reactrouter.com/en/main",
    },
    { name: "React query", anchor: "https://tanstack.com/query/latest/" },
  ],
  project__anchor: "https://pux-movies.netlify.app/",
  repo__anchor: "https://github.com/Dangereye/movies-ts",
};
