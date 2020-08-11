const letters = ["𝔸", "𝔹", "ℂ", "𝔻", "𝔼", "𝔽", "𝔾", "ℍ", "𝕀", "𝕁", "𝕂", "𝕃", "𝕄", "ℕ", "𝕆", "ℙ", "ℚ", "ℝ", "𝕊", "𝕋", "𝕌", "𝕍", "𝕎", "𝕏", "𝕐", "ℤ"];
const numbers = ["𝟘", "𝟙", "𝟚", "𝟛", "𝟜", "𝟝", "𝟞", "𝟟", "𝟠", "𝟡"];

module.exports = async (msg, argstring, config) => {
    msg.channel.send("**" + 
        argstring
            .split("")
            .map((char) => {
                if (/([a-zA-Z])/.test(char)) {
                    return letters[
                        char.toLowerCase().charCodeAt(0) - 97
                    ];
                } else if (/([0-9])/.test(char)) {
                    return numbers[char];
                } else return char;
            })
            .join("") + "**"
    );
};