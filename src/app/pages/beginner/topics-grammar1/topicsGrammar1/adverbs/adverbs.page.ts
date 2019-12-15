import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from 'src/app/pages/language-popover/language-popover.page';
@Component({
  selector: 'app-adverbs',
  templateUrl: './adverbs.page.html',
  styleUrls: ['./adverbs.page.scss'],
})
export class AdverbsPage implements OnInit {

  constructor(private popoverCtrl: PopoverController, private alertCtrl: AlertController, private translate: TranslateService) { }

  ngOnInit() {
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

}