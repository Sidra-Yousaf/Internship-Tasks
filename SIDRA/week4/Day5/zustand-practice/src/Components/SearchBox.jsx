import React, { useState } from 'react'
import useStore from '../store/Mystore';
import close from '../../src/assets/images/icon-remove.svg'

const SearchBox = () => {
    const { deleteKeyword, clearAll, filterKeywords } =
    useStore((state) => state);
  return (
    <div className="header-container">
      <ul>
        {filterKeywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <button className="close" onClick={() => deleteKeyword(key)}>
                <img src={close} alt="" />
              </button>
            </li>
          );
        })}
        <a href="/#" onClick={() => clearAll()}>
          Clear
        </a>
      </ul>
    </div>
  )
}

export default SearchBox