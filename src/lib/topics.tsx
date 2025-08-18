import { url } from "inspector";

const topics = [
    {
      id: 1,
      title: "Science Communication",
      description: "Examining the importance of evidence-based communication, including the role of science communication in a democratic society.",
      meetings: [
        {
          date: "Tu, Aug 19",
          topic: "Course overview and introduction",
          activities: [
            {
              title: "Slides",
              url: "https://docs.google.com/presentation/d/1hutd4lpwzqO-RZKIL1GDzUOc_O5UYFVdwxOpOBuBkJI/edit?slide=id.g3783a768271_0_49#slide=id.g3783a768271_0_49",
              draft: 1
            },
            {
              title: "Syllabus",
              url: "./syllabus/",
            },
            {
              title: "AI Policy Activity",
              url: "./activities/ai-policy/",
              draft: 1
            },
          ],
        },
        {
          date: "Th, Aug 21",
          topic: "Introduction to science communication",
          activities: [{
            title: "Slides",
            url: "https://docs.google.com/presentation/d/1-sJCYIeiRY0Ipx0xwzy0MESvKaExJEU8MdmzxG1wyt8/edit?usp=sharing",
            draft: 1
          },
          {
            title: "Discussion Questions",
            url: "./activities/communication01/",
            draft: 1
          }
          ],
          readings: [
            {
              citation: (<>Druckman, J. N., Ellenbogen, K. M., Scheufele, D. A., & Yanovitzky, I. (2025). <em>An agenda for science communication research and practice</em>. Proceedings of the National Academy of Sciences, 122(27), e2400932122.</>), 
              url: "https://www.pnas.org/doi/epdf/10.1073/pnas.2400932122"
            },
            {
              citation: (<>Thomas, G., & Durant, J. (1987). <em>Why should we promote the public understanding of science?</em> Scientific literacy papers, 1, 1-14.</>), 
              url: "https://ocw.mit.edu/courses/sts-014-principles-and-practice-of-science-communication-spring-2006/9a2dfa5e9d69b2c0bd06b38606827f1c_durant_promote.pdf"
            },
          ]
        },
        {
          date: "Tu, Aug 26",
          topic: "Communicating science in politicized environments",
          activities: [
            { 
              title: "Who Said It? - Elite Cues in Environmental News",
              url: "./activities/communication02/",
              draft: 1
            }
          ],
          readings: [
            { 
              citation: (<>A. Lupia, Communicating science in politicized environments, Proc. Natl. Acad. Sci. U.S.A. 110 (supplement_3) 14048-14054, https://doi.org/10.1073/pnas.1212726110 (2013).</>), 
              url: "https://doi.org/10.1073/pnas.1212726110"
            },
            { 
              citation: "A. Tyson, C. Funk, B. Kennedy, What the Data Says About Americans' Views of Climate Change (Pew Research Center, 2023).",
              url: "https://www.pewresearch.org/short-reads/2023/08/09/what-the-data-says-about-americans-views-of-climate-change/"
            },
          ],
          optionalReadings: [
            { 
              citation: "T. Bolsen, J. N. Druckman, Do partisanship and politicization undermine the impact of a scientific consensus message about climate change? Group Process Intergr. Relat. 21, 389–402 (2018).",
              url: "https://faculty.wcas.northwestern.edu/jnd260/pub/Bolsen%20and%20Druckman%20Do%20Partisanship%20and%20Politicization%20Undermine.pdf"
            },
            { 
              citation: "E. Merkley, D. A. Stecula, Party cues in the news: Democratic elites, Republican backlash, and the dynamics of climate skepticism. Br. J. Polit. Sci. 51, 1439–1456 (2021)",
              url: "https://www.researchgate.net/publication/338823789_Party_Cues_in_the_News_Democratic_Elites_Republican_Backlash_and_the_Dynamics_of_Climate_Skepticism"
            },
            { 
              citation: "L. Van Boven, P. J. Ehret, D. K. Sherman, Psychological barriers to bipartisan public support for climate policy. Perspect. Psychol. Sci. 13, 492–507 (2018).",
              url: "https://journals.sagepub.com/doi/10.1177/1745691617748966"
            },
            { 
              citation: "M. Vlasceanu et al., Addressing climate change with behavioral science: A global intervention tournament in 63 countries. Sci. Adv. 10, eadj5778 (2024).",
              url: "https://pubmed.ncbi.nlm.nih.gov/38324680/"
            },
          ],
          assigned: {
            titleShort: "Homework 1",
            title: "Analyze a public communication campaign",
            url: "./assignments/hw01/",
            draft: 1
          }
        },
      ]
    },
    {id: 2,
      title: "Data",
      description: "An overview of data types, schemas, metadata, provenance, and potential sources and consequences of data bias.",
      meetings: [
        {
          date: "Th, Aug 28",
          topic: "Data Fundamentals",
          readings: [
            {
              citation: (<>Gitelman, Lisa. &quot;Raw Data&quot; is an Oxymoron (Introduction)</>),
              url: "https://dsl.lsu.edu/nehtextualdata/wp-content/uploads/2017/11/RawData.pdf"
            },
            {
              citation: (<>Abailable through the Ramsey Library: Chapter 1. Conceptualising Data. Kitchin, R. (2014). <em>The data revolution: Big data, open data, data infrastructures and their consequences</em>. Sage.</>),
              url: "https://drive.google.com/file/d/1WkUeYB0mpsoURsy3B8RIYXzG5kqNl1Z2/view?usp=sharing"
            },
          ],
          activities: [
            {
              title: "Slides",
              url: "#",
              draft: 1
            },
            {
              title: "Data Activity",
              url: "./activities/data01/",
              draft: 1
            }
          ],
        },
        {
          date: "Tu, Sep 2",
          topic: "Lab 1: Constructing data",
          activities: [
            { 
              title: "Slides",
              url: "#",
              draft: 1
            },
            {
              title: "Lab 1: Introduction to Data",
              url: "./activities/data01/",
              draft: 1
            }
          ],
          due: {
            titleShort: "Homework 1",
            title: "Analyze a public communication campaign",
            url: "./assignments/hw01/",
            draft: 1
          }
        },
        {
          date: "Th, Sep 4",
          topic: "Data bias: Sources and consequences ",
          activities: [
            {
              title: "Slides",
              url: "#",
              draft: 1
            }
          ]
        },
      ]
    },
    {
      id: 3,
      title: "Data Visualization",
      description: "An overview of data visualization principles and techniques.",
      meetings: [
        {
          date: "Tu, Sep 9",
          topic: "What is the purpose of data visualization?",
          readings: [
            {
              citation: (<>Norman, Donald, Things that make us smart.</>)
            },
            {
              citation: (<>Chapter 1: Graphical Excellence, In The Visual Display of Quantitative Information. Tufte.</>),            },
            {
              citation: (<>Chapter 2: Graphical Integrity, In The Visual Display of Quantitative Information. Tufte.</>),
            },
            {
              citation: (<>Chapter 3: Sources of Graphical Integrity, In The Visual Display of Quantitative Information. Tufte.</>),
            }
          ]
        },
        {
          date: "Th, Sep 11",
          topic: "Good and bad data visualizations",
        },
        {
          date: "Tu, Sep 16",
          topic: "Perception",
          readings: [
            {
              citation: (<><em>Perception in Visualization</em>. Christopher G. Healey. Department of Computer Science, North Carolina State University.</>),
              url: "https://www.csc2.ncsu.edu/faculty/healey/PP/"
            },
            {
              citation: (<>Durand, F. (2002, July). <em>Perceptual and artistic principles for effective computer depiction</em> [Course materials]. SIGGRAPH 2002, San Antonio, Texas. Massachusetts Institute of Technology.</>),
              url: "https://people.csail.mit.edu/fredo/SIG02_ArtScience/"
            }
          ],
          assigned: {
            titleShort: "Homework 2",
            title: "Critique an information visualization in the news",
            url: "./assignments/hw02/",
            draft: 1
          }
        },
        {
          date: "Th, Sep 18",
          topic: "Other visualization techniques (visualizing uncertainty; geospatial visualizations)",          
        },
      ]
    },
    {
      id: 4,
      title: "Visualization Tools & Technologies",
      description: "An overview of tools and technologies for creating interactive visualizations.",
      meetings: [ 
        {
          date: "Tu, Sep 23",
          topic: "Introduction to HTML and CSS",
          due: {
            titleShort: "Homework 2",
            title: "Critique an information visualization in the news",
            url: "./assignments/hw02/",
            draft: 1
          }
        },
        {
          date: "Th, Sep 25",
          topic: "Lab 2: HTML and CSS",
        },
        {
          date: "Tu, Sep 30",
          topic: "Introduction to Observable (and JavaScript)",
        },
        {
          date: "Th, Oct 2",
          topic: "Lab 3: Building charts with observable",
        },
        {
          date: "Tu, Oct 7",
          holiday: true,
          topic: "Fall Break - No class",
        },
        {
          date: "Th, Oct 9",
          topic: "Interaction with Observable",
        },
        {
          date: "Tu, Oct 14",
          topic: "Lab 4: Interactive charts and maps with Observable"
        },
        {
          date: "Th, Oct 16",
          topic: "Homework 3 Presentations: Visualization Redesigns",
        },
        
      ]
    },
    {
      id: 5,
      title: "Design",
      description: "An overview of design principles and techniques for creating effective visualizations.",
      meetings: [
        {
          date: "Tu, Oct 21",
          topic: "Fundamentals of design",
          readings: [
            {
              citation: (<>Norman, D. A. (1994). <em>Things that make us smart</em>. Basic Books. <em>Chapter 3: The Power of Representation</em></>),
              url: "https://hci.ucsd.edu/220/representation.pdf"
            }
          ]
        },
        {
          date: "Th, Oct 23",
          topic: "Creating effective layouts",
        },
        {
          date: "Tu, Oct 28",
          topic: "Lab 5: Introduction to Figma",
        },
        {
          date: "Th, Oct 30",
          topic: "Introduction to storyboarding",
        },
        {
          date: "Tu, Nov 4",
          topic: "Lab 6: Wireframing and storyboarding with Figma",
        },
        {
          date: "Th, Nov 6",
          topic: "Incorporating qualitative and crowd-sourced data"
        },
        {
          date: "Tu, Nov 11",
          topic: "Lab 7: PhotoVoice"
        },
      ]
    },
    {
      id: 6,
      title: "Special Topics",
      description: "Case studies and special topics. TBD.",
      meetings: [
        {
          date: "Th, Nov 13",
          topic: "TBD"
        },
        {
          date: "Tu, Nov 18",
          holiday: true,
          topic: "Symposium - No class"
        },
        {
          date: "Th, Nov 20",
          topic: "TBD",
        },
        {
          date: "Tu, Nov 25",
          topic: "TBD",
        },
        {
          date: "Th, Nov 27",
          holiday: true,
          topic: "Thanksgiving Break - No class",
        },
        {
          date: "Tu, Dec 2",
          topic: "TBD",
        },

      ]
    }
  ];

export default topics;