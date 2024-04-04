

let City;
let Duration;
let Ralaxing;
let Prefers = [];
let Theme;
let AllCheckers;


let title1 = document.querySelector('#title1');
let location1 = document.querySelector('#location1');
let description1 = document.querySelector('#description1');
let fun1 = document.querySelector('#fun1');
let price1 = document.querySelector('#price1');
let creativity1 = document.querySelector('#creativity1');
let physical1 = document.querySelector('#physical1');
let mainstream1 = document.querySelector('#mainstream1');
let romantic1 = document.querySelector('#romantic1');
let map1 = document.querySelector('#map1');

let title2 = document.querySelector('#title2');
let location2 = document.querySelector('#location2');
let description2 = document.querySelector('#description2');
let fun2 = document.querySelector('#fun2');
let price2 = document.querySelector('#price2');
let creativity2 = document.querySelector('#creativity2');
let physical2 = document.querySelector('#physical2');
let mainstream2 = document.querySelector('#mainstream2');
let romantic2 = document.querySelector('#romantic2');

let title3 = document.querySelector('#title3');
let location3 = document.querySelector('#location3');
let description3 = document.querySelector('#description3');
let fun3 = document.querySelector('#fun3');
let price3 = document.querySelector('#price3');
let creativity3 = document.querySelector('#creativity3');
let physical3 = document.querySelector('#physical3');
let mainstream3 = document.querySelector('#mainstream3');
let romantic3 = document.querySelector('#romantic3');

let title4 = document.querySelector('#title4');
let location4 = document.querySelector('#location4');
let description4 = document.querySelector('#description4');
let fun4 = document.querySelector('#fun4');
let price4 = document.querySelector('#price4');
let creativity4 = document.querySelector('#creativity4');
let physical4 = document.querySelector('#physical4');
let mainstream4 = document.querySelector('#mainstream4');
let romantic4 = document.querySelector('#romantic4');


const jsConfetti = new JSConfetti();

let sever = 'https://dateserver-5cs0.onrender.com/getResponse';

document.querySelector('#next_3').addEventListener('click', () => {

    City = document.querySelector('#city').value;

    if (document.querySelector('#Short').checked) {
        Duration = 'Short';
    }
    else if (document.querySelector('#few_hours').checked) {
        Duration = 'a few hours';
    }
    else if (document.querySelector('#All+day').checked) {
        Duration = 'All day';
    }


    if (document.querySelector('#Relaxed').checked) {
        Ralaxing = 'Relaxed';
    }
    else if (document.querySelector('#Stimulated').checked) {
        Ralaxing = 'Stimulated';
    }

    AllCheckers = document.querySelectorAll('.pref');
    for (let check of AllCheckers) {
        if (check.checked) {
            let labelElement = check.parentElement;
            let spanElement = labelElement.querySelector('.label-text');
            Prefers.push(spanElement.textContent);
        }
    }

    Theme = document.querySelector('#theme').value;
    SendData();
});

function SendData() {
    console.log('Start Send Data');


    if (City === "") {
        City = "worldwide";
    }

    let Message = `Generate four creative date ideas tailored to the preferences provided.

    City: ${City}
    
    Duration: ${Duration}
    
    Style: ${Ralaxing}
    
    Preferred activities: ${Prefers}
    
    Main theme: ${Theme}
    
    With this prompt, the API will generate four ideas for dates in the specified city, duration, style, preferred activities, and main theme. Each idea will be formatted as follows:
    
    Title|Location name for Google Map search including the city|Description|Fun Scale|Creativity Scale|Physical Scale|Mainstream Scale|Romantic Scale
    
    the scales need to be just numbers.
    write 4 ideas, and make them all in one line (without numbering theme).

    example:
    Garden Yoga Bliss|Sea Garden, Varna|Start your date with a serene outdoor yoga session in the lush surroundings of the Sea Garden, perfect for couples looking to find relaxation and connection through wellness.|70|80|60|50|75|
    
    For each idea, the Fun Scale, Creativity Scale, Physical Scale, Mainstream Scale, and Romantic Scale will be numeric values between 1 and 100, indicating the level of each aspect for the proposed date idea.
    
    Important: make it clean, without "' or 1. ot any other symbol`;



    axios.post(sever, { "mes": Message }).then((response) => {
        console.log('Findished');
        console.log('Answer: ', response.data.choices[0].message.content);



        const ideasArray = response.data.choices[0].message.content.split('\n').map(idea => idea.split('|'));

        let ideasTitle = [];
        let ideasLocation = [];
        let ideasDescription = [];
        let ideasFunScale = [];
        let ideasCreativityScale = [];
        let ideasPhysicalScale = [];
        let ideasMainstreamScale = [];
        let ideasRomanticScale = [];

        ideasArray.forEach(idea => {
            if (idea[0] !== "" && idea[0] !== undefined)
                ideasTitle.push(idea[0]);

            if (idea[1] !== "" && idea[1] !== undefined)
                ideasLocation.push(idea[1]);

            if (idea[2] !== "" && idea[2] !== undefined)
                ideasDescription.push(idea[2]);

            if (idea[3] !== "" && idea[3] !== undefined)
                ideasFunScale.push(parseInt(idea[3]));

            if (idea[4] !== "" && idea[4] !== undefined)
                ideasCreativityScale.push(parseInt(idea[4]));

            if (idea[5] !== "" && idea[5] !== undefined)
                ideasPhysicalScale.push(parseInt(idea[5]));

            if (idea[6] !== "" && idea[6] !== undefined)
                ideasMainstreamScale.push(parseInt(idea[6]));

            if (idea[7] !== "" && idea[7] !== undefined)
                ideasRomanticScale.push(parseInt(idea[7]));
        });


        title1.innerText = ideasTitle[0];
        location1.innerText = ideasLocation[0];
        description1.innerText = ideasDescription[0];
        try {
            fun1.value = ideasFunScale[0];
            creativity1.value = ideasCreativityScale[0];
            physical1.value = ideasPhysicalScale[0];
            mainstream1.value = ideasMainstreamScale[0];
            romantic1.value = ideasRomanticScale[0];
        } catch (e) {
            SendData();
        }
        let adress1 = ideasLocation[0].replaceAll(' ', '%').replaceAll(',', '');
        map1.innerHTML = `<iframe width="100%" height="100%" frameborder="0" scrolling="no"
        marginheight="0" marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${adress1}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
            href="https://www.gps.ie/">gps vehicle tracker</a></iframe>`;



        title2.innerText = ideasTitle[1];
        location2.innerText = ideasLocation[1];
        description2.innerText = ideasDescription[1];
        try {
            fun2.value = ideasFunScale[1];
            creativity2.value = ideasCreativityScale[1];
            physical2.value = ideasPhysicalScale[1];
            mainstream2.value = ideasMainstreamScale[1];
            romantic2.value = ideasRomanticScale[1];
        } catch (e) {
            SendData();
        }
        let adress2 = ideasLocation[1].replaceAll(' ', '%').replaceAll(',', '');
        map2.innerHTML = `<iframe width="100%" height="100%" frameborder="0" scrolling="no"
        marginheight="0" marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${adress2}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
            href="https://www.gps.ie/">gps vehicle tracker</a></iframe>`;




        title3.innerText = ideasTitle[2];
        location3.innerText = ideasLocation[2];
        description3.innerText = ideasDescription[2];
        try {
            fun3.value = ideasFunScale[2];
            creativity3.value = ideasCreativityScale[2];
            physical3.value = ideasPhysicalScale[2];
            mainstream3.value = ideasMainstreamScale[2];
            romantic3.value = ideasRomanticScale[2];
        } catch (e) {
            SendData();
        }
        let adress3 = ideasLocation[2].replaceAll(' ', '%').replaceAll(',', '');
        map3.innerHTML = `<iframe width="100%" height="100%" frameborder="0" scrolling="no"
        marginheight="0" marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${adress3}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
            href="https://www.gps.ie/">gps vehicle tracker</a></iframe>`;




        title4.innerText = ideasTitle[3];
        location4.innerText = ideasLocation[3];
        description4.innerText = ideasDescription[3];
        try {
            fun4.value = ideasFunScale[3];
            creativity4.value = ideasCreativityScale[3];
            physical4.value = ideasPhysicalScale[3];
            mainstream4.value = ideasMainstreamScale[3];
            romantic4.value = ideasRomanticScale[3];
        } catch (e) {
            SendData();
        }
        let adress4 = ideasLocation[3].replaceAll(' ', '%').replaceAll(',', '');
        map4.innerHTML = `<iframe width="100%" height="100%" frameborder="0" scrolling="no"
        marginheight="0" marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${adress4}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
            href="https://www.gps.ie/">gps vehicle tracker</a></iframe>`;



        let Loader = document.querySelector('#loader');
        let Result = document.querySelector('#result');



        Loader.classList.toggle('hidden');
        Result.classList.toggle('hidden');

        jsConfetti.addConfetti({ confettiNumber: 500, });

    }).catch((error) => {
        console.log('error: ', error);
    });
}


