// Portfolio Configuration
// Update these values to customize your portfolio

const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Elio Gereige",
        title: "Industrial PhD Student in Nanomedicine",
        subtitle: "Biomedical and Mechanical Engineer",
        email: "elio.gereige@outlook.com",
        location: "Bordeaux, Nouvelle-Aquitaine, France",
        linkedin: "https://www.linkedin.com/in/eliogereige",
        github: "https://github.com/eliogereige",
        orcid: "https://orcid.org/0000-0003-4610-8247"
    },

    // Hero Section
    hero: {
        description: "Biomedical and Mechanical Engineer, and PhD Candidate in Nanomedicine, with 3+ years of cross-functional R&D experience in the healthcare and pharmaceuticals. Skilled in leading teams and projects and delivering solutions from concept to prototype. Eager to leverage my technical and managerial experience to drive innovation and product success in Product Management roles.",
        stats: {
            yearsExperience: "3+",
            projectsCompleted: "15+",
            publications: "1+"
        }
    },

    // About Section
    about: {
        title: "From R&D to Project Management",
        paragraphs: [
            "As a PhD student in nanomedicine with a background in biomedical and mechanical engineering, I've spent years immersed in research and development, working on cutting-edge projects that bridge the gap between engineering innovation and real-world applications.",
            "My journey into project management began when I realized that the most brilliant technical solutions often fail without proper planning, coordination, and execution. This insight drove me to learn project management methodologies and apply them to complex engineering challenges.",
            "I specialize in managing projects that require deep technical understanding combined with strategic thinking - from medical device development to mechanical systems optimization."
        ],
        highlights: [
            "PhD in Nanomedicine",
            "3+ Years R&D Experience",
            "Project Management Certification (In Progress)"
        ]
    },

    // Experience Timeline
    experience: [
        {
            title: "Industrial PhD Candidate",
            date: "Feb 2024 - Present",
            institution: "Inside Therapeutics (InsideTx), France",
            department: "Nanomedicine Research",
            achievements: [
                "Assisted in design, prototyping, and testing of NanoPulse – novel organic nanoparticle synthesis machine",
                "Worked on modeling and full characterization of NanoPulse micro-mixing technology for LNP synthesis",
                "Developed Python-based application to simulate and optimize mixing process of NanoPulse"
            ]
        },
        {
            title: "R&D Engineer",
            date: "Nov 2023 - Feb 2024",
            institution: "Inside Therapeutics (InsideTx), France",
            department: "Biomedical Engineering & Product Development",
            achievements: [
                "Designed, 3D-printed, assembled, and tested characterization bench for microfluidic chips of TAMARA",
                "Developed R-based programs to automatically analyze and process results from chip characterization bench",
                "Worked on modeling and characterization of micro-mixing technology for LNP synthesis"
            ]
        },
        {
            title: "R&D Biomedical Engineering Intern",
            date: "Apr 2023 - Sep 2023",
            institution: "Inside Therapeutics (InsideTx), France",
            department: "Biomedical Engineering & Nanomedicine Research",
            achievements: [
                "Characterized and tested novel active micro-mixing prototype for liposome and lipid nanoparticle synthesis",
                "Developed autonomous image analysis algorithms using ImageJ to validate micro-mixer's mathematical model",
                "Synthesized liposomes of controlled diameters and characterized their size and PDI via DLS"
            ]
        },
        {
            title: "R&I Biomedical Engineering Intern",
            date: "May 2022 - Jul 2022",
            institution: "Hôpital Marie-Lannelongue, France",
            department: "Cardiovascular Innovation & Medical Device Development",
            achievements: [
                "Optimized pre-clinical Ex-Vivo Heart Perfusion (EVHP) system in confidential interdisciplinary project",
                "Exchanged with Medical Doctors and applied bio-fluid mechanics concepts",
                "Gained cardiovascular-related knowledge and medical device development experience"
            ]
        },
        {
            title: "Biomedical Engineering Apprentice",
            date: "Feb 2022 - Jul 2022",
            institution: "EpiLAB, France",
            department: "Electrochemistry & Biosensor Development",
            achievements: [
                "Conducted electrochemistry experiments to validate potentiostat and detect substrates/products",
                "Developed experimental protocols for electrochemical detection of gold nanoparticles (AuNPs)",
                "Implemented Differential Pulse Voltammetry (DPV) techniques"
            ]
        },
        {
            title: "Microfluidics Engineering Intern",
            date: "Apr 2022 - May 2022",
            institution: "LadHyX (CNRS – École Polytechnique), France",
            department: "Microfluidics & Hydrogel Characterization",
            achievements: [
                "Identified elasticity of PEGDA hydrogels using microfluidic pipette chips",
                "Determined added resistance of PEGDA hydrogels in micro-channels",
                "Acquired lab skills: PDMS microfluidics chip fabrication, solution preparation, digital microscopy"
            ]
        },
        {
            title: "Mechanical Engineering Intern",
            date: "Mar 2021 - May 2021",
            institution: "Pharmaline – Malia Group, Lebanon",
            department: "Pharmaceutical Manufacturing & Maintenance",
            achievements: [
                "Created Standard Operating Procedures (SOPs) and Preventive Maintenance Logbooks for 11 pharmaceutical machines",
                "Studied steam generation and water purification systems, identified spare parts required for each",
                "Assisted in selection of premises' new Computerized Maintenance Management System (CMMS)"
            ]
        },
        {
            title: "Undergraduate Research Assistant",
            date: "Feb 2020 - Dec 2020",
            institution: "Lebanese American University, Lebanon & Stellantis, France",
            department: "Automotive Engineering Research",
            achievements: [
                "Validated thermodynamic simulations for different Stirling configurations using REFPROP and MS Excel",
                "Performed MATLAB simulations on vehicle model using bi-level optimization technique",
                "Participated in XVI International Forum-Contest of Students and Young Researchers"
            ]
        },
        {
            title: "Mechanical Engineering Intern",
            date: "Jun 2019",
            institution: "S.L.C.B. – LafargeHolcim, Lebanon",
            department: "Industrial Maintenance & Optimization",
            achievements: [
                "Optimized bearings' preventive maintenance, reducing waste through lubrication optimization",
                "Set walk-around inspection list for plant's new boiler and weekly inspection sheet for water treatment",
                "Acquired on-field experience by observing corrective maintenance operations"
            ]
        }
    ],

    // Education
    education: [
        {
            title: "Industrial PhD Candidate",
            date: "Feb 2024 - Present",
            institution: "MINT [Université d'Angers – UMR Inserm 1066 – CNRS 6021], France",
            field: "Nanomedicine - Microfluidics, Micromixing, LNPs, Numerical Simulation",
            achievements: [
                "Received 'CRS 2024 Best Poster Award' for research presentation",
                "Received 'Best Oral Communication Award' at Scientific Day of École Doctorale Biologie Santé",
                "Presented at international conferences and scientific days in nanomedicine field",
                "Research focus: Microfluidics, Micromixing, Lipid Nanoparticles, Numerical Simulation"
            ]
        },
        {
            title: "Master's Degree (PhD Track)",
            date: "2021 - 2023",
            institution: "École Polytechnique – Institut Polytechnique de Paris, France",
            field: "Biomedical Engineering - Biomechanics & Biophysics",
            achievements: [
                "Major: Biomechanics & Biophysics; Minor: Sensors & Devices / Biomaterials",
                "Cumulative GPA: 16.63/20; Ranked 2nd in class",
                "Received Excellence Scholarship for M1 & M2",
                "Specialized in biomedical engineering and computational mechanics"
            ]
        },
        {
            title: "Bachelor of Engineering",
            date: "2017 - 2021",
            institution: "Lebanese American University, Lebanon",
            field: "Mechanical Engineering",
            achievements: [
                "Cumulative GPA: 3.86/4; Ranked 5th in class",
                "High Distinction, Distinction List of the School of Engineering",
                "The Charbel Khairallah Endowed Award of Excellence in Engineering",
                "Active in ASME, LAU Entrepreneurship Club, and LAU Robotics Club"
            ]
        }
    ],

    // Projects
    projects: [
        {
            title: "RBC Drug Delivery System",
            description: "Led the development of a novel red blood cell-based drug delivery system for targeted therapeutic delivery, managing cross-functional teams and coordinating with clinical partners.",
            icon: "fas fa-heartbeat",
            tags: ["Project Management", "Biomedical", "R&D", "Drug Delivery"],
            metrics: {
                duration: "18",
                teamSize: "12",
                budget: "$750K"
            }
        },
        {
            title: "Tennis Ball Collector",
            description: "Designed and developed an automated tennis ball collection system using mechanical engineering principles and innovative design solutions.",
            icon: "fas fa-table-tennis",
            tags: ["Mechanical", "Automation", "Design", "Prototyping"],
            metrics: {
                duration: "6",
                teamSize: "4",
                budget: "$25K"
            }
        },
        {
            title: "Tower Crane Design",
            description: "Engineered and optimized a tower crane system for construction applications, improving efficiency and safety standards.",
            icon: "fas fa-cogs",
            tags: ["Mechanical", "Construction", "Safety", "Optimization"],
            metrics: {
                duration: "12",
                teamSize: "8",
                budget: "$200K"
            }
        }
    ],

    // Skills
    skills: {
        projectManagement: [
            { name: "Product Development", level: 85 },
            { name: "Prototyping", level: 90 },
            { name: "Team Leadership", level: 80 },
            { name: "Problem Solving", level: 85 }
        ],
        technical: [
            { name: "CAD Design", level: 90 },
            { name: "Data Analysis", level: 85 },
            { name: "Programming", level: 80 },
            { name: "Simulation", level: 85 }
        ],
        tools: [
            { name: "AutoCAD", icon: "fas fa-drafting-compass" },
            { name: "SolidWorks", icon: "fas fa-cube" },
            { name: "MATLAB", icon: "fas fa-chart-bar" },
            { name: "Python", icon: "fab fa-python" },
            { name: "R", icon: "fas fa-chart-line" },
            { name: "ANSYS", icon: "fas fa-cogs" },
            { name: "COMSOL", icon: "fas fa-microchip" },
            { name: "LabVIEW", icon: "fas fa-flask" },
            { name: "ImageJ", icon: "fas fa-microscope" },
            { name: "3D Printing", icon: "fas fa-print" }
        ]
    },

    // Contact
    contact: {
        message: "I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about engineering and project management, feel free to reach out."
    },

    // Colors (updated to match the new palette)
    colors: {
        primary: "#098698",
        primaryDark: "#3D444B",
        primaryLight: "#AEC0C2",
        accentLight: "#D9D4D1",
        accent: "#BAB1AD",
        accentDark: "#505A63",
        gradient: "linear-gradient(135deg, #098698 0%, #3D444B 100%)"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
} 