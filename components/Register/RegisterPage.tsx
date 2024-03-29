import React, { useEffect, useState } from 'react';

import Stepper from './Stepper';
import PersonalDetails from './PersonalDetails';
import MoreAbout from './MoreAbout';
import Security from './Security';
import Review from './Review';
import { useSelector } from 'react-redux';
import Verify from './Verify';

const RegisterPage = () => {
	const { activeStep } = useSelector((state: any) => state.stepper);

	return (
		<>
			<Stepper />
			{activeStep === 1 && <PersonalDetails />}
			{activeStep === 2 && <MoreAbout />}
			{activeStep === 3 && <Security />}
			{activeStep === 4 && <Review />}
			{activeStep === 5 && <Verify />}
		</>
	);
};

export default RegisterPage;
