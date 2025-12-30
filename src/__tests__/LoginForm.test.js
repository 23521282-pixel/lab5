import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../components/Part4/LoginForm';

test('renders login form and submits data', async () => {
  // 1. Arrange: Render form
  render(<LoginForm />);

  // 2. Act: Nhập liệu
  // userEvent mô phỏng hành vi người dùng thật
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });

  userEvent.type(emailInput, 'test@example.com');
  userEvent.type(passwordInput, 'password123');
  userEvent.click(submitButton);

  // 3. Assert: Kiểm tra kết quả
  // Dùng waitFor hoặc findBy vì logic update state có setTimeout (bất đồng bộ)
  const successMessage = await screen.findByText(/welcome back, test@example.com/i);
  expect(successMessage).toBeInTheDocument();
});