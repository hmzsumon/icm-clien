import LegalBanner from '@/components/LegalDocuments/LegalBanner';
import ContactUs from '@/components/PrivacyPolicy/ContactUs';
import Link from 'next/link';
import React from 'react';
import { FaRegDotCircle } from 'react-icons/fa';

const LegalDocuments = () => {
	return (
		<div>
			<div className='mt-0.3'>
				<LegalBanner />
			</div>

			<div className='px-10 py-10 grid md:grid-cols-5 gap-4 bg-white '>
				<div className=' md:col-span-3 space-y-4'>
					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							Prior to opening a partner account with ICM Money please ensure
							that you have read and understood our Account Terms and other
							disclosure documents as applicable.
						</h2>
						<div className='bg-gray-900 p-4 rounded-lg my-4'>
							<h2 className='text-gray-100 text-2xl font-bold'>
								{' '}
								ICM Raw Trading Ltd Legal Documents
							</h2>
						</div>
					</div>

					<div>
						<div className='my-2 ml-4'>
							<ul className='list-none  text-gray-600 font-semibold space-y-2'>
								<li className=' flex items-center gap-2'>
									<FaRegDotCircle className='inline-block  text-icm-green' />
									<Link
										href='/terms-and-conditions'
										className='text-gray-700 text-sm font-semibold underline hover:text-icm-green '
									>
										<span>Terms & Conditions</span>
									</Link>
								</li>

								<li className=' flex items-center gap-2'>
									<FaRegDotCircle className='inline-block  text-icm-green' />
									<Link
										href='/privacy-policy'
										className='text-gray-700 text-sm font-semibold underline hover:text-icm-green '
									>
										<span>Privacy Policy</span>
									</Link>
								</li>

								<li className=' flex items-center gap-2'>
									<FaRegDotCircle className='inline-block  text-icm-green' />
									<a
										href='https://pdfhost.io/v/zUt9YF3M~_cukisspolicy'
										target='_blank'
										className='text-gray-700 text-sm font-semibold underline hover:text-icm-green '
									>
										<span>Cookies Policy</span>
									</a>
								</li>

								<li className=' flex items-center gap-2'>
									<FaRegDotCircle className='inline-block  text-icm-green' />
									<a
										href='https://pdfhost.io/v/VW2IDh~uS_holding'
										target='_blank'
										className='text-gray-700 text-sm font-semibold underline hover:text-icm-green '
									>
										<span>Complaints Handling Policy</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* Start Contact Us */}
				<div className=' md:col-span-2'>
					<ContactUs />
				</div>
				{/* End Contact Us */}
			</div>
		</div>
	);
};

export default LegalDocuments;
