import { useEffect, useState } from 'react';
import { sleep } from 'utils';


const useSession = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const run = async () => {    
        await sleep(1)
        setUserId(1);
        setStatus('done')
    }
    
    run();
  }, []);

  return { data: userId, status };
};

export default useSession;
