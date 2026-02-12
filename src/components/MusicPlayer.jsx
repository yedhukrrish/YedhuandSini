import React, { useEffect, useRef, useState } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentSong, setCurrentSong] = useState('theycallthislove');

    // Two songs: Let Her Go (initial) and Perfect (after YES)
    const audioRef = useRef(null);

    useEffect(() => {
        // Initialize with They Call This Love
        audioRef.current = new Audio('/music/theycallthislove.mp3');
        audioRef.current.loop = true;
        audioRef.current.volume = 0.3;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []);

    const switchSong = (songName) => {
        const wasPlaying = !audioRef.current?.paused;

        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        const songPath = songName === 'perfect' ? '/music/perfect.mp3' : '/music/theycallthislove.mp3';
        audioRef.current = new Audio(songPath);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.3;
        audioRef.current.muted = isMuted;

        // Always play the new song
        setTimeout(() => {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
            setIsPlaying(true);
        }, 100);

        setCurrentSong(songName);
    };

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed (interaction needed):", e));
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    // Expose functions globally
    useEffect(() => {
        window.playBackgroundMusic = () => {
            if (audioRef.current) {
                audioRef.current.play().catch(e => console.log("Audio play failed:", e));
                setIsPlaying(true);
            }
        };

        window.pauseBackgroundMusic = () => {
            if (audioRef.current) {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        };

        window.switchToLoveSong = () => {
            switchSong('perfect');
        };
    }, [isMuted]);

    return (
        <div className="fixed bottom-4 right-4 z-50 bg-wednesday-purple-900/80 backdrop-blur-md p-3 rounded-full shadow-lg flex items-center gap-2 border border-wednesday-purple-500">
            <button
                onClick={togglePlay}
                className="p-2 hover:bg-wednesday-purple-800 rounded-full transition-colors text-wednesday-purple-400"
            >
                {isPlaying ? <Music size={20} className="animate-pulse" /> : <Music size={20} />}
            </button>

            {isPlaying && (
                <button
                    onClick={toggleMute}
                    className="p-2 hover:bg-wednesday-purple-800 rounded-full transition-colors text-gray-400"
                >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
            )}
        </div>
    );
};

export default MusicPlayer;
