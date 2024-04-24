var theme = localStorage.getItem('isLightTheme');
var themecss = "/assets/css/main.css";
if (theme === "true") {
    themecss = "/assets/css/light.css";
}
 if (theme === undefined) {
  localStorage.setItem('isLightTheme', 'false');
 }
document.getElementById("themecss").href = themecss;

// Function to handle dropdown change
function handlebackgroundToggleChange() {
  const dropdown = document.getElementById("backgroundToggle");
  const selectedValue = dropdown.value;
  localStorage.setItem("isLightTheme", selectedValue);
}

// Function to initialize dropdown value based on localStorage
function initbackgroundToggle() {
  const selectedOption = localStorage.getItem("selectedOption");
  if (selectedOption !== null) {
    const dropdown = document.getElementById("isLightTheme");
    dropdown.value = selectedOption;
  }
}

initbackgroundToggle();

var searchStored = localStorage.getItem("engine")
var searchSel = document.getElementById("searchSwitcher")

function switchSearch() {
  const selecter = document.getElementById("searchSwitcher");
  const selectedOption = selecter.value;
  var inputValue = document.getElementById('searchUrl').value;

  const finalValue = inputValue.trim() !== '' ? inputValue : selectedOption;
  localStorage.setItem("engine", finalValue);
};

function saveSelectedProxyOption() {
  var selectedOption = document.getElementById("proxySwitcher").value;
  localStorage.setItem("proxy", selectedOption);
}

function loadSavedProxyOption() {
  var savedOption = localStorage.getItem("proxy");
  if (savedOption) {
    document.getElementById("proxySwitcher").value = savedOption;
  }
}


document.getElementById("proxySwitcher").addEventListener("change", function () {
  saveSelectedProxyOption();
  location.reload();
});

function checkUnsetPanic() {
  let panicKey = localStorage.getItem("panicKey");
  let redirectLink = localStorage.getItem("redirectLink");

  if (!panicKey) {
    panicKey = "`";
    localStorage.setItem("panicKey", panicKey);
    document.getElementById("panicKeyInput").value = panicKey;
  }

  if (!redirectLink) {
    redirectLink = "https://desmos.com/scientific";
    localStorage.setItem("redirectLink", redirectLink);
    document.getElementById("redirectLinkInput").value = redirectLink;
  }
}

function checkPanicValues() {
  let panicKey = localStorage.getItem("panicKey");
  let redirectLink = localStorage.getItem("redirectLink");
  document.getElementById("panicKeyInput").value = panicKey;
  document.getElementById("redirectLinkInput").value = redirectLink;
}

function savePanicKey() {
  const panicKey = document.getElementById("panicKeyInput").value;
  const redirectLink = document.getElementById("redirectLinkInput").value;
  localStorage.setItem("panicKey", panicKey);
  localStorage.setItem("redirectLink", redirectLink);
  location.reload();
}

function resetPanicKey() {
  document.getElementById("panicKeyInput").value = "";
  localStorage.removeItem("panicKey");
  document.getElementById("redirectLinkInput").value = "";
  localStorage.removeItem("redirectLink");
  checkUnsetPanic();
}

window.addEventListener("keydown", function (event) {
  const panicKey = localStorage.getItem("panicKey");
  if (event.key === panicKey) {
    const redirectLink = localStorage.getItem("redirectLink");
    window.location.href = redirectLink;
  }
});

function createAboutBlankWindow(url) {
  return window.open("about:blank");
}


var cloakSelect = document.getElementById("siteSelect");

function saveCloakSettings() {
  const selectedCloak = cloakSelect.value;
  const iconInput = document.getElementById("iconInput").value;
  const nameInput = document.getElementById("nameInput").value;

  localStorage.setItem("selectedCloak", selectedCloak);
  if (selectedCloak === "custom") {
    localStorage.setItem("tabIcon", iconInput);
    localStorage.setItem("tabName", nameInput);
  }
  location.reload();
  applyCloakSettings();
}


document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
  var link = document.createElement('link'),
    oldLink = document.getElementById('dynamic-favicon');
  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = src;
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
};


function applyCloakSettings() {
  const selectedSite = localStorage.getItem("selectedCloak");
  let titleName = "";
  var favicon = ""

  console.log("Selected Site:", selectedSite); // Log the selected site to ensure it's retrieved correctly
  cloakSelect.value = selectedSite;
  switch (selectedSite) {
    case 'default':
      titleName = "Google";
      favicon = "/assets/imgs/icons/default.ico"
      break;
    case 'custom':
      titleName = localStorage.getItem("tabName") || "Google";
      favicon = localStorage.getItem("tagIcon") || "/assets/img/icons/default.ico"
      break;
    case 'clever':
      titleName = "Clever | Portal";
      favicon = "/assets/imgs/icons/clever.ico"
      break;
    case 'deltamath':
      titleName = "DeltaMath";
      favicon = "/assets/imgs/icons/deltamath.ico"
      break;
    case 'desmos':
      titleName = "Desmos | Scientific Calculator";
      favicon = "/assets/imgs/icons/desmos.ico"
      break;
    case 'edpuzzle':
      titleName = "Edpuzzle";
      favicon = "/assets/imgs/icons/edpuzzle.ico"
      break;
    case 'classroom':
      titleName = "Home";
      favicon = "/assets/imgs/icons/classroom.ico"
      break;
    case 'drive':
      titleName = "My Drive - Google Drive";
      favicon = "/assets/imgs/icons/drive.ico"
      break;
    case 'infinite-campus':
      titleName = "Home | Infinite Campus";
      favicon = "/assets/imgs/icons/infinite-campus.ico"
      break;
    case 'ixl':
      titleName = "IXL | Dashboard";
      favicon = "/assets/imgs/icons/ixl.ico"
      break;
    case 'nearpod':
      titleName = "Nearpod";
      favicon = "/assets/imgs/icons/nearpod.ico"
      break;
    case 'prodigy':
      titleName = "Play Prodigy";
      favicon = "/assets/imgs/icons/prodigy.ico"
      break;
    case 'getepic':
      titleName = "Epic! - Books for kids";
      favicon = "/assets/imgs/icons/epic.ico"
      break;
    case 'quizziz':
      titleName = "Join a Quizziz activity - Enter code - Join my quiz - Quizziz";
      favicon = "/assets/imgs/icons/quizizz.ico"
      break;
    case 'schoology':
      titleName = "Home | Schoology";
      favicon = "/assets/imgs/icons/schology.ico"
      break;
    case 'campbell':
      titleName = "Quality Soups, Sauces, Food & Recipes | campbell.com";
      favicon = "/assets/imgs/icons/campbell.ico"
      break;
    default:
      titleName = "Google";
      favicon = "/assets/imgs/icons/default.ico"

      break;
  }
  console.log("Title Name:", titleName);
  document.title = titleName;
  localStorage.setItem('favicon', favicon);
  changeFavicon(favicon);
}

function resetCloak() {
  localStorage.removeItem("selectedSite");
  localStorage.removeItem("tabIcon");
  localStorage.removeItem("tabName");

  applyCloakSettings();
}

applyCloakSettings();

function openPopup() {
  if (window === window.top) {
    const aboutBlankWindow = createAboutBlankWindow();
    const iframe = document.createElement("iframe");
    iframe.src = window.location.href;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.frameborder = "0";
    iframe.style.marginwidth = "0";
    iframe.style.position = "fixed";
    iframe.style.inset = "0px";
    iframe.style.outline = "none";
    iframe.style.scrolling = "auto";
    aboutBlankWindow.document.title = document.title;
    const link = aboutBlankWindow.document.createElement("link");
    link.rel = "icon";
    link.type = "image/x-icon";
    link.href = localStorage.getItem("favicon") || window.location.href + "/assets/imgs/icons/default.ico";
    aboutBlankWindow.document.head.appendChild(link);
    aboutBlankWindow.document.body.appendChild(iframe);

    window.location.href = localStorage.redirectLink;

  }
}

let autoOpen = localStorage.getItem("autoOpen") === "true";
document.getElementById("autoOpenCheckbox").checked = autoOpen;

function toggleAutoOpen() {
  autoOpen = !autoOpen;
  localStorage.setItem("autoOpen", autoOpen);
}

if (autoOpen) {
  openPopup()
}

window.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    openPopup();
  }
});


const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", function () {
  document.documentElement.style.setProperty(
    "--theme-color",
    colorPicker.value
  );
  localStorage.setItem("themeColor", colorPicker.value);
});

const savedColor = localStorage.getItem("themeColor");
if (savedColor) {
  document.documentElement.style.setProperty(
    "--theme-color",
    savedColor
  );
  colorPicker.value = savedColor;
}

const colorPicker2 = document.getElementById("colorPicker2");
colorPicker2.addEventListener("input", function () {
  document.documentElement.style.setProperty(
    "--shadow-color",
    colorPicker2.value
  );
  localStorage.setItem("shadowColor", colorPicker2.value);
});

const savedColor2 = localStorage.getItem("shadowColor");
if (savedColor2) {
  document.documentElement.style.setProperty(
    "--shadow-color",
    savedColor2
  );
  colorPicker2.value = savedColor2;
}


const saveButton = document.getElementById("saveColors");
const resetButton = document.getElementById("resetColors");

saveButton.addEventListener("click", function () {
  const themeColor = colorPicker.value;
  const shadowColor = colorPicker2.value;

  localStorage.setItem("themeColor", themeColor);
  localStorage.setItem("shadowColor", shadowColor);

  location.reload();
});

resetButton.addEventListener("click", function () {
  localStorage.removeItem("themeColor");
  localStorage.removeItem("shadowColor");

  document.documentElement.style.setProperty("--theme-color", "#00FF7F");
  document.documentElement.style.setProperty("--shadow-color", "#00FF7F");
  location.reload();
});

window.addEventListener("load", function () {
  const savedThemeColor = localStorage.getItem("themeColor");
  const savedShadowColor = localStorage.getItem("shadowColor");

  if (savedThemeColor) {
    document.documentElement.style.setProperty("--theme-color", savedThemeColor);
    colorPicker.value = savedThemeColor;
  }

  if (savedShadowColor) {
    document.documentElement.style.setProperty("--shadow-color", savedShadowColor);
    colorPicker2.value = savedShadowColor;
  }

});


// Function to handle dropdown change
function toggleBackground() {
  var dropdown = document.getElementById("backgroundToggle");
  var isChecked = dropdown.value === "true"
  localStorage.setItem("backgroundToggle", isChecked);
}

// Function to load background settings from localStorage
function loadBackground() {
  var isChecked = localStorage.getItem("backgroundToggle") === "true";
  var backgroundImage = localStorage.getItem("backgroundImage");

  var dropdown = document.getElementById("backgroundToggle");
  dropdown.value = isChecked ? "true" : "false";

  document.getElementById("background").style.backgroundImage = "url('" + (backgroundImage) + "')";

  document.body.style.color = isChecked ? "#4c4c4c" : "#fff";
}

// Event listener for dropdown change
document.getElementById("backgroundToggle").addEventListener("change", function () {
  toggleBackground();
  handlebackgroundToggleChange();
  location.reload();
});

// Load background settings on page load
document.addEventListener("DOMContentLoaded", function () {
  loadBackground();
});

// Apply background image if stored in localStorage
if (localStorage.getItem("backgroundImage")) {
  document.getElementById("background").style.backgroundImage =
    "url('" + localStorage.getItem("backgroundImage") + "')";
}


document
  .getElementById("upload-img")
  .addEventListener("click", function () {
    document.getElementById("file-input").click();
  });

document
  .getElementById("file-input")
  .addEventListener("change", function (event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      var backgroundImage = e.target.result;
      document.getElementById(
        "background"
      ).style.backgroundImage = backgroundImage;
      localStorage.setItem("backgroundImage", backgroundImage);
    };
    reader.readAsDataURL(file);
    location.reload();
  });

document
  .getElementById("reset-img")
  .addEventListener("click", function () {
    // Reset the background to the default state
    document.getElementById("background").style.backgroundImage =
      "";
    localStorage.removeItem("backgroundImage");
    location.reload();
  });

function saveImageURL() {
  var imageURL = document.getElementById("image-input-url").value;
  if (imageURL.trim() !== "") {
    localStorage.setItem("backgroundImage", imageURL);
    // Update background image if checkbox is not checked
    loadBackground()
  }
  location.reload()
}

var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

searchSel.value = searchStored;
window.addEventListener("load", loadSavedProxyOption);
window.addEventListener("load", checkUnsetPanic);
window.addEventListener("load", checkPanicValues);
if (localStorage.getItem("engine") === undefined) {
  localStorage.setItem("engine", "https://google.com/search?q=%s")
}

cloakSelect.addEventListener("change", function () {
  if (cloakSelect.value === "custom") {
    const cloakInputs = document.getElementById("customCloakinput");
    cloakInputs.style.display = "block";
  } else {
    const cloakInputs = document.getElementById("customCloakinput");
    cloakInputs.style.display = "none";
  }
})

applyCloakSettings();
