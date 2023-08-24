import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="text-black font-bold text-xl">
                Welcome to The Good FoodStore
              </span>
              <br />
              Your Ultimate Foodie Destination
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Indulge in a culinary journey like no other with Gourmet Delights,
              your one-stop destination for the finest selection of delectable
              food products. From savory snacks to artisanal sweets, our online
              store is a paradise for food enthusiasts who appreciate the finer
              things in life.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="text-black font-bold text-xl">
                Treat Yourself or Surprise Someone Special
              </span>
              <br />
              Whether you're looking to treat yourself to a gourmet experience
              or searching for the perfect gift for a food-loving friend, Gourmet
              Delights has something for every occasion. Explore our carefully
              curated gift sets, perfect for celebrating birthdays, anniversaries,
              holidays, and more.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <span className="text-black font-bold text-xl">
                Delivered to Your Doorstep
              </span>
              <br />
              Experience the convenience of having gourmet delicacies delivered
              right to your doorstep. No matter where you are, our efficient
              delivery network ensures that you can enjoy our carefully curated
              selection of food products without leaving the comfort of your home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
