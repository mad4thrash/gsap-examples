"use client";
import { gsap } from "gsap";

import { useGSAP } from "@gsap/react";
import React from "react";

const GsapTo = () => {
	useGSAP(() => {
		gsap.to("#blue-box", {
			x: 300,
			rotation: 360,
			repeat: -1,
			yoyo: true,
			duration: 2,
			ease: "elastic",
		});
	}, []);
	return (
		<main>
			<h1 className="text-gray-50 text-xl">GsapTo</h1>
			<p className="mt-5 text-gray-50">
				The <code>gsap.to()</code> method is used to animate elements from their
				current state to a new state
			</p>
			<p className="mt-5 text-gray-50">
				The <code>gsap.to()</code> method is similar to the{" "}
				<code>gsap.from()</code> method, but the difference is that then{" "}
				<code>gsap.to()</code> method animates the element from its current
				state to a news state, while the <code>gsap.from()</code> method
				animates the element from a new state to their current state.
			</p>
			<p className="mt-5 text-gray-50">
				Read more about it in the{" "}
				<a
					href="https://greensock.com/docs/v3/GSAP/gsap.to()"
					target="_blank"
					rel="noopener noreferrer noopener"
				>
					gsap.to()
				</a>{" "}
				method.
			</p>
			<div className="mt-20">
				<div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg"></div>
			</div>
		</main>
	);
};

export default GsapTo;
