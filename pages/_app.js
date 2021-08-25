import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import './global.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
