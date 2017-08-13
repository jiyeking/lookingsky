/**
 * Created by JKL on 2017/5/17.
 */

var QUOTE = {};

QUOTE.getRandomNum = function () {
    alert(111);
}
QUOTE.getRandomNum();
// $.ajax({
//     headers: {
//         "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
//         Accept: "application/json",
//         "Content-Type": "application/x-www-form-urlencoded"
//     },
//     url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
//     success: function(r) {
//         if (typeof r === 'string') {
//             r = JSON.parse(r);
//         }
//         currentQuote = r.quote;
//         currentAuthor = r.author;
//         if(inIframe())
//         {
//             $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
//             $('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
//         }