import React from "react";
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200">
      <h3 className="text-lg font-bold">{project.name}</h3>
      <p className="text-sm text-gray-500">{project.category}</p>
      <div className="flex items-center mt-2">
        <div className="w-full bg-gray-200 rounded h-2.5">
          <div
            className={`h-2.5 rounded ${
              project.progress > 60
                ? "bg-green-500"
                : project.progress > 30
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600">📅 {project.date}</p>
      <p
        className={`mt-1 text-sm font-semibold ${
          project.status === "On-Track"
            ? "text-green-600"
            : project.status === "At-Risk"
            ? "text-yellow-600"
            : "text-red-600"
        }`}
      >
        {project.status}
      </p>
      <p className="text-blue-500 cursor-pointer mt-2">{project.insights}</p>
    </div>
  );
};
export default ProjectCard;
