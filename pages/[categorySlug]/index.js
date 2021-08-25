import { useRouter } from 'next/dist/client/router';

export default function Category() {
	const { query } = useRouter();
	return <h1>Categoria: {query.categorySlug}</h1>;
}
