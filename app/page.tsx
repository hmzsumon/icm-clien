import HomeNavbar from '@/components/Layouts/HomeNavbar';
import Login from '@/components/Login/Login';
import Image from 'next/image';
import HomeLayout from './(home)/layout';

export default function Home() {
	return (
		<HomeLayout>
			<div
				className='flex flex-col items-center justify-center px-2 my-10'
				// style={{ height: 'calc(100vh - 64px)' }}
			>
				<Login />
			</div>
		</HomeLayout>
	);
}
