import ColorSelector from './Components/ColorSelector/ColorSelector';
import PalettePreview from './Components/PalettePreview/PalettePreview';
import './App.css';

function App() {

    return (
        <div className="scroll-container">
            <ColorSelector />
            <PalettePreview />
        </div>
    );
}

export default App;
