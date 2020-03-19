
exports.up = async function(knex) {
  await knex.schema.createTable('volkswagons', (tbl)  => {
      tbl.increments()
        tbl.text('name').notNullable().unique()
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('volkswagons')
};
