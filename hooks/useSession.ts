import { useEffect, useState } from 'react';
import { delays, sleep } from 'utils';


const useSession = () => {
  const [userId, setUserId] = useState<number | undefined>(undefined);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const run = async () => {    
        await sleep(delays.session);
        setUserId(1);
        setStatus('done');
    }
    
    run();
  }, []);

  return { data: userId, status };
};

export default useSession;
