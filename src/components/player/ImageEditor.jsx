"use client";
import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import AvatarEditor from "react-avatar-editor";
import { Slider } from "../ui/slider";

// const DefaultPersonImage =
//   "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705587385/iplfantasyleague/dtj54fcub9hdxxolpaht.webp";

function ImageEditor({ getimage, setvalue }) {
  const [image, setImage] = useState(getimage);
  const [imagedataurl, setImagedataurl] = useState("");
  const [editorShow, setEditorShow] = useState(false);
  const [scale, setScale] = useState(1);
  const editorRef = useRef(null);

  const handleLoadSuccess = (editor) => {
    console.log("Editor is ready!");
  };

  const handleLoadFailure = (error) => {
    console.error("Error loading editor:", error);
  };

  const onClickSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImage();
      const canvasScaled = editorRef.current.getImageScaledToCanvas();
      if (canvas && canvasScaled) {
        const dataURL = canvasScaled.toDataURL("image/jpeg");
        //console.log("Data URL:", dataURL);
        setvalue("profileimage", dataURL);
        setImage(dataURL);
        setEditorShow(false);
      } else {
        console.error("Canvas or CanvasScaled is undefined.");
      }
    }
  };

  const fileInputRef = useRef(null);

  const handleChooseFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImagedataurl(selectedFile);
    setEditorShow(true);
  };

  const handleSliderChange = (value) => {
    //console.log(value);
    const scale = 0.5 + (value[0] / 100) * 1;
    //console.log(scale);
    setScale(scale);
  };

  const onClickCancel = () => {
    setEditorShow(false);
  };

  return (
    <div>
      {editorShow ? (
        <div className="p-4">
          <div className="flex flex-row gap-4">
            <div>
              <AvatarEditor
                ref={editorRef}
                image={imagedataurl}
                width={250}
                height={250}
                border={10}
                scale={scale}
                color={[210, 210, 210, 0.6]} // RGBA
                onLoadSuccess={handleLoadSuccess}
                onLoadFailure={handleLoadFailure}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <Button className="bg-green-400" onClick={onClickSave}>
                Save
              </Button>
              <Button onClick={onClickCancel}>Cancel</Button>
            </div>
          </div>
          <div className="w-full mt-4">
            <Slider
              defaultValue={[50]}
              max={100}
              step={10}
              onValueChange={handleSliderChange}
            />
          </div>{" "}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-6 px-4 bg-gray-50 dark:bg-gray-700 rounded-t-md">
          <label className="cursor-pointer">
            <div className="w-[100px] h-[100px] flex items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              <img
                alt="Your avatar"
                className="object-cover w-full h-full"
                height="250"
                src={image}
                style={{
                  objectFit: "cover",
                }}
                width="250"
              />
            </div>
          </label>
          <label className="mt-4" htmlFor="profile-pic">
            <Button
              type={"button"}
              className="w-full"
              onClick={handleChooseFileClick}
            >
              Choose File
            </Button>
            <Input
              ref={fileInputRef}
              className="hidden"
              id="profile-pic"
              type="file"
              onChange={handleFileChange}
            />
          </label>
        </div>
      )}
    </div>
  );
}

export default ImageEditor;
