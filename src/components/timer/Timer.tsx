import React, { useState, useEffect } from 'react';
import './timer.css';

const Timer: React.FC = () => {
	const initialTime = 60 * 1000; // 1 minute in milliseconds
	const [timeRemaining, setTimeRemaining] = useState(initialTime);
	const [timerRunning, setTimerRunning] = useState(false);
	const [lastUpdateTime, setLastUpdateTime] = useState<number | null>(null);
	const [timerStyle, setTimerStyle] = useState({});

	useEffect(() => {
		let interval: number | null = null;

		if (timerRunning) {
			interval = setInterval(() => {
				setLastUpdateTime((lastTime) => {
					const currentTime = Date.now();
					const elapsed = lastTime ? currentTime - lastTime : 0;
					const newTimeRemaining = Math.max(timeRemaining - elapsed, 0);
					const percentageLeft = ((newTimeRemaining / initialTime) * 100).toFixed(2);
					setTimeRemaining(newTimeRemaining);
					updateTimerAnimation(percentageLeft);
					return currentTime;
				});
			}, 40);
		}

		return () => {
			if (interval) clearInterval(interval);
		};
	}, [timerRunning, timeRemaining]);

	const updateTimerAnimation = (percentageLeft: string) => {
		const newStyle = {
			background: `linear-gradient(var(--dark-navy), var(--dark-navy)) content-box no-repeat,
						 conic-gradient(var(--primary) ${percentageLeft}%, var(--dark-navy) ${percentageLeft}%) border-box`,
		};
		setTimerStyle(newStyle);
	};

	const toggleTimer = () => {
		if (!timerRunning) {
			setLastUpdateTime(Date.now());
			setTimerRunning(true);
		} else {
			setTimerRunning(false);
		}
	};

	const formatTime = (milliseconds: number): string => {
		const minutes = Math.floor(milliseconds / 60000);
		const seconds = Math.floor((milliseconds % 60000) / 1000);
		return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};

	return (
		<section className="timer-container">
			<div className="timer-animation" style={timerStyle}>
				<div className="timer-inner-container">
					<h1 id="time">{formatTime(timeRemaining)}</h1>
					<h3 onClick={toggleTimer} id="time-toggle" className="cursor-pointer">
						{timerRunning ? 'Pause' : 'Start'}
					</h3>
				</div>
			</div>
		</section>
	);
};

export default Timer;
