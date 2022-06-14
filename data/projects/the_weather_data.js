export const the_weather = {
  image: "/img/portfolio/the-weather-project.jpg",
  date: "Mar 2021",
  name: "The Weather",
  tech: [
    { img: "/svg/html5.svg", name: "HTML5", width: "34.29", height: "40" },
    { img: "/svg/css3.svg", name: "CSS3", width: "34.29", height: "40" },
    { img: "/svg/sass.svg", name: "SCSS", width: "53.38", height: "40" },
    { img: "/svg/js.svg", name: "JavaScript", width: "40", height: "40" },
    { img: "/svg/react.svg", name: "ReactJS", width: "45.71", height: "40" },
  ],
  description: (
    <p className="body-text">
      Check the forecast where you are - using geolocation. Alternatively,
      perform a manual search - anywhere else! Forecasts include conditions,
      precipitation and wind - displayed hourly, in a format that suits you. The
      presentation includes dynamic background images, courtesy of Unsplash -
      which match (somewhat reliably) current weather conditions.
    </p>
  ),
  third_party: [
    { url: "https://www.weatherapi.com/", name: "Weather" },
    { url: "https://unsplash.com/developers", name: "Unsplash" },
    { url: "https://react-icons.github.io/react-icons/", name: "React icons" },
    {
      url: "https://v5.reactrouter.com/web/guides/quick-start",
      name: "React router",
    },
  ],
  project__url: "https://pux-the-weather.netlify.app/",
  repo__url: "https://github.com/Dangereye/the-weather",
};
