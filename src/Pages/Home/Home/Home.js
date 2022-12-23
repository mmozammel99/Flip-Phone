import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import Contact from '../Contact/Contact';
import HomeAdvertised from '../HomeAdvertised/HomeAdvertised';
import HomeDownloadApp from '../HomeDownloadApp/HomeDownloadApp';
import HomeProductCategories from '../HomeProductCategories/HomeProductCategories';
import HomeTopBanner from '../HomeTopBanner/HomeTopBanner';
import Review from '../Review/Review';
import Stats from '../Stats/Stats';

const Home = () => {
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('https://resell-one.vercel.app/advertisement')
                const data = await res.json()
                return data
            }
            catch (err) {

            }
        }
    })
console.log(products);


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <HomeTopBanner></HomeTopBanner>
            {
                products.length &&
                <HomeAdvertised
                    products={products}
                    refetch={refetch}
                ></HomeAdvertised>
            }
            <HomeProductCategories></HomeProductCategories>
            <Stats/>
            <Review></Review>
            <HomeDownloadApp></HomeDownloadApp>
            <Contact></Contact>

        </div>
    );
};

export default Home;