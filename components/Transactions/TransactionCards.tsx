import { BiTransfer } from 'react-icons/bi';
import {
	MdOutlineArrowRightAlt,
	MdOutlineDownloadForOffline,
} from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';
import { SiBinance } from 'react-icons/si';
const TransactionCards = () => {
	return (
		<div>
			<p className='w-full p-2 bg-slate-100 rounded text-primary font-semibold mb-3'>
				Yesterday, February 06
			</p>
			{/* Done Status */}
			<div className='border border-slate-400 rounded-lg p-3 flex flex-wrap gap-3 justify-between '>
				<div className='flex items-center gap-2'>
					<span className='text-3xl text-primary'>
						<BiTransfer />
					</span>
					<div>
						<p className='text-primary font-medium'>Transfer</p>
						<p className='text-secondary text-[12px] font-semibold'>
							06 Feb, 14:26
						</p>
						<p className='text-secondary text-[12px] font-semibold'>
							Invoice ID 20043874334
						</p>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<p className='bg-slate-500 text-white rounded font-serif px-1'>GX</p>
					<p className='text-slate-600 font-semibold'>145712470</p>
					<p className='text-3xl text-slate-500'>
						<MdOutlineArrowRightAlt />
					</p>
					<p className='bg-slate-500 text-white rounded font-serif px-1'>GX</p>
					<p className='text-slate-600 font-semibold'>145712470</p>
				</div>
				<div className='flex items-center justify-center text-green-500 gap-1 font-semibold'>
					<p className='mb-2'>
						<GoDotFill />
					</p>
					<p>Done</p>
				</div>
				<div className='flex items-center'>
					<p className='text-primary font-semibold'>85.00 USD</p>
				</div>
			</div>
			{/* Another*/}
			<div className='border mt-3 border-slate-400 flex-wrap gap-3 rounded-lg p-3 flex justify-between '>
				<div className='flex items-center gap-2'>
					<span className='text-3xl text-primary'>
						<MdOutlineDownloadForOffline />
					</span>
					<div>
						<p className='text-primary font-medium'>Deposit</p>
						<p className='text-secondary text-[12px] font-semibold'>
							06 Feb, 14:26
						</p>
						<p className='text-secondary text-[12px] font-semibold'>
							Invoice ID 20043874334
						</p>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<p className='text-3xl'>
						<SiBinance />
					</p>
					<p className='text-slate-600 font-semibold'>145712470</p>
					<p className='text-3xl text-slate-500'>
						<MdOutlineArrowRightAlt />
					</p>
					<p className='bg-slate-500 text-white rounded font-serif px-1'>GX</p>
					<p className='text-slate-600 font-semibold'>145712470</p>
				</div>
				<div className='flex items-center justify-center text-green-500 gap-1 font-semibold'>
					<p className='mb-2'>
						<GoDotFill />
					</p>
					<p>Done</p>
				</div>
				<div className='flex items-center'>
					<p className='text-primary font-semibold'>85.00 USD</p>
				</div>
			</div>
			<div className='border mt-3 border-slate-400 flex-wrap gap-3 rounded-lg p-3 flex justify-between '>
				<div className='flex items-center gap-2'>
					<span className='text-3xl text-red-500'>
						<MdOutlineDownloadForOffline />
					</span>
					<div>
						<p className='text-primary font-medium'>Deposit</p>
						<p className='text-secondary text-[12px] font-semibold'>
							06 Feb, 14:26
						</p>
						<p className='text-secondary text-[12px] font-semibold'>
							Invoice ID 20043874334
						</p>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<p className='text-3xl'>
						<SiBinance />
					</p>
					<p className='text-slate-600 font-semibold'>145712470</p>
					<p className='text-3xl text-slate-500'>
						<MdOutlineArrowRightAlt />
					</p>
					<p className='bg-slate-500 text-white rounded font-serif px-1'>GX</p>
					<p className='text-slate-600 font-semibold'>145712470</p>
				</div>
				<div className='flex items-center justify-center text-red-500 gap-1 font-semibold'>
					<p className='mb-2'>
						<GoDotFill />
					</p>
					<p>Rejected</p>
				</div>
				<div className='flex items-center'>
					<p className='text-primary font-semibold'>85.00 USD</p>
				</div>
			</div>
			<div className='border mt-3 border-slate-400 flex-wrap gap-3 rounded-lg p-3 flex justify-between '>
				<div className='flex items-center gap-2'>
					<span className='text-3xl text-primary'>
						<MdOutlineDownloadForOffline />
					</span>
					<div>
						<p className='text-primary font-medium'>Deposit</p>
						<p className='text-secondary text-[12px] font-semibold'>
							06 Feb, 14:26
						</p>
						<p className='text-secondary text-[12px] font-semibold'>
							Invoice ID 20043874334
						</p>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<p className='bg-slate-500 text-white rounded font-serif px-1'>GX</p>
					<p className='text-slate-600 font-semibold'>145712470</p>
					<p className='text-3xl text-slate-500'>
						<MdOutlineArrowRightAlt />
					</p>
					<p className='bg-slate-500 text-white rounded font-serif px-1'>GX</p>
					<p className='text-slate-600 font-semibold'>145712470</p>
				</div>
				<div className='flex items-center justify-center text-green-500 gap-1 font-semibold'>
					<p className='mb-2'>
						<GoDotFill />
					</p>
					<p>Done</p>
				</div>
				<div className='flex items-center'>
					<p className='text-primary font-semibold'>85.00 USD</p>
				</div>
			</div>
			<div className='border mt-3 border-slate-400 flex-wrap gap-3 rounded-lg p-3 flex justify-between '>
				<div className='flex items-center gap-2'>
					<span className='text-3xl text-primary'>
						<MdOutlineDownloadForOffline />
					</span>
					<div>
						<p className='text-primary font-medium'>Deposit</p>
						<p className='text-secondary text-[12px] font-semibold'>
							06 Feb, 14:26
						</p>
						<p className='text-secondary text-[12px] font-semibold'>
							Invoice ID 20043874334
						</p>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<p className='text-3xl'>
						<SiBinance />
					</p>
					<p className='text-slate-600 font-semibold'>145712470</p>
					<p className='text-3xl text-slate-500'>
						<MdOutlineArrowRightAlt />
					</p>
					<p className='bg-slate-500 text-white rounded font-serif px-1'>GX</p>
					<p className='text-slate-600 font-semibold'>145712470</p>
				</div>
				<div className='flex items-center justify-center text-green-500 gap-1 font-semibold'>
					<p className='mb-2'>
						<GoDotFill />
					</p>
					<p>Done</p>
				</div>
				<div className='flex items-center'>
					<p className='text-primary font-semibold'>85.00 USD</p>
				</div>
			</div>
			<p className='w-full p-2 bg-slate-100 rounded text-primary font-semibold mt-5 mb-3'>
				February 24
			</p>
			{/* Rejected Status */}
			<div className='border border-slate-400 rounded-lg p-3 flex flex-wrap gap-3 justify-between '>
				<div className='flex items-center gap-2'>
					<span className='text-3xl text-red-500'>
						<MdOutlineDownloadForOffline />
					</span>
					<div>
						<p className='text-primary font-medium'>Deposit</p>
						<p className='text-secondary text-[12px] font-semibold'>
							06 Feb, 14:26
						</p>
						<p className='text-secondary text-[12px] font-semibold'>
							Invoice ID 20043874334
						</p>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<p className='text-3xl'>
						<SiBinance />
					</p>
					<p className='text-slate-600 font-semibold'>145712470</p>
					<p className='text-3xl text-slate-500'>
						<MdOutlineArrowRightAlt />
					</p>
					<p className='bg-slate-500 text-white rounded font-serif px-1'>GX</p>
					<p className='text-slate-600 font-semibold'>145712470</p>
				</div>
				<div className='flex items-center justify-center text-red-500 gap-1 font-semibold'>
					<p className='mb-2'>
						<GoDotFill />
					</p>
					<p>Rejected</p>
				</div>
				<div className='flex items-center'>
					<p className='text-primary font-semibold'>85.00 USD</p>
				</div>
			</div>
			<div className='border mt-3 border-slate-400 flex-wrap gap-3 rounded-lg p-3 flex justify-between '>
				<div className='flex items-center gap-2'>
					<span className='text-3xl text-primary'>
						<MdOutlineDownloadForOffline />
					</span>
					<div>
						<p className='text-primary font-medium'>Deposit</p>
						<p className='text-secondary text-[12px] font-semibold'>
							06 Feb, 14:26
						</p>
						<p className='text-secondary text-[12px] font-semibold'>
							Invoice ID 20043874334
						</p>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<p className='bg-slate-500 text-white rounded font-serif px-1'>GX</p>
					<p className='text-slate-600 font-semibold'>145712470</p>
					<p className='text-3xl text-slate-500'>
						<MdOutlineArrowRightAlt />
					</p>
					<p className='bg-slate-500 text-white rounded font-serif px-1'>GX</p>
					<p className='text-slate-600 font-semibold'>145712470</p>
				</div>
				<div className='flex items-center justify-center text-green-500 gap-1 font-semibold'>
					<p className='mb-2'>
						<GoDotFill />
					</p>
					<p>Done</p>
				</div>
				<div className='flex items-center'>
					<p className='text-primary font-semibold'>85.00 USD</p>
				</div>
			</div>
			<div className='border mt-3 border-slate-400 flex-wrap gap-3 rounded-lg p-3 flex justify-between '>
				<div className='flex items-center gap-2'>
					<span className='text-3xl text-primary'>
						<MdOutlineDownloadForOffline />
					</span>
					<div>
						<p className='text-primary font-medium'>Deposit</p>
						<p className='text-secondary text-[12px] font-semibold'>
							06 Feb, 14:26
						</p>
						<p className='text-secondary text-[12px] font-semibold'>
							Invoice ID 20043874334
						</p>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<p className='text-3xl'>
						<SiBinance />
					</p>
					<p className='text-slate-600 font-semibold'>145712470</p>
					<p className='text-3xl text-slate-500'>
						<MdOutlineArrowRightAlt />
					</p>
					<p className='bg-slate-500 text-white rounded font-serif px-1'>GX</p>
					<p className='text-slate-600 font-semibold'>145712470</p>
				</div>
				<div className='flex items-center justify-center text-green-500 gap-1 font-semibold'>
					<p className='mb-2'>
						<GoDotFill />
					</p>
					<p>Done</p>
				</div>
				<div className='flex items-center'>
					<p className='text-primary font-semibold'>85.00 USD</p>
				</div>
			</div>
			<button className='px-4 py-3 hover:bg-slate-300 duration-300 bg-slate-200 rounded text-secondary font-semibold mt-5'>
				See more
			</button>
		</div>
	);
};

export default TransactionCards;
