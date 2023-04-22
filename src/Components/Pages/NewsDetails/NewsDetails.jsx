import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const NewsDetails = () => {
  const singleNews = useLoaderData();
  const { author, details, thumbnail_url, title, category_id } = singleNews;

  return (
    <div className="mb-5">
      <div className="card bg-base-100 shadow-xl">
        {/* <div className="card-header flex items-center px-5 py-4 bg-[#F3F3F3] gap-2">
          
        </div> */}
        <figure className="px-6 pt-10">
          <img
            src={thumbnail_url}
            alt="Shoes"
            className="rounded-3xl aspect-video w-full"
          />
        </figure>
        <h1 className="font-bold text-3xl px-6 mt-4 mb-5">{title}</h1>
        <div className="card-body px-6 py-0">
          <p className="text-justify">{details}</p>
          <Link to={`/categories/${category_id}`} className="my-5">
            <button className="px-2 py-3 bg-red-600 text-white font-semibold rounded-lg">
              All news in this category
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
