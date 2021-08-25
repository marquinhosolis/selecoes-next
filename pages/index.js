import Link from 'next/link';

export default function Home({ postsHome }) {
	return (
		<main>
			<h1>Revista Seleções</h1>
			<div className="capaHome">
				<h2>Destaques</h2>
				<h3>Destaque Princiapal</h3>
				<ul>
					{postsHome.capa.destaque_principal.map((post) => (
						<li key={post.id}>
							<Link href="/casa-decoracao/area-gourmet/">
								<a>{post.titulo}</a>
							</Link>
						</li>
					))}
				</ul>
				<h3>Matérias em destaque</h3>
				<ul>
					{postsHome.capa.materias_destaque.map((post) => (
						<li key={post.id}>
							<h4> {post.titulo} </h4>
						</li>
					))}
				</ul>
				<h3>Top Histórias</h3>
				<ul>
					{postsHome.capa.top_historias.map((post) => (
						<li key={post.id}>
							<h4> {post.titulo} </h4>
						</li>
					))}
				</ul>
			</div>
			<div className="saudeHome">
				<h2>Saude & Bem-Estar</h2>
				{postsHome.saude_bem_estar.map((post) => (
					<li key={post.id}>
						<h4>{post.titulo}</h4>
					</li>
				))}
			</div>
			<div className="coronavirusHome">
				<h2>Coronavirus</h2>
				{postsHome.coronavirus.map((post) => (
					<li key={post.id}>
						<h4>{post.titulo}</h4>
					</li>
				))}
			</div>
			<div className="decoracaoHome">
				<h2>Casa & Decoração</h2>
				{postsHome.casa_decoracao.map((post) => (
					<li key={post.id}>
						<h4>{post.titulo}</h4>
					</li>
				))}
			</div>
			<div className="saborDeCasaHome">
				<h2>Sabor de Casa</h2>
				{postsHome.sabor_de_casa.map((post) => (
					<li key={post.id}>
						<h4>{post.titulo}</h4>
					</li>
				))}
			</div>
			<div className="colunistasHome">
				<h2>Colunas</h2>
				{postsHome.colunistas.map((post) => (
					<li key={post.link}>
						<h4>{post.titulo}</h4>
					</li>
				))}
			</div>
			<div className="culturaLazerHome">
				<h2>Cultura & Lazer</h2>
				{postsHome.cultura_lazer.map((post) => (
					<li key={post.id}>
						<h4>{post.titulo}</h4>
					</li>
				))}
			</div>
			<div className="humorHome">
				<h2>Humor</h2>
				{postsHome.humor.map((post) => (
					<li key={post.id}>
						<h4>{post.titulo}</h4>
					</li>
				))}
			</div>
		</main>
	);
}

export const getStaticProps = async () => {
	const response = await fetch(process.env.HOME_API_URL);
	const data = await response.json();

	return {
		props: {
			postsHome: data,
		},
		revalidate: 60 * 60 * 2, // 2 hours
	};
};
