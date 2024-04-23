import React from 'react';
import Image from 'next/image';

const getTreeData = () => {
	return {
		main: {
			element: 'Rahman',
			id: '200200',
		},
		left: {
			element: 'Asad',
			id: '200201',
		},
		right: {
			element: 'Sumon',
			id: '200202',
		},
	};
};

const renderBinaryTree = (node: any) => {
	const { left, right, element } = node;
	return (
		<div className='node node--root'>
			<div className='node__element'>{element}</div>
			{left || right ? (
				<div className='node node--root'>
					<div className='node__bottom-line'></div>
					<div className='node__children'>
						{left ? <div className='node'>{renderBinaryTree(left)}</div> : null}
						{right ? (
							<div className='node'>{renderBinaryTree(right)}</div>
						) : null}
					</div>
				</div>
			) : null}
		</div>
	);
};

const TreeNode = ({ node }: any) => {
	const { left, right, main } = node;

	return (
		<div className=''>
			<div className='main-node node text-center '>
				<Image
					src='/user.png'
					alt='avatar'
					width={100}
					height={100}
					className='rounded-sm mx-auto'
				/>
				<div>
					<p className='text-primary'>{main.element}</p>
					<p>
						<span className='text-primary'>{main.id}</span>
					</p>
				</div>
			</div>
			<div className='children flex gap-x-14 mt-10'>
				<div className=' node left-node'>
					<Image
						src='/user.png'
						alt='avatar'
						width={100}
						height={100}
						className='rounded-sm'
					/>
					<div className='text-center'>
						<p className='text-primary'>{left.element}</p>
						<p>
							<span className='text-primary'>{left.id}</span>
						</p>
					</div>
				</div>
				<div className='node right-node'>
					<Image
						src='/user.png'
						alt='avatar'
						width={100}
						height={100}
						className='rounded-sm'
					/>
					<div className='text-center'>
						<p className='text-primary'>{right.element}</p>
						<p>
							<span className='text-primary'>{right.id}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const TreeView = () => {
	const rootNode = getTreeData();
	console.log(rootNode);
	return (
		<div className='bg-white p-5 border rounded mt-5'>
			<h1 className='my-10 text-gray-700 font-semibold text-center text-xl'>
				{' '}
				Your Global Tree View
			</h1>
			<div className=' flex items-center'>
				<div className='tree mx-auto'>
					<TreeNode node={rootNode} />
				</div>
			</div>
		</div>
	);
};

export default TreeView;
