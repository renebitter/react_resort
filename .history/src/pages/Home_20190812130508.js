import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Home() {
    return <Hero>
        <Banner title="luxurious romms" subtitle="deluxe rooms starting at $299"></Banner>
    </Hero>
}

Hero.defaultProps = {
    hero: "defaultHero"
}