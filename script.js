//declare bot variables
let bot = new RiveScript();
// linking brain.rive library
const brains = ['brain.rive'];
bot.loadFile(brains).then(botReady).catch(botNotReady);
//delcaring the interface variables
const message_container = document.querySelector('.messages');
const form = document.querySelector('form');
const input_box = document.querySelector('input');

//add events and functions
form.addEventListener('submit', (e) => {
    e.preventDefault();
    selfReply(input_box.value);
    input_box.value = '';
});

function botReply(message)  {
    message_container.innerHTML += `<div class="bot">${message}</div>`;
    location.href = '#edge';
}
function selfReply(message)  {
    message_container.innerHTML += `<div class="self">${message}</div>`;
    location.href = '#edge';

    bot.reply("local-user", message).then(function(reply){
        botReply(reply);
    });
}

function botReady(){
    bot.sortReplies();
    botReply('Hello, please ask me anything about Toplight limited, we sells cables and eletrical materials  ');
}
function botNotReady(err){
    console.log("An error has occured.", err);
}
