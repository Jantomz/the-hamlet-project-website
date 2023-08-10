const sectionText = [
  {
    text: "\"Hamlet,\" an enduring play by William Shakespeare from the late 1500s, intricately weaves themes of love, death, and betrayal. Following Prince Hamlet's quest for revenge against his uncle Claudius, who killed Hamlet's father, King Hamlet, the play delves into the complexities of familial relationships, mortality, and the consequences of treachery. Through Hamlet's introspective soliloquies and the haunting presence of King Hamlet's ghost, the play prompts contemplation on life's purpose, moral dilemmas, and the fragility of trust. With its universal themes, \"Hamlet\" remains a timeless masterpiece that continues to captivate audiences across generations.",
  },
  {
    text: "The Hamlet Project is a project created by me (Jaden Zhang) for my ENG4U Summer School course. As a student and avid programmer, I realized I would benefit greatly from this project by learning more web development alongside this task. With more than 500 lines of pure CSS, HTML and JS, I've used as much creativity I can to create a site from scratch. Not using any web creation easy UI sites, this task was a daunting yet exciting one. The Assignment Write-Up section is best looked at in a google document and not on this site, as it is missing some styling elements like indents. I am just starting out in practicing web development, so bear with me on this strange project!",
  },
  {
    paragraph1:
      "This rendition of Hamlet’s fifth soliloquy portrays his raw emotions. My decision to act specifically on this soliloquy is due to its underrated importance. Though it may not be the most famous, this soliloquy foreshadows the first major murder, Polonius’ stabbing. The first onscreen murder is critical when pacing the play’s subsequent deaths.",
    paragraph2:
      "During the video, my hair is combed down to characterize Hamlet’s sorrow-mixed anger. The connotation for combed down dark hair is annoyance and unease, thus representing Hamlet’s current psychological state. Next, the sword foretells Polonius’ death. Even though Hamlet says that he will only “speak daggers… but use none”, he equips himself (Shakespeare 3.2.2272). The ironic contrast between his words and actions in my rendition add depth to the core theme of deception. The setting of this act is represented with dim lighting because Hamlet is revealing his personal thoughts. Dark settings offer vulnerability because physical imperfections are hidden while revealing internal conflicts. My background monitors offer ambiance to visually represent Hamlet’s psyche. The red screen exemplifies Polonius’s demise, as bloodshed ensues Hamlet’s soliloquy. The picture of Yorick’s skull, symbolizing the inevitable decay of humans, is an omen for the consequences of Hamlet’s rage. These two thematic displays are placed behind Hamlet as he is yet unaware of their eventual importance. Finally, the tone of voice, changing every few lines, is expressive of Hamlet’s emotions. As Hamlet realizes he must go “now to [his] mother!”, his voice is softer to express his attempt to lull his rage (3.2.2268). Ultimately, these elements capture Hamlet’s outrage, marking a notable moment in this timeless play.",
  },
];

renderText();

function createTextElem(text) {
  const textElem = document.createElement("p");
  textElem.textContent = text;
  textElem.setAttribute("class", "text-content");
  return textElem;
}

function renderText() {
  showHamletTextContent();
  showProjTextContent();
  showWriteTextContent();
}

function showHamletTextContent() {
  const textElem = createTextElem(sectionText[0].text);
  const parentDiv = document.querySelector("#section-2");
  parentDiv.insertBefore(textElem, document.querySelector("#whatIsProj"));
}

function showProjTextContent() {
  const textElem = createTextElem(sectionText[1].text);
  const parentDiv = document.querySelector("#section-2");
  parentDiv.insertBefore(
    textElem,
    document.querySelector("#whatIsProj").nextSibling
  );
}

function showWriteTextContent() {
  const textElem1 = createTextElem(sectionText[2].paragraph1);
  const textElem2 = createTextElem(sectionText[2].paragraph2);
  const parentDiv = document.querySelector("#section-5");
  parentDiv.insertBefore(textElem1, parentDiv.children.nextSibling);
  parentDiv.insertBefore(textElem2, parentDiv.children.item(2));
}
