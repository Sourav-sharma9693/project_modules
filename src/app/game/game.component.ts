import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: []
})
export class GameComponent implements OnInit {

  
  games=[{
       gameName : 'Basketball' ,
    imageUrl : 'https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fimg.wennermedia.com%2Farticle-leads-horizontal%2Frs-stephen-curry-lebron-james-ce2b5d33-0a0d-4f06-980d-38b2e6bd096d.jpg&imgrefurl=https%3A%2F%2Fwww.rollingstone.com%2Fsports%2Fnba-arms-race-is-good-for-basketball-w485194&docid=tC-hHhSiYshiWM&tbnid=qrg8iDljOPyWrM%3A&vet=10ahUKEwiV0c6lweHbAhUDHpQKHSFnDHMQMwjCAiguMC4..i&w=700&h=394&bih=662&biw=1366&q=basketball%20pictures&ved=0ahUKEwiV0c6lweHbAhUDHpQKHSFnDHMQMwjCAiguMC4&iact=mrc&uact=8' ,
    players : ['Jordan','Curry','James']
         }       ,
         {    gameName : 'Badminton' ,
             imageUrl : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.badmintonengland.co.uk%2Fimage-cache%2Fimage-20627-848-427-both-both-85-5.jpg&imgrefurl=https%3A%2F%2Fwww.badmintonengland.co.uk%2Fnews.asp%3Fitemid%3D9547%26itemTitle%3DThe%2Btruth%2Babout%2Bselecting%2Ba%2Bbadminton%2Bracket%26section%3D13%26sectionTitle%3DNEWS&docid=jSaEztoETPeeGM&tbnid=qT2YBw4DTJxypM%3A&vet=10ahUKEwi13ZHyweHbAhXEM94KHTE_AIYQMwinAigBMAE..i&w=848&h=428&bih=613&biw=1366&q=badminton&ved=0ahUKEwi13ZHyweHbAhXEM94KHTE_AIYQMwinAigBMAE&iact=mrc&uact=8' ,
             players : ['Sindhu','Saina']
           }   ,
           {
    gameName : 'Cricket' ,
    imageUrl : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.hindustantimes.com%2Frf%2Fimage_size_960x540%2FHT%2Fp2%2F2018%2F01%2F26%2FPictures%2F_f5556b90-0245-11e8-8651-33050e64100a.jpg&imgrefurl=https%3A%2F%2Fwww.hindustantimes.com%2Fcricket%2Ficc-u-19-cricket-world-cup-india-vs-bangladesh-live-cricket-score%2Fstory-jj4Nnk3TPpwk1zpn4UG6aM.html&docid=svrVhBvSbHMR3M&tbnid=T0PxQ8io7AWbrM%3A&vet=10ahUKEwia9JrUweHbAhWQMt4KHRSICpgQMwjWASgEMAQ..i&w=960&h=540&bih=662&biw=1366&q=cricket&ved=0ahUKEwia9JrUweHbAhWQMt4KHRSICpgQMwjWASgEMAQ&iact=mrc&uact=8' ,
    players : ['Dhoni','Kohli']

  }];

    isTrue:Boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
