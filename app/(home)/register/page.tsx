'use client';
import React from 'react';
import RegisterPage from '@/components/Register/RegisterPage';
import RegisterBanner from '@/components/Register/RegisterBanner';

const Register = () => {
	return (
		<div className=''>
			<div className='mt-0.3'>
				<RegisterBanner
					title='ICM Partner Account Application'
					btn_title='Open Account for Agent'
					url='/agent-register'
				/>
			</div>
			<div
				className='flex flex-col items-center justify-center px-2'
				// style={{ height: 'calc(100vh - 20px)' }}
			>
				<div className='mt-10'>
					<RegisterPage />
				</div>
			</div>
		</div>
	);
};

export default Register;
