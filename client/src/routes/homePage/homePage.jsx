import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find A Home For You, Not Just A Property.</h1>
          <SearchBar />
          <p>
          Your journey to homeownership starts here. The answer to your real estate needs ends here. 
          Buying a home: the best decision you'll make since sliced bread.
          </p>
          <div className="boxes">
            <div className="box">
              <h1>7+</h1>
              <h2>Years of Happy Homes</h2>
            </div>
            <div className="box">
              <h1>1500+</h1>
              <h2>Houses Sold</h2>
            </div>
            <div className="box">
              <h1>3500+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default HomePage;
