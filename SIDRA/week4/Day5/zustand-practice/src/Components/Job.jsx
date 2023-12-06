import React from "react";
import photo from "../../src/assets/images/photosnap.png";

const Job = ({
  dep,
  logo,
  isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  return (
    <>
      <div className="container">
        <div className="container-logo">
          <img
            src={logo}
            alt=""
            srcSet=""
            width={100}
            height={100}
            id="logoImg"
          />
        </div>
        <div className="sub-container">
          <div className="sub-sub-container1">
            <ul className="first-list">
              <li>{dep}</li>
              <li>{isNew ? 'New!' : ''}</li>
              <li>{featured ? 'Featured' : ''}</li>
            </ul>
            <ul className="second-list">
              <li>{position}</li>
             
            </ul>
            <ul className="third-list">
              <li>{postedAt}</li>
              <li>{contract}</li>
              <li>{location}</li>
            
            </ul>
          </div>
          <div className="sub-sub-container2">
            <ul className="sub-2-list">
              <li>{role}</li>
              <li>{level}</li>
              {languages.map((lang, index) => {
                return <li key={index}>{lang}</li>;
              })}
              <li>{tools}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
