'use client';
import React from 'react';
import { Accordion } from 'flowbite-react';
import { FaHandHoldingUsd, FaUsers } from 'react-icons/fa';
import { SiLevelsdotfyi } from 'react-icons/si';
import PartnerTable from './PartnerTable';
import { BiLogoMicrosoftTeams } from 'react-icons/bi';
const Generations = () => {
	return (
		<div>
			<h2 className='text-xl font-bold text-gray-700 my-4'>
				Your Team Members
			</h2>
			<Accordion>
				{/* Start 1st Generation */}
				<Accordion.Panel>
					<Accordion.Title>
						<div className='flex gap-8 items-center  '>
							<p className=' flex items-center gap-1'>
								<BiLogoMicrosoftTeams />{' '}
								<span>
									1<sup>st</sup>
								</span>{' '}
								Generation
							</p>

							<p className=' flex items-center gap-1'>
								<FaUsers />
								100
							</p>
							<p className=' flex items-center gap-1'>
								<FaHandHoldingUsd />
								100$
							</p>
						</div>
					</Accordion.Title>
					<Accordion.Content>
						<div>
							<PartnerTable />
						</div>
					</Accordion.Content>
				</Accordion.Panel>
				{/* End 1st Generation */}
				{/* Start 2nd Generation */}
				<Accordion.Panel>
					<Accordion.Title>
						<div className='flex gap-8 items-center  '>
							<p className=' flex items-center gap-1'>
								<BiLogoMicrosoftTeams />{' '}
								<span>
									2<sup>nd</sup>
								</span>{' '}
								Generation
							</p>

							<p className=' flex items-center gap-1'>
								<FaUsers />
								100
							</p>
							<p className=' flex items-center gap-1'>
								<FaHandHoldingUsd />
								100$
							</p>
						</div>
					</Accordion.Title>
					<Accordion.Content>
						<div>
							<PartnerTable />
						</div>
					</Accordion.Content>
				</Accordion.Panel>
				{/* End 2nd Generation */}
				{/* Start 3rd Generation */}
				<Accordion.Panel>
					<Accordion.Title>
						<div className='flex gap-8 items-center  '>
							<p className=' flex items-center gap-1'>
								<BiLogoMicrosoftTeams />
								<span>
									3<sup>rd</sup>
								</span>{' '}
								Generation
							</p>

							<p className=' flex items-center gap-1'>
								<FaUsers />
								100
							</p>
							<p className=' flex items-center gap-1'>
								<FaHandHoldingUsd />
								100$
							</p>
						</div>
					</Accordion.Title>
					<Accordion.Content>
						<div>
							<PartnerTable />
						</div>
					</Accordion.Content>
				</Accordion.Panel>
				{/* End 3rd Generation */}
				{/* Start 4th Generation */}
				<Accordion.Panel>
					<Accordion.Title>
						<div className='flex gap-8 items-center  '>
							<p className=' flex items-center gap-1'>
								<BiLogoMicrosoftTeams />
								<span>
									4<sup>th</sup>
								</span>{' '}
								Generation
							</p>

							<p className=' flex items-center gap-1'>
								<FaUsers />
								100
							</p>
							<p className=' flex items-center gap-1'>
								<FaHandHoldingUsd />
								100$
							</p>
						</div>
					</Accordion.Title>
					<Accordion.Content>
						<div>
							<PartnerTable />
						</div>
					</Accordion.Content>
				</Accordion.Panel>
				{/* End 4th Generation */}

				{/* Start 5th Generation */}
				<Accordion.Panel>
					<Accordion.Title>
						<div className='flex gap-8 items-center  '>
							<p className=' flex items-center gap-1'>
								<BiLogoMicrosoftTeams />
								<span>
									5<sup>th</sup>
								</span>{' '}
								Generation
							</p>

							<p className=' flex items-center gap-1'>
								<FaUsers />
								100
							</p>
							<p className=' flex items-center gap-1'>
								<FaHandHoldingUsd />
								100$
							</p>
						</div>
					</Accordion.Title>
					<Accordion.Content>
						<div>
							<PartnerTable />
						</div>
					</Accordion.Content>
				</Accordion.Panel>
				{/* End 5th Generation */}
			</Accordion>
		</div>
	);
};

export default Generations;
