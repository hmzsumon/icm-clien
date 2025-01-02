'use client';
import React, { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PulseLoader from 'react-spinners/PulseLoader';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import RegisterBanner from '@/components/Register/RegisterBanner';
import { Button, Card, Label, Select, TextInput } from 'flowbite-react';
import countries from '@/lib/countries';
import {
	useCheckAgentNameMutation,
	useCheckEmailExistOrNotMutation,
} from '@/redux/features/auth/authApi';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useAgentRegisterMutation } from '@/redux/features/agent/agentApi';
import { useRouter } from 'next/navigation';

const AgentRegister = () => {
	const router = useRouter();
	const [checkEmailExistOrNot, { data, isSuccess, isLoading, isError, error }] =
		useCheckEmailExistOrNotMutation();
	const { isExist } = data || {};

	useEffect(() => {
		if (isExist) {
			setEmailError(true);
			setEmailErrorText('Email already exist');
		}
	}, [isExist]);

	// call useCheckAgentNameMutation hook
	const [
		checkAgentName,
		{
			data: agentNameData,
			isSuccess: agentNameSuccess,
			isLoading: agentNameIsLoading,
			isError: agentNameIserror,
			error: agentError,
		},
	] = useCheckAgentNameMutation();

	const { isAgentNameExist } = agentNameData || {};

	useEffect(() => {
		if (isAgentNameExist) {
			setAgentNameError(true);
			setAgentNameErrorText('Agent name already exist');
		}
	}, [isAgentNameExist]);

	// call useAgentRegisterMutation hook
	const [
		agentRegister,
		{
			isSuccess: isRegisterSuccess,
			isLoading: isRegisterLoading,
			isError: isRegisterError,
			error: registerError,
		},
	] = useAgentRegisterMutation();

	const [country, setCountry] = useState('');
	const [name, setName] = useState('');
	const [agentName, setAgentName] = useState('');
	const [nameError, setNameError] = useState(false);
	const [agentNameError, setAgentNameError] = useState(false);
	const [agentNameErrorText, setAgentNameErrorText] = useState(
		'Please enter your agent name'
	);
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [emailErrorText, setEmailErrorText] = useState(
		'Please enter a valid email address'
	);
	const [code, setCode] = useState<string>('us');
	const [partnerCode, setPartnerCode] = useState<string>('');
	const [edit, setEdit] = useState(true);
	const [phone, setPhone] = useState<string>('');
	const [phoneError, setPhoneError] = useState<boolean>(false);

	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [passwordCriteria, setPasswordCriteria] = useState({
		minLength: false,
		upperAndLowerCase: false,
		number: false,
		specialChar: false,
	});

	const [passwordError, setPasswordError] = useState(false);
	const [passwordErrorText, setPasswordErrorText] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [passCode, setPassCode] = useState('');
	const [passCodeError, setPassCodeError] = useState(false);

	const updatePasswordCriteria = (pass: any) => {
		const lengthCriteria = pass.length >= 8 && pass.length <= 15;
		const upperAndLowerCaseCriteria = /[A-Z]/.test(pass) && /[a-z]/.test(pass);
		const numberCriteria = /\d/.test(pass);
		const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(pass);

		setPasswordCriteria({
			minLength: lengthCriteria,
			upperAndLowerCase: upperAndLowerCaseCriteria,
			number: numberCriteria,
			specialChar: specialCharCriteria,
		});
	};

	const handlePasswordChange = (e: any) => {
		const newPass = e.target.value;
		setPassword(newPass);
		updatePasswordCriteria(newPass);
	};

	// handle agent name check
	const handleAgentNameCheck = () => {
		const data = {
			agentName,
		};
		if (agentName) {
			checkAgentName(data);
		}
	};

	// handle email change
	const handleEmailCheck = () => {
		const data = {
			email,
		};
		if (email) {
			checkEmailExistOrNot(data);
		}
	};

	const handlePhoneNumberChange = (value: string) => {
		if (value) {
			setPhoneError(false);
		}
		setPhone(value);
	};

	// handle country change
	const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCountry(e.target.value);

		// set code based on selected country
		const selectedCountry = countries.find(
			(countryItem) => countryItem.name === e.target.value
		);
		console.log(selectedCountry);
		if (selectedCountry) {
			setCode(selectedCountry.code.toLocaleLowerCase());
		}
	};

	// handle set passCode and validate 6 digit passcode
	const handlePassCode = (e: any) => {
		const pass = e.target.value;
		// Ensure only digits are entered
		if (/^\d{0,6}$/.test(pass)) {
			setPassCode(pass);
			setPassCodeError(false);
		} else {
			setPassCodeError(true);
		}
	};

	// next handler
	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// validate form fields
		if (
			nameError ||
			agentNameError ||
			emailError ||
			phoneError ||
			passwordError ||
			passCodeError
		) {
			toast.error('Please fill in all required fields');
			return;
		}

		// call agentRegister function
		const data = {
			name,
			agentName,
			email,
			phone,
			password,
			passCode,
			country,
		};

		agentRegister(data);
	};

	// call useEffect to handle success and error
	useEffect(() => {
		if (isRegisterSuccess) {
			toast.success('Registration successful');
			router.push('/verify-email?email=' + email);
		}
		if (isRegisterError) {
			toast.error((registerError as fetchBaseQueryError).data?.message);
		}
	}, [isRegisterSuccess, isRegisterError, registerError]);

	return (
		<div>
			<div className='mt-0.3'>
				<RegisterBanner
					title='ICM Agent Account Application'
					btn_title='Open Account for Partner'
					url='/register'
				/>
			</div>
			<div className='mb-4 md:w-6/12 mx-auto mt-4 px-2'>
				<h1 className='text-xl font-bold mb-4 ml-1'>
					Fill in your Agent details
				</h1>
				<Card className=' w-full'>
					<form className='flex flex-col gap-4' onSubmit={submitHandler}>
						{/* Country */}

						<div className='w-full'>
							<div className='mb-2 block'>
								<Label htmlFor='countries' value='Select your country' />
							</div>
							<Select
								id='countries'
								value={country}
								onChange={(e) => handleCountryChange(e)}
								required
							>
								<option value='' disabled>
									Select your country
								</option>
								{countries.map((countryItem) => (
									<option key={countryItem.code}>{countryItem.name}</option>
								))}
							</Select>
						</div>
						{/* End Country */}

						{/* Start Name */}
						<div>
							<div className='mb-2 block'>
								<Label
									htmlFor='name1'
									value='Your name'
									color={nameError ? 'failure' : ''}
								/>
							</div>
							<TextInput
								id='name1'
								type='text'
								placeholder='Enter your name'
								required
								color={nameError ? 'failure' : ''}
								value={name}
								onChange={(e) => setName(e.target.value)}
								onBlur={() => setNameError(name.length === 0)}
								helperText={
									<>
										{nameError && (
											<span className='text-xs'>Please enter your name</span>
										)}
									</>
								}
							/>
						</div>
						{/* End Name */}

						{/* Start Agent Name */}
						<div>
							<div className='mb-2 block'>
								<Label
									htmlFor='name01'
									value='Agent name'
									color={agentNameError ? 'failure' : ''}
								/>
							</div>
							<TextInput
								id='name01'
								type='text'
								placeholder='Enter your agent name'
								required
								color={agentNameError ? 'failure' : ''}
								value={agentName}
								onChange={(e) => setAgentName(e.target.value)}
								onBlur={() => {
									handleAgentNameCheck();
									setAgentNameError(agentName.length === 0);
								}}
								helperText={
									<>
										{agentNameError && (
											<span className='text-xs'>{agentNameErrorText}</span>
										)}
									</>
								}
							/>
						</div>
						{/* End Agent Name */}

						{/* Start Email */}
						<div>
							<div className='mb-2 block'>
								<Label
									htmlFor='email1'
									value='Your email'
									color={emailError ? 'failure' : ''}
								/>
							</div>
							<TextInput
								id='email1'
								type='email'
								placeholder='Enter your email address'
								required
								color={emailError ? 'failure' : ''}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								onBlur={() => {
									handleEmailCheck();
									setEmailError(
										(email.length > 0 && !email.includes('@')) ||
											email.length === 0
									);
								}}
								helperText={
									<>
										{emailError && (
											<span className='text-xs'>{emailErrorText}</span>
										)}
									</>
								}
							/>
						</div>
						{/* End Email */}

						{/* Start Phone*/}

						<div>
							<div className='mb-2 block'>
								<Label htmlFor='phone' value='Your phone number ' />
							</div>
							<PhoneInput
								placeholder='Enter phone number'
								value={phone}
								onChange={(phoneNumber) => handlePhoneNumberChange(phoneNumber)}
								country={code}
								dropdownStyle={{
									backgroundColor: '#05003A',
									color: 'gray',
								}}
								inputStyle={{
									backgroundColor: 'transparent',
									color: ` ${phoneError ? 'red' : 'gray'}`,
									width: '100%',
									height: '42px',
									border: ` ${phoneError ? '1px solid red' : '1px solid gray'}`,
									borderRadius: '5px',
								}}
								buttonStyle={{
									backgroundColor: 'transparent',
									borderColor: ` ${phoneError ? 'red' : 'gray'}`,
								}}
								countryCodeEditable={false}
								disableDropdown={true}
							/>
						</div>

						{/* End Phone*/}

						{/* Start Password */}
						<div>
							<div className='mb-2 block'>
								<Label
									htmlFor='password1'
									value='Your password'
									color={passwordError ? 'failure' : ''}
								/>
							</div>
							<div className='mb-2 block relative'>
								<TextInput
									id='password1'
									type={showPassword ? 'text' : 'password'}
									required
									color={passwordError ? 'failure' : ''}
									value={password}
									onChange={handlePasswordChange}
									onBlur={() => {
										if (password.length < 8) {
											setPasswordError(true);
											setPasswordErrorText(
												'Password must be at least 8 characters'
											);
										} else {
											setPasswordError(false);
											setPasswordErrorText('');
										}
									}}
								/>
								<button
									type='button'
									onClick={() => setShowPassword(!showPassword)}
									className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
								>
									{showPassword ? <FaEyeSlash /> : <FaEye />}
								</button>
							</div>
							<ul
								className={`
                          list-none text-xs ${
														passwordError ? 'text-red-500' : 'text-gray-800'
													}
                          `}
							>
								<li
									className={`flex items-center gap-2 ${
										passwordCriteria.minLength ? 'text-green-500' : ''
									}`}
								>
									{passwordCriteria.minLength ? (
										<FaCheckCircle />
									) : (
										<FaTimesCircle />
									)}
									Between 8-15 characters
								</li>
								<li
									className={`flex items-center gap-2 ${
										passwordCriteria.upperAndLowerCase
											? 'text-green-500'
											: 'text-danger'
									}`}
								>
									{passwordCriteria.upperAndLowerCase ? (
										<FaCheckCircle />
									) : (
										<FaTimesCircle />
									)}
									At least one upper and one lower case letter
								</li>
								<li
									className={`flex items-center gap-2 ${
										passwordCriteria.number ? 'text-green-500' : 'text-danger'
									}`}
								>
									{passwordCriteria.number ? (
										<FaCheckCircle />
									) : (
										<FaTimesCircle />
									)}
									At least one number
								</li>
								<li
									className={`flex items-center gap-2 ${
										passwordCriteria.specialChar
											? 'text-green-500'
											: 'text-danger'
									}`}
								>
									{passwordCriteria.specialChar ? (
										<FaCheckCircle />
									) : (
										<FaTimesCircle />
									)}
									At least one special character
								</li>
							</ul>
						</div>
						{/* End Password */}

						{/* Start Confirm password */}
						<div>
							<div className='mb-2 block'>
								<Label
									htmlFor='password2'
									value='Confirm your password'
									color={passwordError ? 'failure' : ''}
								/>
							</div>
							<div className='mb-2 block relative'>
								<TextInput
									id='password2'
									type={showConfirmPassword ? 'text' : 'password'}
									required
									color={passwordError ? 'failure' : ''}
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									onBlur={() => {
										if (confirmPassword !== password) {
											setPasswordError(true);
											setPasswordErrorText('Passwords do not match');
										} else {
											setPasswordError(false);
											setPasswordErrorText('');
										}
									}}
								/>
								<button
									type='button'
									onClick={() => setShowConfirmPassword(!showConfirmPassword)}
									className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
								>
									{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
								</button>
							</div>
							{passwordError && (
								<span className='text-xs text-red-500'>
									{passwordErrorText}
								</span>
							)}
						</div>
						{/* End Confirm password */}

						{/* Start Passcode */}
						<div>
							<div className='mb-2 block'>
								<Label
									htmlFor='passcode'
									value={'Enter a 6 digit pass code'}
									color={passCodeError ? 'failure' : ''}
								/>
							</div>
							<TextInput
								id='passcode'
								type='text'
								placeholder='Enter a 6 digit pass code'
								required
								color={passCodeError ? 'failure' : ''}
								value={passCode}
								onChange={handlePassCode}
								onBlur={() => setPassCodeError(passCode.length !== 6)}
								helperText={
									<>
										{passCodeError && (
											<span className='text-xs'>
												Please enter a 6 digit pass code
											</span>
										)}
									</>
								}
							/>
						</div>

						<Button
							type='submit'
							className='w-full bg-icm-green hover:bg-icm-green-700 text-gray-800 font-semibold'
						>
							Submit
						</Button>
					</form>
				</Card>
			</div>
		</div>
	);
};

export default AgentRegister;
