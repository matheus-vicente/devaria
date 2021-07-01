class CreateLessonService {
  #lessonsRepository;

  constructor(lessonsRepository) {
    this.#lessonsRepository = lessonsRepository;
  }

  execute(name, module_id, lesson_date) {
    const nameAlreadyExists = this.#lessonsRepository.findByName(name);

    if (nameAlreadyExists) {
      throw new Error('Este nome já está em uso!');
    }

    const lesson = this.#lessonsRepository.create(name, module_id, lesson_date);

    return lesson;
  }
}

module.exports = { CreateLessonService };
