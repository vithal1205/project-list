import React, { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const ProjectList = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.status === filter);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Project List</h1>
      <div className="mb-4">
        <button
          onClick={() => setFilter("All")}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
        >
          All
        </button>
        <button
          onClick={() => setFilter("On-Track")}
          className="px-4 py-2 bg-green-500 text-white rounded mr-2"
        >
          On-Track
        </button>
        <button
          onClick={() => setFilter("At-Risk")}
          className="px-4 py-2 bg-yellow-500 text-white rounded mr-2"
        >
          At-Risk
        </button>
        <button
          onClick={() => setFilter("Blocked")}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Blocked
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
};
export default ProjectList;
