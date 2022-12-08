import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Playlists from "./pages/Playlists";
import Profile from "./pages/Profile";
import Genres from "./pages/Genres";
import GenresItem from "./components/GenresList/GenresItem";
import storage from "./utils/localStorageTools";
import usePlayerContext from "./Context/PlayerContext";
import { songsFetcher } from "./utils/axiosTools";
import Layout from "./components/Layout/Index";
import ThemeContextProvider from "./Context/ThemeContext";
import Uploads from "./pages/Uploads";

function App() {
  const [currentId, setCurrentId] = useState();
  const { tracksPlayer, setTracksPlayer } = usePlayerContext();

  const handleCurrentId = ({ id }) => {
    setCurrentId(id);
    storage.set("recentlyPlayed", id);
  };

  useEffect(() => {
    songsFetcher.getAll().then((res) => {
      setTracksPlayer(res.slice(0, 8));
      setCurrentId(res[0].id);
    });
  }, []);

  if (!tracksPlayer) return <div>Loading ...</div>;

  return (
    <>
      <ThemeContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout tracksPlayer={tracksPlayer} currentId={currentId} />
            }
          >
            <Route
              path="/"
              element={
                <Home
                  handleCurrentId={handleCurrentId}
                  currentId={currentId}
                  setCurrentId={setCurrentId}
                />
              }
            />
            <Route
              path="/playlists"
              element={<Playlists handleCurrentId={handleCurrentId} />}
            />
            <Route
              path="/uploads"
              element={<Uploads handleCurrentId={handleCurrentId} />}
            />

            <Route
              path="/profile"
              element={<Profile handleCurrentId={handleCurrentId} />}
            />
            <Route
              path="/favourites"
              element={<Favourites handleCurrentId={handleCurrentId} />}
            />
            <Route
              path="/genres"
              element={<Genres handleCurrentId={handleCurrentId} />}
            />
            <Route
              path="/genres/:name"
              element={<GenresItem handleCurrentId={handleCurrentId} />}
            />
          </Route>
        </Routes>
      </ThemeContextProvider>

      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
