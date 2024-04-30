import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
      <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Raclette organic raw denim irony lyft same. Pickled solarpunk lyft
            dreamcatcher. Bicycle rights affogato retro squid pour-over.
            Letterpress cray listicle chartreuse, hashtag cupping chambray
            gastropub flannel authentic biodiesel bodega boys.
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};



export default Landing;
