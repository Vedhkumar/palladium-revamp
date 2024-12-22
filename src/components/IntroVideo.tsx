import { useState } from "react";

function IntroVideo() {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(!open)}
        className="text-white px-2 py-0.5 bg-primary rounded-md text-sm mx-3"
      >
        Intro
      </button>
    );
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => setOpen(false)}
      ></div>
      <div className="relative bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md mx-5">
        <button
          onClick={() => setOpen(false)}
          className="bg-black rounded-full text-white px-2 py-1 right-3 top-3 absolute"
        >
          X
        </button>
        <iframe
          className="w-full rounded-md"
          height="315"
          src="https://www.youtube.com/embed/hlR42r_b6VI"
        ></iframe>
      </div>
    </div>
  );
}

export default IntroVideo;
