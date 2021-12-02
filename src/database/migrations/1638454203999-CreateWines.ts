import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateWines1638454203999 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'wines',
                columns: [
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true,
                    },
                    {
                        name: 'country',
                        type: 'varchar'
                    },
                    {
                        name: 'type',
                        type: 'varchar'
                    },
                    {
                        name: 'type_grape',
                        type: 'varchar'
                    },
                    {
                        name: 'harmonizing',
                        type: 'varchar'
                    },
                    {
                        name: 'image_url',
                        type: 'text'
                    },
                    {
                        name: 'producer',
                        type: 'varchar'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                uniques: [
                    {
                        name: 'unique_producer_name',
                        columnNames: ['name', 'producer']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('wines');
    }

}
