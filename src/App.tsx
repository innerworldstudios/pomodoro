import Options from './components/options/Options';
import Timer from './components/timer/Timer';
import Settings from './components/settings/Settings';
import './App.css';

function App() {
	return (
		<main className="container">
			<Options />
			<Timer />
			<Settings />
		</main>
	);
}

export default App;
