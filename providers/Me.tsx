import { createContext, FC, useMemo } from 'react';
import { User } from 'types';
import { useMe } from 'my-react-query/auth/useMe';

type ContextProps = {
  me: User | null;
};

const defaultValue: ContextProps = { me: null };
export const MeContext = createContext<ContextProps>(defaultValue);

type ProviderProps = {
  children?: React.ReactNode;
};

const MeProvider: FC<ProviderProps> = ({ children }) => {
  const { data } = useMe();
  const me = data ?? null;

  // const memoChildren = useMemo(() => children, [me]);

  return <MeContext.Provider value={{ me }}>{children}</MeContext.Provider>;
};

export default MeProvider;
