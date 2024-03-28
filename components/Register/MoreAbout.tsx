'use client';
import React, { useEffect, useState } from 'react';
import {
	Button,
	Card,
	Datepicker,
	Label,
	Select,
	TextInput,
} from 'flowbite-react';

import {
	setActiveStep,
	setCompletedStep,
	handleNext,
	handlePrevious,
	setMoreAboutData,
} from '@/redux/stepperSlice';
import { useDispatch } from 'react-redux';

const MoreAbout = () => {
	const dispatch = useDispatch();
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [dobError, setDobError] = useState(false);
	const [address, setAddress] = useState('');
	const [addressError, setAddressError] = useState(false);
	const [city, setCity] = useState('');
	const [cityError, setCityError] = useState(false);
	const [state, setState] = useState('');
	const [stateError, setStateError] = useState(false);
	const [zip, setZip] = useState('');
	const [zipError, setZipError] = useState(false);

	// useEffect to set the active step
	useEffect(() => {
		dispatch(setActiveStep(2));
	}, [dispatch]);

	// handle date of birth change
	const handleDobChange = (date: Date) => {
		setDateOfBirth(date.toISOString());
		setDobError(dateOfBirth === '');
	};

	// handle address change
	const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAddress(e.target.value);
		setAddressError(e.target.value === '');
	};

	// next handler
	const nextHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (
			dobError ||
			dateOfBirth === '' ||
			addressError ||
			address === '' ||
			cityError ||
			city === '' ||
			stateError ||
			state === '' ||
			zipError ||
			zip === ''
		)
			return;
		dispatch(setMoreAboutData({ dateOfBirth, address, city, state, zip }));
		dispatch(setCompletedStep(2));
		dispatch(handleNext());
	};

	return (
		<div className='my-10 '>
			<div>
				<h1 className='text-xl font-bold mb-4 ml-1'>
					Tell us more about yourself.
				</h1>
			</div>
			<div>
				<Card className='w-[23rem]'>
					<form className='flex flex-col gap-4' onSubmit={nextHandler}>
						{/* DOB */}

						<div className='max-w-md'>
							<div className='mb-2 block'>
								<Label
									htmlFor='countries'
									value='Date of Birth'
									color={dobError ? 'failure' : ''}
								/>
							</div>

							<Datepicker
								id='dob'
								placeholder='Select your date of birth'
								required
								color={dobError ? 'failure' : ''}
								// value={dateOfBirth}
								onSelectedDateChanged={(date) => handleDobChange(date)}
								onBlur={() => setDobError(dateOfBirth === '')}
								helperText={
									<>
										{dobError && (
											<span className='text-xs'>
												Please select your date of birth
											</span>
										)}
									</>
								}
							/>
						</div>
						{/* End DOB */}

						{/* Start Address */}
						<div>
							<div className='mb-2 block'>
								<Label
									htmlFor='email1'
									value='Your address'
									color={addressError ? 'failure' : ''}
								/>
							</div>
							<TextInput
								id='address'
								type='text'
								placeholder='Enter your address'
								required
								color={addressError ? 'failure' : ''}
								value={address}
								onChange={handleAddressChange}
								onBlur={() => setAddressError(address === '')}
								helperText={
									<>
										{addressError && (
											<span className='text-xs'>Please enter your address</span>
										)}
									</>
								}
							/>
						</div>
						{/* End Address */}

						{/* Start City */}
						<div>
							<div className='mb-2 block'>
								<Label
									htmlFor='city'
									value='City'
									color={cityError ? 'failure' : ''}
								/>
							</div>
							<TextInput
								id='city'
								type='text'
								placeholder='Enter your city'
								required
								color={cityError ? 'failure' : ''}
								value={city}
								onChange={(e) => setCity(e.target.value)}
								onBlur={() => setCityError(city === '')}
								helperText={
									<>
										{cityError && (
											<span className='text-xs'>Please enter your city</span>
										)}
									</>
								}
							/>
						</div>

						{/* Start State */}
						<div>
							<div className='mb-2 block'>
								<Label
									htmlFor='state'
									value='State'
									color={stateError ? 'failure' : ''}
								/>
							</div>
							<TextInput
								id='state'
								type='text'
								placeholder='Enter your state'
								required
								color={stateError ? 'failure' : ''}
								value={state}
								onChange={(e) => setState(e.target.value)}
								onBlur={() => setStateError(state === '')}
								helperText={
									<>
										{stateError && (
											<span className='text-xs'>Please enter your state</span>
										)}
									</>
								}
							/>
						</div>

						{/* Start Zip */}
						<div>
							<div className='mb-2 block'>
								<Label
									htmlFor='zip'
									value='Zip'
									color={zipError ? 'failure' : ''}
								/>
							</div>
							<TextInput
								id='zip'
								type='text'
								placeholder='Enter your zip'
								required
								color={zipError ? 'failure' : ''}
								value={zip}
								onChange={(e) => setZip(e.target.value)}
								onBlur={() => setZipError(zip === '')}
								helperText={
									<>
										{zipError && (
											<span className='text-xs'>Please enter your zip</span>
										)}
									</>
								}
							/>
						</div>

						{/* Buttons */}

						<div className=' grid grid-cols-2 gap-4'>
							<Button
								type='submit'
								className='w-full bg-gray-400 hover:bg-icm-green-700 text-gray-800 font-semibold'
								onClick={() => dispatch(handlePrevious(2))}
							>
								Back
							</Button>
							<Button
								type='submit'
								className='w-full bg-icm-green hover:bg-icm-green-700 text-gray-800 font-semibold'
							>
								Next
							</Button>
						</div>
					</form>
				</Card>
			</div>
		</div>
	);
};

export default MoreAbout;
