import { useEffect, useState } from 'react'

const useAccount = (time) => {
    const [loading, setLoading] = useState(true);
    const [account, setAccount] = useState({ name: '施丽' });

    const timeout = (ms) => {
        return new Promise((resolve, reject) => {
            if (ms < 2000) {
                setTimeout(resolve, ms, { name: '钟建' });
            } else {
                setTimeout(reject, ms, '请求错误')
            }

        });
    }

    useEffect(() => {
        setLoading(true);
        timeout(time)
            .then(data => {
                setAccount(data);
                setLoading(false);
            }).catch(e => {
                console.log(e);
                setLoading(false);
            })
    }, [time]);
    return [loading, account];
}

export default useAccount