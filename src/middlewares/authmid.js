import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';

function autjMiddleware(request, response, next) {
	const authToken = request.headers.authorization;

	if (!authToken) {
		return response.status(401).json({ error: 'Token not provided.' });
	}

	const token = authToken.split(' ').at(1);

	try {
		jwt.verify(token, authConfig.secret, (err, decoded) => {
			if (err) {
				throw new Error();
			}

            request.userId = decoded.id

            
		});
	// eslint-disable-next-line no-unused-vars
	} catch (err) {
        return response.status(401).json({ error:  'Token invalid.' });
    }

	return next();
}

export default autjMiddleware;
