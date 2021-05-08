
const volEl = document.getElementById("vol");

volEl.addEventListener("input", (e) => {
    const vol = e.target.value;
    chrome.tabs.executeScript(null, {
        code: "document.body.style.transform='rotate($(vol)deg)'"
    });
});
//BELOW IS FOR LATER.
/*let tabArray = chrome.tabs.query({}, (tabs) => {
    console.log(tabs);
    let container = document.getElementById("mainContainer")
    tabs.forEach((tab) => {
      if (tab.audible === true) {
        let title = tab.title
        let img = document.createElement("img");
        img.src = tab.mutedInfo.muted ? "img/icon16.png" : "img/icon48.png";
        img.classList.add("soundState");
        img.addEventListener('click', () => {
          chrome.tabs.query({ index: tab.index }, (innerTabs) => {
            innerTabs.forEach((innerTab) => {
              if (innerTab.mutedInfo.muted) {
                img.alt = "icon48";
                img.src = "img/icon48.png";
              } else {
                img.alt = "icon16";
                img.src = "img/icon16.png";
              }
              let changeMute = innerTab.mutedInfo.muted ? false : true
              chrome.tabs.update(innerTab.id, { muted: changeMute })
            })
          })
        })
  
        let div = document.createElement("div")
        div.className = "col-3"
        div.appendChild(img)
  
        let nameDiv = document.createElement("div")
        nameDiv.id = tab.id
        nameDiv.className = "col-9"
        nameDiv.innerHTML = title
  
        let tabDiv = document.createElement("div")
        tabDiv.className = "row"
  
        let tabContainer = document.createElement("div")
        tabContainer.className = "tabs container border rounded bg-white m-2 p-2"
  
        tabDiv.appendChild(nameDiv)
        tabDiv.appendChild(div)
        tabContainer.appendChild(tabDiv)
        container.appendChild(tabContainer)
  
        let clickableTitle = document.getElementById(tab.id)
  
        clickableTitle.addEventListener("click", () => {
          chrome.tabs.query({ highlighted: true }, (innerTabs) => {
            innerTabs.forEach((innerTab) => {
              chrome.tabs.update(innerTab.id, { highlighted: false })
            })
          })
          chrome.windows.update(tab.windowId, { focused: true })
          chrome.tabs.update(tab.id, { highlighted: true })
        })
      }
    })
  })
  
  let muteAll = document.getElementById("muteAll");
  
  muteAll.addEventListener("click", () => {
    chrome.tabs.query({ audible: true }, (innerTabs) => {
      innerTabs.forEach((innerTab) => {
        chrome.tabs.update(innerTab.id, { muted: true })
      })
    })
    document.querySelectorAll(".soundState").forEach((e) => {
      e.src = "img/icon16.png";
    })
  })
  
  let unMuteAll = document.getElementById("unMuteAll");
  
  unMuteAll.addEventListener("click", () => {
    chrome.tabs.query({ audible: true }, (innerTabs) => {
      innerTabs.forEach((innerTab) => {
        chrome.tabs.update(innerTab.id, { muted: false })
      })
    })
    document.querySelectorAll(".soundState").forEach((e) => {
      e.src = "img/icon48.png";
    })
  })*/
