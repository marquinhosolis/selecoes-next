import { useRouter } from 'next/dist/client/router';

export default function TagSlug() {
	const { query } = useRouter();
	return <h1>tag: {query.tagSlug}</h1>;
}
