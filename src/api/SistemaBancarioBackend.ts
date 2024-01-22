import { IIndividualPersonAccount } from '../interfaces/IndividualPersonAccount'

const baseURL = import.meta.env.VITE_API_BASE_URL

export const CreateIndividualPersonAccount = async (individualPersonAccount: IIndividualPersonAccount) => {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const response = await fetch(baseURL + '/account/individual-person/create', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify( individualPersonAccount ),
    })
}