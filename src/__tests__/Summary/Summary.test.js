import React from 'react';
import Summary from "../../Summary/Summary";
import SummaryTable from "../../Summary/SummaryTable";
import { shallow } from 'enzyme';

describe('<Summary />', () => {
	it('renders  <SummaryTable /> and <SummaryProgress /> components', () => {
		const wrapper = shallow(<Summary exercise={1} eaten={0} goal={2} />);
		expect(wrapper.find('SummaryTable').exists()).toBe(true);
		expect(wrapper.find('SummaryProgress').exists()).toBe(true);
	});
});
