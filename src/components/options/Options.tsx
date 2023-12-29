import './options.css';

const Options = () => {
	return (
		<section className="options-container">
			<h2 className="text-white">pomodoro</h2>
			<div className="options-inner-container">
				<button className="btn btn-red text-large cursor-pointer nowrap">pomodoro</button>
				<button className="btn text-large cursor-pointer nowrap">short break</button>
				<button className="btn text-large cursor-pointer nowrap">long break</button>
			</div>
		</section>
	);
};

export default Options;
