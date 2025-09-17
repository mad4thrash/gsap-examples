"use client";
import React from "react";
import { gsap } from "gsap";

import { useGSAP } from "@gsap/react";

const GsapFromTo = () => {
	useGSAP(() => {
		gsap.fromTo(
			"#red-box",
			{ x: 0, borderRadius: "0%", rotation: 0 },
			{
				x: 250,
				borderRadius: "100%",
				rotation: 360,
				duration: 2,
				ease: "bounce.out",
				repeat: -1,
				yoyo: true,
			}
		);
	}, []);
	return (
		<main>
			<h1 className="text-gray-50 text-xl">GsapFromTo</h1>
			<p className="mt-5 text-gray-50">
				The <code>gsap.fromTo()</code> method is used to animate elements from a
				new state to another new state.
			</p>
			<p className="mt-5 text-gray-50">
				The <code>gsap.fromTo()</code> method is a combination of the{" "}
				<code>gsap.from()</code> and <code>gsap.to()</code> methods, it allows
				you to define both the starting and ending states of the animation in a
				single method call.
			</p>
			<p className="mt-5 text-gray-50">
				Read more about it in the{" "}
				<a
					href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
					target="_blank"
					rel="noopener noreferrer noopener"
				>
					gsap.fromTo()
				</a>{" "}
				method.
			</p>
			<div className="mt-20">
				<div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg"></div>
			</div>
		</main>
	);
};

export default GsapFromTo;
