
import { EventEmitter } from '@angular/core'; 

export class UserResponseComponent { 
  totalLikes = 0; 
  likeChanged = new EventEmitter();

  upLike() { 
    this.totalLikes++;
    this.likeChanged.emit(this.totalLikes);
  }
}