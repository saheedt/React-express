import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Images from '../Images';


describe('<Images />', () => {
	it('Calls componentDidMount', () => {
		sinon.spy(Images.prototype, 'componentDidMount');

		const wrapper = mount(<Images />);
		expect(Images.prototype.componentDidMount.calledOnce).toEqual(true);
	});

	it('lets us set props', () => {
		const wrapper = mount(<Images items="https://www.google.com/webhp?hl=en&ictx=2&sa=X&sqi=2&pjf=1&ved=0ahUKEwi8_8W_itDUAhWbOsAKHSF6AToQPQgD" />);
		expect(wrapper.props().items).toEqual("https://www.google.com/webhp?hl=en&ictx=2&sa=X&sqi=2&pjf=1&ved=0ahUKEwi8_8W_itDUAhWbOsAKHSF6AToQPQgD");

		wrapper.setProps({items: "https://facebook.github.io/jest/"});
		expect(wrapper.props().items).toEqual("https://facebook.github.io/jest/");
	})
});