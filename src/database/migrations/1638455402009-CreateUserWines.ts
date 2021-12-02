import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserWines1638455402009 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user_wine',
                columns: [
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true
                    },
                    {
                        name: 'user_id',
                        type: 'integer'
                    },
                    {
                        name: 'wine_id',
                        type: 'integer'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKUser',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKWine',
                        referencedTableName: 'wines',
                        referencedColumnNames: ['id'],
                        columnNames: ['wine_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_wine')
    }

}
