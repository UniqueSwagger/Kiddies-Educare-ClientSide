import { render, screen } from "@testing-library/react";
import SectionTitle from "../SectionTitle/SectionTitle";

test("should render section title component", () => {
  render(<SectionTitle />);
  const sectionTitle = screen.getByTestId("section-title-test");
  expect(sectionTitle).toBeInTheDocument();
});
