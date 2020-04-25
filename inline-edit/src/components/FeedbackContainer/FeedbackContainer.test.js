import React from "react";
import { shallow } from "../../enzyme";
import FeedbackContainer from "./FeedbackContainer";

describe("FeedbackContainer Component", () => {
  it("renders", () => {
    const wrapper = shallow(<FeedbackContainer />);
    expect(wrapper.find(".feedback-container").exists()).toBe(true);
  });

  it("renders children", () => {
    const wrapper = shallow(
      <FeedbackContainer>
        <div className="child">Test</div>
      </FeedbackContainer>
    );
    expect(wrapper.find(".child").exists()).toBe(true);
  });

  it("displays a message when set", () => {
    const wrapper = shallow(<FeedbackContainer message="Hello" />);
    const message = wrapper.find(".feedback-container-message");
    expect(message.exists()).toBe(true);
    expect(message.text()).toBe("Hello");
  });

  it("does not display a message when not set", () => {
    const wrapper = shallow(<FeedbackContainer />);
    const message = wrapper.find(".feedback-container-message");
    expect(message.exists()).not.toBe(true);
  });

  it("displays a spinner when set", () => {
    const wrapper = shallow(<FeedbackContainer type="spinner" />);
    const spinner = wrapper.find(".feedback-spinner");
    expect(spinner.exists()).toBe(true);
  });

  it("does not display a spinner when not set", () => {
    const wrapper = shallow(<FeedbackContainer />);
    const spinner = wrapper.find(".feedback-spinner");
    expect(spinner.exists()).not.toBe(true);
  });

  it("displays a success icon when set", () => {
    const wrapper = shallow(<FeedbackContainer type="success" />);
    const success = wrapper.find(".feedback-success");
    expect(success.exists()).toBe(true);
  });

  it("does not display a success icon when not set", () => {
    const wrapper = shallow(<FeedbackContainer />);
    const success = wrapper.find(".feedback-success");
    expect(success.exists()).not.toBe(true);
  });

  it("displays a failure icon when set", () => {
    const wrapper = shallow(<FeedbackContainer type="failure" />);
    const failure = wrapper.find(".feedback-failure");
    expect(failure.exists()).toBe(true);
  });

  it("does not display a failure icon when not set", () => {
    const wrapper = shallow(<FeedbackContainer />);
    const failure = wrapper.find(".feedback-failure");
    expect(failure.exists()).not.toBe(true);
  });
});
