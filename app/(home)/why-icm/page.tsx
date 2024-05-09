import ContactUs from '@/components/PrivacyPolicy/ContactUs';
import WhyIcmBanner from '@/components/WhyIcm/WhyIcmBanner';
import React from 'react';

const WhyIcmMoney = () => {
	return (
		<div>
			<WhyIcmBanner />
			<div className='px-4 w-full md:w-11/12 mx-auto my-10 grid md:grid-cols-5 gap-4'>
				<div className='md:col-span-3 space-y-6'>
					<div className=' space-y-2'>
						<h3 className='  font-semibold'>
							Welcome to ICM Money Investment Platform
						</h3>
						<p className='text-sm tracking-tight'>
							At ICM Money, we believe in empowering individuals to achieve
							their financial goals through personalized investment solutions.
							Our platform offers a range of investment packages designed to
							provide substantial returns, ensuring financial growth and
							security for our users.
						</p>
					</div>

					<div className=' space-y-2'>
						<h3 className=' text-2xl font-semibold'>Investment Packages</h3>
						<p className='text-sm tracking-tight'>
							Choose from our selection of investment packages tailored to meet
							your financial objectives. Each package offers the opportunity to
							earn significant returns, with profit multipliers ranging from 2x
							to 4x. Whether you're looking for steady growth or higher returns,
							we have the right package for you.
						</p>
					</div>

					<div className=' space-y-2'>
						<h3 className=' text-2xl font-semibold'>Lottery System</h3>
						<p className='text-sm tracking-tight'>
							Participate in our exciting lottery system by purchasing tickets
							for a chance to win big! We draw lotteries through Chat GPT for
							certain participants and after a certain period of time, selecting
							three lucky winners who receive exclusive prizes. This is another
							way to improve the investment experience for our users. Price per
							ticket is 2 USDT. 1st Prize 1800 USDT/Motorcycle, 2nd Prize 700
							USDT/Laptop, 3rd Prize 500 USDT/Smartphone,
						</p>
					</div>

					<div className=' space-y-2'>
						<h3 className=' text-2xl font-semibold'>Secure Investments</h3>
						<p className='text-sm tracking-tight'>
							Rest assured, your investments are in safe hands at IC Partner. We
							employ a rigorous investment strategy, focusing on reputable
							platforms and the stock market to maximize returns. Our team of
							experts is dedicated to ensuring the safety and growth of your
							funds.
						</p>
					</div>

					<div className=' space-y-2'>
						<h3 className=' text-2xl font-semibold'>
							Transparent and Reliable
						</h3>
						<p className='text-sm tracking-tight'>
							We prioritize transparency and reliability in everything we do.
							From our investment process to our lottery draws, we strive to
							provide clear and honest information to our users. You can trust
							us to deliver on our promises and help you achieve financial
							success. Our contact information:{' '}
							<a className='text-blue-700' href='mailto:support@icmmoney.com'>
								support@icmmoney.com
							</a>{' '}
							Also can communicate through live chat and get all kinds of
							support Join IC Markets Partner Today
						</p>

						<p className='text-sm tracking-tight'>
							Take control of your financial future and join IC Partner today.
							Experience the power of personalized investments, lucrative
							returns, and a secure investment environment. Let us help you
							reach your financial goals and unlock new opportunities for
							prosperity.
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

export default WhyIcmMoney;
