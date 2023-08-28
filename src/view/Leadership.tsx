import React from "react";
import { LeadershipModel } from "../model/LeadershipModel";
import useFadeInOnScroll from "../Hooks/UseFadeInOnScroll";

const Leadership = () => {
  const ref = useFadeInOnScroll();

  const leadershipData: LeadershipModel[] = [
    new LeadershipModel(
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "John Doe",
      "CEO"
    ),
    new LeadershipModel(
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "Jane Smith",
      "CTO"
    ),
    new LeadershipModel(
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "Jane Smith",
      "CTO"
    ),
    new LeadershipModel(
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "Jane Smith",
      "CTO"
    ),
  ];

  return (
    <div ref={ref} className="fade-in">
      <div id="plantel" className="bg-white py-24 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Conheça a direção
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
          <ul
            role="list"
            className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 sm:mx-auto"
          >
            {leadershipData.map((leader, index) => (
              <li key={index}>
                <div className="flex justify-center flex-col items-center sm:flex-row sm:items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={leader.image}
                    alt={leader.name}
                  />
                  <div className="mt-4 sm:mt-0">
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {leader.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
