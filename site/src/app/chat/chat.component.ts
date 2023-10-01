import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  language:string = 'eng';
  translated:any[]=[];

  changeLang(i:string){
    if (i=='xh') this.language = 'xh';
    if (i=='zu') this.language = 'zu';
    if (i=='st') this.language = 'st';
  }
  async translate(text:string){
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': '1c2431d8admsh6550ef1c3f078c5p10e535jsnf31b25f35ddc',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    body: new URLSearchParams({
      source: 'en',
      target: this.language,
      q: text,
    })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      this.translated.push(result.data.translations[0].translatedText);

      console.log(this.translated);
    } catch (error) {
      console.error(error);
    }
  };

}
