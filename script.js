var addNote = document.querySelectorAll(".adds");
var placementArea = document.querySelector(".actual-body");

addNote.forEach((Element) => {
  Element.addEventListener("click", () => {
    var newNotePad = document.createElement("div");
    const realNotepad = document.querySelector(".notepad");
    newNotePad.className = realNotepad.className;
    newNotePad.innerHTML = realNotepad.innerHTML;
    placementArea.appendChild(newNotePad);
    console.log(placementArea);
  });
});
