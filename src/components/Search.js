import React  from "react";

function Search(){
    return (
      <>
        <div className="searchbar-container"></div>
        <div className="search">
          <span>
            <input type="text" placeholder="Enter City ..."></input>
          </span>
          <button className="search-button">F </button>
        </div>
      </>
    );
}

export default Search;


