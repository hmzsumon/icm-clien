'use client';
import Link from 'next/link';
import { Button, Navbar } from 'flowbite-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const HomeNavbar = () => {
	const pathname = usePathname();
	return (
		<Navbar fluid className='bg-gray-950 p-4 sticky top-0 z-50'>
			<Navbar.Brand>
				<Image
					src='/logo.png'
					alt='IC market Logo'
					width={400}
					height={100}
					className='object-contain w-44 h-6'
				/>
			</Navbar.Brand>
			<div className='flex md:order-2'>
				{pathname === '/' ? (
					<Link href='/register'>
						<Button>Register</Button>
					</Link>
				) : (
					<Link href='/'>
						<Button>Login</Button>
					</Link>
				)}
				{/* <Navbar.Toggle /> */}
			</div>
			{/* <Navbar.Collapse>
				<Navbar.Link href='#' active>
					Home
				</Navbar.Link>
				<Navbar.Link href='#'>About</Navbar.Link>
				<Navbar.Link href='#'>Services</Navbar.Link>
				<Navbar.Link href='#'>Pricing</Navbar.Link>
				<Navbar.Link href='#'>Contact</Navbar.Link>
			</Navbar.Collapse> */}
		</Navbar>
	);
};

export default HomeNavbar;
