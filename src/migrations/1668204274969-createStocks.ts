import { MigrationInterface, QueryRunner } from "typeorm";

export class createStocks1668204274969 implements MigrationInterface {
    name = 'createStocks1668204274969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`stock\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` date NOT NULL, \`open\` decimal NOT NULL, \`high\` decimal NOT NULL, \`low\` decimal NOT NULL, \`volume\` decimal NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`stock\``);
    }

}
