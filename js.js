

<!--
var radioNum      = 5                        //Number of question in the test
var CorrectAnswer = "DBDAC"                  //The correct answers
//=============================
var CompareAnswer = "ABCD"
var radioTax      = 100 / radioNum
var CheckPoint    = new Array(radioNum)
for (i=0; i<radioNum; i++)
  CheckPoint[i]  = i*4 + CompareAnswer.indexOf(CorrectAnswer.charAt(i))
function CheckSum ()
  {
  var YourScore = 0
  for (i=0; i<radioNum; i++) {
    if (document.ANSWER.elements[CheckPoint[i]].checked == true) {
      YourScore += radioTax
      }
    }
  MyPress = "You scored " + YourScore + " points in this test.\n"
  if      (YourScore == 100) { MyPress += "Way to go!!" }
  else if (YourScore >= 80)  { MyPress += "Pretty good!" }
  else if (YourScore >= 60)  { MyPress += "Come on, you can do better than that!" }
  else                       { MyPress += "You need to study harder." }
  alert(MyPress)
  return false
  }


<FORM NAME="ANSWER" onSubmit="return CheckSum()">
1. If I have 3 apples, and I ate 2 of them, how many apples do I have left?
<BR>
<INPUT NAME="Q1" TYPE=RADIO>A Four apples
<BR>
<INPUT NAME="Q1" TYPE=RADIO>B Three apples
<BR>
<INPUT NAME="Q1" TYPE=RADIO>C Two apples
<BR>
<INPUT NAME="Q1" TYPE=RADIO>D One apple
<HR>
2. Ice will turn into water if the temperature is higher than __<sup>o</sup>C?
<BR>
<INPUT NAME="Q2" TYPE=RADIO>A 50
<BR>
<INPUT NAME="Q2" TYPE=RADIO>B 0
<BR>
<INPUT NAME="Q2" TYPE=RADIO>C 100
<BR>
<INPUT NAME="Q2" TYPE=RADIO>D 32
<HR>
3. Which of the following is correct?
<BR>
<INPUT NAME="Q3" TYPE=RADIO>A The Sun is surrounding the Earth
<BR>
<INPUT NAME="Q3" TYPE=RADIO>B The Earth is the center of the Solar System
<BR>
<INPUT NAME="Q3" TYPE=RADIO>C The Earth is surrounding the Moon
<BR>
<INPUT NAME="Q3" TYPE=RADIO>D The Earth is surrounding the Sun
<HR>
4. Which of the following is NOT a part of speech?<
BR>
<INPUT NAME="Q4" TYPE=RADIO>A Bold
<BR>
<INPUT NAME="Q4" TYPE=RADIO>B Verb
<BR>
<INPUT NAME="Q4" TYPE=RADIO>C Preposition
<BR>
<INPUT NAME="Q4" TYPE=RADIO>D Noun
<HR>
5. Who is the first president of United States?
<BR>
<INPUT NAME="Q5" TYPE=RADIO>A Bill Clinton
<BR>
<INPUT NAME="Q5" TYPE=RADIO>B Abraham Lincoln
<BR>
<INPUT NAME="Q5" TYPE=RADIO>C George Washington
<BR>
<INPUT NAME="Q5" TYPE=RADIO>D Thomas Jefferson
<HR>
<CENTER>
<INPUT TYPE=SUBMIT VALUE="Turn It In">
<INPUT TYPE=RESET VALUE="Erase All Answers">
