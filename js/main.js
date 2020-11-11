$(document).ready (function(){
    $('button').on('click',createTeam);
    
    function createTeam() {
        let select = $("#select").val();
        let alphabeticalOrder = false;
        
        var male = ["superman", "batman", "flash", "aquaman", 
                    "hawkman", "greenarrow", "greenlantern", "nightwing",
                    "brainiac", "deathstroke", "lexluthor", "bane",
                    "joker", "sinestro", "blackadam", "riddler"]
        var female = ["wonderwoman", "supergirl", "batgirl", "hawkgirl", 
                        "starfire", "harleyquinn", "poisonivy", "catwoman",
                        "enchantress", "livewire", "killerfrost", "talia",
                        "cheetah", "fatality", "blackfire", "indigo"]
        
        if ($("#alphabetical").is(":checked")) {
            alphabeticalOrder = true;
        }
        
        switch (select) {
            case 'ma':
                random(male, alphabeticalOrder);
                break;
            case 'fe':
                random(female, alphabeticalOrder);
                break;
            case 'co':
                var coed = createCoedTeam(male,female);
                random(coed, alphabeticalOrder);
                break;
            default:
                break;
        }
    }
    
    function createCoedTeam(male, female) {
        var coedArray = [];
        
        for (let i = 0; i < male.length; i++) {
            coedArray.push(male[i]);
        }
        
        for (let i = 0; i < female.length; i++) {
            coedArray.push(female[i]);
        }
        
        return coedArray;
    }
    
    function random(array, condition) {
        if (condition) {
            var randomizedArray = randomize(array);
            randomizedArray = randomizedArray.sort();
            display(randomizedArray);
        } else {
            var randomizedArray = randomize(array);
            display(randomizedArray);
        }
        
        function randomize(newArray) {
            for (var i = newArray.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = newArray[i];
                newArray[i] = newArray[j];
                newArray[j] = temp;
            }
            
            var randomizedArray = [];
            for (var i = 0; i < 8; i++) {
                randomizedArray[i] = newArray[i];
            }
            return randomizedArray;
        }
        
        function display(array) {
            for (var i = 0; i < 8; i++) {
                $("#he"+i+"> img").attr("src",`Img/${array[i]}.jpg`);
                $("#he"+i+"> div").text(`${array[i]}`);
            }
        }
    }
})
