const { isBefore } = require('date-fns');

class UpdateLessonService {
  #lessonsRepository;

  constructor(lessonsRepository) {
    this.#lessonsRepository = lessonsRepository;
  }

  execute(id, name, lesson_date) {
    const lessonAlready = this.#lessonsRepository.findById(id);

    if (!lessonAlready) {
      throw new Error('Aula citado não extiste!');
    }

    const lesson = this.#lessonsRepository.findByName(name);

    if (lesson) {
      throw new Error('Já existe uma aula com este nome!');
    }

    if (isBefore(
      new Date(lesson_date),
      Date.now())
    ) {
      throw new Error('Não é possível atualizar para uma que já passou!');
    }

    if (typeof lesson_date === undefined) {
      throw new Error('Data da aula nao informada!');
    }

    this.#lessonsRepository.update(id, name, lesson_date );
  }
}

module.exports = { UpdateLessonService };
