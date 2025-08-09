import { getProjectRequests } from "./actions/projectRequests";

export default async function Home() {
	const projectRequests = await getProjectRequests();

	return (
		<main className="p-8">
			<h1 className="text-2xl font-bold mb-4">Portfolio de Antonio</h1>

			<ul className="space-y-2">
				{projectRequests.map((project: any) => (
					<li key={project.id} className="border p-4 rounded">
						<h2 className="font-semibold">{project.project_name}</h2>
						<p>{project.project_description}</p>
					</li>
				))}
			</ul>
		</main>
	);
}
