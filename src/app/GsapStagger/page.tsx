export default function GsapStagger() {
	return (
		<main>
			<h1 className="text-xl text-gray-50">GSAP Stagger</h1>
			<p className="mt-5 text-gray-50">
				The <code>stagger</code> property in GSAP is used to create animations
				that affect multiple elements with a time delay between each element.
			</p>
			<p className="mt-5 text-gray-50">
				The <code>stagger</code> property allows you to animate groups of
				elements with precise timing offsets, creating beautiful wave-like or
				cascading animation effects. You can control the delay, direction, and
				distribution of the stagger effect.
			</p>
			<p className="mt-5 text-gray-50">
				Stagger animations are perfect for animating lists, grids, or any
				collection of elements where you want each item to animate in sequence
				rather than all at once.
			</p>
			<p className="mt-5 text-gray-50">
				Read more about it in the{" "}
				<a
					href="https://greensock.com/docs/v3/Staggers"
					target="_blank"
					rel="noopener noreferrer"
				>
					GSAP Stagger
				</a>{" "}
				documentation.
			</p>
			<div className="mt-20 flex gap-4">
				<div className="stagger-box w-16 h-16 bg-red-500 rounded-lg"></div>
				<div className="stagger-box w-16 h-16 bg-blue-500 rounded-lg"></div>
				<div className="stagger-box w-16 h-16 bg-green-500 rounded-lg"></div>
				<div className="stagger-box w-16 h-16 bg-yellow-500 rounded-lg"></div>
				<div className="stagger-box w-16 h-16 bg-purple-500 rounded-lg"></div>
			</div>
		</main>
	);
}
