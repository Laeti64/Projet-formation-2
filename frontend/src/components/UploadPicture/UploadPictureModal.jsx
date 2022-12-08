import React from "react";
import PropTypes from "prop-types";
import UploadPicture from "./UploadPicture";

function UploadPictureModal({ albumId, onClose }) {
  return (
    <div className="flex justify-center mx-auto">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col max-w-sm p-6 rounded-lg text-black border border-red-400 bg-white dark:bg-gray dark:text-white dark:border-yellowCustom ">
          <div className="flex flex-row justify-between">
            <p className="dark:text-yellowCustom">Upload a picture...</p>
            <span
              aria-hidden="true"
              onClick={onClose}
              className="flex justify-end cursor-pointer"
            >
              X
            </span>
          </div>
          <UploadPicture albumId={albumId} />
        </div>
      </div>
    </div>
  );
}

export default UploadPictureModal;

UploadPictureModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  albumId: PropTypes.string.isRequired,
};
