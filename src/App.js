import React from "react";
import ProjectList from "./pages/ProjectList";
const App = () => {
  return (
    <div className="container mx-auto flex">
      <aside className="w-1/4 p-6 bg-white shadow-md min-h-screen">
        <nav>
          <ul>
            <li className="text-blue-500 font-bold">📌 Project List</li>
            <li className="text-gray-600">👥 Teams</li>
            <li className="text-gray-600">📋 Tasks</li>
            <li className="text-gray-600">📊 Reports</li>
            <li className="text-gray-600">⚙️ Settings</li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1">
        <ProjectList />
      </main>
    </div>
  );
};
export default App;
