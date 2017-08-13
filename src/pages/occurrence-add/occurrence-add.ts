import { Component } from '@angular/core';
import { IonicPage, 
  NavController,
  NavParams, 
  Platform, 
  ActionSheetController, 
  LoadingController } from 'ionic-angular';
import { OccurrenceModel } from './../../models/occurrence';
import { CameraProvider } from './../../providers/camera/camera.provider';
import { RegulationProvider } from './../../providers/regulation/regulation';

/**
 * Generated class for the OccurrenceAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-occurrence-add',
  templateUrl: 'occurrence-add.html',
  providers: [RegulationProvider],
})
export class OccurrenceAddPage {
  public occurrenceList: Array<OccurrenceModel>;
  public occurrenceItem: OccurrenceModel;
  public title: string;
  public saveOrEdit: boolean;
  public index: number;
  public inspection_id: string;
  public edit: boolean;
  
  public placeholder = 'assets/img/placeholder.png';
  public chosenPicture: any;

  public regulation: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public actionsheetCtrl: ActionSheetController,
    public cameraProvider: CameraProvider, public platform: Platform, public loadingCtrl: LoadingController, public regulationProvider: RegulationProvider) {
    this.saveOrEdit = false;
    this.edit = false;

    this.occurrenceList = JSON.parse(localStorage.getItem("occurrence"));
    if(!this.occurrenceList) {
      this.occurrenceList = [];
    }

    this.index = navParams.get("index");
    this.inspection_id = navParams.get("inspection_id");
    this.edit = navParams.get("edit");
    
    console.log(this.edit);
    if(this.index != undefined) {
      this.title = "Editar";
      this.occurrenceItem = this.occurrenceList[this.index];
      this.saveOrEdit = true;
      if(this.occurrenceItem.photo){
        this.chosenPicture = this.occurrenceItem.photo;
        this.placeholder = this.occurrenceItem.photo;
      }
    }else{
      this.title = "Adicionar";
      this.occurrenceItem = new OccurrenceModel;
    }
    if(!this.edit){
      this.title = "";
    }
  }

  ionViewDidLoad(){
  }

  save(){
    if (this.occurrenceItem.description){
      if(this.saveOrEdit){
        this.occurrenceItem.updated_at = Date.now().toString();
        if(this.chosenPicture){
          this.occurrenceItem.photo = this.chosenPicture;
        }else{
          this.occurrenceItem.photo
        }
        this.occurrenceList[this.index] = this.occurrenceItem;
      }else{
        this.occurrenceItem.inspection_id = this.inspection_id;
        if(this.chosenPicture){
          this.occurrenceItem.photo = this.chosenPicture;
        }else{
          this.occurrenceItem.photo = ""
        }
        this.occurrenceList.push(this.occurrenceItem);
      }
      localStorage.setItem("occurrence", JSON.stringify(this.occurrenceList));
      this.navCtrl.pop();
    }
  }

  changePicture() {

    if(!this.edit){
      return;
    }

    let actionsheet = this.actionsheetCtrl.create({
      title: 'upload picture',
      buttons: [
        {
          text: 'camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.getPicture();
          }
        },
        {
          text: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'destructive',
          handler: () => {
            console.log('the user has cancelled the interaction.');
          }
        }
      ]
    });
    return actionsheet.present();
  }

  takePicture() {
    let loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromCamera().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

  getPicture() {
    let loading = this.loadingCtrl.create();

    loading.present();
    return this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
      if (picture) {
        this.chosenPicture = picture;
      }
      loading.dismiss();
    }, error => {
      alert(error);
    });
  }

}
