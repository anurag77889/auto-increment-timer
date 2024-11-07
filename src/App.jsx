import { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds != 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => setIsActive(true);
  const handleStop = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-6">Auto-Increment Timer</h1>
        <div className="text-6xl font-mono mb-8">{seconds} s</div>
        <div className="flex space-x-4">
          <button
            onClick={handleStart}
            className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600"
          >
            Start
          </button>
          <button
            onClick={handleStop}
            className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600"
          >
            Stop
          </button>
          <button
            onClick={handleReset}
            className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
