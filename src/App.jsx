import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap space-x-4 w-full sm:w-3/4 mx-auto">
        <TimerChallenge title="Beginner" targetTime={15} />
        <TimerChallenge title="Intermediate" targetTime={10} />
        <TimerChallenge title="Advancecd" targetTime={5} />
        <TimerChallenge title="Professional" targetTime={2} />
      </div>
    </>
  );
}

export default App;
