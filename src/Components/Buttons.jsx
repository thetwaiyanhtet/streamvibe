import React from "react";
import { FaThumbsUp, FaPlus, FaVolumeUp, FaVolumeMute, FaPlay} from "react-icons/fa";

export const WatchNow = () => {
  return (
    <div>
      <button className=" bg-buttonPrimary rounded-md px-4 py-3 flex items-center gap-2 mx-auto">
        <FaPlay />
        <p>Start Watching Now</p>
      </button>
    </div>
  );
};

export const SendMessage = () => {
  return (
    <div>
      <button className=" bg-buttonPrimary rounded-md px-4 py-3 flex items-center gap-2 mx-auto">
        <p>Send Message</p>
      </button>
    </div>
  );
};

export const AskQuestion = () => {
  return (
    <div>
      <button className=" bg-buttonPrimary rounded-md px-4 py-3 flex items-center gap-2 mx-auto">
        <p>Ask a Question</p>
      </button>
    </div>
  );
};

export const FreeTrial = () =>{
  return(
    <div>
      <button className=" border border-gray-800 bg-transparent rounded-md px-4 py-3 flex items-center">Start Free Trial</button>
    </div>
  )
}

export const FreeTrialRed = () =>{
  return(
    <div>
      <button className=" border border-gray-800 bg-buttonPrimary rounded-md px-4 py-3 flex items-center">Start Free Trial</button>
    </div>
  )
}

export const ChoosePlan = () =>{
  return(
    <div>
      <button className="bg-buttonPrimary rounded-md px-4 py-3 flex items-center">Choose Plan</button>
    </div>
  )
}

export const PlayNow = () => {
  return (
    <div>
      <button className="bg-buttonPrimary rounded-md px-4 py-3 flex items-center gap-2"><FaPlay />Play Now</button>
    </div>
  )
}

export const Plus = () => {
  return(
    <div>
      <button className=" p-3 bg-glass rounded-md"><FaPlus /></button>
    </div>
  )
}

export const ThumbsUp = () => {
  return(
    <div>
      <button className=" p-3 bg-glass rounded-md"><FaThumbsUp /></button>
    </div>
  )
}

export const Voulme = () => {
  return(
    <div>
      <button className=" p-3 bg-glass rounded-md"><FaVolumeUp /></button>
    </div>
  )
}

export const Mute = () => {
  return(
    <div>
      <button className=" p-3 bg-glass rounded-md"><FaVolumeMute /></button>
    </div>
  )
}