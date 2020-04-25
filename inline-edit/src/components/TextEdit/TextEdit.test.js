import React from "react";
import { shallow, mount } from "../../enzyme";
import TextEdit from "./TextEdit";

describe("TextEdit Component", () => {
  it("renders", () => {
    const wrapper = shallow(<TextEdit />);
    expect(wrapper.find(".text-edit").exists()).toBe(true);
  });

  it("displays a button when no text", () => {
    const wrapper = mount(<TextEdit text="" />);
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("displays text when text exists", () => {
    const wrapper = shallow(<TextEdit text="Hello" />);
    const paragraph = wrapper.find("p");
    expect(paragraph.exists()).toBe(true);
    expect(paragraph.text()).toBe("Hello");
  });

  it("does not display text when text empty", () => {
    const wrapper = shallow(<TextEdit text="" />);
    const paragraph = wrapper.find("p");
    expect(paragraph.exists()).toBe(false);
  });

  it("can edit text after clicking on it", () => {
    const wrapper = shallow(<TextEdit text="Hello" />);
    const paragraph = wrapper.find("p");
    paragraph.simulate("click");
    wrapper.update();
    const textinput = wrapper.find(".text-edit-input");
    expect(textinput.exists()).toBe(true);
  });

  it("cannot edit text without clicking on it", () => {
    const wrapper = shallow(<TextEdit text="Hello" />);
    const textinput = wrapper.find(".text-edit-input");
    expect(textinput.exists()).toBe(false);
  });
});
