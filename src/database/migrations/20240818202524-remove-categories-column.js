
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    
      await queryInterface.removeColumn('products', 'category');
     
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.addColumn('products', 'category', {
        type: Sequelize.INTEGER,
        allowNull: true
      });
     
  }
};
