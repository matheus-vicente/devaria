class CreateLessonController {
  #createLessonService;

  constructor(createLessonService) {
    this.#createLessonService = createLessonService;
  }

  async handle(req, res) {
    try {
      const { name, class_date } = req.body;
      const { module } = req;

      const lesson = await this.#createLessonService.execute(
        name,
        module.id,
        String(class_date),
      );

      return res.status(201).json(lesson);
    } catch (error) {
      return res.status(400).json({ error: String(error) });
    }
  }
}

module.exports = { CreateLessonController };
