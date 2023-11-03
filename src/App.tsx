import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppRouter } from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { check } from './API/UserAPI/userAPI';
import { useAppDispatch } from './redux/hooks/hooks';
import { isAuth } from './redux/slices/userSlice';
import { Spinner } from 'react-bootstrap';

function App() {

    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check().then(data => {
            dispatch(isAuth());
        })
        .catch((error) => console.log(error.response.data.message))
        .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner/>
    }
    return (
        <BrowserRouter>
            <div>
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
}

export default App;
