import axios from 'axios'

export const postFavourite = async(value) => {
	try {
        const header = {
            'Content-Type': 'application/json',
        }
        await axios.post(`/node/favorite`, value, {header});
        // await axios({method:'post',url:`/jav/users`,data:value,headers:header})
    } catch (e) {
        throw e;
    }
}