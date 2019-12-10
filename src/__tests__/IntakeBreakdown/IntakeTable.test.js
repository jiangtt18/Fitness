import React from 'react'
import IntakeTable from "../../IntakeBreakdown/IntakeTable";
import { shallow } from 'enzyme';

describe('IntakeTable', () => {
	const props = {carbohydrates: 20, proteins: 20, fats:10, sodium: 5, sugar:3,
		goals:{carbohydrates: 300, proteins: 56, fats: 50, sodium: 2.3, sugar: 40}};
	const wrapper = shallow(<IntakeTable {...props} />);

	it('renders the title Nutrition Intake', () => {
		const title = wrapper.find('.title');
		// console.log('title', title.text());
		expect(title.text()).toEqual('Nutrition intake');

	});

	it('renders the correct subtitles for micro and macro', () => {
		const targets = wrapper.find('.w-27');
		const targetLabels =  targets.children().find('.value');
		expect(targetLabels.first().text()).toEqual("Goal: 300");
		expect(targetLabels.last().text()).toEqual("Max: 40");
	});

	it('shows correct percentage', () => {
		const progressBar = wrapper.find('.w-50').first().children();
		const props = progressBar.props();
		expect(props.now).toEqual((20/300*100).toFixed(0))
	});
});