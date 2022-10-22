import lookup from '/Users/cr16/Downloads/emojify/lookup.json' assert {type: 'json'};
import reverse_lookup from '/Users/cr16/Downloads/emojify/reverse_lookup.json' assert {type: 'json'};
function testConvert(text){
    text = text.toLowerCase();
    text = text.trim();
    if(text in lookup){
        return lookup[text][0];
    } else if(text in reverse_lookup){
        const textRepresentation = reverse_lookup[text][0];
        const numEmojis = lookup[textRepresentation].length;
        const currEmojiIndex = lookup[textRepresentation].indexOf(text);
        return lookup[textRepresentation][(currEmojiIndex + 1) % numEmojis];
    }
}
