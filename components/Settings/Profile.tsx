import { FaDollarSign, FaRegCircleQuestion } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';
import { Tooltip } from 'react-tooltip';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { ImProfile } from 'react-icons/im';
import { CiLocationOn } from 'react-icons/ci';

const Profile = () => {
	return (
		<div className='py-10 px-5 md:px-10 '>
			<p className=' text-primary font-semibold'>Account</p>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-5'>
				<div className='bg-[#F8F9FA] rounded p-5'>
					<div className='flex justify-between items-center'>
						<div className='flex items-center gap-3'>
							<span className='text-2xl p-2  border-4 rounded-full text-black'>
								<RxAvatar />
							</span>
							<div className='space-y-1'>
								<p className='text-[12px] font-medium text-primary'>
									Verification status
								</p>
								<p className='text-[#C0424D] text-lg font-semibold'>
									Not verified
								</p>
								<p className='text-[12px]'>0/3 steps complete</p>
							</div>
						</div>
						<button className='rounded py-2 px-4 text-[14px] border-slate-400 border text-slate-700 duration-300 hover:bg-[#EBEDEE]'>
							Complete Now
						</button>
					</div>
				</div>
				<div className='bg-[#F8F9FA] rounded p-5'>
					<div className='flex justify-between items-center'>
						<div className='flex items-center gap-3'>
							<span className='text-2xl p-2  border-4 rounded-full text-black'>
								<FaDollarSign />
							</span>
							<div className='space-y-1'>
								<p
									data-tooltip-id='unavialble'
									data-tooltip-content='This is the maximum amount you can currently deposit. Once you reach the limit, you will not be able to deposit or receive internal transfers. Withdrawals will remain available.'
									data-tooltip-place='bottom'
									data-tooltip-class-name='custom-tooltip'
									className='text-[12px] font-medium text-primary w-[fit-content] flex items-center gap-1 cursor-default select-none'
								>
									Deposit limit
									<span>
										<FaRegCircleQuestion />
									</span>
									<Tooltip id='unavialble' />
								</p>
								<p className='text-lg font-semibold'>10,000 USD</p>
								<p className='text-[12px]'>
									Verify your account to unlock limits
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='py-5'>
				<div className='collapse collapse-arrow border'>
					<input type='radio' name='profile-accordion' />
					<div className='collapse-title text-[1rem] text-slate-500 font-medium bg-[#F8F9FA]'>
						1. Confirm email and phone number. Add personal details
					</div>

					<div className='collapse-content collapse-box border-t duration-500 transition space-y-4'>
						<p className='text-[14px] text-primary mt-3'>Details to confirm</p>
						<div className='flex items-center gap-3 py-3'>
							<p className='flex items-center gap-1 text-slate-700 font-semibold text-sm'>
								<span>
									<MdOutlineEmail />
								</span>
								<span>User*****@gmail.com</span>
							</p>
							<p className='flex items-center gap-1 text-slate-700 font-semibold text-sm'>
								<span>
									<FaPhoneAlt />
								</span>
								<span>Phone number</span>
							</p>
							<p className='flex items-center gap-1 text-slate-700 font-semibold text-sm'>
								<span>
									<IoDocumentTextOutline />
								</span>
								<span>Add profile information</span>
							</p>
						</div>
						<div className='w-full border-t h-[1px] my-3'></div>
						<div>
							<p className='text-[14px] text-primary mt-3'>Deposit limit</p>
							<p className='font-bold text-primary text-lg'>2 000 USD</p>
							<p className='text-[14px]'>
								This limit will apply for 30 days after the first deposit
							</p>
						</div>
						<div className='w-full border-t h-[1px] my-3'></div>
						<button className='py-2 px-5 primary-bg hover:bg-[#FFDA39] rounded text-slate-900 text-[14px]'>
							Complete now
						</button>
					</div>
				</div>
				<div className='collapse collapse-arrow border'>
					<input type='radio' name='profile-accordion' />
					<div className='collapse-title text-[1rem] text-slate-500 bg-[#F8F9FA] font-medium'>
						2. Verify your identity
					</div>
					<div className='collapse-content border-tm space-y-4'>
						<div className='space-y-2'>
							<p className='text-[12px] text-primary mt-3'>
								Provide a document confirming your name
							</p>
							<p className='flex items-center gap-1 text-slate-700 font-semibold text-sm'>
								<span>
									<ImProfile />
								</span>
								<span>Add profile information</span>
							</p>
						</div>
						<div className='w-full border-t h-[1px] my-3'></div>
						<div>
							<p className='text-[14px] text-primary mt-3'>Deposit limit</p>
							<p className='font-bold text-primary text-lg'>10 000 USD</p>
							<p className='text-[14px]'>
								This limit will apply until you complete step 3
							</p>
						</div>
						<div className='w-full border-t h-[1px] my-3'></div>
						<div className='flex items-center gap-4'>
							<button
								className='py-2 px-5 bg-[#E0E0E0] rounded text-slate-400 text-[14px]'
								disabled
							>
								Complete now
							</button>
							<p>Complete step 1 to continue</p>
						</div>
					</div>
				</div>
				<div className='collapse collapse-arrow border'>
					<input type='radio' name='profile-accordion' />
					<div className='collapse-title text-[1rem] text-slate-500 bg-[#F8F9FA] font-medium'>
						3. Verify residential address
					</div>
					<div className='collapse-content border-tm space-y-4'>
						<div className='space-y-2'>
							<p className='text-[12px] text-primary mt-3'>
								You will need to provide proof of your place of residence
							</p>
							<p className='flex items-center gap-1 text-slate-700 font-semibold text-sm'>
								<span>
									<CiLocationOn />
								</span>
								<span>Add profile information</span>
							</p>
						</div>
						<div className='w-full border-t h-[1px] my-3'></div>
						<div>
							<p className='text-[14px] text-primary mt-3'>Deposit limit</p>
							<p className='font-bold text-primary text-lg'>Unlimited</p>
							<p className='text-[14px]'>
								Depending on selected payment method
							</p>
						</div>
						<div className='w-full border-t h-[1px] my-3'></div>
						<div className='flex items-center gap-4'>
							<button
								className='py-2 px-5 bg-[#E0E0E0] rounded text-slate-400 text-[14px]'
								disabled
							>
								Complete now
							</button>
							<p>Complete step 2 to continue</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
