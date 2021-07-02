class CreateLessonService {
  #lessonsRepository;

  constructor(lessonsRepository) {
    this.#lessonsRepository = lessonsRepository;
  }

  async execute(name, module_id, class_date) {
    const nameAlreadyExists = await this.#lessonsRepository.findByName(name);

    if (nameAlreadyExists) {
      throw new Error('Este nome já está em uso!');
    }

    const lesson = await this.#lessonsRepository.create(
      name,
      String(module_id),
      class_date
    );

    return lesson;
  }
}

module.exports = { CreateLessonService };
