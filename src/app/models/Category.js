import Sequelize, { Model } from 'sequelize';

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class Category extends Model {
	static init(sequelize) {
		// biome-ignore lint/complexity/noThisInStatic: <explanation>
		super.init(
			{
				name: Sequelize.STRING,
				
			},
			{
				sequelize,
			},
		);
	}
}

export default Category;
