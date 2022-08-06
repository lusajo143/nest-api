import { stringify } from "querystring"
import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm"

export class package1659730230905 implements MigrationInterface {

    na: TableColumn = {
        name: "l",
        "@instanceof": undefined,
        type: "",
        isNullable: false,
        isGenerated: false,
        isPrimary: false,
        isUnique: false,
        isArray: false,
        length: "",
        zerofill: false,
        unsigned: false,
        clone: function (): TableColumn {
            throw new Error("Function not implemented.")
        }
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
        this.na.comment = 'type'
        await queryRunner.addColumn("package", this.na)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("package", this.na)
    }

}
