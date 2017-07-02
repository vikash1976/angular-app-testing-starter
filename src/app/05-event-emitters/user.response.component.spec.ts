import { UserResponseComponent } from './user.response.component'; 

describe('UserResponsesComponent', () => {
  var component: UserResponseComponent; 

  beforeEach(() => {
    component = new UserResponseComponent();
  });

  it('should raise likeChanged event when upLiked', () => {
    //Arrange
    let totalLikes = null;
    component.likeChanged.subscribe(tl => totalLikes = tl)

    //Act
    component.upLike();

    //Assert
    expect(totalLikes).toBe(1);
  });
});