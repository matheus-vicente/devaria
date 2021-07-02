const { v4: uuidV4 } = require('uuid');

const { Lesson } = require('../../../database/models');

class LessonsRepository {
  static #INSTANCE;

  static getInstance() {
    if (!LessonsRepository.#INSTANCE) {
      LessonsRepository.#INSTANCE = new LessonsRepository();
    }

    return LessonsRepository.#INSTANCE;
  }

  async create(name, module_id, classDate) {
    await Lesson.create({
      id: uuidV4(),
      name,
      ModuleId: String(module_id),
      classDate: new Date(classDate),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  async findByName(name) {
    const lession = await Lesson.findOne({ where: { name } });

    return lession;
  }

  async findById(id) {
    const lession = await Lesson.findOne({ where: { id } });


    return lession;
  }

  async list() {
    const lessons = await Lesson.findAll();

    return lessons;
  }

  async update(id, name, classDate) {
    const lesson = await this.findById(id);

    lesson.name = String(name);
    lesson.classDate = new Date(String(classDate));
    lesson.updated_at = new Date();

    lesson.save();
  }

  async delete(id) {
    const lessons = await this.findById(id);

    lessons.destroy();
  }
}

module.exports = { LessonsRepository };
