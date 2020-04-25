import React from "react";
import { shallow, mount } from "../../enzyme";
import Simulator from "./Simulator";

describe("Simulator Component", () => {
  it("renders", () => {
    const wrapper = shallow(<Simulator />);
    expect(wrapper.find(".simulator").exists()).toBe(true);
  });

  it("displays a heading", () => {
    const wrapper = mount(<Simulator />);
    const heading = wrapper.find(".simulator-heading");
    expect(heading.exists()).toBe(true);
  });

  it("displays a button", () => {
    const wrapper = mount(<Simulator />);
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
  });

  // good practice to test for side-effect instead of state change
  // as functions in the functional component are closures
  // and can't be used directly by the test
  it("changes the heading text when button clicked", () => {
    const wrapper = mount(<Simulator />);
    const headingTextBeforeClick = wrapper.find(".simulator-heading").text();
    const button = wrapper.find("button");
    button.simulate("click");
    wrapper.update();
    const headingTextAfterClick = wrapper.find(".simulator-heading").text();
    expect(headingTextAfterClick).not.toBe(headingTextBeforeClick);
  });
});
