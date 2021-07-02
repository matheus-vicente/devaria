const { isBefore } = require('date-fns');

class UpdateLessonService {
  #lessonsRepository;

  constructor(lessonsRepository) {
    this.#lessonsRepository = lessonsRepository;
  }

  async execute(id, name, class_date) {
    const lessonAlready = await this.#lessonsRepository.findById(id);

    if (!lessonAlready) {
      throw new Error('Aula citado não extiste!');
    }

    const lesson = await this.#lessonsRepository.findByName(name);

    if (lesson) {
      throw new Error('Já existe uma aula com este nome!');
    }

    const newClassDate = new Date(class_date)

    if (isBefore(newClassDate, Date.now())) {
      throw new Error('Não é possível atualizar para uma que já passou!');
    }

    if (typeof class_date === undefined) {
      throw new Error('Data da aula nao informada!');
    }

    await this.#lessonsRepository.update(id, name, class_date );
  }
}

module.exports = { UpdateLessonService };
