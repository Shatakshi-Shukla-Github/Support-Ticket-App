import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getTickets, reset } from "../features/tickets/ticketSlice"
import Spinner from "../components/Spinner"
import BackButton from "../components/BackButton"
import { Navigate, useNavigate } from "react-router-dom"


function Tickets() {
    const { tickets, isLoading, isSuccess } = useSelector((state) => state.tickets)
    const dispatch = useDispatch()
    const navigate = useNavigate("/")

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        dispatch(getTickets())
    }, [dispatch])


    if (isLoading) {
        return <Spinner />
    }

    return <>
        <h1>View Your Tickets</h1>
    </>
}

export default Tickets