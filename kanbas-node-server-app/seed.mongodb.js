/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'kanbas';

// Create a new database.
use(database);

db.dropDatabase();

// Create a new collection.
// db.createCollection('users');

// Create a new document in the collection.
courses =
    [
        {
            "number": "RS101",
            "name": "Rocket Propulsion",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "D123",
            "credits": 4,
            "description": "This course provides an in-depth study of the fundamentals of rocket propulsion, covering topics such as propulsion theory, engine types, fuel chemistry, and the practical applications of rocket technology. Designed for students with a strong background in physics and engineering, the course includes both theoretical instruction and hands-on laboratory work"
        },
        {
            "number": "RS102",
            "name": "Aerodynamics",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "D123",
            "credits": 3,
            "description": "This course offers a comprehensive exploration of aerodynamics, focusing on the principles and applications of airflow and its effects on flying objects. Topics include fluid dynamics, airfoil design, lift and drag forces, and the aerodynamic considerations in aircraft design. The course blends theoretical learning with practical applications, suitable for students pursuing a career in aeronautics or astronautics engineering."
        },
        {
            "number": "RS103",
            "name": "Spacecraft Design",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "D123",
            "credits": 4,
            "description": "This course delves into the principles and practices of spacecraft design, offering students a detailed understanding of the engineering and technology behind spacecraft systems. Key topics include spacecraft structure, propulsion, power systems, thermal control, and payload integration. Emphasizing both theoretical concepts and practical skills, the course prepares students for careers in the space industry, with a focus on innovative design and problem-solving in the context of current and future space missions"
        },
        {
            "name": "Organic Chemistry",
            "number": "CH1230",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "D134",
            "credits": 3,
            "description": "Organic Chemistry is an in-depth course that explores the structure, properties, composition, and reactions of organic compounds and materials. The course covers various topics including hydrocarbons, functional groups, stereochemistry, and organic synthesis techniques. Students will learn about the mechanisms of organic reactions, spectroscopic methods for structure determination, and the role of organic chemistry in biological systems. Emphasis is placed on problem-solving and laboratory skills, preparing students for advanced studies in chemistry, medicine, and related fields."
        },
        {
            "name": "Inorganic Chemistry",
            "number": "CH1240",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "D134",
            "credits": 3,
            "description": "Inorganic Chemistry focuses on the properties, structures, and behaviors of inorganic and organometallic compounds. This course covers a range of topics including coordination chemistry, metal complexes, bonding theories, symmetry, and crystal field theory. Students will also explore the role of inorganic chemistry in real-world applications such as catalysis, materials science, and bioinorganic processes. Laboratory work emphasizes synthesis and analysis of inorganic compounds, fostering a deeper understanding of theoretical concepts."
        },
        {
            "name": "Physical Chemistry",
            "number": "CH1250",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "D134",
            "credits": 3,
            "description": "Physical Chemistry merges the principles of physics and chemistry to understand the physical properties of molecules, the forces that act upon them, and the chemical reactions they undergo. Key topics include thermodynamics, kinetics, quantum mechanics, and spectroscopy. The course provides a comprehensive understanding of molecular behavior, reaction dynamics, and the application of mathematical methods in solving chemical problems. Labs focus on experimental techniques and data analysis, equipping students with skills necessary for research and advanced study in chemistry and related fields."
        },
        {
            "name": "Ancient Languages and Scripts of Middle-earth",
            "number": "ME101",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "Languages",
            "credits": 3,
            "description": "This course offers an exploration of the ancient languages and scripts found throughout Middle-earth, including Elvish (Sindarin and Quenya), Dwarvish (Khuzdul), and the Black Speech of Mordor. Students will learn the historical and cultural contexts of these languages, their linguistic structures, and their usage in various inscriptions and texts. Emphasis is on understanding the philological aspects and the role of language in shaping Middle-earth's history and lore.",
            "author": "654f9ec2ea7ead465908d1e3"
        },
        {
            "name": "Wizards, Elves, and Men: Inter-species Diplomacy in Middle-earth",
            "number": "ME102",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "Political Studies",
            "credits": 4,
            "description": "This course explores the complex relationships and diplomatic interactions among the different races of Middle-earth: Elves, Men, Dwarves, and Wizards. Topics include the study of historical alliances, conflicts, and the role of leadership and wisdom in maintaining peace. Students will engage in discussions and case studies on key events in Middle-earth's history, such as the Council of Elrond and the War of the Ring, to understand the principles of diplomacy and conflict resolution in a multi-species context.",
            "author": "654f9ec2ea7ead465908d1e3"
        },
        {
            "name": "History and Practice of Middle-earth Magic",
            "number": "ME103",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "Mystical Studies",
            "credits": 4,
            "description": "This course delves into the mystical and magical aspects of Middle-earth, examining the sources, practitioners, and manifestations of magic. Covering a range of magical beings, including Wizards, Elves, and Ents, as well as artifacts like the Rings of Power and Palantíri, students will learn about the philosophical and ethical dimensions of magic use. The course combines theoretical study with practical insights, offering a unique perspective on the magical forces that shape the events and destinies in the world of Middle-earth.",
            "author": "654f9ec2ea7ead465908d1e3"
        },
        {
            "name": "Principles of Democratic Education",
            "number": "EDU201",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "Education",
            "credits": 3,
            "description": "This course examines the foundations of democratic education, emphasizing the role of education in fostering civic responsibility, critical thinking, and social equality. It explores historical and contemporary models of democratic schooling, the importance of participatory learning, and the development of educational systems that reflect democratic values. Students will engage in discussions on the challenges and opportunities of implementing democratic principles in diverse educational settings."
        },
        {
            "name": "Philosophy of Independence and Liberation",
            "number": "HIS301",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "History",
            "credits": 4,
            "description": "This course provides an in-depth analysis of the philosophical underpinnings of independence and liberation movements, with a focus on Latin American history. It covers the ideologies that fueled the fight for independence, the impact of Enlightenment thought, and the contributions of key figures like Simón Bolívar. The course encourages students to critically examine the concepts of freedom, autonomy, and nation-building in the context of historical and contemporary struggles for liberation."
        },
        {
            "name": "Innovations in Early 19th Century Education",
            "number": "EDU303",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "Education",
            "credits": 3,
            "description": "Focusing on the early 19th century, this course explores innovative educational practices and theories of the time. It highlights the work of leading educational reformers, including Simon Rodríguez, and their contributions to modern pedagogy. Students will study the evolution of educational methods, the integration of practical and theoretical knowledge, and the role of education in social change. The course includes a critical assessment of the lasting impacts of these early innovations on contemporary education systems."
        },
        {
            "name": "Foundations of Christian Ethics",
            "number": "THEO101",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "Theology",
            "credits": 3,
            "description": "This course explores the core principles of Christian ethics as derived from biblical texts and theological traditions. It covers topics such as moral decision-making, virtues and vices, and the role of faith in ethical living. Students will examine contemporary moral issues through the lens of Christian ethics, learning to apply these principles in various real-life contexts. The course encourages critical thinking and compassionate action guided by Christian values.",
            "author": "65500111ea7ead465908d1fa"
        },
        {
            "name": "Early Christianity and the Apostolic Age",
            "number": "HIS201",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "History",
            "credits": 4,
            "description": "This historical course delves into the development of early Christian communities and the Apostolic Age. It focuses on the life and teachings of Jesus Christ, the role of the Apostles, and the spread of Christianity across the Roman Empire. Students will explore primary sources, including the New Testament, to understand the challenges and triumphs of the early Church. The course also examines the formation of key Christian doctrines and the historical context of the Apostolic era.",
            "author": "65500111ea7ead465908d1fa"
        },
        {
            "name": "Leadership and Service in Christian Communities",
            "number": "MIN301",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "Ministry",
            "credits": 3,
            "description": "This course offers insights into effective leadership and service within Christian communities. Drawing on biblical teachings and the example of Saint Peter, it addresses the spiritual, ethical, and practical aspects of Christian leadership. Topics include pastoral care, community building, servant leadership, and the stewardship of church resources. Students will engage in practical exercises and discussions, preparing them for various roles in ministry and community service.",
            "author": "65500111ea7ead465908d1fa"
        },
        {
            "name": "Sufi Philosophy and Mystical Traditions",
            "number": "ISL301",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "Islamic Studies",
            "credits": 3,
            "description": "This course delves into the rich and profound world of Sufism, exploring its philosophical underpinnings, mystical practices, and historical development. Students will study key Sufi figures, including Rumi, Hafiz, and Khidr, and their teachings on love, divine union, and the journey of the soul. The course also examines various Sufi orders, their rituals, and contributions to Islamic spirituality and culture.",
            "author": "655000a4ea7ead465908d1f5"
        },
        {
            "name": "Ethical Wisdom in Islamic Teachings",
            "number": "ISL202",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "Islamic Ethics",
            "credits": 3,
            "description": "Focusing on the ethical dimensions of Islam, this course examines the moral teachings and wisdom found in the Quran and Hadith, with a special emphasis on the figure of Khidr. It explores concepts such as divine guidance, free will, moral reasoning, and the pursuit of righteousness. Students will engage in critical discussions on how these teachings apply to contemporary ethical dilemmas and personal spiritual growth.",
            "author": "655000a4ea7ead465908d1f5"
        },
        {
            "name": "Understanding the Unseen: Islamic Esotericism",
            "number": "ISL403",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "Islamic Mysticism",
            "credits": 4,
            "description": "This advanced course explores the esoteric aspects of Islam, delving into topics such as the nature of the unseen world, spiritual symbolism in Islamic texts, and the role of mystical experiences. Drawing on the stories and teachings of Khidr, the course offers students a deeper understanding of the interplay between the material and spiritual realms, encouraging a reflective and introspective approach to religious study and practice.",
            "author": "655000a4ea7ead465908d1f5"
        },
        {
            "name": "Ancient Chinese Environmental Management",
            "number": "ENV101",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "Environmental Studies",
            "credits": 3,
            "description": "This course explores the principles and practices of environmental management in ancient China, with a focus on the legendary achievements of Yu the Great in flood control and irrigation. Students will examine ancient Chinese approaches to water management, agriculture, and land use, and their relevance to modern environmental challenges. The course also delves into the integration of these practices with traditional Chinese philosophies and governance."
        },
        {
            "name": "Leadership Lessons from Chinese Mythology",
            "number": "MGT201",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "Management Studies",
            "credits": 4,
            "description": "Drawing on stories from Chinese mythology and history, this course examines the qualities and actions of effective leaders, using Yu the Great as a central figure. Students will explore themes of perseverance, vision, and ethical governance as demonstrated in Yu's legendary endeavors. The course also covers leadership lessons from other notable figures in Chinese mythology and their impact on the formation of Chinese cultural and political identity."
        },
        {
            "name": "Hydraulic Engineering in Ancient Civilizations",
            "number": "ENG303",
            "startDate": "2023-01-10",
            "endDate": "2023-05-15",
            "department": "Engineering",
            "credits": 4,
            "description": "This engineering course offers an in-depth study of hydraulic projects in ancient civilizations, with a special focus on Yu the Great's flood control systems. Covering the design, construction, and impact of ancient dams, canals, and irrigation systems, the course provides insights into early engineering marvels. Comparative studies of hydraulic engineering in other ancient civilizations, such as Mesopotamia and the Indus Valley, are also included to provide a broader historical and technological context."
        }
    ]
courseNumberToId = {}
coursesInsertResult = db.getCollection('courses').insertMany(
    courses
);

for (let i = 0; i < courses.length; i++) {
    courseNumberToId[courses[i].number] = coursesInsertResult.insertedIds[i];
}

db.getCollection('modules').insertMany(
    [
        {
            "name": "Introduction to Rocket Propulsion",
            "description": "Basic principles of rocket propulsion and rocket engines.",
            "course": courseNumberToId["RS101"],
            "lessons": [
                {
                    "id": "L101",
                    "name": "History of Rocketry",
                    "description": "A brief history of rocketry and space exploration.",
                    "module": "M101"
                },
                {
                    "id": "L102",
                    "name": "Rocket Propulsion Fundamentals",
                    "description": "Basic principles of rocket propulsion.",
                    "module": "M101"
                },
                {
                    "id": "L103",
                    "name": "Rocket Engine Types",
                    "description": "Overview of different types of rocket engines.",
                    "module": "M101"
                }
            ]
        },
        {
            "name": "Fuel and Combustion",
            "description": "Understanding rocket fuel, combustion processes, and efficiency.",
            "course": courseNumberToId["RS101"],
            "lessons": [
                {
                    "id": "L201",
                    "name": "Rocket Fuel",
                    "description": "Overview of different types of rocket fuels.",
                    "module": "M102"
                },
                {
                    "id": "L202",
                    "name": "Combustion Processes",
                    "description": "Understanding combustion processes and efficiency.",
                    "module": "M102"
                },
                {
                    "id": "L203",
                    "name": "Combustion Instability",
                    "description": "Understanding combustion instability and mitigation.",
                    "module": "M102"
                }
            ]
        },
        {
            "name": "Nozzle Design",
            "description": "Principles of rocket nozzle design and performance optimization.",
            "course": courseNumberToId["RS101"],
            "lessons": [
                {
                    "id": "L301",
                    "name": "Nozzle Design",
                    "description": "Overview of different types of rocket nozzles.",
                    "module": "M103"
                },
                {
                    "id": "L302",
                    "name": "Nozzle Performance",
                    "description": "Understanding nozzle performance and efficiency.",
                    "module": "M103"
                },
                {
                    "id": "L303",
                    "name": "Nozzle Optimization",
                    "description": "Optimizing nozzle design for specific applications.",
                    "module": "M103"
                }
            ]
        },
        {
            "name": "Fundamentals of Aerodynamics",
            "description": "Basic aerodynamic concepts and fluid dynamics principles.",
            "course": courseNumberToId["RS102"],
        },
        {
            "name": "Subsonic and Supersonic Flow",
            "description": "Understanding subsonic and supersonic aerodynamic behaviors.",
            "course": courseNumberToId["RS102"],
        },
        {
            "name": "Aerodynamic Heating",
            "description": "Study of aerodynamic heating and thermal protection systems.",
            "course": courseNumberToId["RS102"],
        },
        {
            "name": "Spacecraft Structural Design",
            "description": "Fundamentals of designing spacecraft structures and materials selection.",
            "course": courseNumberToId["RS103"],
        },
        {
            "name": "Orbital Mechanics",
            "description": "Understanding orbital dynamics and mission planning.",
            "course": courseNumberToId["RS103"],
        },
        {
            "name": "Spacecraft Systems Engineering",
            "description": "Overview of spacecraft systems and subsystems engineering.",
            "course": courseNumberToId["RS103"],
        }
    ]
);
db.getCollection('assignments').insertMany(
    [
        {
            "title": "Propulsion Assignment",
            "course": courseNumberToId["RS101"]
        },
        {
            "title": "Combustion Analysis",
            "course": courseNumberToId["RS101"]
        },
        {
            "title": "Nozzle Design Project",
            "course": courseNumberToId["RS101"]
        },
        {
            "title": "Aerodynamics Quiz",
            "course": courseNumberToId["RS102"]
        },
        {
            "title": "Flow Analysis",
            "course": courseNumberToId["RS102"]
        },
        {
            "title": "Heating Analysis",
            "course": courseNumberToId["RS102"]
        },
        {
            "title": "Structural Design Task",
            "course": courseNumberToId["RS103"]
        },
        {
            "title": "Orbital Calculations",
            "course": courseNumberToId["RS103"]
        },
        {
            "title": "Systems Engineering Exam",
            "course": courseNumberToId["RS103"]
        }
    ]
);
db.getCollection('users').insertMany(
    [
        {
            "username": "iron_man",
            "password": "stark123",
            "firstName": "Tony",
            "lastName": "Stark",
            "email": "tony@stark.com",
            "dob": "1970-05-29",
            "role": "STUDENT",
            "loginId": "001234561S",
            "section": "S101",
            "lastActivity": "2020-10-01",
            "totalActivity": "10:21:32"
        },
        {
            "username": "dark_knight",
            "password": "wayne123",
            "firstName": "Bruce",
            "lastName": "Wayne",
            "email": "bruce@wayne.com",
            "dob": "1972-02-19",
            "role": "STUDENT",
            "loginId": "001234562S",
            "section": "S101",
            "lastActivity": "2020-11-02",
            "totalActivity": "15:32:43"
        },
        {
            "username": "capt_america",
            "password": "rogers123",
            "firstName": "Steve",
            "lastName": "Rogers",
            "email": "steve@avengers.com",
            "dob": "1918-07-04",
            "role": "STUDENT",
            "loginId": "001234563S",
            "section": "S101",
            "lastActivity": "2020-10-02",
            "totalActivity": "23:32:43"
        },
        {
            "username": "black_widow",
            "password": "romanoff123",
            "firstName": "Natasha",
            "lastName": "Romanoff",
            "email": "natasha@avengers.com",
            "dob": "1984-11-22",
            "role": "TA",
            "loginId": "001234564S",
            "section": "S101",
            "lastActivity": "2020-11-05",
            "totalActivity": "13:23:34"
        },
        {
            "username": "thor_odinson",
            "password": "mjolnir123",
            "firstName": "Thor",
            "lastName": "Odinson",
            "email": "thor@asgard.com",
            "dob": "982-05-25",
            "role": "STUDENT",
            "loginId": "001234565S",
            "section": "S101",
            "lastActivity": "2020-12-01",
            "totalActivity": "11:22:33"
        },
        {
            "username": "hulk_smash",
            "password": "banner123",
            "firstName": "Bruce",
            "lastName": "Banner",
            "email": "bruce@avengers.com",
            "dob": "1969-12-18",
            "role": "STUDENT",
            "loginId": "001234566S",
            "section": "S101",
            "lastActivity": "2020-12-01",
            "totalActivity": "22:33:44"
        },
        {
            "username": "ring_bearer",
            "password": "shire123",
            "firstName": "Frodo",
            "lastName": "Baggins",
            "email": "frodo@shire.com",
            "dob": "1368-09-22",
            "role": "FACULTY",
            "loginId": "001234567S",
            "section": "S101",
            "lastActivity": "2020-12-02",
            "totalActivity": "44:33:22"
        },
        {
            "username": "strider",
            "password": "aragorn123",
            "firstName": "Aragorn",
            "lastName": "Elessar",
            "email": "aragorn@gondor.com",
            "dob": "2931-03-01",
            "role": "TA",
            "loginId": "001234568S",
            "section": "S101",
            "lastActivity": "2020-12-04",
            "totalActivity": "12:23:34"
        },
        {
            "username": "elf_archer",
            "password": "legolas123",
            "firstName": "Legolas",
            "lastName": "Greenleaf",
            "email": "legolas@mirkwood.com",
            "dob": "2879-07-15",
            "role": "FACULTY",
            "loginId": "001234569S",
            "section": "S101",
            "lastActivity": "2020-11-11",
            "totalActivity": "21:32:43"
        }
    ]
);
