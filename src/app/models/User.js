import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';

class User extends Model {
  static init(sequelize) {
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL, // Virtual para não armazenar diretamente
      password_hash: Sequelize.STRING,
      admin: Sequelize.BOOLEAN,
    }, {
      sequelize,
    });

    // Hook para hash da senha antes de salvar
    // biome-ignore lint/complexity/noThisInStatic: <explanation>
        this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 10);
      }
    });

    // biome-ignore lint/complexity/noThisInStatic: <explanation>
    return this;
  }

  async checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
