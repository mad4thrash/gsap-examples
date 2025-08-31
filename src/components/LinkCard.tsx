import Link from "next/link";
import React from "react";

const LinkCard = ({ name, path }: { name: string; path: string }) => {
	return (
		<div className="p-4 w-2/3 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col items-start justify-center gap-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
			<h1 className="text-2xl font-bold mb-2 text-white">{name}</h1>
			<Link
				href={path}
				className="text-blue-100 hover:text-blue-200 transition-colors"
			>
				Go to {name} page
			</Link>
		</div>
	);
};

export default LinkCard;
