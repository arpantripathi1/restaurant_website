import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/bg-4.jpeg" ;
import "./Home.css" ;


const Home = () => {
    return (
      <Layout>
        <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
          <div className="headerContainer">
            <h1>The Royal Plate</h1>
            <p>
              Best Food In <spam>India</spam>
            </p>
            <Link to={"/menu"}>
              <button>ORDER NOW</button>
            </Link>
          </div>
        </div>
      </Layout>
    );
};

export default Home ;