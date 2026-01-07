/* Use the profile below */

const profile = {
    name: "Monkey D. Luffy",
    title: "Captain of the Straw Hat Pirates",
    email: "kingofthepirates@grandline.sea",
    phone: "Den Den Mushi Only",
    location: "Thousand Sunny, Grand Line",
    image: "https://preview.redd.it/can-someone-find-me-the-full-picture-of-luffy-v0-h2pzsqum3vwc1.png?width=1400&format=png&auto=webp&s=874056ae179de44d273e13328f104a1eb1f9c50d",
    bio: [
        "Monkey D. Luffy is the main protagonist of One Piece and a pirate with rubber-like abilities from the Gum-Gum Devil Fruit.",
        "His dream is to become the King of the Pirates by finding the legendary treasure known as the One Piece."
    ],
    cards: [
        {
            title: "Training",
            text: "Trained by Silvers Rayleigh to master all forms of Haki."
        },
        {
            title: "Leadership",
            text: "Leads the Straw Hat Pirates with loyalty, trust, and determination."
        },
        {
            title: "Combat Experience",
            text: "Has fought Warlords, Emperors, Marines, and the World Government."
        }
    ],
    skills: [
        { name: "Strength", value: 95 },
        { name: "Willpower", value: 100 },
        { name: "Leadership", value: 85 }
    ],
    socials: [
        { icon: "fab fa-wikipedia-w", link: "https://onepiece.fandom.com/wiki/Monkey_D._Luffy" },
        { icon: "fab fa-youtube", link: "https://www.youtube.com/results?search_query=monkey+d+luffy" }
    ],
    colors: {
        background: "#f4e04d",
        text: "#1f2933"
    }
};

document.querySelector("#profile-img").src = profile.image;

document.querySelector("#profile-name").innerText = profile.name;
document.querySelector("#profile-title").innerText = profile.title;
document.querySelector("#profile-email").innerText = profile.email;
document.querySelector("#profile-phone").innerText = profile.phone;
document.querySelector("#profile-location").innerText = profile.location;

document.querySelector("#about-heading").innerText = "About Luffy";
document.querySelector("#bio-1").innerText = profile.bio[0];
document.querySelector("#bio-2").innerText = profile.bio[1];

document.querySelector("#card-1-title").innerText = profile.cards[0].title;
document.querySelector("#card-1-text").innerText = profile.cards[0].text;
document.querySelector("#card-2-title").innerText = profile.cards[1].title;
document.querySelector("#card-2-text").innerText = profile.cards[1].text;
document.querySelector("#card-3-title").innerText = profile.cards[2].title;
document.querySelector("#card-3-text").innerText = profile.cards[2].text;

document.querySelector("#skills-heading").innerText = "Abilities & Traits";
document.querySelector("#skills-desc").innerText = "Luffy’s abilities reflect his strength, determination, and leadership.";

profile.skills.forEach((skill, index) => {
    document.querySelector(`#skill-${index + 1}-name`).innerText = skill.name;
    document.querySelector(`#skill-${index + 1}-percent`).innerText = skill.value + "%";
    const bar = document.querySelector(`#skill-${index + 1}-bar`);
    bar.style.width = skill.value + "%";
    bar.value = skill.value;
});

const socialContainer = document.querySelector("#social-links");

profile.socials.forEach(social => {
    socialContainer.insertAdjacentHTML(
        "beforeend",
        `<li>
            <a href="${social.link}" target="_blank" class="rounded-3">
                <i class="${social.icon}"></i>
            </a>
        </li>`
    );
});

document.body.style.backgroundColor = profile.colors.background;
document.body.style.color = profile.colors.text;





