import axios from 'axios';
// Troque VITE_API_URL pelo endereço da futura API Spring Boot (ex.: http://localhost:8080/api).
export const api=axios.create({baseURL:import.meta.env.VITE_API_URL||'/api',headers:{'Content-Type':'application/json'}});
export const prayerService={create:(payload)=>api.post('/prayer-requests',payload)};
export const contactService={create:(payload)=>api.post('/contacts',payload)};
