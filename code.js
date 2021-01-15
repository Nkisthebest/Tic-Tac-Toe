var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1c9a7cd8-be26-49bc-bccb-54b3b372d737","4ae1e03b-93a9-4da0-b100-12e71e7c809e","79eded85-f43d-43eb-a449-484afbc48187","73492969-75cf-4795-b339-86d5d8c5cb45","3a59148c-150f-4190-80c0-1fc379aa7b49"],"propsByKey":{"1c9a7cd8-be26-49bc-bccb-54b3b372d737":{"name":"X","sourceUrl":null,"frameSize":{"x":480,"y":478},"frameCount":1,"looping":true,"frameDelay":12,"version":"cXpgyZOK7iy1ektbRuZ_oxosPA_j13DP","loadedFromSource":true,"saved":true,"sourceSize":{"x":480,"y":478},"rootRelativePath":"assets/1c9a7cd8-be26-49bc-bccb-54b3b372d737.png"},"4ae1e03b-93a9-4da0-b100-12e71e7c809e":{"name":"O","sourceUrl":null,"frameSize":{"x":130,"y":132},"frameCount":1,"looping":true,"frameDelay":12,"version":"Gn5cORdRdTv9bA3XZJl2ckQ3w6i.rRcA","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":132},"rootRelativePath":"assets/4ae1e03b-93a9-4da0-b100-12e71e7c809e.png"},"79eded85-f43d-43eb-a449-484afbc48187":{"name":"xt","sourceUrl":null,"frameSize":{"x":179,"y":210},"frameCount":1,"looping":true,"frameDelay":12,"version":"j10P29gIhnSnN6bs2GhRFFu..ivxDVBf","loadedFromSource":true,"saved":true,"sourceSize":{"x":179,"y":210},"rootRelativePath":"assets/79eded85-f43d-43eb-a449-484afbc48187.png"},"73492969-75cf-4795-b339-86d5d8c5cb45":{"name":"ot","sourceUrl":null,"frameSize":{"x":187,"y":209},"frameCount":1,"looping":true,"frameDelay":12,"version":"172YvxUtU2W8e8cJzpwBFsMNfmXpUrUt","loadedFromSource":true,"saved":true,"sourceSize":{"x":187,"y":209},"rootRelativePath":"assets/73492969-75cf-4795-b339-86d5d8c5cb45.png"},"3a59148c-150f-4190-80c0-1fc379aa7b49":{"name":"player","sourceUrl":null,"frameSize":{"x":300,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"0OcdZGBopTemyYO5rCZsMYXlmYGR9pYN","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":48},"rootRelativePath":"assets/3a59148c-150f-4190-80c0-1fc379aa7b49.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var boundary1=createSprite(140,230,10,300);
boundary1.shapeColor=rgb(0, 153, 153);
var boundary2=createSprite(260,230,10,300);
boundary2.shapeColor=rgb(0, 153, 153);
var boundary3=createSprite(200,170,300,10);
boundary3.shapeColor=rgb(0, 153, 153);
var boundary4=createSprite(200,290,300,10);
boundary4.shapeColor=rgb(0, 153, 153);
var playerimage=createSprite(150,30,10,10);
var top1=createSprite(300,30,10,10);
var top2=createSprite(300,30,10,10);
var playertype="o";
var box1=createSprite(90,120,100,100);
box1.visible=0;
var box1state="empty";
var box2=createSprite(200,120,100,100);
box2.visible=0;
var box2state="empty";
var box3=createSprite(310,120,100,100);
box3.visible=0;
var box3state="empty";
var box4=createSprite(90,230,100,100);
box4.visible=0;
var box4state="empty";
var box5=createSprite(200,230,100,100);
box5.visible=0;
var box5state="empty";
var box6=createSprite(310,230,100,100);
box6.visible=0;
var box6state="empty";
var box7=createSprite(90,340,100,100);
box7.visible=0;
var box7state="empty";
var box8=createSprite(200,340,100,100);
box8.visible=0;
var box8state="empty";
var box9=createSprite(310,340,100,100);
box9.visible=0;
var box9state="empty";
function draw(){
  background(rgb(77, 255, 255));
  playerimage.setAnimation("player");
  playerimage.scale=0.7;
  drawSprites();
  if(box1state=="xfull"&&box2state=="xfull"&&box3state=="xfull"){
      var win1=createSprite(200,115,300,10);
      win1.shapeColor="black";
      playertype="win";
      playerimage.destroy();
      top1.destroy();
      top2.destroy();
      textSize(50);
      fill("red");
      text("'X' WINS",100,50);
    }
  if(box4state=="xfull"&&box5state=="xfull"&&box6state=="xfull"){
      var win1=createSprite(200,230,300,10);
      win1.shapeColor="black";
      playertype="win";
      playerimage.destroy();
      top1.destroy();
      top2.destroy();
      textSize(50);
      fill("red");
      text("'X' WINS",100,50);
    }
  if(box7state=="xfull"&&box8state=="xfull"&&box9state=="xfull"){
      var win1=createSprite(200,340,300,10);
      win1.shapeColor="black";
      playertype="win";
      playerimage.destroy();
      top1.destroy();
      top2.destroy();
      textSize(50);
      fill("red");
      text("'X' WINS",100,50);
    }
  if(box1state=="xfull"&&box4state=="xfull"&&box7state=="xfull"){
      var win1=createSprite(90,230,10,300);
      win1.shapeColor="black";
      playertype="win";
      playerimage.destroy();
      top1.destroy();
      top2.destroy();
      textSize(50);
      fill("red");
      text("'X' WINS",100,50);
    }
  if(box2state=="xfull"&&box5state=="xfull"&&box8state=="xfull"){
      var win1=createSprite(200,230,10,300);
      win1.shapeColor="black";
      playertype="win";
      playerimage.destroy();
      top1.destroy();
      top2.destroy();
      textSize(50);
      fill("red");
      text("'X' WINS",100,50);
    }
  if(box3state=="xfull"&&box6state=="xfull"&&box9state=="xfull"){
      var win1=createSprite(310,230,10,300);
      win1.shapeColor="black";
      playertype="win";
      playerimage.destroy();
      top1.destroy();
      top2.destroy();
      textSize(50);
      fill("red");
      text("'X' WINS",100,50);
    }
  if(box1state=="xfull"&&box5state=="xfull"&&box9state=="xfull"){
      var win1=createSprite(200,230,10,350);
      win1.shapeColor="black";
      win1.rotation=-45;
      playertype="win";
      playerimage.destroy();
      top1.destroy();
      top2.destroy();
      textSize(50);
      fill("red");
      text("'X' WINS",100,50);
    }
  if(box3state=="xfull"&&box5state=="xfull"&&box7state=="xfull"){
      var win1=createSprite(200,230,10,350);
      win1.shapeColor="black";
      win1.rotation=45;
      playertype="win";
      playerimage.destroy();
      top1.destroy();
      top2.destroy();
      textSize(50);
      fill("red");
      text("'X' WINS",100,50);
    }
  if(box1state=="ofull"&&box2state=="ofull"&&box3state=="ofull"){
      var win1=createSprite(200,115,300,10);
      win1.shapeColor="black";
      playertype="win";
      playerimage.destroy();
      top1.destroy();
      top2.destroy();
      textSize(50);
      fill("red");
      text("'O' WINS",100,50);
    }
  if(box4state=="ofull"&&box5state=="ofull"&&box6state=="ofull"){
      var win1=createSprite(200,230,300,10);
      win1.shapeColor="black";
      playertype="win";
      playerimage.destroy();
      top1.destroy();
      top2.destroy();
      textSize(50);
      fill("red");
      text("'O' WINS",100,50);
    }
  if(box7state=="ofull"&&box8state=="ofull"&&box9state=="ofull"){
      var win1=createSprite(200,340,300,10);
      win1.shapeColor="black";
      playertype="win";
      playerimage.destroy();
      top1.destroy();
      top2.destroy();
      textSize(50);
      fill("red");
      text("'O' WINS",100,50);
    }
  if(box1state=="ofull"&&box4state=="ofull"&&box7state=="ofull"){
      var win1=createSprite(90,230,10,300);
      win1.shapeColor="black";
      playertype="win";
      playerimage.destroy();
      top1.destroy();
      top2.destroy();
      textSize(50);
      fill("red");
      text("'O' WINS",100,50);
    }
  if(box2state=="ofull"&&box5state=="ofull"&&box8state=="ofull"){
      var win1=createSprite(200,230,10,300);
      win1.shapeColor="black";
      playertype="win";
      playerimage.destroy();
      top1.destroy();
      top2.destroy();
      textSize(50);
      fill("red");
      text("'O' WINS",100,50);
    }
  if(box3state=="ofull"&&box6state=="ofull"&&box9state=="ofull"){
      var win1=createSprite(310,230,10,300);
      win1.shapeColor="black";
      playertype="win";
      playerimage.destroy();
      top1.destroy();
      top2.destroy();
      textSize(50);
      fill("red");
      text("'O' WINS",100,50);
    }
  if(box1state=="ofull"&&box5state=="ofull"&&box9state=="ofull"){
      var win1=createSprite(200,230,10,350);
      win1.shapeColor="black";
      win1.rotation=-45;
      playertype="win";
      playerimage.destroy();
      top1.destroy();
      top2.destroy();
      textSize(50);
      fill("red");
      text("'O' WINS",100,50);
    }
  if(box3state=="ofull"&&box5state=="ofull"&&box7state=="ofull"){
      var win1=createSprite(200,230,10,350);
      win1.shapeColor="black";
      win1.rotation=45;
      playertype="win";
      playerimage.destroy();
      top1.destroy();
      top2.destroy();
      textSize(50);
      fill("red");
      text("'O' WINS",100,50);
    }
  if(playertype=="o"){
    top2.visible=0;
    top1.visible=1;
    top1.setAnimation("ot");
    top1.scale=0.2;
    if(box1state=="empty"&&mousePressedOver(box1)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box1state="ofull";
      box1.visible=1;
      box1.setAnimation("O");
      box1.scale=0.7;
      playertype="x";
    }
    if(box2state=="empty"&&mousePressedOver(box2)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box2state="ofull";
      box2.visible=1;
      box2.setAnimation("O");
      box2.scale=0.7;
      playertype="x";
    }
    if(box3state=="empty"&&mousePressedOver(box3)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box3state="ofull";
      box3.visible=1;
      box3.setAnimation("O");
      box3.scale=0.7;
      playertype="x";
    }
    if(box4state=="empty"&&mousePressedOver(box4)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box4state="ofull";
      box4.visible=1;
      box4.setAnimation("O");
      box4.scale=0.7;
      playertype="x";
    }
    if(box5state=="empty"&&mousePressedOver(box5)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box5state="ofull";
      box5.visible=1;
      box5.setAnimation("O");
      box5.scale=0.7;
      playertype="x";
    }
    if(box6state=="empty"&&mousePressedOver(box6)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box6state="ofull";
      box6.visible=1;
      box6.setAnimation("O");
      box6.scale=0.7;
      playertype="x";
    }
    if(box7state=="empty"&&mousePressedOver(box7)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box7state="ofull";
      box7.visible=1;
      box7.setAnimation("O");
      box7.scale=0.7;
      playertype="x";
    }
    if(box8state=="empty"&&mousePressedOver(box8)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box8state="ofull";
      box8.visible=1;
      box8.setAnimation("O");
      box8.scale=0.7;
      playertype="x";
    }
    if(box9state=="empty"&&mousePressedOver(box9)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box9state="ofull";
      box9.visible=1;
      box9.setAnimation("O");
      box9.scale=0.7;
      playertype="x";
    }
  }
  if(playertype=="x"){
    top1.visible=0;
    top2.visible=1;
    top2.setAnimation("xt");
    top2.scale=0.2;
    if(box1state=="empty"&&mousePressedOver(box1)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box1state="xfull";
      box1.visible=1;
      box1.setAnimation("X");
      box1.scale=0.2;
      playertype="o";
    }
    if(box2state=="empty"&&mousePressedOver(box2)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box2state="xfull";
      box2.visible=1;
      box2.setAnimation("X");
      box2.scale=0.2;
      playertype="o";
    }
    if(box3state=="empty"&&mousePressedOver(box3)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box3state="xfull";
      box3.visible=1;
      box3.setAnimation("X");
      box3.scale=0.2;
      playertype="o";
    }
    if(box4state=="empty"&&mousePressedOver(box4)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box4state="xfull";
      box4.visible=1;
      box4.setAnimation("X");
      box4.scale=0.2;
      playertype="o";
    }
    if(box5state=="empty"&&mousePressedOver(box5)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box5state="xfull";
      box5.visible=1;
      box5.setAnimation("X");
      box5.scale=0.2;
      playertype="o";
    }
    if(box6state=="empty"&&mousePressedOver(box6)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box6state="xfull";
      box6.visible=1;
      box6.setAnimation("X");
      box6.scale=0.2;
      playertype="o";
    }
    if(box7state=="empty"&&mousePressedOver(box7)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box7state="xfull";
      box7.visible=1;
      box7.setAnimation("X");
      box7.scale=0.2;
      playertype="o";
    }
    if(box8state=="empty"&&mousePressedOver(box8)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box8state="xfull";
      box8.visible=1;
      box8.setAnimation("X");
      box8.scale=0.2;
      playertype="o";
    }
    if(box9state=="empty"&&mousePressedOver(box9)){
      playSound("assets/category_accent/puzzle_game_accent_silly_02.mp3");
      box9state="xfull";
      box9.visible=1;
      box9.setAnimation("X");
      box9.scale=0.2;
      playertype="o";
    }
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
