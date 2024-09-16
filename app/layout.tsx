import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StoreProvider from './StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'ICM Money ',
	description:
		'ICM Money is a platform that allows you to invest in the stock market',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className} suppressHydrationWarning={true}>
				<StoreProvider>
					<div className='main'>
						<div />
					</div>
					{children}
				</StoreProvider>
				<ToastContainer />

				{/* {process.env.NODE_ENV === 'production' && <FacebookMsg />} */}
				<script
					src='//code.tidio.co/e8ucllwk964tcwjk66nkl4ub60rrvs54.js'
					async
				></script>
			</body>
		</html>
	);
}
