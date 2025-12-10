const aiService = require('../services/ai.service');

async function aiResponse(req, res) {
    const { prompt, model } = req.body;
    if (!prompt || !model) {
        return res.status(400).json({ message: "Prompt and model are required" })
    }
    try {
        const response = await aiService.generateResponse(prompt, model);
        res.send(response);
    } catch (error) {
        res.status(500).json({ message: "Failed to generate response", error: error.message });
    }
}

module.exports = { aiResponse };