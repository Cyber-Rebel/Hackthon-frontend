import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PlayCircle,
  ThumbsUp,
  ThumbsDown,
  Forward,
  MessageCircle,
  X,
} from 'lucide-react';

const videos = [
  {
    title: 'Intro to WebVeda',videotitle:"Introducation To WebVeda ",
    src: 'https://ik.imagekit.io/cyberrebel/28ejWWU3dqIBG87tPq2WneE8oq0.mp4?updatedAt=1753215724208',
  },
  { title: 'How to upload video',videotitle:"Introducation To WebVeda ", src: 'https://example.com/video2.mp4' },
  { title: 'Basic Editing',videotitle:"Introducation To WebVeda ", src: 'https://example.com/video3.mp4' },
  { title: 'Youtube Monetization',videotitle:"Introducation To WebVeda ", src: 'https://example.com/video4.mp4' },
];

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [videoProgress, setVideoProgress] = useState(Array(videos.length).fill(0));
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [likeState, setLikeState] = useState(null); // null, 'like', 'dislike'
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    const handleKey = (e) => {
      if (!videoRef.current) return;
      if (e.key === 'ArrowRight') videoRef.current.currentTime += 30;
      if (e.key === 'ArrowLeft') videoRef.current.currentTime -= 30;
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleTimeUpdate = () => {
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    const percent = (current / total) * 100;

    setVideoProgress((prev) => {
      const updated = [...prev];
      updated[videoIndex] = percent;
      return updated;
    });
  };

  const handleNext = () => {
    if (videoIndex < videos.length - 1) {
      setVideoIndex(videoIndex + 1);
      setLikeState(null);
    }
  };

  return (
   <div className="w-full bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a1a] text-white flex flex-col lg:flex-row overflow-hidden font-sans">
  {/* Video Section */}
  <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 space-y-4 relative">
    <div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full rounded-3xl overflow-hidden border-[#2f2f2f]"
    >
      <video
        ref={videoRef}
        controls
        onTimeUpdate={handleTimeUpdate}
        src={videos[videoIndex].src}
        className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[85%] rounded-2xl bg-black"
      />

      {/* Video Title Below Player */}
      <p className="w-full text-left pl-10  text-base sm:text-lg md:text-xl py-6 sm:py-4 font-semibold text-white mt-2 sm:mt-4">
        Topic : {videos[videoIndex].videotitle}
      </p>

      {/* Reactions & Next */}
      <div className="w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6 items-center justify-start sm:justify-start pl-2 sm:pl-10 md:pl-10 border-[#2f2f2f]">
        {/* Like */}
        <button
          onClick={() => setLikeState('like')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl transition border bg-[#1f1f1f] border-gray-700 text-gray-300"
        >
          <ThumbsUp size={20} color={likeState === 'like' ? '#22c55e' : '#9ca3af'} />
          Like
        </button>

        {/* Dislike */}
        <button
          onClick={() => setLikeState('dislike')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition border ${
            likeState === 'dislike'
              ? 'text-red-600 border-black '
              : 'bg-[#1f1f1f] border-gray-700 text-gray-300'
          }`}
        >
          <ThumbsDown size={20} />
          Dislike
        </button>

        {/* Feedback */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setFeedbackOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold shadow-md bg-[#1f1f1f] border border-gray-700 text-gray-300"
        >
          <MessageCircle size={20} color={feedbackOpen ? '#facc15' : '#9ca3af'} />
          Feedback
        </motion.button>

        {/* Next Video */}
        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={videoIndex === videos.length - 1}
          className="px-6 py-3 bg-[#1f1f1f] text-white rounded-xl flex items-center gap-2 font-semibold border border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Forward
            className="w-5 h-5"
            color={videoIndex === videos.length - 1 ? '#6b7280' : '#6366f1'}
          />
          Next
        </motion.button>
      </div>
    </div>

    {/* Feedback Modal */}
    <AnimatePresence>
      {feedbackOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 backdrop-blur-md bg-opacity-70 flex items-center justify-center"
        >
          <div className="bg-[#1f1f1f] p-6 rounded-xl max-w-md w-[90%] sm:w-full space-y-4 relative border border-gray-700">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => setFeedbackOpen(false)}
            >
              <X size={20} />
            </button>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Submit Feedback</h3>
            <textarea
              rows="4"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Your thoughts..."
              className="w-full p-3 rounded-lg bg-[#0f0f0f] border border-gray-700 text-white resize-none"
            />
            <button
              onClick={() => {
                console.log('Feedback submitted:', feedbackText);
                setFeedbackText('');
                setFeedbackOpen(false);
              }}
              className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-black font-semibold rounded-lg"
            >
              Submit
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>

  {/* Sidebar Playlist */}
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="w-full lg:w-[350px] p-4 sm:p-6 border-t lg:border-t-0 lg:border-l border-[#2f2f2f] bg-[#0d0d0d] overflow-y-auto space-y-5"
  >
    <h2 className="text-xl sm:text-2xl font-bold text-center text-white mb-4 border-b pb-2">Modules</h2>
    {videos.map((video, idx) => (
      <motion.button
        key={idx}
        onClick={() => {
          setVideoIndex(idx);
          setLikeState(null);
        }}
        whileHover={{ scale: 1.02 }}
        className={`w-full text-left px-4 py-3 flex items-center justify-between rounded-lg border font-medium transition-colors duration-300 ${
          idx === videoIndex
            ? ' bg-[#1f1f1f] text-white'
            : 'bg-[#000000] border-gray-600 text-gray-300'
        }`}
      >
        <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
          <PlayCircle className="w-5 h-5" /> {video.title}
        </div>

        {/* Progress Ring */}
        <div className="relative w-8 h-8 sm:w-10 sm:h-10">
          <svg className="rotate-[-90deg] w-full h-full" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="16" fill="none" stroke="#333" strokeWidth="4" />
            <motion.circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke={
                videoProgress[idx] >= 100
                  ? '#10B981'
                  : videoProgress[idx] >= 50
                  ? '#FACC15'
                  : '#A3A3A3'
              }
              strokeWidth="4"
              strokeDasharray="100"
              strokeDashoffset={100 - videoProgress[idx]}
              transition={{ ease: 'easeOut', duration: 0.3 }}
            />
          </svg>
        </div>
      </motion.button>
    ))}
  </motion.div>
</div>

  );
};

export default VideoPlayer;
