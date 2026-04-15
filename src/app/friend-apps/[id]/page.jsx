// "use client";

import FriendsToggleButton from "@/components/app/FriendsToggleButton";
import Image from "next/image";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosArchive } from "react-icons/io";
import { LuBellRing } from "react-icons/lu";

const friendsPromise = async function () {
  const res = await fetch("http://localhost:3000/friends.json");
  const apps = await res.json();
  return apps;
};

const FriendsDetailPage = async ({ params }) => {
  const apps = await friendsPromise();

  console.log(apps, " apps detail data");

  const { id } = await params;
  console.log(id, "id  apps details");

  const app = apps.find((app) => app.id == id);

  console.log(app, "app details");

  //   console.log("name ", timeline);

  return (
    <div className="container mx-auto ">
      <h1>Friends Detail Page</h1>
      <p>This is the detail page for a specific friend.App ID: {app.id} </p>
      {/* detail Card item */}
      <div
        className="max-w-5xl mx-auto p-6  min-h-screen font-sans
       text-slate-800"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* left column */}
          <div className="md:col-span-4 space-y-5">
            <div
              className="bg-white rounded-xl p-8 shadow-sm border
             border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                <Image
                  src={app.picture}
                  alt={app.name}
                  className="rounded-full"
                  width={64}
                  height={64}
                />
              </div>
              <h1 className="text-2xl font-bold text-green-700">{app.name}</h1>
              {/* Tags & Status */}
              <div className="flex items-center justify-center gap-2 py-3">
                <div className="badge badge-secondary">NEW</div>
                <div className="flex gap-2">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
              <p className="text-gray-600">Former colleague, great mentor</p>
              <p className="text-gray-600">Preferred: {app.email}</p>
            </div>
            <div className="space-y-2">
              <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 flex items-center justify-center gap-3 transition-colors">
                <LuBellRing />
                <span className="font-semibold text-slate-700">
                  Snooze 2 Weeks
                </span>
              </button>
              <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 flex items-center justify-center gap-3 transition-colors">
                <IoIosArchive />
                <span className="font-semibold text-slate-700">Archive</span>
              </button>
              <button className="w-full bg-white hover:bg-red-50 border border-gray-200 rounded-lg py-3 px-4 flex items-center justify-center gap-3 transition-colors group">
                <FaTrashAlt />
                <span className="font-semibold text-red-500">Delete</span>
              </button>
            </div>
          </div>

          {/* Right column */}
          <div className="md:col-span-8  space-y-5  ">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div
                className="bg-white p-6 rounded-xl shadow-sm border
               border-gray-100 text-center"
              >
                <div className="text-3xl font-bold text-slate-700">
                  {app.days_since_contact}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  Days Since Contact
                </div>
              </div>
              <div
                className="bg-white p-6 rounded-xl 
              shadow-sm border border-gray-100 text-center"
              >
                <div className="text-3xl font-bold text-slate-700">
                  {app.goal}
                </div>
                <div
                  className="text-sm text-slate-400
                 mt-1"
                >
                  Goal (Day)
                </div>
              </div>
              <div
                className="bg-white p-6 rounded-xl 
              shadow-sm border border-gray-100 text-center"
              >
                <div className="text-2xl font-bold text-emerald-900">
                  {app.next_due_date}
                </div>
                <div className="text-sm text-slate-400 mt-1">Next Due</div>
              </div>
            </div>

            {/* Relationship Goal */}
            <div
              className="bg-white p-6 rounded-xl shadow-sm border
             border-gray-100 flex justify-between items-start"
            >
              <div>
                <h3 className="text-lg font-bold text-emerald-900 mb-4">
                  Relationship Goal
                </h3>
                <p className="text-slate-500">
                  Connect every
                  <span className="font-bold text-slate-800">
                    {app.days}
                  </span>{" "}
                  days
                </p>
              </div>
              <button
                className="bg-gray-50 hover:bg-gray-100
               text-slate-600 px-4 py-1.5 rounded-md border
                border-gray-200 text-sm font-medium"
              >
                Edit
              </button>
            </div>

            {/* Quick Check-In */}
            <div
              className="bg-white p-6 rounded-xl shadow-sm border
             border-gray-100"
            >
              <h3 className="text-lg font-bold text-emerald-900 mb-6">
                Quick Check-In
              </h3>

              {/* button */}
              <FriendsToggleButton app={app} />
            </div>
          </div>
        </div>
      </div>
      {/* detail Card item   */}
    </div>
  );
};

export default FriendsDetailPage;
