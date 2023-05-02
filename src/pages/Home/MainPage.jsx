import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination } from "swiper";
import chefClassIcon from "../../assets/chef-class-icon.png";
import achievementImg from "../../assets/achievement-img.jpg";
import { FaAward, FaAngellist, FaPiedPiperAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const MainPage = () => {
  const sliderData = useLoaderData();

  return (
    <>
      {/* Banner Section */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Pagination, Autoplay]}
        className="mySwiper"
      >
        {sliderData?.map((sd) => (
          <SwiperSlide className="" key={sd?.id}>
            <section className="grid grid-cols-3">
              <div className="px-4 flex flex-col justify-center bg-red-100">
                <h2 className="text-7xl text-black tracking-tighter font-bold">
                  {sd?.slider_title}
                </h2>
                <p className="text-xl mt-1 text-[#FB834A]">{sd?.slider_desc}</p>
              </div>
              <img className="col-span-2" src={sd?.slider_img} alt="" />
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Chef Section */}
      <section className="my-14">
        <div>
          <h2 className="text-center text-7xl text-black tracking-tighter font-bold">
            Our Chef
          </h2>
          <p className="text-center w-1/2 mx-auto mb-8">
            A chef is a culinary professional who specializes in the preparation
            of food. They are responsible for managing and directing the kitchen
            staff, creating menus, designing recipes, sourcing ingredients, and
            ensuring the quality and presentation of the dishes served.{" "}
          </p>
        </div>
        <div className="grid grid-cols-3 w-4/5 mx-auto gap-5">
          {sliderData?.map((sd) => (
            <div
              key={sd?.id}
              className="card border card-compact w-full bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  className="w-96 h-60"
                  src={sd?.chef_picture}
                  alt="Chef img"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Mr. {sd?.chef_name}</h2>
                <div className="flex border py-2 items-center justify-center ">
                  <p className="flex flex-col border-r items-center">
                    <span>Years of experience: </span>
                    <span>{sd?.years_of_experience}</span>
                  </p>
                  <p className="flex flex-col border-r items-center">
                    <span>Recipes number: </span>
                    <span>{sd?.number_of_recipes}</span>
                  </p>
                  <p className="flex flex-col items-center">
                    <span>Likes: </span>
                    <span>{sd?.likes}</span>
                  </p>
                </div>
                <div className="card-actions">
                  <Link to={`/recipes/${sd.id}`} className="w-full">
                    <button className="btn w-full btn-primary bg-[#FB834A] mt-3 border-[#FB834A] hover:bg-[#fb824ad0] hover:border-[#FB834A]">
                      View Recipes Button
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievement Section */}
      <section className="my-10">
        <div className="grid grid-cols-2 items-center gap-8">
          <div>
            <img src={achievementImg} alt="Recipe Maker Img" />
          </div>
          <div className="pr-5">
            <div className="">
              <p className="text-[#FB834A]">OUR ACHIEVEMENTS</p>
              <h2 className=" my-4 text-5xl text-black tracking-tighter font-bold">
                Hello, Welcome to Kruton!
              </h2>
            </div>
            <div className="flex gap-3 items-start mb-6">
              <p className="text-4xl mt-2 text-[#FB834A]">
                <FaAward></FaAward>
              </p>
              <div>
                <h4 className="text-[#FB834A] text-2xl mb-2">
                  We Are Winners of 50 Competitions
                </h4>
                <p>
                  Salami corned beef short loin sausage meatloaf fatback
                  andouille kielbasa frankfurter sirloin alcatra beef ribs.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start mb-6">
              <p className="text-4xl mt-2 text-[#FB834A]">
                <FaPiedPiperAlt></FaPiedPiperAlt>
              </p>
              <div>
                <h4 className="text-[#FB834A] text-2xl mb-2">
                  27 Professional Chefs-Trainers
                </h4>
                <p>
                  Ham hock jerky tail kevin, buffalo shoulder doner venison
                  leberkas pig beef burgdoggen flank ribeye picanha burgdoggen.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <p className="text-4xl mt-2 text-[#FB834A]">
                <FaAngellist></FaAngellist>
              </p>
              <div>
                <h4 className="text-[#FB834A] text-2xl mb-2">
                  Guaranteed Fast Employment
                </h4>
                <p>
                  Ball tip landjaeger pork chop, kielbasa shank filet mignon cow
                  burgdoggen cupim buffalo porchetta. Ribeye beef ribs flank.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Class Section */}
      <section className="my-10">
        <div className=" text-center w-1/2 mx-auto">
          <p className="text-[#FB834A]">ROUND THE GLOBE</p>
          <h2 className="text-center my-4 text-7xl text-black tracking-tighter font-bold">
            Our Cooking Classes
          </h2>
          <img className="mx-auto mb-8" src={chefClassIcon} alt="" />
        </div>
        <div className="grid grid-cols-3 w-4/5 mx-auto gap-5">
          {sliderData.slice(3)?.map((sd) => (
            <div
              key={sd?.id}
              className="card card-compact mb-0 w-full bg-base-100 shadow-xl"
            >
              <div className="relative ">
                <figure>
                  <img
                    className="w-96 h-60"
                    src={sd?.chef_class_picture}
                    alt="Chef img"
                  />
                </figure>
                <h2 className=" mb-0 absolute bottom-0 w-full text-white text-xl pl-4 py-3 bg-[rgba(251,130,74,0.85)]">
                  Mr. {sd?.chef_name}
                </h2>
                <img
                  src={sd?.chef_picture}
                  className="w-16 border-4 border-[#FB834A] h-16 rounded-full -bottom-7 right-4 absolute"
                  alt=""
                />
              </div>
              <div className="card-body mt-5">
                <h5 className="text-2xl text-black font-semibold">
                  {sd?.chef_class_title}
                </h5>
                <p className="">
                  Short ribs fatback kevin spare ribs biltong pig bacon corned
                  beef kielbasa porchetta.{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainPage;
