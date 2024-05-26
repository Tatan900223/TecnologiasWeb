const Client = require('../models/Client');

exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createClient = async (req, res) => {
    const { name, email } = req.body;
    try {
        const newClient = new Client({ name, email });
        await newClient.save();
        res.status(201).json(newClient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateClient = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const client = await Client.findById(id);
        if (!client) return res.status(404).json({ error: 'Client not found' });

        client.name = name;
        client.email = email;
        client.updatedAt = Date.now();
        await client.save();
        res.json(client);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
