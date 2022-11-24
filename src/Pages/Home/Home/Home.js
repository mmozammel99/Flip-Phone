import React from 'react';
import HomeAdvertised from '../HomeAdvertised/HomeAdvertised';
import HomeDownloadApp from '../HomeDownloadApp/HomeDownloadApp';
import HomeProductCategories from '../HomeProductCategories/HomeProductCategories';
import HomeTopBanner from '../HomeTopBanner/HomeTopBanner';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <HomeTopBanner></HomeTopBanner>
            <HomeAdvertised></HomeAdvertised>
            <HomeProductCategories></HomeProductCategories>
            <HomeDownloadApp></HomeDownloadApp>
            <Review></Review>

        </div>
    );
};

export default Home;