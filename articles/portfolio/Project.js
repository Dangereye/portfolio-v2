import Image from "next/image";
import Button from "../../components/Button";

export default function Project({ project }) {
  console.log(project);
  return (
    <div className="project">
      <div className="project__img">
        <Image src={project.image} layout="fill" alt={project.name} />
      </div>
      <div className="project__details">
        <div className="article-heading-lead">{project.date}</div>
        <h2 className="article-heading">{project.name}</h2>
        <div className="project__tech">
          {project.tech.map((icon, i) => (
            <div className="project__tech__icon">{icon}</div>
          ))}
        </div>
        <div className="project__description">{project.description}</div>
        <div className="project__third-party">
          {project.third_party.map((item, i) => (
            <div className="project__third-party__item">{item}</div>
          ))}
        </div>
        <div className="btns"></div>
        <Button />
        <Button />
      </div>
    </div>
  );
}

Project.defaultProps = {
  project: {
    image: "/../../public/img/games-project.jpg",
    date: "2022",
    name: "Games",
    tech: [],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, doloremque facilis. Omnis quidem ad obcaecati quibusdam dolorem. Velit nam at et porro vitae, sequi, ullam dolorum quibusdam nobis, nihil molestias! Minus ullam velit labore. Nihil officiis aliquid beatae aut! Minus eius fugiat, nemo nisi perspiciatis consectetur animi dolore voluptate ea?",
    third_party: [],
  },
};
