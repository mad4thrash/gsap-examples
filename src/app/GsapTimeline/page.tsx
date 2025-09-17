"use client";

import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const TimeLine = () => {
	const timeline = gsap.timeline({
		repeat: -1,
		repeatDelay: 1,
		yoyo: true,
	});

	useGSAP(() => {
		timeline
			.to("#yellow-box", {
				x: 250,
				rotation: 360,
				borderRadius: "100%",
				duration: 2,
				ease: "back.inOut",
			})
			.to("#yellow-box", {
				y: 250,
				scale: 2,
				rotation: 360,
				borderRadius: "100%",
				duration: 2,
				ease: "back.inOut",
			})
			.to("#yellow-box", {
				x: 0,
				rotation: 360,
				borderRadius: "0%",
				duration: 2,
				ease: "back.inOut",
			})
			.to("#yellow-box", {
				y: 0,
				scale: 1,
				rotation: 360,
				borderRadius: "0%",
				duration: 2,
				ease: "back.inOut",
			});
	}, []);

	const handlePlayPause = () => {
		if (timeline.isActive()) {
			timeline.pause();
		} else {
			timeline.play();
		}
	};
	return (
		<main>
			<h1 className="text-xl text-gray-50">Gsap Timeline</h1>
			<p className="mt-5 text-gray-50">
				The <code>gsap.timeline()</code> method is used to create a sequence of
				animations that play one after another or with precise timing control.
			</p>
			<p className="mt-5 text-gray-50">
				The <code>gsap.timeline()</code> method allows you to chain multiple
				animations together, control their timing, and manage them as a single
				unit. You can pause, restart, reverse, or seek to any point in the
				timeline.
			</p>
			<p className="mt-5 text-gray-50">
				Timelines are perfect for complex animations where you need precise
				control over when each animation starts and ends, making your code more
				organized and maintainable.
			</p>
			<p className="mt-5 text-gray-50">
				Read more about it in the{" "}
				<a
					href="https://greensock.com/docs/v3/GSAP/Timeline"
					target="_blank"
					rel="noopener noreferrer"
				>
					gsap.timeline()
				</a>{" "}
				documentation.
			</p>
			<div className="mt-20 space-y-10">
				<button onClick={handlePlayPause}>Play/Pause</button>
				<div
					id="yellow-box"
					className="w-20 h-20 bg-yellow-500 rounded-lg"
				></div>
			</div>
		</main>
	);
};

export default TimeLine;
