import React, { useEffect, useState } from 'react';
import Job from './Job';
import useStore from '../store/Mystore';

const Find = () => {
  const [filteredData, setFilteredData] = useState([]);
  const { addFilterKeywords, filterKeywords } = useStore((state) => state);
  const data = useStore((state) => state.data);

  const searchJobs = (searchQuery) => {
    const newData = data.filter((job) => {
      const keywords = [
        job.role,
        job.level,
        ...job.languages,
        ...job.tools,
      ].map((keyword) => keyword.toLowerCase());

      return keywords.some((keyword) =>
        keyword.includes(searchQuery.toLowerCase())
      );
    });

    setFilteredData(newData);
  };

  useEffect(() => {
    if (filterKeywords.length > 0) {
      setFilteredData(data);
    } else {
      setFilteredData([]);
    }
  }, [data, filterKeywords]);

  return (
    <div className="jobs">
      <SearchMe setSearchKeyword={searchJobs} />
      {filteredData.map((job) => (
        <Job key={job.id} {...job} setKeywords={addFilterKeywords} />
      ))}
    </div>
  );
};

export default Find;
