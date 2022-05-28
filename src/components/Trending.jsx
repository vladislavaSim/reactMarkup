import React from 'react';
import ReadMoreLink from "./ReadMoreLink";
import TrendingCard from "./TrendingCard";

const Trending = () => {
    return (
        <div className="trending">
            <div className="destinations-head">
                <h4 className="destinations-title">Trending stories</h4>
                <a href="#" className="destinations-more">View all ></a>
            </div>
            <div className="trending-blogs">
                <TrendingCard cardImg='trending-img1'
                              cardTitle='The many benefits of taking a healing holiday'
                              cardText='Helaing holidays’ are on the rise
                        tohelp maximise your health and happines...' />
                <TrendingCard cardImg='trending-img2'
                              cardTitle='The best Kyoto restaurant to try Japanese food'
                              cardText=' From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
                       to visit...' />
                <TrendingCard cardImg='trending-img3'
                              cardTitle='Skip Chichen Itza and head to this remote Yucatan'
                              cardText=' It’s remote and challenging to get,
                        but braving the jungle and exploring
                       these ruins without the...' />
                <TrendingCard cardImg='trending-img4'
                              cardTitle='Surf’s up at these beginner spots around the world'
                              cardText=' If learning to surf has in on your to-
                       do list for a while, the good news' />
            </div>
        </div>
    );
};

export default Trending;