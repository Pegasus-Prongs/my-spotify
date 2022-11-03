import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atoms/playerAtom";
import { ImHeadphones } from "react-icons/im";
import { Track } from "../types/body.types";
import Image from "next/legacy/image";

interface TrackProps {
  track: Track;
  chooseTrack: (track: Track) => void;
}

function Track({ track, chooseTrack }: TrackProps) {
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [play, setPlay] = useRecoilState<boolean>(playState);
  const [playingTrack, setPlayingTrack] =
    useRecoilState<Track>(playingTrackState);

  const handlePlay = () => {
    chooseTrack(track);
    if (!playingTrack || track.url === playingTrack.url) {
      setPlay(!play);
    }

    if (track.url === playingTrack?.url) {
      setPlay(!play);
    }
  };

  return (
    <div className="flex items-center justify-between space-x-20 cursor-default hover:bg-white/10 py-2 px-4 rounded-lg group transition ease-out">
      <div className="flex items-center gap-3">
        <Image
          src={track.images.coverart}
          alt=""
          className="rounded-xl h-12 w-12 object-cover mr-3"
          width={48}
          height={48}
        />
        <div>
          <h4 className="text-white text-sm font-semibold truncate w-56 sm:w-[450px]">
            {track.title}
          </h4>
          <p className="text-[rgb(179,179,179)] text-[13px] font-semibold group-hover:text-white">
            {track.artists[0].alias.replace("-", " ")}
          </p>
        </div>
      </div>

      <div className="md:ml-auto flex items-center space-x-2.5">
        <div className="flex items-center rounded-full border-2 border-[#262626] w-[85px] h-10 relative cursor-pointer group-hover:border-white/40">
          <AiFillHeart
            className={`text-xl ml-3 icon ${
              hasLiked ? "text-[#1ED760]" : "text-[#868686]"
            }`}
            onClick={() => setHasLiked(!hasLiked)}
          />
          {track.url === playingTrack?.url && play ? (
            <>
              <div
                className="h-10 w-10 rounded-full border border-[#15883e] flex items-center justify-center absolute -right-0.5 bg-[#15883e] icon hover:scale-110"
                onClick={handlePlay}
              >
                <BsFillPauseFill className="text-white text-xl" />
              </div>
            </>
          ) : (
            <>
              <div
                className="h-10 w-10 rounded-full border border-white/60 flex items-center justify-center absolute -right-0.5 hover:bg-[#15883e] hover:border-[#15883e] icon hover:scale-110"
                onClick={handlePlay}
              >
                <BsFillPlayFill className="text-white text-xl ml-[1px]" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Track;
