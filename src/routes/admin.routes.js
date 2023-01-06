//const express = require('express');
//const router = express.Router();
const fs = require('fs');
const AdmZip = require('adm-zip');


router.get('/descargarImagenes', (req, res) => {
  const zip = new AdmZip();

  // Lee todos los archivos de la carpeta "imagenes"
  fs.readdir('imagesUploaded', (error, archivos) => {
    if (error) {
      res.status(500).send('Error al leer la carpeta de imágenes');
      return;
    }

    // Agrega todos los archivos a la instancia de AdmZip
    archivos.forEach(archivo => {
      const contenido = fs.readFileSync(`imagenes/${archivo}`);
      zip.addFile(archivo, contenido, '', 0o644 << 16);
    });

    // Genera el archivo "zip"
    const zipBuffer = zip.toBuffer();

    // Establece la cabecera de descarga y envía el archivo "zip" al cliente
    res.attachment('imagenes.zip');
    res.send(zipBuffer);
  });
});