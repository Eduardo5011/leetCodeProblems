/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0
    let write = 0

    while(i < chars.length){
        let start = i

        while(i < chars.length && chars[i] === chars[start]){
            i++
        }

        chars[write] = chars[start]
        write++

        let groupSize = i - start
        if(groupSize > 1){
            let sizeStr = groupSize.toString()
            for(let ch of sizeStr){
                chars[write] = ch
                write++
            }
        }
    }

    return write
};