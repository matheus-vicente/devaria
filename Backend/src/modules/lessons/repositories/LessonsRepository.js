const { Lesson } = require('../models/Lessons');

class LessonsRepository {
  #lessons;

  static #INSTANCE;

  constructor() {
    this.#lessons = [];
  }

  static getInstance() {
    if (!LessonsRepository.#INSTANCE) {
      LessonsRepository.#INSTANCE = new LessonsRepository();
    }

    return LessonsRepository.#INSTANCE;
  }

  create(name, module_id, lesson_date) {
    const lesson = new Lesson();

    Object.assign(lesson, {
      name,
      module_id,
      lesson_date: new Date(lesson_date),
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.#lessons.push(lesson);

    return lesson;
  }

  findByName(name) {
    const lession = this.#lessons.find((lession) => lession.name === name);

    return lession;
  }

  findById(id) {
    const lession = this.#lessons.find((lession) => lession.id === id);

    return lession;
  }

  list() {
    return this.#lessons;
  }

  update(id, name, lesson_date) {
    const lesson = this.#lessons.find(lesson => lesson.id === id);

    lesson.name = String(name);
    lesson.lesson_date = new Date(String(lesson_date));
    lesson.updated_at = new Date();
  }

  delete(id) {
    const lessons = this.#lessons.filter(lesson => lesson.id !== id);

    this.#lessons = lessons;
  }
}

module.exports = { LessonsRepository };
