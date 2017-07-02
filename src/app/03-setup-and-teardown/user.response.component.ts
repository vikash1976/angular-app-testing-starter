
export class UserResponseComponent { 
  totalLikes = 0; 

  like() { 
    this.totalLikes++;
  }

  disLike() { 
    this.totalLikes--;
  }
}
