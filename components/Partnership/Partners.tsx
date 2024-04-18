'use client';
import React from 'react';
import { Accordion } from 'flowbite-react';
import { FaHandHoldingUsd, FaUsers } from 'react-icons/fa';
import { SiLevelsdotfyi } from 'react-icons/si';
import PartnerTable from './PartnerTable';
const Partners = () => {
	return (
		<div>
			<h2 className='text-xl font-bold text-gray-700 my-4'>Your Partners</h2>
			<Accordion>
				<Accordion.Panel>
					<Accordion.Title>
						<div className='flex gap-8 items-center  '>
							<p className=' flex items-center gap-1'>
								<SiLevelsdotfyi />
								level 01
							</p>

							<p className=' flex items-center gap-1'>
								<FaUsers />
								100
							</p>
							<p className=' flex items-center gap-1'>
								<FaHandHoldingUsd />
								100 USDT
							</p>
						</div>
					</Accordion.Title>
					<Accordion.Content>
						<div>
							<PartnerTable />
						</div>
					</Accordion.Content>
				</Accordion.Panel>
				<Accordion.Panel>
					<Accordion.Title>
						<div className='flex gap-8 items-center  '>
							<p className=' flex items-center gap-1'>
								<SiLevelsdotfyi />
								level 02
							</p>

							<p className=' flex items-center gap-1'>
								<FaUsers />
								100
							</p>
							<p className=' flex items-center gap-1'>
								<FaHandHoldingUsd />
								100 USDT
							</p>
						</div>
					</Accordion.Title>
					<Accordion.Content>
						<div>
							<PartnerTable />
						</div>
					</Accordion.Content>
				</Accordion.Panel>
				<Accordion.Panel>
					<Accordion.Title>
						<div className='flex gap-8 items-center  '>
							<p className=' flex items-center gap-1'>
								<SiLevelsdotfyi />
								level 03
							</p>

							<p className=' flex items-center gap-1'>
								<FaUsers />
								100
							</p>
							<p className=' flex items-center gap-1'>
								<FaHandHoldingUsd />
								100 USDT
							</p>
						</div>
					</Accordion.Title>
					<Accordion.Content>
						<div>
							<PartnerTable />
						</div>
					</Accordion.Content>
				</Accordion.Panel>
			</Accordion>
		</div>
	);
};

export default Partners;
