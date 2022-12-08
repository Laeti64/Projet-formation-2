import React from "react";
import PropTypes from "prop-types";
import RecentlyPlayed from "../components/RecentlyPlayed";
import pabo from "../assets/pabo.jpg";
import storage from "../utils/localStorageTools";

function Profile({ handleCurrentId }) {
  const favourites = storage.get("favorite");

  return (
    <div className=" flex flex-col align-middle justify-center  dark:bg-blackCustom bg-pinkCustom w-full h-full text-white dark:text-white">
      <div className="px-6 h-full">
        <div className="flex flex-wrap mt-24 rounded-md justify-center">
          <div className="w-full relative flex flex-col items-center justify-center">
            <div className=" w-full transform absolute -translate-y-20 flex items-center justify-center">
              <img
                src={pabo}
                className="z-50  shadow-xl object-cover rounded-full align-bottom border-none h-[150px] w-[150px]  min-h-[150px]  min-w-[150px]"
                alt="rousse"
              />
            </div>
            <div className="w-full mt-20 text-center ">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-600 dark:text-gray-200">
                    {favourites.length}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-gray-200">
                    Favourites
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-2xl text-slate-600 dark:text-gray-200 font-bold leading-normal mb-1">
              Paul Ochon
            </h3>
            <div className="text-xs mt-0 mb-2 text-slate-40 text-slate-600 dark:text-gray-200 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 opacity-75" />
              Limoges, France?
            </div>
          </div>
          <div className="mt-6 py-6 border-t border-slate-300 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 dark:text-gray-200 mb-4">
                  My music? A mix of Cauet and Patrick Sébastien.. I am a
                  fantastic artist, I delight the world with my talent! When I
                  wink, the media go wild, when I walk down the street, people
                  faint.. Now that's charisma!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-24">
          <RecentlyPlayed handleCurrentId={handleCurrentId} />
        </div>
      </div>
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  handleCurrentId: PropTypes.func.isRequired,
};
