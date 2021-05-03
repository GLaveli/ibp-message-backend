import { Router } from 'express';

const documentationAPI = Router();

documentationAPI.get('/', (req, res) => {

 return res.status(200).json({messa: 'Api esta funcionando cheers!!!'});
});

export { documentationAPI };