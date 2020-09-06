'use strict';

describe('Scorecard', function(){

  var scorecard;
  var frame;
  var finalframe;

  beforeEach(function(){
    scorecard = new Scorecard();
    frame = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeOff']);
  });

  it('starts with 1 frame object', function() {
    expect(scorecard.frames.length).toBe(1);
    expect(scorecard.frames[0]).toBeInstanceOf(Frame);
  });

  describe('Play', function() {
    it('adds new frame object if previous frame complete', function() {
      scorecard.play(10);
      scorecard.play(5);
      expect(scorecard.frames.length).toBe(2);
    });

    it('updates the score', function() {
      scorecard.play(5);
      expect(scorecard.getScore()).toEqual(5);
    });
  });
});
