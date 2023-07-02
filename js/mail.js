const msg1 = 
"Joey\n\n"+
". . . Old Messages . . .\n"+
"12/07/2X\n"+
"12:45pm: Joey: thanks for the pen. It’s on ur desk when u come back\n"+
"12:51pm: Wendy: no problem !\n"+

"12/14/2X\n"+
"5:11pm: Wendy: hey Joey, excited for winter break?\n"+
"5:11pm: Joey: yea my family’s going to the mountains\n"+
"5:14pm: Wendy: nice, for what?\n"+
"5:14pm: Joey: skiing\n"+
"5:14pm: Wendy: ooh\n"+

"12/25/2X"+
"11:23pm: Wendy: merry Christmas!"+

"12/26/2X"+
"9:09am: Joey: oh wassup, merry christmas"+
"9:15am: Wendy: how was it?"+
"10:35am: Joey: christmas? it was good"+
"10:37am: Wendy: 😊"+
"10:38am: Wendy: did you do anything fun?"+
"10:39am: Joey: family came over n we had festive chow"+
"10:40am: Wendy: 😯"+
"10:40am: Wendy: you’ll be at the show on the first right?"+
"10:41am: Joey: yeaa, u comin to watch?"+
"10:41am: Wendy: i might be there "+

"12/31/2X"+
"2:41pm: Joey: don’t forget, it starts at 6 tmrw!"+
"2:42pm: Wendy: thanks for reminding me !!"

const msg2 = 
"Madison"+
". . . Old Messages . . ."+
"02/02/2X"+
"1:39pm: Madison: wendy!!! we’re near the bleachers"+
"1:40pm: Wendy: oh ok! i think i see you"+
"4:30pm: Madison: don’t forget, movie night tonight "+
"4:44pm: Wendy: right, thank you for the reminder ^o^//"

const msg3 = 
"Asher"+
". . . Old Messages . . ."+
"03/03/2X"+
"6:50pm: Wendy: hey Asher, I’m going to be waiting in front of the cafe on the corner :o"+
"6:59pm: Asher: hey Wendy!! Thanks so much for the ride again !!"

const msg4 = 
"Vivian"+
". . . Old Messages . . ."+
"04/04/2X"+
"3:24pm: Wendy, you left ur backpack, want me to take it to you? I’ll be passing by your dorm in a bit"+
"3:25pm: Wendy: oh no, did I? I didn’t even realize. that would be great, thank you! ^^"+
"3:25pm: Vivian: k be there in a few"+
"3:34pm: Vivian: i’m outside"

const msg5 = 
"You"+
". . . Old Messages . . ."+
"05/05/2X"+
"5:05pm: Wendy: hey, you’ve taken the math classes right? could i ask you for some help on my math homework? I would really appreciate it!! ^o^"+
"5:06pm: Wendy: are you at the dorm right now?"


$(document).ready(function(){
  console.log('Ready');
})

function displayMessage(messageID){
  console.log("display message" + messageID);

  if(messageID == 1)
  {
  $('#msg').text(msg1);
  }
  if(messageID == 2)
  {
    $('#msg').text(msg2);
  }
  if(messageID == 3)
  {
    $('#msg').text(msg3);
  }
  if(messageID == 4)
  {
    $('#msg').text(msg4);
  }
  if(messageID == 5)
  {
    $('#msg').text(msg5);
  }
}


