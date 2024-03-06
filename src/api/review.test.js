import { render } from "@testing-library/react";
import Body from "../components/Body";

test("uses API_URL from .env.test", () => {
  process.env.VITE_API_BASE_URL = "https://hiddengem.pythonanywhere.com/api";
  const { getByText } = render(<Body />);
});
