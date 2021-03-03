function color(color, message) {
    return "[[b;" + color + ";]" + message + "]";
}

class Skill {
    constructor(name, level) {
        this.skill_name = name;
        this.skill_level = level;
    }
}

const skill_levels = [
    {
        level: 'Beginner',
        color: 'red'
    },
    {
        level: 'Intermediate',
        color: 'orange'
    },
    {
        level: 'Experienced',
        color: 'teal'
    },
    {
        level: 'Mastering',
        color: 'green'
    }
];
const skills = [
    new Skill("Amazon Web Services", 2),
    new Skill("Python", 3),
    new Skill("Java", 2),
    new Skill("Bash", 1),
    new Skill("Android", 2),
    new Skill("Kotlin", 0),
    new Skill("Matlab", 1),
    new Skill("Git", 2),
    new Skill("C", 1),
    new Skill("C++", 1),
    new Skill("Javascript", 0),
    new Skill("Typescript", 0),
    new Skill("Docker", 2),
    new Skill("Cloud Computing", 2),
    new Skill("Tensorflow", 1),
    new Skill("Spring", 0),
    new Skill("Angular", 0)
];
skills.sort((a, b) => (a.skill_name > b.skill_name) ? 1 : ((b.skill_name > a.skill_name) ? -1 : 0));

const fun_facts = [
    "Banging your head against a wall for one hour burns 150 calories.",
    "In Switzerland it is illegal to own just one guinea pig.",
    "Pteronophobia is the fear of being tickled by feathers.",
    "Snakes can help predict earthquakes.",
    "A flock of crows is known as a murder.",
    "So far, two diseases have successfully been eradicated: smallpox and rinderpest.",
    "29th May is officially “Put a Pillow on Your Fridge Day”.",
    "Cherophobia is an irrational fear of fun or happiness.",
    "7% of American adults believe that chocolate milk comes from brown cows.",
    "If you lift a kangaroo’s tail off the ground it can’t hop.",
    "Bananas are curved because they grow towards the sun.",
    "Billy goats urinate on their own heads to smell more attractive to females.",
    "During your lifetime, you will produce enough saliva to fill two swimming pools.",
    "If Pinocchio says “My Nose Will Grow Now”, it would cause a paradox.",
    "Polar bears could eat as many as 86 penguins in a single sitting…",
    "Movie trailers were originally shown after the movie, which is why they were called “trailers”.",
    "An eagle can kill a young deer and fly away with it.",
    "Tennis players are not allowed to swear when they are playing in Wimbledon.",
    "In 2017 more people were killed from injuries caused by taking a selfie than by shark attacks.",
    "A lion’s roar can be heard from 5 miles away.",
    "Saint Lucia is the only country in the world named after a woman.",
    "The United States Navy has started using Xbox controllers for their periscopes.",
    "A sheep, a duck and a rooster were the first passengers in a hot air balloon.",
    "In Uganda, around 48% of the population is under 15 years of age.",
    "The average male gets bored of a shopping trip after 26 minutes.",
    "Approximately 10-20% of U.S. power outages are caused by squirrels.",
    "While trying to find a cure for AIDS, the Mayo Clinic made glow in the dark cats.",
    "A swarm of 20,000 bees followed a car for two days because their queen was stuck inside.",
    "Sea otters hold hands when they sleep so they don’t drift away from each other.",
    "There is a total of 1,710 steps in the Eiffel Tower."
];

$('#terminal').terminal(function (command) {
    const help = color('teal', 'ls') + " - List of technologies and programming languages I have experience with.\n" +
        "Legend: " + color(skill_levels[0].color, skill_levels[0].level) + ", " +
        color(skill_levels[1].color, skill_levels[1].level) + ', ' +
        color(skill_levels[2].color, skill_levels[2].level) + ", " +
        color(skill_levels[3].color, skill_levels[3].level) + "\n\n" +
        color('teal', 'fun-fact') + " - Shows a random fun fact." + "\n\n" +
        color('white', 'Bonus:') + " If you feel lucky, you can try to find the easter egg 😉";
    if (command === 'help') {
        this.echo(help);
    } else if (command === 'ls') {
        for (let i = 0; i < skills.length; i++) {
            this.echo(skills[i].skill_name + " - " +
                color(skill_levels[skills[i].skill_level].color, skill_levels[skills[i].skill_level].level));
        }
    } else if (command === 'fun-fact') {
        let index = Math.floor(Math.random() * (fun_facts.length - 1));
        this.echo(fun_facts[index]);
    } else if (command === 'Show me the ultimate answer to everything!') {
        this.echo("The answer to the great question of live, the universe and everything is ...");
        setTimeout(() => {
            this.echo(".");
        }, 500);
        setTimeout(() => {
            this.echo(".");
        }, 1000);
        setTimeout(() => {
            this.echo(".");
        }, 1500);
        setTimeout(() => {
            this.echo(".");
        }, 2000);
        setTimeout(() => {
            this.echo(".");
        }, 2500);
        setTimeout(() => {
            this.echo(".");
        }, 3000);
        setTimeout(() => {
            this.echo(".");
        }, 3500);
        setTimeout(() => {
            this.echo("[[bg;green;white]                                          ]");
        }, 4995);
        setTimeout(() => {
            this.echo("[[bg;green;white]                    42                    ]");
        }, 5000);
        setTimeout(() => {
            this.echo("[[bg;green;white]                                          ]");
        }, 5005);
    } else {
        this.echo("Unknown command. Please use 'help' to see the available commands.");
    }
}, {
    greetings: "To see available commands type 'help'",
    enabled: false
});
