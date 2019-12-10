import React from 'react';
import IntakeBreakdown from "../../IntakeBreakdown/IntakeBreakdown";
import IntakeTable from '../../IntakeBreakdown/IntakeTable';
import { shallow } from 'enzyme';

describe('<IntakeBreakdown />', () => {
	it('renders <Intaketable />', () => {
		const wrapper = shallow(<IntakeBreakdown />);
		expect(wrapper.find('IntakeTable').exists()).toBe(true);
	})
});