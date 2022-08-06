import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class User1659768316999 implements MigrationInterface {

    username: TableColumn = {
        "@instanceof": undefined,
        name: "username",
        type: "string",
        isNullable: false,
        isGenerated: false,
        isPrimary: false,
        isUnique: false,
        isArray: false,
        length: "255",
        zerofill: false,
        unsigned: false,
        clone: function (): TableColumn {
            throw new Error("Function not implemented.")
        }
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.addColumn('user', this.username)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropColumn('user', this.username)
    }

}
