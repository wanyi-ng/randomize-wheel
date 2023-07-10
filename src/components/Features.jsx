import React, { useRef } from "react";
import {
  ChartPieIcon,
  ArrowPathRoundedSquareIcon,
  CloudArrowDownIcon,
} from "@heroicons/react/24/solid";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  {
    name: "Customizable Wheels",
    description:
      "Create your own personalized configurations for any decision-making scenario.",
    // From choosing a restaurant for dinner to picking a vacation destination, the possibilities are endless.
    icon: ChartPieIcon,
  },
  {
    name: "Random Selection",
    description:
      "With a simple spin, Randomizer Wheel will randomly select an option from your customized wheel.",
    // Let Randomizer Wheel take the burden of decision-making off your shoulders. , injecting excitement and unpredictability into your choices
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    name: "Save and share",
    description:
      "Save your favorite wheel configurations for future use and share them with friends and family.",
    // Whether you\'re collaborating on a group project or planning a surprise activity, Randomizer Wheel makes decision-making a collaborative and engaging experience.
    icon: CloudArrowDownIcon,
  },
];

export default function Features() {
  let featuresRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: featuresRef,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={featuresRef}
      id="features"
      className="bg-white overflow-hidden py-24 sm:py-32"
    >
      <div style={{ y }} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Decide faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Input your options and let the app work its magic.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover the thrill of embracing the unexpected with Randomizer
                Wheel, your ultimate companion for making random choices! Say
                goodbye to decision fatigue and hello to the joy of uncertainty.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </section>
  );
}
