const chatContainer = document.getElementById("chatContainer");
const toggleChatBtn = document.getElementById("toggleChat");
const Chatbody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");

toggleChatBtn.addEventListener("click", () => {
    chatContainer.classList.toggle("hidden");
    if (!chatContainer.classList.contains("hidden")) {
        txtInput.focus(); // Focus on the input when chat is shown
    }
});

send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        renderUserMessage();
    }
});

const renderUserMessage = () => {
    const userInput = txtInput.value;
    renderMessageEle(userInput, "user");
    txtInput.value = "";
    renderChatBotResponse(userInput);
};

const renderChatBotResponse = (userInput) => {
    const res = getChatbotResponse(userInput);
    renderMessageEle(res, "chatbot");
};

const renderMessageEle = (txt, type) => {
    let className = "user-message";
    if (type === "chatbot") {
        className = "chatbot-message";
    }
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.classList.add(className);
    messageEle.append(txtNode);
    Chatbody.append(messageEle);
};

const responseObj = {
    hello: "hey ! How are you doing?",
    hey: "Hey! What's Up",
    today: new Date().toDateString(),
    time: new Date().toLocaleTimeString(),
};

const getChatbotResponse = (userInput) => {
    return responseObj[userInput] == undefined
        ? "I will get back to you later"
        : responseObj[userInput];
};
