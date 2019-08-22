import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import StyledHero from "../components/StyledHero";

export default function Home() {
  return (
    <>
      <StyledHero img={heroHome}>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </StyledHero>
      <Services />
      <FeaturedRooms />
    </>
  );
}

Hero.defaultProps = {
  hero: "defaultHero"
};
