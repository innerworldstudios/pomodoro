import settingsIcon from '../../assets/images/icon-settings.svg';
import closeIcon from '../../assets/images/icon-close.svg';
import arrowUp from '../../assets/images/icon-arrow-up.svg';
import arrowDown from '../../assets/images/icon-arrow-down.svg';
import './settings.css';

const Settings = () => {
	const closeSettings = () => {
		const settingsContainer = document.getElementById('settings-container');
		if (settingsContainer) {
			if (settingsContainer.style.display === 'none' || settingsContainer.style.display === '') {
				settingsContainer.style.display = 'block';
			} else {
				settingsContainer.style.display = 'none';
			}
		}
	};

	const changeFont = (newFont: string, e: React.MouseEvent<HTMLDivElement>) => {
		const font = newFont;
		const body = document.body;
		body.style.fontFamily = `${font}, sans-serif`;

		// Remove currently selected font styling from current button
		const currentSelections = document.querySelectorAll('.font-selection-current');
		currentSelections.forEach((element) => {
			element.classList.remove('font-selection-current');
		});

		// Add currently selected font styling to new button
		const target = e.target as HTMLButtonElement;
		target.classList.add('font-selection-current');
	};

	return (
		<section>
			<img
				src={settingsIcon}
				alt="Click here for pomodoro settings"
				className="cursor-pointer settings-icon"
				onClick={closeSettings}
			/>
			<div id="settings-container" className="settings-container">
				<div className="settings-container-header">
					<h4 className="text-black">Settings</h4>
					<img
						src={closeIcon}
						alt="Click here to close the settings"
						className="cursor-pointer"
						onClick={closeSettings}
					/>
				</div>
				<div className="settings-container-time">
					<p className="text-large">Time (Minutes)</p>
					<div className="settings-container-time-inner-container">
						<div className="settings-timer-option">
							<p>pomodoro</p>
							<div className="settings-timer-option-adjuster">
								<input type="number" max="99" min="0" className="input" />
								<div className="settings-arrow-container">
									<img src={arrowUp} alt="Add more minutes" className="cursor-pointer" />
									<img src={arrowDown} alt="Remove minutes" className="cursor-pointer" />
								</div>
							</div>
						</div>
						<div className="settings-timer-option">
							<p>short break</p>
							<div className="settings-timer-option-adjuster">
								<input type="number" max="99" min="0" className="input" />
								<div className="settings-arrow-container">
									<img src={arrowUp} alt="Add more minutes" className="cursor-pointer" />
									<img src={arrowDown} alt="Remove minutes" className="cursor-pointer" />
								</div>
							</div>
						</div>
						<div className="settings-timer-option">
							<p>long break</p>
							<div className="settings-timer-option-adjuster">
								<input type="number" max="99" min="0" className="input" />
								<div className="settings-arrow-container">
									<img src={arrowUp} alt="Add more minutes" className="cursor-pointer" />
									<img src={arrowDown} alt="Remove minutes" className="cursor-pointer" />
								</div>
							</div>
						</div>
					</div>
					<div className="settings-font">
						<p className="text-large">Font</p>
						<div className="font-selection-container">
							<div
								onClick={(e) => changeFont('Kumbh Sans', e)}
								className="cursor-pointer font-selection font-selection-current"
							>
								<p className="text-large kumbh-sans">Aa</p>
							</div>
							<div onClick={(e) => changeFont('Roboto Slab', e)} className="cursor-pointer font-selection">
								<p className="text-large roboto-slab">Aa</p>
							</div>
							<div onClick={(e) => changeFont('Space Mono', e)} className="cursor-pointer font-selection">
								<p className="text-large space-mono">Aa</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Settings;
