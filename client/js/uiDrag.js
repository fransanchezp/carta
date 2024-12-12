export const uiDrag = {
    init: (dropZones, notes) => {
      document.querySelectorAll(notes).forEach((note) => {
        note.setAttribute("draggable", "true");
  
        switch (note.dataset.suit) {
          case "basto":
            note.style.backgroundImage = 'url("images/as-bastos.png")';
            break;
          case "copa":
            note.style.backgroundImage = 'url("images/copa.jpg")';
            break;
          case "espada":
            note.style.backgroundImage = 'url("images/espadas.jpg")';
            break;
          case "oro":
            note.style.backgroundImage = 'url("images/oro.jpg")';
            break;
        }
        note.style.backgroundSize = "cover";
  
        note.addEventListener("dragstart", (event) => {
          event.dataTransfer.setData("text/plain", event.target.id);
          note.classList.add("dragging");
        });
  
        note.addEventListener("dragend", () => {
          note.classList.remove("dragging");
        });
      });
  
      document.querySelectorAll(dropZones).forEach((zone) => {
        zone.addEventListener("dragover", (e) => {
          e.preventDefault();
          zone.style.backgroundColor = "#e0f7fa";
        });
  
        zone.addEventListener("dragleave", () => {
          zone.style.backgroundColor = "#fff";
        });
  
        zone.addEventListener("drop", (e) => {
          e.preventDefault();
          const cardId = e.dataTransfer.getData("text/plain");
          const draggedCard = document.getElementById(cardId);
  
          if (
            zone.id === draggedCard.dataset.suit && 
            parseInt(draggedCard.dataset.value) ===
              zone.getElementsByClassName("card").length + 1 
          ) {
            draggedCard.style.position = "relative"; 
            draggedCard.style.left = "0";
            draggedCard.style.top = "0";
            zone.appendChild(draggedCard); 
          }
  
          
          zone.style.backgroundColor = "#fff";
        });
      });
    },
  };
  