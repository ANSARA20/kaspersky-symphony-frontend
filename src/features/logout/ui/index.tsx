import { useLogout } from '../libs/hooks/use-logout';

import { Button } from '@/shared/ui/button';

export const Logout = () => {
  const logout = useLogout();

  return (
    <Button className='font-medium' color='default' onClick={logout}>
      Выйти
    </Button>
  );
};
