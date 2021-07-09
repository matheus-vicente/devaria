class DeleteLessonService {
  lessonsRepository;

  constructor(lessonsRepository) {
    this.lessonsRepository = lessonsRepository;
  }

  async execute(id) {
    const module = await this.lessonsRepository.findById(id);

    if (!module) {
      throw new Error('Não é possível remover uma aula inexistente!');
    }

    await this.lessonsRepository.delete(id);
  }
}

module.exports = { DeleteLessonService };
