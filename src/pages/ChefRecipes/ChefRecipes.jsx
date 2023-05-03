import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./chefRecipes.css";
import { GiEternalLove } from "react-icons/gi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Rating from "react-rating";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChefRecipes = () => {
  const recipes = useLoaderData();
  const {
    chef_name,
    bio,
    chef_picture,
    likes,
    number_of_recipes,
    recipe,
    years_of_experience,
  } = recipes;

  const handleFavoriteBtn = (event) => {
    toast.success("Added Favorite");
    event.currentTarget.disabled = true;
  };

  return (
    <>
      <section className="recipesBanner">
        <div className="w-full md:w-4/5 mx-auto">
          <div className="flex flex-col items-center py-10 justify-center">
            <div>
              <LazyLoadImage
                className="w-64 h-64 mb-5 border-3 border-[#fb824ab2] rounded-full  shadow-blue-300 shadow-md"
                src={chef_picture}
                effect="blur"
                alt="Chef Picture"
              />
            </div>
            <div className="w-full lg:w-3/5 xl:w-3/5 2xl:w-1/2 px-3 lg:px-0 mx-auto text-center">
              <p className="text-5xl font-bold text-white">I'am {chef_name}</p>
              <p className="text-lg mt-2 text-white">{bio}</p>
              <div className="text-center flex gap-6 justify-center mt-2 text-white">
                <span className="text-[#FB834A]">Likes: {likes}</span>
                <span className="text-[#FB834A]">
                  Number of Recipes: {number_of_recipes}
                </span>
                <span className="text-[#FB834A]">
                  Years of Experience: {years_of_experience}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes Card */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 w-full px-3 lg:px-0 lg:w-4/5 mx-auto gap-5 my-14">
        {recipe.map((sr) => (
          <div
            key={sr?.id}
            className="card  border border-[#fb824a4f] card-compact w-full bg-base-100 shadow-xl"
          >
            <figure className="h-60">
              <LazyLoadImage
                className="w-full "
                src={sr?.recipe_img}
                effect="blur"
                alt="Chef Picture"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold text-black">
                {sr?.recipe_name}
              </h2>
              <div className="">
                <ul className="ml-6">
                  <p className="text-xl font-semibold underline">
                    Ingredients:{" "}
                  </p>
                  {sr?.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-base list-disc mb-1">
                      {ingredient}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 ml-6">
                  <p className="text-xl font-semibold underline">
                    Cooking Method:{" "}
                  </p>
                  {sr?.method.map((sm, index) => (
                    <li key={index} className="text-base list-disc mb-1">
                      <strong>Step-{index + 1}:</strong> {sm}
                    </li>
                  ))}
                </ul>
                <div className="flex mt-5 items-center ">
                  <div className="flex-grow">
                    <span className="text-base mr-2">Rating: {sr?.rating}</span>
                    <Rating
                      readonly
                      className="text-warning text-base"
                      placeholderRating={sr?.rating}
                      emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                      placeholderSymbol={<FaStar></FaStar>}
                      fullSymbol={<FaStar></FaStar>}
                    />
                  </div>
                  <button
                    onClick={handleFavoriteBtn}
                    className="btn btn-error text-white"
                  >
                    Favorite{" "}
                    <GiEternalLove className="ml-2 text-lg"></GiEternalLove>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Toaster />
    </>
  );
};
// probirghosh.ph@gmail.com
export default ChefRecipes;
