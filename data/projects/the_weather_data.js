export const the_weather = {
  image: "/img/portfolio/the-weather-project.jpg",
  date: "Mar 2021",
  name: "The Weather",
  tech: [
    { image: "/svg/html5.svg", name: "HTML5", width: "34.29", height: "40" },
    { image: "/svg/css3.svg", name: "CSS3", width: "34.29", height: "40" },
    { image: "/svg/sass.svg", name: "SCSS", width: "53.38", height: "40" },
    { image: "/svg/js.svg", name: "JavaScript", width: "40", height: "40" },
    { image: "/svg/react.svg", name: "ReactJS", width: "45.71", height: "40" },
  ],
  description: (
    <p className="body-text">
      Check the forecast where you are - using Geolocation. Alternatively,
      you're able to perform manual searches - anywhere else! Forecasts include
      conditions, precipitation and wind (displayed hourly) in a format that
      suits you. The presentation includes dynamic background images, courtesy
      of Unsplash - which match (somewhat reliably) current weather conditions.
    </p>
  ),
  apis: [
    { name: "Weather", anchor: "https://www.weatherapi.com/" },
    { name: "Unsplash", anchor: "https://unsplash.com/developers" },
    {
      name: "Local storage",
      anchor:
        "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
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
