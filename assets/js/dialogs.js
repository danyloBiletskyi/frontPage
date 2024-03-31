const dialogs = document.getElementById("dialogsContainer");
const dialog_title = document.getElementById("dialogTitle");
const messages = document.getElementById("messagesContainer");
const message_input = document.getElementById("messageInput");
const dUserName = document.getElementById("adddial_userName");
const selDialogContainer = document.getElementById("selDialogContainer");
const actualDialogContainer = document.getElementById("actualDialogContainer");
const newDialogModal = document.getElementById("newDialogModal");
const newDialogAlertContainer = document.getElementById("newDialogAlertContainer");
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const crypt = new OpenCrypto();


window.DIALOGS = {};
window.DIALOGS_BY_USERS = {};
window.USERS = {};
window.CURRENT_MESSAGES = [];
window.DIALOGS_SORTED = [];
window.CURRENT_DIALOG = 0;
window._WS = null;


function hideSidebar() {
    if(sidebar.classList.contains("d-flex")) {
        sidebar.classList.add("d-none");
        sidebar.classList.remove("d-flex");
    }
    if(content.classList.contains("d-none")) {
        content.classList.remove("d-none");
    }
}

function showSidebar() {
    if(sidebar.classList.contains("d-none")) {
        sidebar.classList.add("d-flex");
        sidebar.classList.remove("d-none");
    }
    if(!content.classList.contains("d-none")) {
        content.classList.add("d-none");
    }
}