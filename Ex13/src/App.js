import UserPosts from "./Components/UserPosts";
import CountdownTimer from "./Components/CountdownTimer";
import WindowSize from "./Components/WindowSize";
import ValidatedInput from "./Components/ValidatedInput";

function App() {
  return (
    <div>
      <UserPosts />
      <hr />
      <CountdownTimer />
      <hr />
      <WindowSize />
      <hr />
      <ValidatedInput />
    </div>
  );
}

export default App;
