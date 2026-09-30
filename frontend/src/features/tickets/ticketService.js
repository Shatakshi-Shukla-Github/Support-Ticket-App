// import axios from "axios"
import API from "../../api"


const API_URL = "/api/tickets/"

//Create new ticket
const createTicket = async (ticketData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await API.post(API_URL, ticketData, config)
    return response.data
}


//Get user tickets
const getTickets = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await API.get(API_URL, config)
    return response.data
}


// Get user ticket
const getTicket = async (ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await API.get(API_URL + ticketId, config)

    return response.data
}

// Close user ticket
const closeTicket = async (ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await API.put(API_URL + ticketId, { status: "closed" }, config)

    return response.data
}


const ticketService = {
    createTicket,
    getTickets,
    getTicket,
    closeTicket,
}

export default ticketService