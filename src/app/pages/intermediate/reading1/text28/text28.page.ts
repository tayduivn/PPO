import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text28',
  templateUrl: './text28.page.html',
  styleUrls: ['./text28.page.scss'],
})
export class Text28Page implements OnInit {

  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "Daniel was addicted to coffee. He drank two cups in the morning and three in the afternoon. He can’t think or do anything without coffee. His mom wanted him to stop drinking coffee. She decided to throw out all the coffee and give him milk. Daniel was so mad. “Mom, I can’t go to school without coffee,” Daniel said. “This is for your own good,” his mom said. Daniel went to school. He was cranky and tired without coffee. He didn’t want to talk to his friends or pay attention in class. His teachers kept waking him up. They told him to go to the nurse’s office. Daniel went to the nurse and asked for coffee. She laughed at him. She said that he needed to drinkless coffee, but not stop completely. She told him to drink 4 cups a day, then 3, and eventually he won’t need coffee. Daniel told his mom what the nurse said. “But that means I have to buy coffee again!” Daniel laughed at his mom. Daniel and his mom went to the market to buy some good coffee.Daniel did what the nurse told him to do. It was much easier to drink less coffee than none at all.",
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
