import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  foto: string | null = null; // Cambiado de undefined a null para mejor manejo

  constructor() {}

  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl, // Cadena base64 para mostrar fácilmente
        source: CameraSource.Camera // Abre la cámara directamente
      });

      // Guardamos el resultado en nuestra variable
      this.foto = image.dataUrl ?? null; // Usamos nullish coalescing por si acaso
      
    } catch (error) {
      console.error('Error al tomar la foto', error);
      // Opcional: Mostrar un mensaje al usuario
      // await this.showToast('Error al capturar la foto');
    }
  }

  // Método para limpiar la foto (agregado)
  limpiarFoto() {
    this.foto = null;
  }
}