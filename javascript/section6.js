function showHamlet() {
  const character = document.createElement("h4");
  const desc = document.createElement("p");
  const charContainer = document.createElement("div");
  const parentDiv = document.querySelector("#section-6");
  const btnContainer = document.querySelector(".dynamic-section");
  const overallContainer = document.createElement("div");

  if (document.querySelectorAll(".overall-container").length > 0) {
    document.querySelectorAll(".overall-container").item(0).remove();
  }

  overallContainer.setAttribute("class", "overall-container");
  charContainer.setAttribute("class", "char-text");
  character.setAttribute("class", "char-name");
  desc.setAttribute("class", "char-desc");
  character.textContent = descriptions[0].character;
  desc.textContent = descriptions[0].description;
  charContainer.append(character, desc);
  overallContainer.append(charContainer);
  parentDiv.insertBefore(overallContainer, btnContainer.nextSibling);
}

function showClaudius() {
  const character = document.createElement("h4");
  const desc = document.createElement("p");
  const charContainer = document.createElement("div");
  const parentDiv = document.querySelector("#section-6");
  const btnContainer = document.querySelector(".dynamic-section");
  const overallContainer = document.createElement("div");

  if (document.querySelectorAll(".overall-container").length > 0) {
    document.querySelectorAll(".overall-container").item(0).remove();
  }

  overallContainer.setAttribute("class", "overall-container");
  charContainer.setAttribute("class", "char-text");
  character.setAttribute("class", "char-name");
  desc.setAttribute("class", "char-desc");
  character.textContent = descriptions[1].character;
  desc.textContent = descriptions[1].description;
  charContainer.append(character, desc);
  overallContainer.append(charContainer);
  parentDiv.insertBefore(overallContainer, btnContainer.nextSibling);
}

function showLaertes() {
  const character = document.createElement("h4");
  const desc = document.createElement("p");
  const charContainer = document.createElement("div");
  const parentDiv = document.querySelector("#section-6");
  const btnContainer = document.querySelector(".dynamic-section");
  const overallContainer = document.createElement("div");

  if (document.querySelectorAll(".overall-container").length > 0) {
    document.querySelectorAll(".overall-container").item(0).remove();
  }

  overallContainer.setAttribute("class", "overall-container");
  charContainer.setAttribute("class", "char-text");
  character.setAttribute("class", "char-name");
  desc.setAttribute("class", "char-desc");
  character.textContent = descriptions[2].character;
  desc.textContent = descriptions[2].description;
  charContainer.append(character, desc);
  overallContainer.append(charContainer);
  parentDiv.insertBefore(overallContainer, btnContainer.nextSibling);
}

const descriptions = [
  {
    character: "Hamlet",
    description:
      "Hamlet, the protagonist, is the tragic hero of “Hamlet”. The strongest theme he encapsulates is revenge and its futility. Throughout the entire play, Hamlet is set on seeking revenge for King Hamlet against his uncle Claudius. He acts blindly through anger, killing Polonius directly and Ophelia indirectly. When Hamlet, blinded by the lust for revenge, hears Polonius behind the curtain, he shouts  “How now! A rat? Dead, for a ducat, dead!” and stabs Polonius without checking for the lurker’s identity (Shakespeare 3.3.2410). Such an irrational action is the result of his furious emotions born from revenge. The resulting turmoil for Ophelia causes her to go mad and drown herself. In the end, Laertes, Claudius, Gertrude and Hamlet himself die partly due to Hamlet’s murderous intent. Although Claudius is the big reason for the ending deaths (which will be discussed in Claudius’s character panel), Hamlet’s feigned madness, evoked by his goal for revenge, pushed the surrounding characters to act irrationally.",
  },
  {
    character: "Claudius",
    description:
      "Claudius, the new King of Denmark and uncle to Hamlet, is the antagonist of the play. Claudius demonstrates the negative consequences of greedy actions. He wanted to become king, and thus he committed fratricide. Claudius’s greediness inspired him to commit heinous acts in the name of personal gain. The consequences of his actions are not immediate, but they manifest in the form of his ghostly brother. A supernatural apparition seeking revenge against Claudius is the manifestation of his greed. Other characters realize this perturbance, as Horatio predicts that King Hamlet’s ghost “bodes some strange eruption to our state” (Shakespeare 1.1.85). The new king’s greed shows its final consequence in the last scene. As Claudius wants to be rid of all obstacles, he tries to kill Hamlet. Claudius’ plan of poisoning Hamlet ends with Laertes, Gertrude, and himself dying. Even though the plan works and Hamlet dies, the consequences of his greed kill many other characters. As a result, Claudius represents greed's karmic tendencies.",
  },
  {
    character: "Laertes",
    description:
      "Laertes, the son of Polonius, emerges as a captivating example of manipulation in the play. Initially portrayed as impulsive and young, Laertes becomes ensnared in Claudius' plans, highlighting the overarching theme of manipulation prevalent throughout the play. Laertes, the passionate son of Polonius, is deftly manipulated by Claudius to serve as a tool in eliminating Hamlet, who poses a threat to Claudius' reign. Driven by his desire for revenge following his father's death, Laertes is susceptible due to his vulnerability and grief. Claudius capitalizes on Laertes' emotional state, molding him into a willing instrument in his sinister plots. Claudius redirects Laertes' anger towards Hamlet, stoking his thirst for revenge and making him more compliant to his commands. Laertes shows his manipulated anger when he says that he will “cut [Hamlet’s] throat i’ th’ church!” (Shakespeare 4.7.3271). Claudius leverages Laertes' loyalty to his family, exploiting his sense of filial duty to avenge his father's death. The pinnacle of Claudius' manipulation is epitomized by the climactic fencing scene. Laertes, while initially driven by personal motives, evolves into a representation of the broader manipulation theme as he becomes a tool of Claudius' ambitions.",
  },
];
