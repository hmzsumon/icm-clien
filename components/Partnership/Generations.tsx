'use client';
import React from 'react';
import { Accordion } from 'flowbite-react';
import { FaHandHoldingUsd, FaUsers } from 'react-icons/fa';
import { SiLevelsdotfyi } from 'react-icons/si';
import PartnerTable from './PartnerTable';
import { BiLogoMicrosoftTeams } from 'react-icons/bi';
import { useGet5LevelTeamQuery } from '@/redux/features/auth/authApi';
import { formatBalance } from '@/lib/functions';

const Generations = () => {
	const {
		data: levelData,
		isLoading: isLevelDataLoading,
		isError: isErrorLevelData,
		isSuccess: isSuccessLevelData,
		error: errorLevelData,
	} = useGet5LevelTeamQuery(undefined);
	const {
		level_01_data,
		level_02_data,
		level_03_data,
		level_04_data,
		level_05_data,
	} = levelData || {};
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
								{level_01_data?.count || 0}
							</p>
							<p className=' flex items-center gap-1'>
								<FaHandHoldingUsd />
								{formatBalance(level_01_data?.earning || 0)}$
							</p>
						</div>
					</Accordion.Title>
					<Accordion.Content>
						<div className=' h-auto'>
							<PartnerTable data={level_01_data?.users} />
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
								{level_02_data?.count || 0}
							</p>
							<p className=' flex items-center gap-1'>
								<FaHandHoldingUsd />
								{formatBalance(level_02_data?.earning || 0)}$
							</p>
						</div>
					</Accordion.Title>
					<Accordion.Content>
						<div className=' h-auto'>
							<PartnerTable data={level_02_data?.users} />
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
								{level_03_data?.count || 0}
							</p>
							<p className=' flex items-center gap-1'>
								<FaHandHoldingUsd />
								{formatBalance(level_03_data?.earning || 0)}$
							</p>
						</div>
					</Accordion.Title>
					<Accordion.Content>
						<div className='h-auto'>
							<PartnerTable data={level_03_data?.users} />
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
								{level_04_data?.count || 0}
							</p>
							<p className=' flex items-center gap-1'>
								<FaHandHoldingUsd />
								{formatBalance(level_04_data?.earning || 0)}$
							</p>
						</div>
					</Accordion.Title>
					<Accordion.Content>
						<div className=' h-auto'>
							<PartnerTable data={level_04_data?.users} />
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
								{level_05_data?.count || 0}
							</p>
							<p className=' flex items-center gap-1'>
								<FaHandHoldingUsd />
								{formatBalance(level_05_data?.earning || 0)}$
							</p>
						</div>
					</Accordion.Title>
					<Accordion.Content>
						<div className=' h-auto'>
							<PartnerTable data={level_05_data?.users} />
						</div>
					</Accordion.Content>
				</Accordion.Panel>
				{/* End 5th Generation */}
			</Accordion>
		</div>
	);
};

export default Generations;
