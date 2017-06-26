import { Injectable } from '@angular/core';
import { Camera } from '@ionic-native/camera';

@Injectable()
export class CameraProvider {

  constructor(private camera: Camera) {
  }

  getPictureFromCamera() {
    return this.getImage(this.camera.PictureSourceType.CAMERA);
  }

  getPictureFromPhotoLibrary() {
    return this.getImage(this.camera.PictureSourceType.PHOTOLIBRARY);
  }

  // This method takes optional parameters to make it more customizable
  getImage(pictureSourceType, quality = 50, saveToAlbum = true) {
    //screen.msLockOrientation('landscape')
    let options = {
      targetHeight: 600,
      targetWidth: 600,
      quality: quality,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: pictureSourceType,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: saveToAlbum
    };

    return this.camera.getPicture(options).then(imageData => {
      let base64Image = 'data:image/png;base64,' + imageData;
      return base64Image;
    }, error => {
      console.log("CAMERA ERROR -> " + JSON.stringify(error));
      //screen.msUnlockOrientation();
    });
  }
}