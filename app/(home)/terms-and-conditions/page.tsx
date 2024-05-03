import ContactUs from '@/components/PrivacyPolicy/ContactUs';
import PrivacyBanner from '@/components/PrivacyPolicy/PrivacyBanner';
import React from 'react';

const TermsAndConditions = () => {
	return (
		<div>
			<div className='mt-0.3'>
				<PrivacyBanner title='Terms And Conditions' />
			</div>
			<div className='px-10 py-10 grid md:grid-cols-5 gap-4 bg-white '>
				<div className=' md:col-span-3 space-y-4'>
					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							Terms and Conditions
						</h2>
						<p className=' text-xs text-gray-600'>
							Welcome to ICM Money. These Terms and Conditions govern your
							access to and use of our investment platform and services. By
							using our platform, you agree to comply with these Terms and
							Conditions. If you do not agree with any part of these terms,
							please do not use our services.
						</p>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							1. Eligibility
						</h2>
						<p className=' text-xs text-gray-600'>
							You must be at least 18 years old and have the legal capacity to
							enter into agreements to use our services. By accessing or using
							our platform, you represent and warrant that you meet these
							eligibility requirements
						</p>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							2. Account Registration
						</h2>
						<p className=' text-xs text-gray-600'>
							To access certain features of our platform, you may need to
							register an account. You agree to provide accurate, current, and
							complete information during the registration process and to keep
							your account information updated. You are responsible for
							maintaining the confidentiality of your account credentials and
							for all activities that occur under your account.
						</p>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							3. Investment Packages
						</h2>
						<p className=' text-xs text-gray-600'>
							Our platform offers various investment packages with different
							profit multipliers. By choosing an investment package, you agree
							to the terms and conditions specific to that package, including
							any associated risks and returns.
						</p>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							4. Lottery System
						</h2>
						<div className=' space-y-2'>
							<p className=' text-xs text-gray-600'>
								Participation in our lottery system is optional and subject to
								additional terms and conditions. By purchasing tickets for the
								lottery, you agree to abide by the rules of the lottery and
								accept the outcome of the draw as final.
							</p>
						</div>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							5. User Conduct
						</h2>
						<p className=' text-xs text-gray-600'>
							You agree not to use our platform for any unlawful or prohibited
							purpose. You also agree not to engage in any activity that
							interferes with or disrupts the operation of our platform or
							violates the rights of others.
						</p>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							6. Intellectual Property
						</h2>
						<p className=' text-xs text-gray-600'>
							All content and materials available on our platform, including but
							not limited to text, graphics, logos, images, and software, are
							the property of IC Markets Partner or its licensors and are
							protected by copyright and other intellectual property laws.
						</p>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							7. Disclaimer of Warranties
						</h2>
						<p className=' text-xs text-gray-600'>
							Our platform is provided on an "as is" and "as available" basis,
							without warranties of any kind, either express or implied. We do
							not guarantee the accuracy, completeness, or reliability of any
							information or content on our platform.
						</p>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							8. Limitation of Liability
						</h2>
						<p className=' text-xs text-gray-600'>
							In no event shall IC Markets Partner, its affiliates, or their
							respective officers, directors, employees, or agents be liable for
							any indirect, incidental, special, consequential, or punitive
							damages arising out of or in connection with your use of our
							platform
						</p>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							9. Indemnification
						</h2>
						<p className=' text-xs text-gray-600'>
							You agree to indemnify and hold IC Markets Partner and its
							affiliates harmless from any claims, damages, liabilities, and
							expenses (including attorneys' fees) arising out of or related to
							your use of our platform or any violation of these Terms and
							Conditions.
						</p>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							10. Governing Law
						</h2>
						<p className=' text-xs text-gray-600'>
							These Terms and Conditions shall be governed by and construed in
							accordance with the laws of [Jurisdiction], without regard to its
							conflict of law principles.
						</p>
					</div>

					<div>
						<h2 className='text-xl text-gray-700 font-bold my-2'>
							11. Changes to Terms and Conditions
						</h2>
						<p className=' text-xs text-gray-600'>
							We reserve the right to update or modify these Terms and
							Conditions at any time without prior notice. Any changes will be
							effective immediately upon posting on our platform. Your continued
							use of our services after the posting of changes constitutes your
							acceptance of such changes.
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

export default TermsAndConditions;
