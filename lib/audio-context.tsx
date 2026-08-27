"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { RADIO_CONFIG } from "./radio-config";

interface AudioContextType {
  isPlaying: boolean;
  isLoading: boolean;
  isMuted: boolean;
  volume: number;
  error: string | null;
  programTitle: string;
  programDescription: string;
  togglePlay: () => void;
  play: () => void;
  pause: () => void;
  setVolume: (vol: number) => void;
  toggleMute: () => void;
  streamUrl: string;
  isLive: boolean;
  listenerCount: number;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolumeState] = useState(0.85);
  const [error, setError] = useState<string | null>(null);
  const [listenerCount, setListenerCount] = useState(164);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      // Subtle natural listener count fluctuation
      setListenerCount((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.max(130, Math.min(420, prev + delta));
      });
    }, 45000);

    return () => clearInterval(timer);
  }, []);

  // Initialize audio element
  useEffect(() => {
    if (typeof window === "undefined") return;

    const audio = new Audio();
    audio.preload = "none";
    audio.src = RADIO_CONFIG.streamUrl;
    audioRef.current = audio;

    const handleWaiting = () => setIsLoading(true);
    const handlePlaying = () => {
      setIsLoading(false);
      setIsPlaying(true);
      setError(null);
    };
    const handlePause = () => {
      setIsPlaying(false);
      setIsLoading(false);
    };
    const handleError = () => {
      setIsLoading(false);
      setIsPlaying(false);
      setError("Conectando ao sinal da rádio...");
    };

    audio.addEventListener("waiting", handleWaiting);
    audio.addEventListener("playing", handlePlaying);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("waiting", handleWaiting);
      audio.removeEventListener("playing", handlePlaying);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("error", handleError);
      audio.pause();
      audio.src = "";
    };
  }, []);

  const play = useCallback(() => {
    if (!audioRef.current) return;
    setError(null);
    setIsLoading(true);

    const currentSrc = audioRef.current.src;
    if (!currentSrc || currentSrc === "" || currentSrc.includes("about:blank")) {
      audioRef.current.src = RADIO_CONFIG.streamUrl;
    }

    const promise = audioRef.current.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          setIsLoading(false);
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Playback error:", err);
          setIsLoading(false);
          setIsPlaying(false);
          setError("Clique novamente para iniciar a transmissão ao vivo.");
        });
    }
  }, []);

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
    setIsLoading(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  const setVolume = useCallback((newVol: number) => {
    const clamped = Math.max(0, Math.min(1, newVol));
    setVolumeState(clamped);
    if (audioRef.current) {
      audioRef.current.volume = clamped;
    }
    if (clamped > 0 && isMuted) {
      setIsMuted(false);
      if (audioRef.current) audioRef.current.muted = false;
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audioRef.current.muted = nextMuted;
  }, [isMuted]);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        isLoading,
        isMuted,
        volume,
        error,
        programTitle: RADIO_CONFIG.programTitle,
        programDescription: RADIO_CONFIG.programDescription,
        togglePlay,
        play,
        pause,
        setVolume,
        toggleMute,
        streamUrl: RADIO_CONFIG.streamUrl,
        isLive: true,
        listenerCount,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
