import CopyToClipboard from '@/lib/CopyToClipboard';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaQrcode } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';
import { IoIosLink } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { RWebShare } from 'react-web-share';

const PartnerLinkCard = ({ partnerId, referralLink }: any) => {
	const [showLink, setShowLink] = useState(1);
	return (
		<div className='bg-white p-5 border rounded mt-5'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center gap-5'>
					<button
						onClick={() => setShowLink(1)}
						className={
							showLink == 1
								? 'text-[#0022FF]  bg-[#dadef9] px-3 rounded-badge'
								: 'text-primary  bg-[#dadef9] px-3 rounded-badge'
						}
					>
						Partner link
					</button>
					<button
						onClick={() => setShowLink(2)}
						className={
							showLink == 2
								? 'text-[#0022FF]  bg-[#dadef9] px-3 rounded-badge'
								: 'text-primary  bg-[#dadef9] px-3 rounded-badge'
						}
					>
						Partner code
					</button>
				</div>
			</div>
			{showLink == 1 && (
				<div className='my-5 border-b border-info flex items-center justify-between'>
					<p className=' border-dotted text-info  text-xs'>{referralLink}</p>
					<CopyToClipboard text={referralLink} />
				</div>
			)}
			{showLink == 2 && (
				<div className='my-5 border-b border-info flex items-center justify-between'>
					<p className=' border-dotted text-info  text-sm'>
						Your Partner Code: <span className=' font-bold'>{partnerId}</span>
					</p>
					<CopyToClipboard text={partnerId} />
				</div>
			)}
			<div className='flex items-center grid-cols-8 gap-4 mt-4 '>
				<RWebShare data={{ url: referralLink }}>
					<div className='relative flex-1 col-span-7 p-3 bg-icm-green cursor-pointer rounded-xl'>
						<div>
							<h2 className='text-xl font-bold text-center text-gray-100 '>
								Invite Friend{' '}
							</h2>
						</div>
					</div>
				</RWebShare>
				<div className='flex items-center justify-center col-span-1 p-4 bg-[#474D57] rounded-xl'>
					<FaQrcode className='inline-block text-xl text-gray-400 cursor-pointer ' />
				</div>
			</div>
		</div>
	);
};

export default PartnerLinkCard;
