import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const PartnerTable = ({ data }: any) => {
	const columns: GridColDef<any>[] = [
		{
			field: 'partner_id',
			headerName: 'Partner ID',
			width: 100,
			renderCell: (params: any) => (
				<div className=''>
					<p>{params.row.partner_id}</p>
				</div>
			),
		},

		{
			field: 'email',
			headerName: 'Email',
			width: 200,
			renderCell: (params: any) => (
				<div className=''>
					<p>{params.row.email}</p>
				</div>
			),
		},

		{
			field: 'package',
			headerName: 'Package',
			width: 200,
			renderCell: (params: any) => (
				// console.log(params.row.packages),
				<div className=' flex items-center gap-1'>
					{params.row.packages.length > 0 ? (
						params.row.packages.map((packageData: any, i: number) => {
							return <p key={i}>{packageData},</p>;
						})
					) : (
						<p>No Package</p>
					)}
				</div>
			),
		},
	];

	const rows: any = [];
	data &&
		data.map((record: any) => {
			return rows.push({
				id: record.partner_id ? record.partner_id : record._id,
				partner_id: record.partner_id,
				name: record.name,
				email: record.email,
				packages: record.active_packages,
			});
		});
	return (
		<div>
			<DataGrid
				autoHeight
				rows={rows}
				columns={columns}
				// rowHeight={38}
				// initialState={{
				// 	pagination: {
				// 		paginationModel: { pageSize: 5, page: 0 },
				// 	},
				// }}
			/>
		</div>
	);
};

export default PartnerTable;
