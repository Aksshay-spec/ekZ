"use client";

import React from "react";
import { TimelineCard } from "@/components/common/cards";
import SectionHeader from "@/components/common/SectionHeader";
import { ShootingStars } from "@/components/ui/shadcn-io/shooting-stars/index";

export default function SaptaarTimelines() {
  const pinkBlue = "from-red-400 via-blue-500 to-pink-400";
  const yellowPink = "from-yellow-200 via-pink-300 to-pink-400";
  return (
    <section className="relative bg-black py-20 px-6 sm:px-10 lg:px-12 text-center w-full overflow-hidden">
      {/* Background with stars */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_70%)]" />
        <div className="shooting-stars-bg absolute inset-0" />
      </div>

      <div className="relative max-w-screen-xl mx-auto w-[90%] md:w-[80%]">
        {/* <h2 className="text-4xl font-playfair font-extrabold text-white mb-4">
          OUR JOURNEY
        </h2>
        <div className="w-32 h-2 bg-yellow-400 mx-auto rounded-full mb-12"></div> */}

        <SectionHeader
          title="OUR JOURNEY"
          titleClassName="after:bg-yellow-400 text-white"
        />

        {/* TIMELINES */}
        <div className="flex flex-col gap-16">
          {/* ---------- 2012 ---------- */}
          <TimelineCard
            align="left"
            circleContent={
              <span className="text-white font-bold text-2xl">2012</span>
            }
            circleVariant="primary"
            title="SAPTAAR launched"
            cardProps={{
              gradient: "linear-gradient(to right, #7B6EF6, #F178B6)",
              textColor: "#fff",
              radiusTopLeft: "0px",
              radiusBottomLeft: "0px",
              radiusTopRight: "24px",
              radiusBottomRight: "24px",
              className: "py-8 pl-2 pr-2 font-semibold shadow-xl",
            }}
          />

          {/* ---------- 2015 ---------- */}
          <TimelineCard
            align="right"
            circleContent={
              <span className="text-white font-bold text-2xl">2015</span>
            }
            circleVariant="secondary"
            title="FMCG division introduced"
            cardProps={{
              gradient: "linear-gradient(to right, #FFF2B6, #FDBAF8)",
              textColor: "#000",
              radiusTopLeft: "24px",
              radiusBottomLeft: "24px",
              radiusTopRight: "0px",
              radiusBottomRight: "0px",
              className: "py-8 pl-2 pr-2 font-semibold shadow-xl",
            }}
          />

          {/* ---------- 2018 ---------- */}
          <TimelineCard
            align="left"
            circleContent={
              <span className="text-white font-bold text-2xl">2018</span>
            }
            circleVariant="primary"
            title="1M+ electrical units sold"
            cardProps={{
              gradient: "linear-gradient(to right, #7B6EF6, #F178B6)",
              textColor: "#fff",
              radiusTopLeft: "0px",
              radiusBottomLeft: "0px",
              radiusTopRight: "24px",
              radiusBottomRight: "24px",
              className: "py-8 pl-2 pr-2 font-semibold shadow-xl",
            }}
          />

          {/* ---------- 2020 ---------- */}
          <TimelineCard
            align="right"
            circleContent={
              <span className="text-white font-bold text-2xl">2020</span>
            }
            circleVariant="custom"
            customCircleColor="#20D6C3"
            title="2M+ FMCG packs distributed"
            cardProps={{
              gradient: "linear-gradient(to right, #FFF2B6, #FDBAF8)",
              textColor: "#000",
              radiusTopLeft: "24px",
              radiusBottomLeft: "24px",
              radiusTopRight: "0px",
              radiusBottomRight: "0px",
              className: "py-8 pl-2 pr-2 font-semibold shadow-xl",
            }}
          />

          {/* ---------- 2021 ---------- */}
          <TimelineCard
            align="left"
            circleContent={
              <span className="text-white font-bold text-2xl">2021</span>
            }
            circleVariant="primary"
            title="Vendor retention hits 87%"
            cardProps={{
              gradient: "linear-gradient(to right, #7B6EF6, #F178B6)",
              textColor: "#fff",
              radiusTopLeft: "0px",
              radiusBottomLeft: "0px",
              radiusTopRight: "24px",
              radiusBottomRight: "24px",
              className: "py-8 pl-2 pr-2 font-semibold shadow-xl",
            }}
          />
        </div>
      </div>

      {/* Multiple shooting star layers with different colors and speeds */}
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#FF0099"
        trailColor="#FFB800"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .shooting-stars-bg {
          background-image:
            radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 50px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 160px 120px, #ddd, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: shooting-stars-twinkle 4s ease-in-out infinite;
          opacity: 0.3;
        }
        @keyframes shooting-stars-twinkle {
          0% { opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { opacity: 0.3; }
        }
      `,
        }}
      />
    </section>
  );
}
