/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import PlayVideo from "./icons/PlayVideo";

type LyricLine = { startTime: number; line: string; endTime: number };

interface KaraokeProps {
  lyricData?: LyricLine[];
}

const Karaoke: React.FC<KaraokeProps> = ({
  lyricData = [
    { startTime: 1, endTime: 3, line: "Before my body turns to clay" },
    {
      startTime: 4,
      endTime: 7,
      line: "I pray brain splatter that my mind be on display like an art gallery",
    },
    {
      startTime: 8,
      endTime: 10,
      line: "Part man part machine know I'm half battery",
    },
    {
      startTime: 10.5,
      endTime: 12.6,
      line: "With the kind of pristine of Tony Stark armory",
    },
    {
      startTime: 13,
      endTime: 15,
      line: "I got two hoes in front of me like Shawn Connery",
    },
    {
      startTime: 16,
      endTime: 18,
      line: "They both down to pleasure me, right orally",
    }
  ],
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Playback failed:", error);
        });
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleAudioLoading = () => {};

  const handleAudioPlaying = () => {};

  const updateCurrentTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };
   const handleAudioEnded = () => {
     if (audioRef.current) {
       audioRef.current.currentTime = 0;
       playAudio(); // Restart the audio when it ends
     }
   };


  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.addEventListener("waiting", handleAudioLoading);
      audioElement.addEventListener("playing", handleAudioPlaying);
      audioElement.addEventListener("timeupdate", updateCurrentTime);
      audioElement.addEventListener("ended", handleAudioEnded);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("waiting", handleAudioLoading);
        audioElement.removeEventListener("playing", handleAudioPlaying);
        audioElement.removeEventListener("timeupdate", updateCurrentTime);
        audioElement.removeEventListener("ended", handleAudioEnded);
      }
    };
  }, []);

  useEffect(() => {
    if (inView && isPlaying) {
      playAudio();
    } else {
      pauseAudio();
      setCurrentTime(0);
    }
  }, [inView, isPlaying]);

  useEffect(() => {
    // Scroll to the active lyric line using document.querySelector
    const activeIndex = lyricData.findIndex(
      (line) => currentTime >= line.startTime && currentTime <= line.endTime
    );

    if (activeIndex !== -1) {
      const activeElement = document.querySelector(`#lyric-${activeIndex}`);
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [currentTime, lyricData]);

  const handleLineClick = (startTime: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = startTime;
      playAudio();
      if (!isPlaying) {
        playAudio(); // Optionally, start playing if not already playing
      }
    }
  };

  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-full flex items-center justify-center relative base:h-[800px] sun:h-[900px] glow">
        {!isPlaying && (
          <div
            onClick={playAudio}
            className="absolute cursor-pointer mx-auto w-[100%] z-10 backdrop-blur flex items-center justify-center h-[90%] play-button"
          >
            <PlayVideo />
          </div>
        )}
        <div
          ref={ref}
          className="base:h-[220px] tab:h-[240px] min-[991px]:h-96 hide-scrollbar base:max-sm:w-[60%] sm:w-[40%] py-10 overflow-y-auto"
        >
          <audio
            ref={audioRef}
            src="/assets/music/light_years-trimmed.mp3"
          ></audio>
          {lyricData.map((line, index) => (
            <p
              key={index}
              id={`lyric-${index}`}
              className={`hover:text-slate-100 base:mb-4 tab:mb-6 base:text-[20px] tab:text-[27px] base:max-tab:leading-7 tab:text-4xl font-bolden cursor-pointer ${
                currentTime >= line.startTime && currentTime <= line.endTime
                  ? "text-ourWhite"
                  : currentTime > line.endTime
                  ? "text-slate-200"
                  : "text-black"
              }`}
              onClick={() => handleLineClick(line.startTime)}
            >
              {line.line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Karaoke;
