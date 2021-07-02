class DeleteLessonController {
  #deleteLessonService;

  constructor(deleteLessonService) {
    this.#deleteLessonService = deleteLessonService;
  }

  async handle(req, res) {
    try {
      const { id } = req.params;

      await this.#deleteLessonService.execute(id);

      return res.status(204).send();
    } catch (error) {
      return res.status(401).json({ error: String(error) });
    }
  }
}

module.exports = { DeleteLessonController };
