import Calculator from "./component/Calculator";
import { ModeToggle } from "./component/ModelToggle";

export default function Home() {
  return (
    <div >
      <ModeToggle />
      <Calculator />
    </div>
  );
}
