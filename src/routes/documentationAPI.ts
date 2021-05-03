import { Router } from 'express';

const documentationAPI = Router();

documentationAPI.get('/', (req, res) => {

 return res.status(200).json(
  {
   message: 'Api de integração de menssagens esta funcionando cheers!!!',
   doc: 'Em breve documentação!',
  });
});

export { documentationAPI };