import logo from './logo.svg';
import './App.css';
import BasicModal from './components/Modal';
import BasicPopover from './components/PopOver';
import AutoComplete from "./components/AutoComplete";
import {SplitButton} from "./components/MuiButtons";

function App() {
    return (
        <div className="App">
            <BasicModal/>
            <BasicPopover/>
            <AutoComplete/>
            <SplitButton />
        </div>
    );
}

export default App;
