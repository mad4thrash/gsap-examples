export default function GsapText() {
	return (
		<main>
			<h1 className="text-xl text-gray-50">GSAP Text</h1>
			<p className="mt-5 text-gray-50">
				GSAP text animations allow you to create stunning typography effects by
				animating individual characters, words, or lines of text with precise
				control and timing.
			</p>
			<p className="mt-5 text-gray-50">
				Text animations in GSAP can include effects like typewriter animations,
				character reveals, text morphing, and complex text choreography. You can
				split text into individual characters or words and animate each piece
				independently.
			</p>
			<p className="mt-5 text-gray-50">
				These animations are perfect for creating engaging headlines,
				interactive typography, loading animations, and attention-grabbing text
				effects that enhance user experience.
			</p>
			<p className="mt-5 text-gray-50">
				Read more about it in the{" "}
				<a
					href="https://greensock.com/docs/v3/Plugins/TextPlugin"
					target="_blank"
					rel="noopener noreferrer"
				>
					GSAP Text Plugin
				</a>{" "}
				documentation.
			</p>
			<div className="mt-20">
				<h2 id="animated-text" className="text-4xl font-bold text-white">
					Animated Text
				</h2>
				<p id="animated-paragraph" className="mt-4 text-lg text-gray-300">
					This text will be animated character by character!
				</p>
			</div>
		</main>
	);
}
