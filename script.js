
const teamMembers = [
    {
        name: 'Russell Wilson',
        accomplishments: '9x Pro Bowler, 2x NFC Champion, 1x Super Bowl Champion',
        career: 'Former star Quarterback for the Seattle Seahawks. Played for the Denver Broncos and currently on the Pittsburgh Steelers.',
        years: '2008-2010',
        img: 'https://static.foxnews.com/foxnews.com/content/uploads/2022/03/Russell-Wilson2.jpg'
    },
    {
        name: 'Bill Burr',
        accomplishments: 'Grammy Award Nominee, Emmy Award Nominee, Ranked by the Rolling Stone as one of the best stand-up comics of all time,',
        career: 'Comedian & Actor',
        years: '1991-1993',
        img: 'https://s1.ticketm.net/dam/a/3d2/3c170070-a7c8-46fe-9d8d-399777e483d2_RETINA_PORTRAIT_3_2.jpg'
    },
    {
        name: 'Zach Galifianakis',
        accomplishments: 'Most known for his role in "The Hangover" trilogy and his countless other roles in comedy movies.',
        career: 'Comedian & Actor',
        years: '1993-1999',
        img: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1141072209.jpeg'
    },

    {
        name: 'Bill Cowher',
        accomplishments: '8x AFC North Champion, 2x AFC Champion, 1x Super Bowl Champion, 1x AP NFL Coach of the Year.',
        career: 'Former NFL Linebacker for the Philadelphia Eagles and Cleveland Browns. Former Head Coach of the Pittsburgh Steelers. Current CBS Sports Analyst',
        years: '1975-1979',
        img: 'https://www.abc27.com/wp-content/uploads/sites/55/2019/01/GettyImages-120971215_1548876085675_69610250_ver1.0-3.jpg?strip=1'
    },

]


function generateTeamCards() {
    const teamCardsContainer = document.getElementById('alumniCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-5')

        card.innerHTML = 
            
        `<div class = "card h-100 shadow border border-3 border-white rounded-3">
            <div class = "card-header redbg">
            <h3 class = "text-white"> ${member.name} </h3>
            </div>
            
            <div class = "card-body redbg">
            <img class="shadow rounded grow w-100" src=${member.img}><br><br>
                <p class="text-white"><b>Years attended: </b> ${member.years}</p>
                <p class="text-white"><b>Accomplishments: </b> ${member.accomplishments}</p>
                <p class="text-white"><b>Career: </b> ${member.career}</p>
            </div>
        </div>`
        
        teamCardsContainer.appendChild(card)
    })
}

window.onload = generateTeamCards


//CODE TAKEN FROM W3SCHOOLS; LINK: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}