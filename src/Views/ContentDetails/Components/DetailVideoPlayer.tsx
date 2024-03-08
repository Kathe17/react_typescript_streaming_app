import React from "react";
import ReactPlayer from "react-player";
import { DetailsModel } from "../../../Models/Details.model";

const DetailVideoPlayer = ({ detail }: { detail: DetailsModel }) => {
  return (
    <div className="w-full, h-full items-center justify-center bg-red-300">
      <ReactPlayer
        url={detail.urlMediaFull}
        controls={true}
        width="70%"
        height="70%"
      ></ReactPlayer>
    </div>
  );
};

export default DetailVideoPlayer;
