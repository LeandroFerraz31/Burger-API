import * as Yup from 'yup';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

class SessionController {
	async store(request, response) {
		const schema = Yup.object({
			email: Yup.string().email().required(),
			password: Yup.string().min(6).required(),
		});

		const isValid = await schema.isValid(request.body);

		if (!isValid) {
			return response.status(401).json({ error: 'Validation fails' });
		}

		const { email, password } = request.body;

		// Verifica se o email e senha estão corretos
		const user = await User.findOne({
			where: { email },
		});

		if (!user) {
			return response.status(401).json({ error: 'User not found' });
		}

		const isSamePassword = await user.checkPassword(password);
		// console.log(isSamePassword);

		if(!isSamePassword){
      return response.status(401).json({ error: 'Password does not match' });
    }
	// return response.json({menssage:'senssion'})
		return response.status(201).json({ 
			id: user.id,
			name: user.name,
			email,
			admin: user.admin,
			token: jwt.sign({id: user.id}, authConfig.secret,{
				expiresIn: authConfig.expiresIn, // Token expira em 7 dias
			}), // Gerar token para autenticar a sessão
     });
	}
}
export default new SessionController();
