import { apiSlice } from '../api/apiSlice';

export const packageApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// get all packages
		getAllPackages: builder.query<any, any>({
			query: () => ({
				url: '/packages',
				method: 'GET',
			}),
			providesTags: ['Package'],
		}),
		// get my packages
		getMyPackages: builder.query<any, any>({
			query: () => '/my-package',
			providesTags: ['Package'],
		}),

		// create package
		createPackage: builder.mutation<any, any>({
			query: (data) => ({
				url: '/create-user-package',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['Package', 'User'],
		}),
	}),
});

export const {
	useGetAllPackagesQuery,
	useGetMyPackagesQuery,
	useCreatePackageMutation,
} = packageApi;
