import { render, screen } from "@testing-library/react";
import Managers from "../Managers/Manager";

test("should render managers component", () => {
  render(<Managers />);
  const managersElement = screen.getByTestId("manager-test");
  expect(managersElement).toBeInTheDocument();
});
