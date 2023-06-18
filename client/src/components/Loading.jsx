import React from "react";
import "../Styles/loading.css"

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