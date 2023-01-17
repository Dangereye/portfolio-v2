export const starWars = {
  image: "/img/portfolio/star-wars-project.webp",
  date: "Oct 2022",
  name: "Star Wars",
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
      name: "TypeScript: 4.8.4",
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
      Explore the galaxy! Discover films, people, species, planets, starships
      and vehicles from the first seven (at the time of writing) films. Features
      include infinite data loading on scroll, data caching via React Query and
      bespoke (not included with data) imagery. Utilising a simple and somewhat
      familiar API - this project was an opportunity to practice and develop my
      understanding of TypeScript after recently taking my first steps with it.
    </p>
  ),
  apis: [
    { name: "SWAPI", anchor: "https://swapi.py4e.com/" },
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
    {
      name: "React Router",
      anchor: "https://reactrouter.com/en/main",
    },
    {
      name: "React Query",
      anchor: "https://tanstack.com/query/v4/docs/react/overview",
    },
  ],
  project__anchor: "https://star-wars-ts.netlify.app/",
  repo__anchor: "https://github.com/Dangereye/star-wars-ts",
};
