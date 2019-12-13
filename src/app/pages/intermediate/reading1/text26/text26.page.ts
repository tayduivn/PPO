import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text26',
  templateUrl: './text26.page.html',
  styleUrls: ['./text26.page.scss'],
})
export class Text26Page implements OnInit {

  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "Jill and Dan have been married for ten years. Jill loves Dan,but she hates his snoring. It is so loud and disgusting.Oftentimes, his snoring wakes her up, and she can’t go back to sleep. One night, Dan’s snoring was so loud, Jill decided to sleep on the couch. She slept well on the couch. The next morning, Jill’s son, Timmy, saw her sleeping on the couch. He thought that she had a fight with his dad. “Mommy,are you and dad getting a divorce?” Timmy asked. Jill laughedand hugged Timmy. “No Timmy, your dad just snores a lot!”Timmy asked if she snored. Jill wasn’t sure. Later Jill asked Dan if she snored. “Yeah, it sounds like a cat meowing,” Dad said. “Is that a bad thing?” Jill asked. “Well…it’s kind of annoying, but I deal with it,” Dan said. Jill was embarrassed that she snored. She went to the doctorto see if she could do anything about it. The doctor gave her a few tips but said that there was no medicine or cure for snoring.Jill went back home disappointed. “All this time I thought you were the annoying snorer, but I guess I am, too,” Jill said. “Hey,that’s what makes us perfect together!” Dan said.",
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
