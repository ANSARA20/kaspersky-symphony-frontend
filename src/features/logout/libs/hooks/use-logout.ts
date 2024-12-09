import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove('token');
    navigate('/admin/login');
  };

  return logout;
};
