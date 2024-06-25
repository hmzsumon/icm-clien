'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeFooter = () => {
	const handleDownload = () => {
		// Trigger download action
		const link = document.createElement('a');
		link.href = '/icm-money.apk';
		link.download = 'icm-money.apk';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleDownloadPDF = () => {
		// Trigger download action for PDF
		const link = document.createElement('a');
		link.href = '/icm-money.pdf';
		link.download = 'icm-money.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className=' pt-10 bg-[#0F171C]  text-white pb-4 w-full z-10  px-4'>
			<div className=' md:w-11/12 w-full mx-auto'>
				<div className=' grid md:grid-cols-4 gap-2'>
					<div>
						<Image
							src='/logo.png'
							alt='IC market Logo'
							width={300}
							height={100}
							className='object-contain w-40 h-6 my-4'
						/>
						<p className=' text-xs text-[#777777] leading-4 tracking-tight text-justify'>
							IC Markets money is an investment platform dedicated to empowering
							individuals to financial goals through personalized solutions.
							They offer a range of investment packages with profit multipliers
							from 3x to 3.5x catering to different objectives. Additionally,
							they feature an engaging lottery system where users can win
							exclusive prizes by purchasing tickets. With a focus on secure
							investments and transparent operations, IC Markets Money aims to
							provide a trustworthy environment for users to grow their funds.
						</p>
					</div>
					<div></div>
					<div></div>
					<div>
						<h1 className='text-sm font-bold'>About IC Markets money?</h1>
						<ul className='text-xs text-[#777777] mt-2 font-semibold space-y-2 '>
							<li className=' hover:text-icm-green'>
								<Link href='/contact-us'>
									<span>Help Center</span>
								</Link>
							</li>
							<li className=' hover:text-icm-green'>
								<Link href='/why-icm'>
									<span>Why ICM Money</span>
								</Link>
							</li>
							<li className=' hover:text-icm-green'>
								<Link href='/privacy-policy'>
									<span>Privacy Policy</span>
								</Link>
							</li>
							{/* <li className=' hover:text-icm-green'>
								<Link href='/'>
									<span>Regulation</span>
								</Link>
							</li> */}
							<li className=' hover:text-icm-green'>
								<Link href='/legal-documents'>
									<span>Legal Documents</span>
								</Link>
							</li>
							<li className=' hover:text-icm-green'>
								<Link href='/contact-us'>
									<span>Contact Us</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<hr className='border-t border-gray-700 my-6 w-full' />
				<div className=' grid md:grid-cols-2 gap-4'>
					<button
						className='px-4 py-2  text-gray-100 bg-green-500 rounded-lg'
						onClick={handleDownload}
					>
						Download APK For Android
					</button>
					<button
						className='px-4 py-2  text-gray-100 bg-blue-500 rounded-lg'
						onClick={handleDownloadPDF}
					>
						Download PDF
					</button>
				</div>
				<hr className='border-t border-gray-700 mt-6 mb-2 w-full' />
				<div>
					<p className='text-xs text-white text-center md:text-left mt-2'>
						&copy; 2024 ICM Money | All rights reserved
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomeFooter;
