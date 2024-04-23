'use client';
import React from 'react';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

const ChangePin = () => {
	return (
		<div className=' p-4'>
			<div>
				<Card className='w-full'>
					<div className='my-4'>
						<h1 className=' text-primary font-semibold tracking-tight'>
							Change Your Pin
						</h1>
						<p className=' text-sm tracking-tight text-primary'>
							Your pin must be at least 6 characters long.
						</p>
					</div>
					<form className='flex flex-col gap-4 '>
						<div>
							<TextInput
								id='pin1'
								type='password'
								placeholder='Current Password'
								required
								autoComplete='off'
							/>
						</div>
						<div>
							<TextInput
								id='password1'
								type='password'
								placeholder='New Pin'
								required
								autoComplete='off'
							/>
						</div>
						<div>
							<TextInput
								id='password2'
								type='password'
								placeholder='Repeat New Pin'
								required
								autoComplete='off'
							/>
						</div>

						<Button
							type='submit'
							className='w-full bg-green-500 hover:bg-green-600'
							disabled={true}
						>
							Submit
						</Button>
					</form>
				</Card>
			</div>
		</div>
	);
};

export default ChangePin;
