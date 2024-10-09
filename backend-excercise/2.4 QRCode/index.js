import fs from 'node:fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer
  .prompt([
    {
        name: 'website-link',
        message: 'Enter the website link: ',
        type: 'input',
    }
  ])
  .then((answers) => {
    let url = answers['website-link'];
    const qr_image = qr.image(url, { type: "png" });
    qr_image.pipe(fs.createWriteStream("qr_code.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Error occurred");
    } else {
      console.log("successfully created QR Code")
    }
  });