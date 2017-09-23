
import { UserResponseComponent } from './user.response.component'; 

describe('UserResponseComponent', () => {
  let userRespComp: UserResponseComponent;
  beforeEach(() => {
    //Arrange
    userRespComp = new UserResponseComponent();
  })
  it('should increment the totalLikes counter by 1 when liked', () => {
    //Act
    userRespComp.like()
    //Assert
    expect(userRespComp.totalLikes).toBe(1);
  });
  it('should decrement the totalLikes counter by 1 when disliked', () => {
    //Act
    userRespComp.disLike()
    //Assert
    expect(userRespComp.totalLikes).toBe(-1);
  });
});