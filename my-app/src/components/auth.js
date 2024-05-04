import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Auth() {
    const router = useRouter();
    
    useEffect(() => {
        const checkAuth = async () => {
        const response = await axios.get('http://localhost/test/auth/session.php');
        if (response.data.status === 'success') {
            router.push('/');
        } else {
            router.push('/signin');
        }
        };
        checkAuth();
    }, []);
    
    return null;
    }