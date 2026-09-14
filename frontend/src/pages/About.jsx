import React from "react";

import { Link } from "react-router-dom";

import { FaShoppingBag, FaShieldAlt, FaTruck, FaHeadset } from "react-icons/fa";

const About = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold uppercase tracking-wider text-sm mb-3">
            About ShopEase
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Shopping Made Simple
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            ShopEase is a modern online shopping platform designed to make
            discovering and purchasing quality products simple, convenient, and
            enjoyable.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
                Who We Are
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Your Everyday Online Store
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                ShopEase brings a wide range of products together in one
                convenient online marketplace. Our goal is to provide a
                straightforward shopping experience where customers can easily
                discover products, compare their options, and manage their
                purchases.
              </p>

              <p className="text-gray-600 leading-relaxed">
                From browsing products to adding items to your cart and
                completing checkout, ShopEase is designed with simplicity,
                convenience, and a smooth user experience in mind.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10">
              <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <FaShoppingBag className="text-3xl text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To create a reliable and easy-to-use online shopping experience
                that puts convenience and customer satisfaction first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
              Why ShopEase
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Built Around Your Shopping Experience
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200">
              <div className="w-14 h-14 mx-auto rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <FaShoppingBag className="text-2xl text-blue-600" />
              </div>

              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Wide Selection
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Explore products across different categories in one place.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200">
              <div className="w-14 h-14 mx-auto rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <FaShieldAlt className="text-2xl text-blue-600" />
              </div>

              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Secure Shopping
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Designed with a secure and reliable shopping experience in mind.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200">
              <div className="w-14 h-14 mx-auto rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <FaTruck className="text-2xl text-blue-600" />
              </div>

              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Convenient
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Browse products and manage your shopping from anywhere.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200">
              <div className="w-14 h-14 mx-auto rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <FaHeadset className="text-2xl text-blue-600" />
              </div>

              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Customer Focused
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                We focus on making every part of the shopping experience simple
                and user-friendly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Shopping?
          </h2>

          <p className="text-gray-600 mb-8">
            Explore our products and find something you'll love.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
