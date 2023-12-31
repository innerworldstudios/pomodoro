import React, { useState, useEffect } from 'react';
import './timer.css';

const Timer = () => {
	const initialTime = 180 * 1000; // 2 minutes in milliseconds
	const [timeRemaining, setTimeRemaining] = useState(initialTime);
	const [timerRunning, setTimerRunning] = useState(false);

	// The radius needs to be half of the width and height if the circle is to be in the center
	const radius = 90; // SVG circle radius, adjust to match your timer's size
	const circumference = 2 * Math.PI * radius;

	useEffect(() => {
		let interval: number | null = null;

		if (timerRunning && timeRemaining > 0) {
			interval = setInterval(() => {
				setTimeRemaining((prevTime) => Math.max(prevTime - 1000, 0));
			}, 1000);
		}

		return () => {
			if (interval) clearInterval(interval);
		};
	}, [timerRunning, timeRemaining]);

	const strokeDashoffset = ((initialTime - timeRemaining) / initialTime) * circumference;

	const toggleTimer = () => {
		setTimerRunning(!timerRunning);
	};

	const formatTime = (milliseconds: number) => {
		const minutes = Math.floor(milliseconds / 60000);
		const seconds = Math.floor((milliseconds % 60000) / 1000);
		return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};

	return (
		<section className="timer-container">
			<div className="timer">
				<svg className="timer-svg" viewBox="0 0 200 200">
					<circle
						className="timer-circle"
						stroke="var(--primary)" // Use the CSS variable for color
						strokeWidth="10"
						strokeDasharray={circumference}
						strokeDashoffset={strokeDashoffset}
						strokeLinecap="round" // Smooths the cap of the stroke
						fill="none"
						cx="100"
						cy="100"
						r={radius}
						transform="rotate(-90 100 100)" // Start from the top
					/>
				</svg>
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
