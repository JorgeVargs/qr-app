import { Component, Input } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-generateqr',
  standalone: true,
  imports: [QRCodeModule],
  templateUrl: './generateqr.component.html',
  styleUrl: './generateqr.component.scss'
})
export class GenerateqrComponent {
  @Input() qrCode = '';

  public qrCodeDownload:SafeUrl = "";


  onChangeURL(url:SafeUrl){
    this.qrCodeDownload = url;
  }

  showDialog(){
    const element = document.getElementById('dialog');
    element?.classList.remove('hidden');
    
    setTimeout (() => {
      element?.classList.add('opacity-100')
    },100)
  }

  hideDialog(){
    const element = document.getElementById('dialog');
    element?.classList.add('opacity-0');
    element?.classList.remove('opacity-100');
    setTimeout (() => {
     
      element?.classList.add('hidden');
    },100)
  }
}
