'use client';
import React from 'react';
import { Accordion } from 'flowbite-react';
import { FaHandHoldingUsd, FaUsers } from 'react-icons/fa';
import { SiLevelsdotfyi } from 'react-icons/si';
import PartnerTable from './PartnerTable';
import { RiGlobalFill } from 'react-icons/ri';
const GlobalTeam = () => {
	return (
		<div>
			<h2 className='text-xl font-bold text-gray-700 my-4'>
				Your Global Team Members
			</h2>
			<Accordion>
				{/* Start Global Gen 01 */}
				<Accordion.Panel>
					<Accordion.Title>
						<div className='flex gap-8 items-center  '>
							<p className=' flex items-center gap-1'>
								<RiGlobalFill />
								Global GEN-01
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
				{/* End Global Gen 01 */}
				{/* Start Global Gen 02 */}
				<Accordion.Panel>
					<Accordion.Title>
						<div className='flex gap-8 items-center  '>
							<p className=' flex items-center gap-1'>
								<RiGlobalFill />
								Global GEN-02
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
				{/* End Global Gen 02 */}
				{/* Start Global Gen 03 */}
				<Accordion.Panel>
					<Accordion.Title>
						<div className='flex gap-8 items-center  '>
							<p className=' flex items-center gap-1'>
								<RiGlobalFill />
								Global GEN-03
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
				{/* End Global Gen 03 */}

				{/* Start Global Gen 04 */}
				<Accordion.Panel>
					<Accordion.Title>
						<div className='flex gap-8 items-center  '>
							<p className=' flex items-center gap-1'>
								<RiGlobalFill />
								Global GEN-04
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

				{/* End Global Gen 04 */}

				{/* Start Global Gen 05 */}
				<Accordion.Panel>
					<Accordion.Title>
						<div className='flex gap-8 items-center  '>
							<p className=' flex items-center gap-1'>
								<RiGlobalFill />
								Global GEN-05
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

				{/* End Global Gen 05 */}

				{/* Start Global Gen 06 */}
				<Accordion.Panel>
					<Accordion.Title>
						<div className='flex gap-8 items-center  '>
							<p className=' flex items-center gap-1'>
								<RiGlobalFill />
								Global GEN-06
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
				{/* End Global Gen 06 */}
			</Accordion>
		</div>
	);
};

export default GlobalTeam;
