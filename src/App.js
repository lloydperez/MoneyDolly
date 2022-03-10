import "./styles.css";
import SignUp from "../src/components/pages/SignUp/SignUp";

export default function App() {
  return (
    <div className="App">
      <SignUp 
        title="Learn to code by watching others" 
        content="See how experienced developers solve problem in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable."
      />
    </div>
  );
}
