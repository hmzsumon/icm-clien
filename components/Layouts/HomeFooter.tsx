import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeFooter = () => {
	return (
		<div className=' pt-10 bg-[#0F171C]  text-white pb-4 w-full z-10  px-4'>
			<div className=' md:w-8/12 w-full mx-auto'>
				<div className=' grid md:grid-cols-4 gap-2'>
					<div>
						<Image
							src='/logo.png'
							alt='IC market Logo'
							width={300}
							height={100}
							className='object-contain w-40 h-6 my-4'
						/>
						<p className=' text-xs text-[#777777] leading-4 tracking-tight'>
							IC Markets Partner mission is to create the best trading
							experience for retail and institutional clients alike, allowing
							traders to focus more on their trading. Built by traders for
							traders IC Markets Partner is dedicated to offering superior
							spreads, execution and service
						</p>
					</div>
					<div></div>
					<div></div>
					<div>
						<h1 className='text-sm font-bold'>About IC Markets Partner?</h1>
						<ul className='text-xs text-[#777777] mt-2 font-semibold space-y-2 '>
							<li className=' hover:text-icm-green'>
								<Link href='/'>
									<span>Help Center</span>
								</Link>
							</li>
							<li className=' hover:text-icm-green'>
								<Link href='/'>
									<span>Why IC Markets Partner</span>
								</Link>
							</li>
							<li className=' hover:text-icm-green'>
								<Link href='/'>
									<span>Regulation</span>
								</Link>
							</li>
							<li className=' hover:text-icm-green'>
								<Link href='/'>
									<span>Legal Documents</span>
								</Link>
							</li>
							<li className=' hover:text-icm-green'>
								<Link href='/'>
									<span>Contact Us</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<hr className='border-t border-gray-700 my-6 w-full' />
				<div className=' space-y-2'>
					<p className='text-xs text-[#777777]'>
						IC Markets Partner is the trading name of Raw Trading Ltd, which is
						regulated by the Seychelles Financial Services Authority (FSA) with
						Securities Dealer’s license number SD018.
					</p>

					<Link
						href='/document'
						className='text-xs font-bold my-3 text-[#777777] hover:text-icm-green'
					>
						Legal Documents
					</Link>
				</div>
				<hr className='border-t border-gray-700 mt-6 mb-2 w-full' />
				<div>
					<p className='text-xs text-white'>
						© 2024 Raw Trading Ltd | All rights reserved
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomeFooter;
