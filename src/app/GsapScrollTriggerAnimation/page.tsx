export default function GsapScrollTriggerAnimation() {
	return (
		<main>
			<h1 className="text-xl text-gray-50">GSAP ScrollTrigger Animation</h1>
			<p className="mt-5 text-gray-50">
				The <code>ScrollTrigger</code> plugin allows you to trigger GSAP
				animations based on scroll position, creating immersive scroll-driven
				experiences and interactions.
			</p>
			<p className="mt-5 text-gray-50">
				<code>ScrollTrigger</code> can detect when elements enter or leave the
				viewport, track scroll progress, pin elements during scroll, and create
				parallax effects. It provides precise control over when and how
				animations are triggered during scroll.
			</p>
			<p className="mt-5 text-gray-50">
				ScrollTrigger animations are essential for modern web experiences,
				enabling storytelling through scroll, reveal animations, progress
				indicators, and sophisticated scroll-based interactions.
			</p>
			<p className="mt-5 text-gray-50">
				Read more about it in the{" "}
				<a
					href="https://greensock.com/docs/v3/Plugins/ScrollTrigger"
					target="_blank"
					rel="noopener noreferrer"
				>
					GSAP ScrollTrigger
				</a>{" "}
				plugin documentation.
			</p>
			<div className="mt-20 mb-40">
				<div
					id="scroll-box"
					className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mx-auto"
				></div>
			</div>
			<div className="mt-96 mb-40">
				<div id="scroll-text" className="text-center text-2xl text-white">
					Scroll to see the magic happen!
				</div>
			</div>
		</main>
	);
}
