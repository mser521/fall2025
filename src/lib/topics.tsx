import { url } from "inspector";

const topics = [
    {
      id: 1,
      title: "Science Communication",
      description: "Understanding the importance and audience of evidence-based communication",
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
          ]
        },
      ]
    },
    {id: 2,
      title: "Data",
      description: "All the data stuff...",
      meetings: [
        {
          date: "Th, Aug 28",
          topic: "Data Foundations I: What is data?",
          readings: [
            {
              citation: (<>Gitelman, Lisa. &quot;Raw Data&quot; is an Oxymoron (Introduction)</>),
              url: "https://dsl.lsu.edu/nehtextualdata/wp-content/uploads/2017/11/RawData.pdf"
            },
            {
              citation: (<>Baynes, K., & Mitchell, A. (2020, November 4). <em>The Common Metadata Repository: The foundation of NASA&apos;s Earth observation data</em>. Earthdata.</>),
              url: "https://www.earthdata.nasa.gov/news/feature-articles/common-metadata-repository-foundation-nasas-earth-observation-data"
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
          assigned: "Homework 1: Analyze a public communication campaign"
        },
        {
          date: "Tu, Sep 2",
          topic: "Data Foundations II: Categorization, and Classification",
          readings: [
            {
              citation: (<>Kitchin, R. (2014). <em>The Data Revolution: Big Data, Open Data, Data Infrastructures and Their Consequences</em>. Sage. Chapter 1. Conceptualising Data. TODO: Contact Ramsey Library.</>),
              url: "https://methods.sagepub.com/book/mono/the-data-revolution/chpt/conceptualising-data"
            }
          ],
          activities: [
            { 
              title: "Slides",
              url: "#",
              draft: 1
            },
            {
              title: "Data & Public Trust",
              url: "./activities/data02/",
              draft: 1
            }
          ],
        },
        {
          date: "Th, Sep 4",
          topic: "Data Foundations III: Bias & Trust",
        },
      ]
    },
    {
      id: 3,
      title: "Data Visualization",
      description: "Data Concepts: Qualitative and quantitative data, provenance, representation, bias, Theory: Burtin, Tufte, Quant Practice: Google Sheets; Observable, Qual Practice: Digital Storytelling",
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
          topic: "Discussion of good and bad visualizations",
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
          ]
        },
        {
          date: "Th, Sep 18",
          topic: "Lab 4: Observable",          
        },
        {
          date: "Tu, Sep 23",
          topic: "Spatial Visualizations",
        },
        {
          date: "Th, Sep 25",
          topic: "Lab 5: Web GIS",
        },
      ]
    },
    {
      id: 4,
      title: "Visualizing Qualitative Data",
      description: "Uncertainty, scale, complexity, time, and geospatial",
      meetings: [ 
        {
          date: "Tu, Sep 30",
          topic: "Participatory Methods",
        },
        {
          date: "Th, Oct 2",
          topic: "Lab 6: PhotoVoice",
        },
        {
          date: "Tu, Oct 7",
          holiday: true,
          topic: "Fall Break - No class",
        },
        {
          date: "Th, Oct 9",
          topic: "Uncertainty",
        },
        {
          date: "Tu, Oct 14",
          topic: "Data about time and space"
        },
        {
          date: "Th, Oct 16",
          topic: "TBD",
        },
        
      ]
    },
    {
      id: 5,
      title: "Design",
      description: "Visualizing data to support decision-making",
      meetings: [
        {
          date: "Tu, Oct 21",
          topic: "Design Part 1: Design",
          readings: [
            {
              citation: (<>Norman, D. A. (1994). <em>Things that make us smart</em>. Basic Books. <em>Chapter 3: The Power of Representation</em></>),
              url: "https://hci.ucsd.edu/220/representation.pdf"
            }
          ]
        },
        {
          date: "Th, Oct 23",
          topic: "Lab",
        },
        {
          date: "Tu, Oct 28",
          topic: "Design Part 2: Rules of visual hierarchy",
        },
        {
          date: "Th, Oct 30",
          topic: "Lab",
        },
        {
          date: "Tu, Nov 4",
          topic: "Design Part 3: Accessibility",
        },
        {
          date: "Th, Nov 6",
          topic: "Lab"
        },
        {
          date: "Tu, Nov 11",
          topic: "Design Part 4: Heuristic Evaluation"
        },
        {
          date: "Th, Nov 13",
          topic: "Lab: Wireframing with Figma"
        }
      ]
    },
    {
      id: 6,
      title: "Public Participation & Community Engagement",
      description: "Public participation and communication strategies",
      meetings: [
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
          topic: "Last day of class",
        },

      ]
    }
  ];

export default topics;