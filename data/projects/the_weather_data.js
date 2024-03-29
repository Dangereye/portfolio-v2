export const the_weather = {
  image: "/img/portfolio/the-weather-project.webp",
  date: "Mar 2021",
  name: "The Weather",
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
      Check the forecast where you are - using Geolocation. Alternatively,
      perform manual searches - elsewhere! Forecasts include conditions,
      precipitation and wind (displayed hourly) in a format that suits you. The
      presentation includes dynamic imagery, courtesy of Unsplash - which
      matches (somewhat reliably) current weather conditions.
    </p>
  ),
  apis: [
    { name: "Weather", anchor: "https://www.weatherapi.com/" },
    { name: "Unsplash", anchor: "https://unsplash.com/developers" },
    {
      name: "Fetch",
      anchor: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
    },
    {
      name: "Geolocation",
      anchor:
        "https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API",
    },
  ],
  third_party: [
    {
      name: "React icons",
      anchor: "https://react-icons.github.io/react-icons/",
    },
    {
      name: "React router",
      anchor: "https://v5.reactrouter.com/web/guides/quick-start",
    },
  ],
  project__anchor: "https://pux-the-weather.netlify.app/",
  repo__anchor: "https://github.com/Dangereye/the-weather",
};
