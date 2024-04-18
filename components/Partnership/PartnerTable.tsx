import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
const data = [
	{
		id: 1,
		name: 'Sumon',
		email: 'zakaria@gmail.com',
		package: 'Basic',
	},
	{
		id: 2,
		name: 'Rahim',
		email: 'zakaria@gmail.com',
		package: 'Basic',
	},
	{
		id: 3,
		name: 'Karim',
		email: 'zakaria@gmail.com',
		package: 'Basic',
	},

	{
		id: 4,
		name: 'Jhon',
		email: 'zakaria@gmail.com',
		package: 'Basic',
	},
	{
		id: 5,
		name: 'Doe',
		email: 'zakaria@gmail.com',
		package: 'Basic',
	},
	{
		id: 6,
		name: 'Doe',
		email: 'zakaria@gmail.com',
		package: 'Basic',
	},
	{
		id: 7,
		name: 'Doe',
		email: 'zakaria@gmail.com',
		package: 'Basic',
	},
	{
		id: 8,
		name: 'Doe',
		email: 'zakaria@gmail.com',
		package: 'Basic',
	},
];

const PartnerTable = () => {
	const columns: GridColDef<any>[] = [
		{
			field: 'id',
			headerName: 'Partner ID',
			width: 100,
			renderCell: (params: any) => (
				<div className=''>
					<p>{params.row.id}</p>
				</div>
			),
		},

		{
			field: 'name',
			headerName: 'Name',
			width: 130,
			renderCell: (params: any) => (
				<div className=''>
					<p>{params.row.name}</p>
				</div>
			),
		},

		{
			field: 'email',
			headerName: 'Email',
			width: 110,
			renderCell: (params: any) => (
				<div className=''>
					<p>{params.row.email}</p>
				</div>
			),
		},

		{
			field: 'package',
			headerName: 'Package',
			width: 100,
			renderCell: (params: any) => (
				<div className=''>
					<p>{params.row.package}</p>
				</div>
			),
		},
	];

	const rows: any = [];
	data &&
		data.map((record: any) => {
			return rows.push({
				id: record.id,
				name: record.name,
				email: record.email,
				package: record.package,
			});
		});
	return (
		<div className=' z-10'>
			<div style={{ height: 300, width: '100%' }}>
				<DataGrid
					rows={rows}
					columns={columns}
					rowHeight={38}
					initialState={{
						pagination: {
							paginationModel: { pageSize: 5, page: 0 },
						},
					}}
				/>
			</div>
		</div>
	);
};

export default PartnerTable;
