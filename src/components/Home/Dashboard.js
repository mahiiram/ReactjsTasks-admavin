import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
function Dashboard() {
  return (
    <div className="home-dashboard">
        <div className="dash">

        <div className="title">      
           <h1>Tasks</h1>
      </div>
      <div className="task-listings">
          <Link className="dashLink" to="/elementTransfer">
            <h6>Element Transfer</h6>
          </Link>
          <Link className="dashLink" to={"/nestedComponents"}>
            <h6>Nested List component</h6>
          </Link>
          <Link className="dashLink" to={"/infiniteScroll"}>
            <h6>Infinite scroll</h6>
          </Link>
          <Link className="dashLink" to={"/hitIt"}>
            <h6>Hit It (Game)</h6>
          </Link>
          <Link className="dashLink" to={"/splitBox"}>
            <h6>Split Box</h6>
          </Link>
        </div>
        </div>
      
    </div>
  );
}

export default Dashboard;