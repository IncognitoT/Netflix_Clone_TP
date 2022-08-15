import axios from 'axios'

export const postRegsiter = async(value) => {
	try {
        const header = {
            'Content-Type': 'application/json',
        }
        // const res = await axios.get(`/javaapi/users`)
        await axios.post(`/javaapi/users`, value, {header});
        
    } catch (e) {
        throw e;
    }
}