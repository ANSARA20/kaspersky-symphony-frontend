import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import { Button } from '@/shared/ui/button';

export const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/admin/login');
  };

  return (
    <Button className='font-medium' color='default' onClick={handleLogout}>
      Выйти
    </Button>
  );
};
