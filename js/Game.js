class Game{
    constructor(){}

    getState() {

        var gameStateRef = database.ref('gameState');

        gameStateRef.on("value", function (data) {

            gameState = data.val();

        })

    }

    update(state) {

        database.ref('/').update({

            gameState: state

        });

    }

    async start() {

            if (gameState === 0) {

                player = new Player();

                var playerCountRef = await database.ref('playerCount').once("value");

                if (playerCountRef.exists()) {

                    playerCount = playerCountRef.val();

                    player.getCount();
                   
                }

                form.display();

              }

              

        }


        play(){
            allPlayers=[Bow1,Bow2];
            allArrows=[Arrow1,Arrow2];
            allStrings=[string1,string2];
            
            form.hide();

            Player.getPlayerInfo();

            var ScoreTextY=20;
            var index = 1;
            background("white");

              Bow1.push(new Bow(100,height/2,100,350));
              Bow2.push(new Bow(700,height/2,100,350));

              for (var Fb1 = 0; Fb1 < Bow1.length; Fb1++) {

                Bow1[Fb1].display();  

              }
              for (var Fb2 = 0; Fb2 < Bow2.length; Fb2++) {

                Bow2[Fb2].display();  

              }

              Arrow1=new Arrow(120,300,100,30);
              Arrow2=new Arrow(120,900,100,30);

              bottomGroung=new Ground(width/2,height,width,20);
              wall=new Ground(width/2,height/2,20,height);

              /*string1=new SlingShot(Arrow1,Bow1);
              string2=new SlingShot(Arrow2,Bow2);*/

              Arrow1.display();
              Arrow2.display();

              /*string1.display();
              string2.display();*/

              bottomGroung.display();
              wall.display();

            var randomPosForLoon=Math.round(random(150,500))

            if(frameCount%500===0){

               redloon.push(new redBalloon(randomPosForLoon,0,50));
               redloonOp.push(new redBalloon(randomPosForLoon+300,0,50));

            }
            if(frameCount%750===0){
                
                yellowloon.push(new yellowBalloon(randomPosForLoon,0,50));
                yellowloonOp.push(new yellowBalloon(randomPosForLoon+300,0,50));

            }
            if(frameCount%1000===0){
                
                turquoiseloon.push(new turquoiseBalloon(randomPosForLoon,0,50));
                turquoiseloonOp.push(new turquoiseBalloon(randomPosForLoon+300,0,50));

            }
            if(frameCount%1250===0){
                
                blueloon.push(new blueBalloon(randomPosForLoon,0,50));
                blueloonOp.push(new blueBalloon(randomPosForLoon+300,0,50));

            }
            if(frameCount%2000===0){
                
                greenloon.push(new greenBalloon(randomPosForLoon,0,50));
                greenloonOp.push(new greenBalloon(randomPosForLoon+300,0,50));

            }         
            if(frameCount%2250===0){
                
                purpleloon.push(new purpleBalloon(randomPosForLoon,0,50));
                purpleloonOp.push(new purpleBalloon(randomPosForLoon+300,0,50));

            }   
            if(frameCount%3000===0){
                
                goldenloon.push(new goldenBalloon(randomPosForLoon,0,50));
                goldenloonOp.push(new goldenBalloon(randomPosForLoon+300,0,50));

            }
            if(frameCount%2000===0){
                
                evilloon.push(new blackBalloon(randomPosForLoon,0,50));
                evilloonOp.push(new blackBalloon(randomPosForLoon+300,0,50));

            }

            console.log(frameCount);
            
              for (var b = 0; b < redloon.length; b++) {

                redloon[b].display();   
                redloonOp[b].display();   

              }
              for (var r = 0; r < redloonOp.length; r++) {
                redloonOp[r].display();   
              }
              for (var y = 0; y < yellowloon.length; y++) {
                yellowloon[y].display();   
              }
              for (var y = 0; y < yellowloonOp.length; y++) {
                yellowloonOp[y].display();   
              }
              for (var t = 0; t < turquoiseloon.length; t++) {
                turquoiseloon[t].display();   
              }
              for (var t = 0; t < turquoiseloonOp.length; t++) {
                turquoiseloonOp[t].display();   
              }
              for (var b = 0; b < blueloon.length; b++) {
                blueloon[b].display();   
              }
              for (var b = 0; b < blueloonOp.length; b++) {
                blueloonOp[b].display();   
              }
              for (var g = 0; g < greenloon.length; g++) {
                greenloon[g].display();   
              }
              for (var g = 0; g < greenloonOp.length; g++) {
                greenloonOp[g].display();   
              }
              for (var p = 0; p < purpleloon.length; p++) {
                purpleloon[p].display();   
              }
              for (var p = 0; p < purpleloonOp.length; p++) {
                purpleloonOp[p].display();   
              }
              for (var go = 0; go < goldenloon.length; go++) {
                goldenloon[go].display();   
              }
              for (var go = 0; go < goldenloonOp.length; go++) {
                goldenloonOp[go].display();   
              }
              for (var e = 0; e < evilloon.length; e++) {
                evilloon[e].display();   
              }
              for (var e = 0; e < evilloonOp.length; e++) {
                evilloonOp[e].display();   
              }

             for(var plr in allPlayers){

                index+=1;
                ScoreTextY+=20;

            }





        }

        end(){
           //write code..

           

         }

    }