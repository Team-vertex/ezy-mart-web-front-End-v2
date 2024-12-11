import { routes } from '@/constants/route';
import { Navigate, useSearchParams } from 'react-router-dom';

export default function OtpVerify() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  if (!email) {
    return <Navigate to={routes.signIn} />;
  }
  return (
    <div>
      <h1>OTP Verify</h1>
    </div>
  );
}
