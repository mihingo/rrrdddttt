import { Migration } from '@mikro-orm/migrations';

export class Migration20221011073414 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "post" rename column "post" to "content";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "post" rename column "content" to "post";');
  }

}
