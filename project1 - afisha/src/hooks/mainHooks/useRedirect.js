import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function useRedirect(user, path) {

    let navigate = useNavigate();

    useEffect(() => {
        if (user) navigate(path)
    }, [user, path, navigate])

}