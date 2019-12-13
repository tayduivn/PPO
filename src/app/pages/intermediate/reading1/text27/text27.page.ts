import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text27',
  templateUrl: './text27.page.html',
  styleUrls: ['./text27.page.scss'],
})
export class Text27Page implements OnInit {

  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "There are a lot of rules on what students can and cannot wear. Girls can’t show bra straps, wear shorts that are too short, wear tank tops, nor can they wear body jewelry. Guys can’t show their boxers or wear pants that are too baggy. Both girls and guys cannot wear open-toed shoes, including flip flops. The students are sad, because flip flops are comfortableand easy to wear. Flip flops are also great when it’s really hot. One sunny August, Sebastian decided to break the rules and wear flip flops to school. He felt cool that he was breaking the rules. His friend, Brett, looked at him in horror. “Dude, you’re going to get in trouble!” Brett said. Sebastian laughed. “They won’t even notice!” he said. Sebastian was right. Class after class, teachers failed to notice that Sebastian was wearingopen-toed shoes. After the last class bell rang, Sebastian and his classmates walked out. When he walked outside, Sebastian tripped over a rock. His toes started to bleed and his foot was bruised. He couldn’t even get up! Brett called the nurse over. The situation was too serious for the nurse to handle. The nurse had to call the hospital. Sebastian never wore flip flops again.",
      locale: 'en-US',
      rate: 0.80
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  textToPause() {
    this.tts.speak({
      text: "",
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

  }


  ngOnInit() {
  }

}
