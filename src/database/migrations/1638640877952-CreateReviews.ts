import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateReviews1638640877952 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'reviews',
                columns: [
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true,
                    },
                    {
                        name: 'review',
                        type: 'text',
                        isNullable: true
                    },
                    {
                        name: 'evaluation',
                        type: 'real'
                    },
                    {
                        name: 'wine_id',
                        type: 'integer'
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
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKWine',
                        referencedTableName: 'wines',
                        referencedColumnNames: ['id'],
                        columnNames: ['wine_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('reviews')
    }

}
