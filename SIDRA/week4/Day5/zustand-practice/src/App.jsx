import React, { useState } from "react";
import "./index.css";
import Job from "./Components/Job";
import data from "./Components/data.json";
import useStore from "./store/Mystore";

function App() {
  const jobs = useStore((state) => state.jobs);
  const selectedFilters = useStore((state) => state.selectedFilters);
  const setFilters = useStore((state) => state.setFilters);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter jobs based on selected filters and search query
  const filteredJobs = jobs.filter((job) => {
    const roleMatch = selectedFilters.role
      ? job.role === selectedFilters.role
      : true;
      const languageMatch = selectedFilters.languages
      ? job.languages.includes(selectedFilters.languages)
      : true;
    const toolMatch = selectedFilters.tools
      ? job.tools.includes(selectedFilters.tools)
      : true;
    const levelMatch = selectedFilters.level
      ? job.level === selectedFilters.level
      : true;
    const searchMatch =
      searchQuery.length > 0
        ? job.position.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

    return roleMatch && languageMatch && levelMatch && toolMatch && searchMatch;
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search job position"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            width: "80%",
            borderRadius: "3px",
            padding: "10px",
            outline: "none",
            border: "none",
          }}
        />
      </div>

      {filteredJobs.map((element) => {
        return (
          <Job
            dep={element.dep}
            logo={element.logo}
            isNew={element.isNew}
            featured={element.featured}
            position={element.position}
            role={element.role}
            level={element.level}
            postedAt={element.postedAt}
            contract={element.contract}
            location={element.location}
            languages={element.languages}
            tools={element.tools}
            key={element.id}
          />
        );
      })}
    </>
  );
}

export default App;
