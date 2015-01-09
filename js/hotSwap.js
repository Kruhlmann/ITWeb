var boxContent = ["
			<b>Trolund</b> er gr8", 
			"<b>Hassan</b> er gr8", 
			"<b>Allah</b> er gr8"
				];

function hotSwapBox(boxID, contentId){
    document.getElementById("box"+boxId).innerHTML = boxContent[contentId];
}