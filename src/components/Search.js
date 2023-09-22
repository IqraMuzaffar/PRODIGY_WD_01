import React  from "react";

function Search({handleClick, handleKey}){
    return (
      <>
        <div className="searchbar-container"></div>
        <div className="search">
          <span>
            <input onKeyDown={handleKey} type="text" placeholder="Enter City ..."></input>
          </span>
          <button  onClick={handleClick} className="search-button"> °F </button>
        </div>
      </>
    );
}

export default Search;


