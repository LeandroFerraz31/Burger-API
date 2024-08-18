import Sequelize, { Model } from 'sequelize';

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class Product extends Model {
	static init(sequelize) {
		// biome-ignore lint/complexity/noThisInStatic: <explanation>
		super.init(
			{
				name: Sequelize.STRING,
				price: Sequelize.INTEGER,
				path: Sequelize.STRING,

				url: {
					type: Sequelize.VIRTUAL,
					get() {
						return `http://localhost:3001/product-file/${this.path}`;
					},
				},
			},
			{
				sequelize,
			},
		);
		// biome-ignore lint/complexity/noThisInStatic: <explanation>
		return this;
	}

	static associate(models) {
		// biome-ignore lint/complexity/noThisInStatic: <explanation>
		this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' }); // Corrigido o alias 'category'
	}
}

export default Product;
