class CreateLessonController {
  #createLessonService;

  constructor(createLessonService) {
    this.#createLessonService = createLessonService;
  }

  handle(req, res) {
    try {
      const { name, lesson_date } = req.body;
      const { module_id } = req;

      const lesson = this.#createLessonService.execute(name, module_id, lesson_date);

      return res.status(201).json(lesson);
    } catch (error) {
      return res.status(400).json({ error: String(error) });
    }
  }
}

module.exports = { CreateLessonController };
