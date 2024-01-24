import { useRef, useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const playerName = useRef();

  const handleSubmit = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  };

  return (
    <section className="max-w-md mx-auto my-8 mb-4 mt-6 p-6 bg-gray-100 rounded-md shadow-md sm:w-64 md:w-72 lg:w-96 sm:h-48 md:h-56 lg:h-64">
      <h2 className="text-2xl font-bold mb-4">
        Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}
      </h2>
      <p className="mb-4">
        <input
          type="text"
          ref={playerName}
          placeholder="Enter Your name"
          className="border border-gray-300 px-3 py-2 rounded-md w-full"
        />
      </p>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Set Name
      </button>
    </section>
  );
}
