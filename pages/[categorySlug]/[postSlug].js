import { useRouter } from 'next/dist/client/router';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';

export const getStaticProps = async ({
	params: { categorySlug, postSlug },
}) => {
	const response = await fetch(
		'https://www.selecoes.com.br/wp-json/v2/last_posts/post/' +
			categorySlug +
			'/' +
			postSlug
	);

	const data = await response.json();
	return {
		props: {
			postData: data,
		},
		revalidate: 60 * 60 * 2, // 2 hours
	};
};

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	};
};

export default function Post({ postData }) {
	const { isFallback } = useRouter();

	if (isFallback) {
		return <p>Loading...</p>;
	}

	if (postData.data.status == '404') {
		return (
			<>
				<Head>
					<meta name="robots" content="noindex" />
				</Head>
				<DefaultErrorPage statusCode={404} />
			</>
		);
	}

	return (
		<>
			<h1>titulo: {postData.titulo}</h1>
			<p>status: {postData.status}</p>
		</>
	);
}
