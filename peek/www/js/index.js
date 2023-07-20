document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}

const thumbnail = document.getElementById('thumbnail');

var url = '';
var x = '';

document.getElementById('submit').addEventListener('click', () => {
    url = document.getElementById('link').value;
    
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
        x = match[2];
    }
    else {
        return;
    }

    document.getElementById('title').value = x;
    document.getElementById('thumbnail').src = 'https://img.youtube.com/vi/'+ x + '/0.jpg';
});
