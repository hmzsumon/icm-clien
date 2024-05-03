import ContactUs from '@/components/PrivacyPolicy/ContactUs';
import PrivacyBanner from '@/components/PrivacyPolicy/PrivacyBanner';
import React from 'react';

const PrivacyPolicy = () => {
	return (
		<div>
			<div className='mt-0.3'>
				<PrivacyBanner title='ICM Money Privacy Policy' />
			</div>
			<div className='px-10 py-10 grid md:grid-cols-5 gap-4 bg-white '>
				<div className=' md:col-span-3 space-y-4'>
					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							Privacy Policy
						</h2>
						<p className=' text-xs text-gray-600'>
							At ICM Money, we are committed to safeguarding the privacy and
							security of your personal information. This Privacy Policy
							outlines how we collect, use, and protect the information you
							provide to us.
						</p>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							Information We Collect
						</h2>
						<p className=' text-xs text-gray-600'>
							We collect personal information when you register an account,
							participate in our investment programs, use our website, or
							communicate with us. This may include:
						</p>
						<div className='my-2 ml-4'>
							<ul className='list-disc text-xs text-gray-600 font-semibold'>
								<li>Full name</li>
								<li>Contact information (email address, phone number)</li>
								<li>Financial details</li>
								<li>Transaction history</li>
								<li>Any other information you choose to provide</li>
							</ul>
						</div>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							How We Use Your Information
						</h2>
						<p className=' text-xs text-gray-600'>
							We use the information we collect to:
						</p>
						<div className='my-2 ml-4'>
							<ul className='list-disc text-xs text-gray-600 font-semibold'>
								<li>Provide and manage our investment services</li>
								<li>
									Communicate with you regarding your account and investments
								</li>
								<li>Process transactions and fulfill your requests</li>
								<li>Personalize your experience and improve our services</li>
								<li>Comply with legal and regulatory requirements</li>
							</ul>
						</div>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							Data Security
						</h2>
						<p className=' text-xs text-gray-600'>
							We employ industry-standard security measures to protect your
							personal information from unauthorized access, alteration,
							disclosure, or destruction. We regularly review and update our
							security protocols to ensure the confidentiality and integrity of
							your data.
						</p>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							Disclosure of Information
						</h2>
						<div className=' space-y-2'>
							<p className=' text-xs text-gray-600'>
								We may share your personal information with trusted third-party
								service providers who assist us in delivering our services.
								These providers are bound by strict confidentiality agreements
								and are only authorized to use your information for the purposes
								outlined in this Privacy Policy.
							</p>
							<p className=' text-xs text-gray-600'>
								We may also disclose your information when required by law or to
								protect our rights, property, or safety, as well as the rights,
								property, or safety of others.
							</p>
						</div>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							Children's Privacy
						</h2>
						<p className=' text-xs text-gray-600'>
							Our services are not directed at individuals under the age of 18,
							and we do not knowingly collect personal information from
							children. If you are a parent or guardian and believe that your
							child has provided us with personal information, please contact us
							immediately, and we will take steps to remove that information
							from our systems.
						</p>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							Your Choices
						</h2>
						<p className=' text-xs text-gray-600'>
							You have the right to access, update, and correct your personal
							information at any time. You may also request the deletion of your
							account and personal data, subject to any legal obligations we may
							have to retain certain information.
						</p>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							Changes to This Privacy Policy
						</h2>
						<p className=' text-xs text-gray-600'>
							We reserve the right to update or modify this Privacy Policy as
							needed. Any changes will be posted on our website, and we
							encourage you to review this Privacy Policy periodically for
							updates.
						</p>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							Do you need extra help?
						</h2>
						<p className=' text-xs text-gray-600'>
							If you have any questions or concerns about this Privacy Policy or
							our data practices, please reach out to us at
							<br />
							<a
								href='mailto:support@icmmoney.com'
								className='text-icm-green font-bold'
							>
								{' '}
								Support Email
							</a>
						</p>
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

export default PrivacyPolicy;
