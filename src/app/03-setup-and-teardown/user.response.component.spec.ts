import { UserResponseComponent } from './user.response.component'; 

describe('UserResponseComponent', () => {
  let userRespComp = null;
  beforeEach(() => {
    //Arrange
    userRespComp = new UserResponseComponent();
  })
  it('should increment the totlaLikes counter by 1 when liked', () => {
    //Act
    userRespComp.like()
    //Assert
    expect(userRespComp.totalLikes).toBe(1);
  });
  it('should increment the totlaLikes counter by 1 when disliked', () => {
    //Act
    userRespComp.disLike()
    //Assert
    expect(userRespComp.totalLikes).toBe(-1);
  });
});