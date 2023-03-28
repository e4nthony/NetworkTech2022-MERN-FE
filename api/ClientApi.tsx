import { create } from "apisauce";

const apiClient = create({
    baseURL: 'http://localhost:4000', //todo paste real ip
    headers: { Accept: 'application/vnd.github.v3+json' },
})

export default apiClient