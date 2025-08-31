import LinkCard from "@/components/LinkCard";
import { routes } from "@/lib/routes";

export default function Home() {
	return (
		<main className="w-2/3 mx-auto flex flex-col items-center justify-center p-4 mt-8 gap-4">
			{routes.map((route) => (
				<LinkCard key={route.path} name={route.name} path={route.path} />
			))}
		</main>
	);
}
