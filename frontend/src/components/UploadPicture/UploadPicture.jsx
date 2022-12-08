import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { albumsFetcher } from "../../utils/axiosTools";

function UploadPicture({ albumId }) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const inputRef = useRef("");
  const imageTypes = [
    "image/png",
    "image/gif",
    "image/bmp",
    "image/jpeg",
    "image/webp",
  ];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (
      e.dataTransfer.files[0] &&
      imageTypes.includes(e.dataTransfer.files[0].type)
    ) {
      setSelectedFile(e.dataTransfer.files[0]);
    } else {
      console.error("File type not allowed...");
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSelectedFile(event.target.files[0]);
  };

  const onButtonClick = async (event) => {
    event.preventDefault();
    const modal = toast.loading("Please wait...");
    albumsFetcher
      .uploadPicture(selectedFile, albumId)
      .then(() => {
        toast.update(modal, {
          render: `All is good, picture uploaded!`,
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      })
      .catch((error) => {
        toast.update(modal, {
          render: `Oupsss...`,
          type: "warning",
          isLoading: false,
          autoClose: 3000,
        });
        const messages = JSON.parse(error.response.data.message);
        for (const message in messages) {
          if (Object.prototype.hasOwnProperty.call(messages, message)) {
            toast.error(messages[message]);
          }
        }
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        className="flex flex-col justify-center m-2 h-64 w-80 "
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          className="hidden"
          id="file"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />

        <label
          className={
            dragActive
              ? "bg-gray-200 w-full h-full border border-dashed border-black rounded-md flex justify-center items-center dark:border-white dark:text-black text-center dark:bg-yellowCustom"
              : " w-full h-full border-2 border-dashed border-black rounded-md flex justify-center items-center text-center dark:border-white dark:text-white"
          }
          htmlFor="file"
        >
          <div>
            <p>Drag and drop your picture here</p>
            <p>
              <i>(or simply click to select it...)</i>
            </p>
            <p>{inputRef ? inputRef.current.value : ""}</p>
            <button
              type="button"
              onClick={onButtonClick}
              className="text-grey-500 bg-white mr-5 mt-5 py-2 px-6 rounded-lg border-0 border-black text-sm font-medium dark:bg-yellowCustom dark:text-black hover:text-red-400"
            >
              Upload your file
            </button>
          </div>
        </label>
        {dragActive && (
          <div
            className="absolute w-screen h-screen top-0 right-0 bottom-0 left-0 "
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          />
        )}
      </form>
    </div>
  );
}

export default UploadPicture;

UploadPicture.propTypes = {
  albumId: PropTypes.string.isRequired,
};
