class ListAllLessonsService {
  #lessonsRepository;

  constructor(lessonsRepository) {
    this.#lessonsRepository = lessonsRepository;
  }

  async execute() {
    const lessons = await this.#lessonsRepository.list();

    return lessons;
  }
}

module.exports = { ListAllLessonsService };
