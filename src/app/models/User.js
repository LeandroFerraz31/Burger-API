import Sequelize, { Model } from "sequelize";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class User extends Model {

    static init(sequelize) {
        // biome-ignore lint/complexity/noThisInStatic: <explanation>
        super.init(
            {
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            admin: Sequelize.BOOLEAN,
        }, 
        
        {
            sequelize,
        }
        );
    }
   
}

export default User;