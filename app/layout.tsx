import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StoreProvider from './StoreProvider';
// import FacebookMsg from '@/components/FacebookMsg';
import { dark } from '@mui/material/styles/createPalette';
import TawkTo from '@/lib/TawkTo';

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
				<StoreProvider>{children}</StoreProvider>
				<ToastContainer />

				<TawkTo />
				{/* {process.env.NODE_ENV === 'production' && <FacebookMsg />} */}
			</body>
		</html>
	);
}
