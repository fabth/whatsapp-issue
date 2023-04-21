import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Share } from '@capacitor/share';
import { PDFGenerator, PDFGeneratorOptions } from '@awesome-cordova-plugins/pdf-generator';
import { Directory, Filesystem } from '@capacitor/filesystem';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {
  constructor() {}

  async generatePDF(): Promise<string | void> {
    const html = `
    <html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AAA - Comprobante de pago</title>
    </head>
    <body>
    <header>
        <h2>Tarjeta</h2>
          <h1>Habitualista</h1>
        </header>
        <section>
            <table>
                <tr>
                    <td>Comprobante:</td>
                    <td>515</td>
                </tr>
                <tr>
                    <td>Registro:</td>
                    <td>55</td>
                </tr>
                <tr>
                    <td>AAA:</td>
                    <td>55</td>
                </tr>
                <tr>
                    <td>Tarjeta:</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>Monto:</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>Fecha:</td>
                    <td>ads</td>
                </tr>
                <tr>
                    <td>Motivo:</td>
                    <td>sd</td>
                </tr>
                <tr>
                    <td>Referencia:</td>
                    <td>dsad</td>
                </tr>
            </table>
        </section>
    </body>
    <style>
    body {
        margin: 0;
        width: 100%;
        height: 100%;
        background: #f4f5f8;
        padding: 2rem 1rem;
        box-sizing: border-box;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }

      body header {
          height: 10%;
          background: #0e80a4;
          color: #f4f5f8;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 8px 8px 0 0;
      }

      body header h1 {
          margin: 0;
          text-transform: uppercase;
          font-size: 1.4rem;
      }

      body header h2 {
          margin: 0;
          font-size: 1.3rem;
      }

      body section {
          height: 90%;
          display: grid;
          place-items: center;
          grid-template-rows: 83% 17%;
          border: 1px solid #0e80a4;
          border-radius: 0 0 8px 8px;
      }

      body section .info {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
      }

      body section .info p {
          text-align: center;
      }

      body section table {
          display: grid;
          place-items: center;
          width: 100%;
          height: 100%;
          max-width: 100%;
          align-self: center;
          overflow: hidden;
      }

      body section table tbody {
          width: 100%;
      }

      body section table tr {
          display: grid;
          grid-template-columns: 40% 60%;
          min-height: 3rem;
          max-height: 4rem;
          font-size: 1.2rem;
          border-bottom: 1px solid #CCC;
          margin: 0.5rem 5% 0 5%;
          overflow: hidden;
      }

      body section table tr td:first-child {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          font-weight: bold;
          color: #0e80a4;
      }

      body section table tbody tr td:last-child {
          color: #6d6d6d;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
      }
    </style>
    </html>`;

    const options: PDFGeneratorOptions = {
      documentSize: 'A4',
      type: 'base64',
      fileName: 'Comprobante de pago',
    };

    return await PDFGenerator.fromData(html, options)
      .then((base64String) => {
        return base64String;
      })
      .catch((err) => console.log(err));
  }

  async share() {
    const paymentPDF = await this.generatePDF();
    console.log("paymentPDF", paymentPDF);
    if(paymentPDF) {
      const filePDF: any =
      (await Filesystem.writeFile({
        path: `PDF-comprobante-12.pdf`,
        data: paymentPDF,
        directory: Directory.Cache,
      }));
    console.log("filePDF", filePDF);
    if (filePDF.uri) {
      await Share.canShare()
        .then(async (userCanShare) => {
          if (userCanShare.value) {
            await Share.share({
              title: 'A',
              text: `Comprobante de pago Nº`,
              url: filePDF.uri,
              dialogTitle: 'Compartir con',
            }).catch((err) => {
              console.log("ERROR EN FUNCTION SHARE (plugin): ", err)
            });
          }
        })
        .catch((err) => {
          console.log("ERROR EN FUNCTION CAN SHARE (plugin): ", err)
 
        });
      }
    }
  }
}
