import React from "react";
import "../styles/loading.css"

const Loading = ()=> {
  return (
    <div className="loader">
      <div className="scanner">
        <span>Loading...</span>
      </div>
    </div>
  );
}

export default Loading