import { IIndividualPersonAccount } from '../interfaces/IndividualPersonAccount'
import { ILegalPersonAccount } from '../interfaces/LegalPersonAccount'

const baseURL = import.meta.env.VITE_API_BASE_URL

export const CreateIndividualPersonAccount = async (individualPersonAccount: IIndividualPersonAccount) => {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    await fetch(baseURL + '/account/individual-person/create', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify( individualPersonAccount ),
    })
}

export const CreateLegalPersonAccount = async (legalPersonAccount: ILegalPersonAccount) => {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    await fetch(baseURL + '/account/legal-person/create', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify( legalPersonAccount ),
    })
}