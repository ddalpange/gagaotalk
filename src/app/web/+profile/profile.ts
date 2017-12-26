import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'ProfilePage',
  segment: 'profile'
})
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  following = false;
  user = {
    name: '김다현',
    profileImage: 'https://pbs.twimg.com/profile_images/764496057094971394/oJHa8CAG.jpg',
    coverImage: 'assets/img/background/background-5.jpg',
    occupation: 'Singer',
    location: 'Seoul, Ko',
    description: '다현이가 짱이야',
    followers: 456,
    following: 1052,
    posts: 35
  };

  posts = [
    {
      postImageUrl: 'assets/img/background/background-2.jpg',
      text: `I believe in being strong when everything seems to be going wrong.
             I believe that happy girls are the prettiest girls.
             I believe that tomorrow is another day and I believe in miracles.`,
      date: 'November 5, 2016',
      likes: 12,
      comments: 4,
      timestamp: '11h ago'
    },
    {
      postImageUrl: 'assets/img/background/background-3.jpg',
      text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
      date: 'October 23, 2016',
      likes: 30,
      comments: 64,
      timestamp: '30d ago'
    },
    {
      postImageUrl: 'assets/img/background/background-4.jpg',
      date: 'June 28, 2016',
      likes: 46,
      text: `Hope is the thing with feathers that perches in the soul
             and sings the tune without the words And never stops at all.`,
      comments: 66,
      timestamp: '4mo ago'
    },
  ];

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello ProfileFour Page');
  }

  follow() {
    this.following = !this.following;
    // this.toastCtrl.create('Follow user clicked');
  }

  imageTapped(post) {
    // this.toastCtrl.create('Post image clicked');
  }

  comment(post) {
    // this.toastCtrl.create('Comments clicked');
  }

  like(post) {
    // this.toastCtrl.create('Like clicked');
  }
}
