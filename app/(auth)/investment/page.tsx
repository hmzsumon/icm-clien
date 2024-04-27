'use client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchBaseQueryError } from '@/redux/services/helpers';
import PulseLoader from 'react-spinners/PulseLoader';
import { Card, Spinner } from 'flowbite-react';
import {
	useCreatePackageMutation,
	useGetAllPackagesQuery,
} from '@/redux/features/package/packageApi';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

interface Package {
	_id: number;
	title: string;
	price: number;
	profit_day: string;
	weekly: string;
	return: string;
	total_return: number;
}

const Investment = () => {
	const router = useRouter();
	const { data, error, isLoading, isSuccess, isError } =
		useGetAllPackagesQuery(undefined);

	const { user } = useSelector((state: any) => state.auth);

	// call create package mutation
	const [
		createPackage,
		{
			isLoading: isCreating,
			isError: isCreatingError,
			isSuccess: isCreateSuccess,
			error: createError,
		},
	] = useCreatePackageMutation();

	const { packages } = data || { packages: [] };

	const [sPackage, setSPackage] = useState<Package | null>(null);

	// handle select package
	const handleSelectPackage = (p: Package) => {
		setSPackage(p);
	};

	// handle create package
	const handleCreatePackage = async (packageId: any) => {
		const data = {
			packageId,
		};
		createPackage(data);
	};

	// useEffect for create package
	useEffect(() => {
		if (isCreateSuccess) {
			toast.success('Package created successfully');
		}
		if (isCreatingError) {
			toast.error((createError as fetchBaseQueryError).data?.message);
			if ((createError as fetchBaseQueryError).status === 420) {
				router.push('/deposit');
			}
		}
	}, [isCreateSuccess, isCreatingError, createError]);

	return (
		<>
			{sPackage ? (
				<div className=' p-4 tracking-tight text-gray-700 w-full md:w-6/12 mx-auto'>
					<h2 className=' text-xl font-medium text-gray-700 my-4'>
						Your selected package is:{' '}
						<span className='text-2xl  font-semibold text-gray-700  '>
							{sPackage.title}
						</span>
					</h2>
					<Card className='w-full '>
						<h5 className='text-xl  font-semibold text-center text-gray-700  '>
							{sPackage.title}
						</h5>
						<div className='flex items-baseline gap-1 '>
							<span className='text-2xl font-extrabold tracking-tight'>
								{Number(sPackage.price).toLocaleString(undefined, {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</span>
							<span>USDT</span>
						</div>
						<ul className='my-4 space-y-4'>
							<li className='flex space-x-3'>
								<svg
									className='h-5 w-5 shrink-0 text-icm-green dark:text-icm-green-500'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
										clipRule='evenodd'
									/>
								</svg>
								<span className='text-base font-normal leading-tight text-gray-700 dark:text-gray-400'>
									Profit/Day - {sPackage.profit_day}
								</span>
							</li>
							<li className='flex space-x-3'>
								<svg
									className='h-5 w-5 shrink-0 text-icm-green dark:text-cyan-500'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
										clipRule='evenodd'
									/>
								</svg>
								<span className='text-base font-normal leading-tigh700 dark:text-gray-400'>
									Weekly - {sPackage.weekly}
								</span>
							</li>
							<li className='flex space-x-3'>
								<svg
									className='h-5 w-5 shrink-0 text-icm-green dark:text-cyan-500'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
										clipRule='evenodd'
									/>
								</svg>
								<span className='text-base font-normal leading-tigh700 dark:text-gray-400'>
									Return - {sPackage.return}
								</span>
							</li>

							<li className='flex space-x-3'>
								<svg
									className='h-5 w-5 shrink-0 text-icm-green dark:text-cyan-500'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
										clipRule='evenodd'
									/>
								</svg>
								<span className='text-base font-normal leading-tight dark:text-gray-400'>
									Total Return - ${sPackage.total_return}
								</span>
							</li>
						</ul>
						<button
							type='button'
							className='inline-flex w-full justify-center rounded-lg bg-icm-green px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none '
							onClick={() => handleCreatePackage(sPackage._id)}
						>
							{isCreating ? (
								<PulseLoader color='#fff' size={8} margin={2} />
							) : (
								'Activate Now'
							)}
						</button>
						<button
							type='button'
							className='inline-flex w-full justify-center rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-600 focus:outline-none   '
							onClick={() => setSPackage(null)}
						>
							Change Plan
						</button>
					</Card>
				</div>
			) : (
				<>
					{isLoading ? (
						<div className='text-center flex items-center justify-center h-[60vh]'>
							<Spinner aria-label='Center-aligned spinner example' size='xl' />
						</div>
					) : (
						<div className=' p-4 tracking-tight text-gray-700'>
							<h2 className=' my-4 text-2xl md:text-4xl  font-semibold text-gray-700  '>
								<span className=''>Investment Plans</span>
							</h2>
							<div className=' '>
								<div className='grid gap-4 grid-cols-1 md:grid-cols-2 '>
									{packages.map((p: Package) => (
										<Card className='w-full ' key={p._id}>
											<h5 className='text-2xl  font-semibold text-center text-gray-700  '>
												{p.title}
												{user?.active_packages.includes(p._id) && (
													<sup className='text-xs text-green-500 ml-2'>
														(Active)
													</sup>
												)}
											</h5>
											<div className='flex items-baseline gap-1 '>
												<span className='text-2xl font-extrabold tracking-tight'>
													{Number(p.price).toLocaleString(undefined, {
														minimumFractionDigits: 2,
														maximumFractionDigits: 2,
													})}
												</span>
												<span>USDT</span>
											</div>
											<ul className='my-4 space-y-4'>
												<li className='flex space-x-3'>
													<svg
														className='h-5 w-5 shrink-0 text-icm-green dark:text-icm-green-500'
														fill='currentColor'
														viewBox='0 0 20 20'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															fillRule='evenodd'
															d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
															clipRule='evenodd'
														/>
													</svg>
													<span className='text-base font-normal leading-tight text-gray-700 dark:text-gray-400'>
														Profit/Day - {p.profit_day}
													</span>
												</li>
												<li className='flex space-x-3'>
													<svg
														className='h-5 w-5 shrink-0 text-icm-green dark:text-cyan-500'
														fill='currentColor'
														viewBox='0 0 20 20'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															fillRule='evenodd'
															d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
															clipRule='evenodd'
														/>
													</svg>
													<span className='text-base font-normal leading-tigh700 dark:text-gray-400'>
														Weekly - {p.weekly}
													</span>
												</li>
												<li className='flex space-x-3'>
													<svg
														className='h-5 w-5 shrink-0 text-icm-green dark:text-cyan-500'
														fill='currentColor'
														viewBox='0 0 20 20'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															fillRule='evenodd'
															d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
															clipRule='evenodd'
														/>
													</svg>
													<span className='text-base font-normal leading-tigh700 dark:text-gray-400'>
														Return - {p.return}
													</span>
												</li>

												<li className='flex space-x-3'>
													<svg
														className='h-5 w-5 shrink-0 text-icm-green dark:text-cyan-500'
														fill='currentColor'
														viewBox='0 0 20 20'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															fillRule='evenodd'
															d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
															clipRule='evenodd'
														/>
													</svg>
													<span className='text-base font-normal leading-tigh700 dark:text-gray-400'>
														Total Return - ${p.total_return}
													</span>
												</li>
											</ul>
											<button
												type='button'
												className='inline-flex w-full justify-center rounded-lg bg-icm-green px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900'
												onClick={() => handleSelectPackage(p)}
											>
												Choose Plan
											</button>
										</Card>
									))}
								</div>
							</div>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default Investment;
