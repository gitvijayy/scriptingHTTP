var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

const leet = {a : '4', e : '3', l : '1', o : '0', s : '5', 
t : '7', 'ck' : 'x', 'er' : '0r', 'you' : 'j00'}

function print1337 (html) {

  let leetspeak = [];
  
  for (var i = 0; i < html.length; i++){
    let singleChar = html.charAt(i);
    let doubleChar = html.charAt(i) + html.charAt(i+1);
    let tripleChar = html.charAt(i) + html.charAt(i+1) + html.charAt(i+2);

    if (leet[tripleChar] !== undefined) {
      leetspeak.push(leet[tripleChar]);
      i += 2;
    } else if (leet[doubleChar] !== undefined) {
      leetspeak.push(leet[doubleChar]);
      i += 1;
    } else if (leet[singleChar] !== undefined) {
      leetspeak.push(leet[singleChar]);     
    }else {
      leetspeak.push(html.charAt(i));
    }
  }

  console.log(leetspeak.join(""));

}



getHTML(requestOptions, print1337);