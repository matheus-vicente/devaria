const { v4: uuidV4 } = require('uuid');

class Lesson {
  id;

  name;

  module_id;

  lesson_date;

  created_at

  updated_at

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

module.exports = { Lesson };
