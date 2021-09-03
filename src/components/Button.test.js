import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

const getProps = (overrides) => ({
  children: "doge",
  ...overrides,
});

describe("Button", () => {
  const component = (props) => render(<Button {...props} />);

  it("should have the correct children", () => {
    const props = getProps();
    const { getByText } = component(props);

    expect(getByText(props.children)).toHaveTextContent("doge");
  });

  it("should trigger onClick function", () => {
    const onClick = jest.fn();
    const props = getProps({ onClick });
    const { getByText } = component(props);
    userEvent.click(getByText(props.children));

    expect(onClick).toHaveBeenCalled();
  });

  it("should be disabled", () => {
    const props = getProps({ disabled: true });
    const { getByText } = component(props);

    expect(getByText(props.children)).toBeDisabled();
  });
});
