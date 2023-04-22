import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../../../NewsCard/NewsCard';

const Categories = () => {
    const {categoryId}= useParams()

    const categoriesNews = useLoaderData()
    console.log(categoriesNews[0]);
    


    return (
        <div>
            {
                categoriesNews.map(categoryNews => <NewsCard key={categoryNews._id} categoryNews={categoryNews}></NewsCard>)
            }   
        </div>
    );
};

export default Categories;