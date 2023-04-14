import Black from "./Black";
import Gray from "./Gray";
import Red from "./Red";
import Yellow from "./Yellow";

export default function Bai2d() {
  return (
    <div>
      <Yellow />
      <div style={{display: 'flex'}}>
        <Red />
        <Gray />
      </div>
      <Black />
    </div>
  );
}
