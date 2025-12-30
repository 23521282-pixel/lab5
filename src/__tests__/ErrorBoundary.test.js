import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from 'react-error-boundary';
import Bomb from '../components/Part4/Bomb';

// Tạo một Fallback đơn giản để test
const ErrorFallback = () => <div>Something went wrong</div>;

// Tắt thông báo lỗi đỏ lòm trong console khi chạy test này (để log sạch đẹp hơn)
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

test('Error Boundary catches the error and displays fallback UI', () => {
  // 1. Render Bomb bên trong ErrorBoundary
  // Lưu ý: React sẽ throw error trong môi trường test
  // nên ta cần wrap render trong một function an toàn hoặc chấp nhận console error
  try {
    render(
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Bomb />
      </ErrorBoundary>
    );
  } catch (e) {
    // React test renderer đôi khi throw error ra ngoài, ta catch để test không bị fail
  }

  // 2. Assert: Kiểm tra xem dòng chữ fallback có hiện ra không
  const fallbackMessage = screen.getByText(/something went wrong/i);
  expect(fallbackMessage).toBeInTheDocument();
});