import { Icon, Button } from "./components/Button";
import { container } from "./style/container.css";
import { themes } from "./style/themes/index.css";

function App() {
  return (
    <div className={`${container} ${themes.blue}`}>
        <Button theme="red" padding="small">
          <Icon name="search" />
          Search
        </Button>
        <Button padding="medium">
         <Icon name="home" />
          Home
        </Button>
        <Button theme="red" padding="large">
          Settings
          <Icon name="settings" />
        </Button>
        <Button>Blue button</Button>
        <Button theme="red" width="full">Red button</Button>
        <Button padding="extraLarge">XL button</Button>
    </div>
  );
}

export default App;

