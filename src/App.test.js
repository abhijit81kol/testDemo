import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

test('renders renders without crashingok', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("renders button", ()=>{

});

test("renders counter display", ()=>{
    
});

test("counter starts at 0", ()=>{

});

test("clicking on the button increments counter display", ()=>{

});
