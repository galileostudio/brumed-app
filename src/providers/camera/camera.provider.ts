import { Injectable } from '@angular/core';
import { Camera } from '@ionic-native/camera';

@Injectable()
export class CameraProvider {

  constructor(private camera: Camera) {
  }

  getPictureFromCamera() {
    return this.getImage(this.camera.PictureSourceType.CAMERA, true);
  }

  getPictureFromPhotoLibrary() {
    return this.getImage(this.camera.PictureSourceType.PHOTOLIBRARY);
  }

  // This method takes optional parameters to make it more customizable
  getImage(pictureSourceType, crop = true, quality = 50, allowEdit = false, saveToAlbum = true) {
    let options = {
      quality: quality,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: pictureSourceType,
      allowEdit: allowEdit,
      encodingType: this.camera.EncodingType.PNG,
      saveToPhotoAlbum: saveToAlbum
    };

    // If set to crop, restricts the image to a square of 600 by 600
    if (crop) {
      options["targetWidth"] = 600;
      options["targetHeight"] = 600;
    }

    return this.camera.getPicture(options).then(imageData => {
      let base64Image = 'data:image/png;base64,' + imageData;
      return base64Image;
    }, error => {
      console.log("CAMERA ERROR -> " + JSON.stringify(error));
    });
  }
}
