'use client';
import Profile from '@/components/Settings/Profile';
import SecuritySetting from '@/components/Settings/SecuritySetting';
import TradingConditions from '@/components/Settings/TradingConditions';
import TradingTerminals from '@/components/Settings/TradingTerminals';
import React from 'react';

const Settings = () => {
	return (
		<div>
			<h3 className='text-xl text-slate-800 font-semibold my-2'>Settings</h3>
			<div className='py-10 relative'>
				<div className='w-full h-[0.5px] bg-slate-300 absolute top-[80px] '></div>
				<div role='tablist' className='tabs tabs-bordered  setting-tabs'>
					<input
						type='radio'
						name='my_tabs_1'
						role='tab'
						className='tab pb-1 text-lg text-nowrap text-slate-400 ml-10'
						aria-label='Profile'
						checked
					/>

					<div role='tabpanel' className='tab-content'>
						<Profile />
					</div>
					<input
						type='radio'
						name='my_tabs_1'
						role='tab'
						className='tab pb-1 text-lg text-nowrap text-slate-400'
						aria-label='Security setting'
					/>
					<div role='tabpanel' className='tab-content md:p-10 p-5 '>
						<SecuritySetting />
					</div>
					<input
						type='radio'
						name='my_tabs_1'
						role='tab'
						className='tab pb-1 text-lg text-nowrap text-slate-400'
						aria-label='Trading Terminals'
					/>
					<div role='tabpanel' className='tab-content md:p-10 p-5'>
						<TradingTerminals />
					</div>
					<input
						type='radio'
						name='my_tabs_1'
						role='tab'
						className='tab pb-1 text-lg text-nowrap text-slate-400'
						aria-label='Trading Conditions'
					/>
					<div role='tabpanel' className='tab-content md:p-10 p-5'>
						<TradingConditions />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Settings;
