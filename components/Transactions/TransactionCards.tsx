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
			{/* Done Status */}
			<div className='border border-slate-400 rounded-lg p-3 flex flex-wrap gap-3 justify-between '>
				<div className='flex items-center gap-2'>
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

				<div className='flex items-center justify-center text-green-500 gap-1 font-semibold'>
					<GoDotFill />
					<p>Done</p>
				</div>
				<div className='flex items-center'>
					<p className='text-primary font-semibold'>85.00 USDT</p>
				</div>
			</div>
		</div>
	);
};

export default TransactionCards;
