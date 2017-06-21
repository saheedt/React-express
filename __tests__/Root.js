import React from 'react';
import { shallow } from 'enzyme';
import Root from '../Root.js';


describe('Root Component Default State Test', () => {
	const wrapper = shallow(<Root />);
	const loadImages = wrapper.instance().loadImages();
	const componentDidMount = wrapper.instance().componentDidMount();


	test('should not define loadImages method', () => {
		expect(loadImages).toBeUndefined();
	});

	test('State Should be at default', () => {
		expect(wrapper.state().Images).toBe(false);
	});

	test('Should have 0 div tag', () => {
		expect(wrapper.find('div')).toHaveLength(0)
	});

	test('Should have 0 ul tag', () => {
		expect(wrapper.find('ul')).toHaveLength(0)
	});

	test('Should have 1 h2 tag', () => {
		expect(wrapper.find('h2')).toHaveLength(1)
	});
});

describe('Root Component State Change Test', () => {
	const wrapper = shallow(<Root />);

	wrapper.setState({Images: true}, );

	test('State Should be changed', () => {
		expect(wrapper.state().Images).toBe(true);
	});

	test('Should have 1 div tag before state change', () => {
		expect(wrapper.find('div')).toHaveLength(1)
	});

	test('Should have 1 ul tag before state change', () => {
		expect(wrapper.find('ul')).toHaveLength(1)
	});

	test('Should have 0 h2 tag before state change', () => {
		expect(wrapper.find('h2')).toHaveLength(0)
	});

});