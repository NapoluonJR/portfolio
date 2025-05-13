const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Middleware pour analyser les données envoyées via POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'projects.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Route pour traiter l'envoi du formulaire
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Configuration du transporteur SMTP avec Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Utilisation de Gmail pour envoyer l'email
    auth: {
      user: 'napoluonjr@gmail.com',
      pass: 'klzm hkiz uags lgsv'  // Mot de passe de l'email
    }
  });

  const mailOptions = {
    from: 'napoluonjr@gmail.com', // Ton email pour envoyer
    to: 'napoluonjr@gmail.com',   // L'adresse où tu veux recevoir le message
    subject: `Message de ${name} via le formulaire de contact`,
    text: message,
    replyTo: email  // L'adresse à laquelle tu peux répondre (l'email de l'utilisateur)
  };

  // Envoi de l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Erreur lors de l\'envoi du message');
    }
    res.status(200).send('Message envoyé avec succès');
  });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
