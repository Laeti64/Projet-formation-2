import PropTypes from "prop-types";
import { useState } from "react";
import PlaylistsModal from "../PlaylistsList/PlaylistsModal";
import usePlayerContext from "../../Context/PlayerContext";
import TrackItem from "./TrackItem";
import UploadPictureModal from "../UploadPicture/UploadPictureModal";

function TrackList({
  handleCurrentId,
  tracks,
  isPlaying,
  setIsPlaying,
  reloadTrackList,
}) {
  const [playlistsModal, setPlaylistsModal] = useState({
    isActive: false,
    trackId: null,
  });

  const [uploadPictureModal, setUploadPictureModal] = useState({
    isActive: false,
    albumId: null,
  });

  const { setTracksPlayer } = usePlayerContext();

  const handlerPlaylistModal = (trackId) => {
    setPlaylistsModal({ ...playlistsModal, isActive: true, trackId });
  };

  const handlerCloseModal = () => {
    setPlaylistsModal({ ...playlistsModal, isActive: false, trackId: null });
  };

  const handlerUploadPictureModal = (albumId) => {
    setUploadPictureModal({ isActive: true, albumId });
  };

  const handlerUploadPictureCloseModal = () => {
    setUploadPictureModal({ isActive: false, albumId: null });
  };

  const loadPlayer = () => {
    setTracksPlayer(tracks);
  };

  return (
    <div className="flex flex-col w-full py-5">
      {tracks.map((e) => (
        <TrackItem
          key={e.id}
          id={e.id}
          title={e.title}
          duration={e.duration}
          artist={e.artist.name}
          picture={e.album.picture}
          handleCurrentId={handleCurrentId}
          onPlaylist={handlerPlaylistModal}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          loadPlayer={loadPlayer}
          onUploadPicture={handlerUploadPictureModal}
          albumId={e.albumId}
          reloadTrackList={reloadTrackList}
        />
      ))}
      {playlistsModal.isActive && (
        <PlaylistsModal
          trackId={playlistsModal.trackId}
          onClose={handlerCloseModal}
        />
      )}
      {uploadPictureModal.isActive && (
        <UploadPictureModal
          albumId={uploadPictureModal.albumId}
          onClose={handlerUploadPictureCloseModal}
        />
      )}
    </div>
  );
}

TrackList.propTypes = {
  tracks: PropTypes.arrayOf().isRequired,
  handleCurrentId: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  reloadTrackList: PropTypes.func.isRequired,
};

export default TrackList;
