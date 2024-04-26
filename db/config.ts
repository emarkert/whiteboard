import { NOW, defineDb, column } from 'astro:db';

// https://astro.build/db/config
export default defineDb({
  tables: {
    Post: {
      columns: {
        id: column.number({ primaryKey: true }),
        title: column.text(),
        body: column.text(),
        published: column.date({default: NOW}),
      },
    },
  },
});
