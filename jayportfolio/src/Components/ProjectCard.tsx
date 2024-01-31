import React from "react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  image,
  link,
}) => {
  return (
    <a
      href={link}
      key={image}
      className="sm:w-1/2 w-100 p-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex relative">
        <img
          src={process.env.PUBLIC_URL + `/${image}`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt={title}
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
            {subtitle}
          </h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {title}
          </h1>
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
