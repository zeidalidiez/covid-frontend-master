import config from '../config'
import TokenService from './token-service'

const WalkerApiService = {
    getAllWalkers(){
        return fetch(`${config.API_ENDPOINT}/walker`,{
            headers:{     
            },
        })
            .then(res => 
                (!res.ok) 
                  ? res.json().then(e => Promise.reject(e))
                  :res.json()
            )
    },
    getWalker(walkerId){
        return fetch(`${config.API_ENDPOINT}/walker/${walkerId}`,{
            headers:{
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
        .then(res=> 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },

    getWalkerServices(){
        return fetch(`${config.API_ENDPOINT}/services`,{
        headers:{
            },
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    }
}

export default WalkerApiService