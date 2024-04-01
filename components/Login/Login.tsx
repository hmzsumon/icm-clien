'use client';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';

const Login = () => {
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	return (
		<>
			<h1 className='text-xl font-bold mb-4'>Please Login to your account.</h1>
			<Card className='max-w-md w-full '>
				<form className='flex flex-col gap-4'>
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
							className=' bg-transparent '
							id='email1'
							type='email'
							placeholder='Enter your email address'
							required
							color={emailError ? 'failure' : ''}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							onBlur={() =>
								setEmailError(email.length > 0 && !email.includes('@'))
							}
							helperText={
								<>
									{emailError && (
										<span className='text-xs text-failure-600'>
											Please enter a valid email address
										</span>
									)}
								</>
							}
							style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
						/>
					</div>
					{/* End Email */}
					<div>
						<div className='mb-2 block'>
							<Label htmlFor='password1' value='Your password' />
						</div>
						<div className='mb-2 block relative'>
							<TextInput
								id='password1'
								type={showPassword ? 'text' : 'password'}
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<button
								type='button'
								onClick={() => setShowPassword(!showPassword)}
								className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
							>
								{showPassword ? <FaEyeSlash /> : <FaEye />}
							</button>
						</div>
					</div>
					<div className='flex items-center text-xs  justify-between gap-2'>
						<p className='text-primary-500 hover:text-blue-700 font-bold cursor-pointer hover:underline '>
							<Link href='/forgot-password'>
								<span className='text-primary-500'>Forgot password?</span>
							</Link>
						</p>

						<p>
							Don't have an account?{' '}
							<Link href='/register'>
								<span className='text-sm text-primary-500 hover:underline hover:text-blue-700 '>
									Register
								</span>
							</Link>
						</p>
					</div>
					<Button type='submit'>Submit</Button>
				</form>
			</Card>
		</>
	);
};

export default Login;
