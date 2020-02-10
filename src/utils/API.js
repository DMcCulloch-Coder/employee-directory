import axios from 'axios';

const url = 'https://randomuser.me/api/?results=15';

export default {
    search: () => axios.get(url)
}