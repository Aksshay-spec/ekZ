import React from "react";
import { TimelineCard } from "@/components/ui/cards";

export default function SaptaarSection() {
  return (
    <section className="w-full max-w-[100vw] overflow-x-hidden py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-screen-xl mx-auto"> {/* Center content like container-fluid */}
        <h2 className="text-4xl font-extrabold mb-4">Our Journey</h2>
        <p className="text-lg text-gray-700 mb-10">
          Milestones of SAPTAAR’s growth
        </p>

        <div className="flex flex-col gap-14">
          {/* 2012 */}
          <TimelineCard
            align="left"
            circleContent={<span className="text-white font-bold text-2xl">2012</span>}
            circleVariant="primary"
            title="SAPTAAR launched"
            cardProps={{
              gradient: "linear-gradient(to right, #7B6EF6, #F178B6)",
              textColor: "#fff",
              radiusTopLeft: "0px",
              radiusBottomLeft: "0px",
              radiusTopRight: "24px",
              radiusBottomRight: "24px",
              className: "p-8 font-semibold shadow-lg",
            }}
          />

          {/* 2015 */}
          <TimelineCard
            align="right"
            circleContent={<span className="text-white font-bold text-2xl">2015</span>}
            circleVariant="secondary"
            title="FMCG division introduced"
            cardProps={{
              gradient: "linear-gradient(to right, #FFF2B6, #FDBAF8)",
              textColor: "#000",
              radiusTopLeft: "24px",
              radiusBottomLeft: "24px",
              radiusTopRight: "0px",
              radiusBottomRight: "0px",
              className: "p-8 font-semibold shadow-lg",
            }}
          />

          {/* 2020 */}
          <TimelineCard
            align="left"
            circleContent={<span className="text-white font-bold text-2xl">2020</span>}
            circleVariant="custom"
            customCircleColor="#2F80ED"
            title="Digital transformation initiative launched"
            cardProps={{
              gradient: "linear-gradient(to right, #56CCF2, #2F80ED)",
              textColor: "#fff",
              radiusTopLeft: "0px",
              radiusBottomLeft: "0px",
              radiusTopRight: "24px",
              radiusBottomRight: "24px",
              className: "p-8 font-semibold shadow-lg",
            }}
          />
        </div>
      </div>
    </section>
  );
}
