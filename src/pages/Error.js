import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Hero hero="errorHero">
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          home page
        </Link>
      </Banner>
    </Hero>
  );
}
