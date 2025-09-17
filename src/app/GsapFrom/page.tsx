"use client";
import { gsap } from "gsap";

import { useGSAP } from "@gsap/react";
import React from "react";

const GsapFrom = () => {
	useGSAP(() => {
		gsap.from("#lime-box", {
			x: 250,
			opacity: 0,
			rotation: 360,
			duration: 1,
			ease: "power2.out",
			repeat: -1,
			yoyo: true,
		});
	}, []);
	return (
		<main>
			<h1 className="text-gray-50 text-xl">GsapFrom</h1>
			<p className="mt-5 text-gray-50">
				The <code>gsap.from()</code> method is used to animate elements from a
				new state to the current state.
			</p>
			<p className="mt-5 text-gray-50">
				The <code>gsap.from()</code> method is similar to the{" "}
				<code>gsap.to()</code> method, but the difference is that then{" "}
				<code>gsap.from()</code> method animates the element from a new state to
				the their current state, while the <code>gsap.to()</code> method
				animates the element from their current state to a new state.
			</p>
			<p className="mt-5 text-gray-50">
				Read more about it in the{" "}
				<a
					href="https://greensock.com/docs/v3/GSAP/gsap.from()"
					target="_blank"
					rel="noopener noreferrer noopener"
				>
					gsap.from()
				</a>{" "}
				method.
			</p>
			<div className="mt-20">
				<div id="lime-box" className="w-20 h-20 bg-lime-500 rounded-lg"></div>
			</div>
		</main>
	);
};

export default GsapFrom;
