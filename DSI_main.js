
function checkQ1() {

	if (document.question1.question.value == "a") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No! <br><br> Not correct.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "img/shock.jpg";
		document.getElementById("afterQ1_picture").innerHTML = "The author proposes an analogy that in a class with a majority of well-behaved children and a few troublemakers his job (dynamic spectral imaging) consists of identifying the well-behaved children. <br><br> No electric shocks in children though<br><br> Try again!";
}

	if (document.question1.question.value == "b") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Not correct.<br><br>";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "img/classroom.png";
		document.getElementById("afterQ1_picture").innerHTML = "The author proposes an analogy that in a class with a majority of well-behaved children and a few troublemakers his job (dynamic spectral imaging) consists of identifying the well-behaved children. Who are the well-behaved children in this analogy?<br><br> Try again!";
}

	if (document.question1.question.value == "c") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Correct!<br><br>";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "img/classroom.png";
		document.getElementById("afterQ1_picture").innerHTML = "The author proposes an analogy that in a class with a majority of well-behaved children and a few troublemakers his job (dynamic spectral imaging) consists of identifying the well-behaved children. The well-behaved children in this analogy are the normal brain circuits. Identifying them and keeping them in the brain while resecting the abnormal networks (troublemakers in the class) will make the brain (class) better<br><br> Try again!";
}

	if (document.question1.question.value == "d") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Not correct.<br><br>";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "img/shock.jpg";
		document.getElementById("afterQ1_picture").innerHTML = "Dynamic spectral imaging is a diagnostic method, not a therapeutic one<br><br> Try again!";
}


}









function checkQ2() {

	if (document.question2.question.value == "a") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct! <br><br> Although direct cortical stimulation is considered the gold standard for functional brain mapping, the technique is very limited. An electrical current either activates or disrupts the estimatulated brain area, but that is only detectable if the brain area has a relatively simple function that can be easily evaluated. Higher-level cognitive functions appear to be silent. <br><br> Great job!";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
}

	if (document.question2.question.value == "b") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not correct! <br><br> Direct cortical stimulation is considered the gold standard for functional brain mapping. However, the technique is very limited. An electrical current either activates or disrupts the estimatulated brain area, but that is only detectable if the brain area has a relatively simple function that can be easily evaluated. Higher-level cognitive functions appear to be silent. <br><br> Try again!";
		document.getElementById("after_submitQ2").style.background = "red";
}

	if (document.question2.question.value == "c") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not correct! <br><br> Direct cortical stimulation is considered the gold standard for functional brain mapping. However, the technique is very limited. An electrical current either activates or disrupts the estimatulated brain area, but that is only detectable if the brain area has a relatively simple function that can be easily evaluated. Higher-level cognitive functions appear to be silent. <br><br> Try again!";
		document.getElementById("after_submitQ2").style.background = "red";
}

	if (document.question2.question.value == "d") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not correct! <br><br> Direct cortical stimulation can either estimulate or inhibit the function of the estimatulated area. <br><br> Try again!";
		document.getElementById("after_submitQ2").style.background = "red";
}

}








function checkQ3() {

	if (document.getElementById("q3a").checked == true && document.getElementById("q3b").checked == false && document.getElementById("q3c").checked == true && document.getElementById("q3d").checked == false && document.getElementById("q3e").checked == false) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct! <br><br> When the response is perfectly phase-locked with the stimulus, averaging the signal does not lead to loss of any frequency.<br><br>";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("answerQ3_picture").src = "img/averaging.jpg";
		document.getElementById("afterQ3_picture").innerHTML = "However, when there is even a small misalignment, frequencies will be averaged out, affecting mostly the faster frequencies. <br><br> Great job!";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ3").style.background = "red";

}


}








function checkQ4() {

	if (document.question4.question.value == "a") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Not correct! The high-frequency activity (HFA) is different than the high-frequency oscillations (HFOs). <br><br> Try again.";
		document.getElementById("after_submitQ4").style.background = "red";
}

	if (document.question4.question.value == "b") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Not correct! Is HFA only found in the visual cortex? What is the frequency of HFA? <br><br> Try again.";
		document.getElementById("after_submitQ4").style.background = "red";
}


	if (document.question4.question.value == "c") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct! <br><br> The high-frequency activity (HFA) is different than the HFOs. The HFA is a frequency 40-150 Hz (or 50-150 Hz) that occurs after a stimulus and is a marker of neural output. <br><br> They were first found in the visual cortex in response to visual stimuli, but they can be found in other brain areas and are a marker of neural output (the brain area is working on something). <br><br> Because HFA provides a marker of when a brain area is working, the author describes it as a gold mine. <br><br> Great job!";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
}

}








function checkQ5() {

	if (document.getElementById("q5a").checked == true && document.getElementById("q5b").checked == false && document.getElementById("q5c").checked == false && document.getElementById("q5d").checked == true && document.getElementById("q5e").checked == false) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Correct! <br><br> In general, the higher the frequency, the lower the amplitude. Therefore, frequencies as high as HFA (50-150 Hz) may appear simply as flattening and darkening of the channel.<br><br>Normalizing the frequencies compensates for that effect.<br><br>For that reason, it is difficult and time-consuming to detect HFA with the naked eye and it requires automated methods like time-frequency maps.<br><br>HFA are useful to detect activation of cortical areas. Therefore, it is useful to record them while the patient is exposed to some stimulus to see if HFA change in that brain area.";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ5").style.background = "red";

}


}








function checkQ6() {

	document.getElementById("after_submitQ6").style.visibility = "visible";
	document.getElementById("answerQ6").innerHTML = "The main concept presented in this image is that high-frequencies are very low amplitude. If not normalized, their fluctuations (very small in comparison with the fluctuations in amplitude of low frequencies) get lost in the time-frequency map. Therefore, it is important to normalize the values to appreciate the small differences in the high-frequency rhythms.";
	document.getElementById("after_submitQ6").style.background = "lightgreen";

}








function checkQ7() {

	document.getElementById("after_submitQ7").style.visibility = "visible";
	document.getElementById("answerQ7").innerHTML = "The main concept presented in this image is that the preprocessing of the EEG follows several steps. <br><br> 1.Extract only the frequencies in the band of interest (for example, 60-70 Hz). <br><br> 2.Use an envelope to smooth the peaks. <br><br> 3.Normalize with respect to the mean amplitude in that band. <br><br> 4.Repeat for each 10 Hz band of the HFA.";
	document.getElementById("after_submitQ7").style.background = "lightgreen";
}







function checkQ8() {

	document.getElementById("after_submitQ8").style.visibility = "visible";
	document.getElementById("answerQ8").innerHTML = "The main concept presented in this image is how HFA is used clinically. <br><br> The black points represent the time of the correct response to the stimulus (finding a T in the image) and the color in each trial shows that before and around the black point there is a change (increase or decrease) in HFA";
	document.getElementById("after_submitQ8").style.background = "lightgreen";

}




function checkQ9() {

	if (document.getElementById("q9a").checked == true && document.getElementById("q9b").checked == true && document.getElementById("q9c").checked == true && document.getElementById("q9d").checked == true && document.getElementById("q9e").checked == true) {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Correct! <br><br> An increase in HFA is a marker of active brain areas. Normally, the increase in HFA is associated with a decrease in slower frequencies. The posterior dominant rhythm and mu rhythm are presented like examples. <br><br> The main advantage of the HFA is that it is useful for high-level cognitive brain areas, not primary (motor, sensory) brain areas <br><br> The default mode network is typically activated (high HFA) by default and becomes less active during specific tasks. Using regular intracranial mapping these changes are not detected. <br><br> Great job!";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
	} else {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Not correct. <br><br> Make sure you checked all correct answers and unchecked all incorrect answers.";
		document.getElementById("after_submitQ9").style.background = "red";

}


}


