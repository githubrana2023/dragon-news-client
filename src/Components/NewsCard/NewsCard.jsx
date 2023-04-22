import React from "react";
import { BsBookmark, BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";
import moment from 'moment';

const NewsCard = ({ categoryNews }) => {
  const {
    _id,
    author,
    details,
    image_url,
    rating,
    thumbnail_url,
    title,
    total_view,
  } = categoryNews;
  return (
    <div className="mb-5">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-header flex items-center px-5 py-4 bg-[#F3F3F3] gap-2">
          <img src={author.img} alt="" className="w-10 rounded-full" />
          <div className="flex items-center justify-between w-full">
            <div>
              <p>{author.name? author.name:'Author Name Not Found '}</p>
              <p>{author.published_date}</p>
            </div>
            <div className="flex items-center gap-3">
              <BsBookmark className="cursor-pointer" />
              <BsShare className="cursor-pointer" />
            </div>
          </div>
        </div>
        <h1 className="font-bold text-3xl px-6 mt-4 mb-5">{title}</h1>
        <figure className="px-6">
          <img
            src={thumbnail_url}
            alt="Shoes"
            className="rounded-3xl aspect-video w-full"
          />
        </figure>
        <div className="card-body px-6">
          <p className="my-5">
            {details.length > 250 ? (
              <span>
                {details.slice(0, 250)}...
                <Link
                  to={`/news/${_id}`}
                  className="text-orange-500 text-base font-semibold hover:underline transition-all"
                >
                  Read More
                </Link>
              </span>
            ) : (
              details
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
