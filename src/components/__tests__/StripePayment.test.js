import { render, screen } from "@testing-library/react";
import StripePayment from "../StripePayment/StripePayment";

test("should render stripe component", () => {
  render(<StripePayment />);
  const stripePayment = screen.getByTestId("stripe-test");
  expect(stripePayment).toHaveClass("stripe");
});
