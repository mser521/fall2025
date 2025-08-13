const topics = [
    {
      id: 1,
      title: "Concepts in Science Communication",
      description: "Understanding the importance and audience of evidence-based communication",
      meetings: [
        {
          date: "Tu, Aug 19",
          topic: "Course overview and introduction to evidence-based communication",
          activities: ["Course overview", "Introduction to evidence-based communication"],
        },
        {
          date: "Th, Aug 21",
          topic: "Audience, purpose, goals",
          activities: [
            <a key="slides"   href="https://docs.google.com/presentation/d/1-sJCYIeiRY0Ipx0xwzy0MESvKaExJEU8MdmzxG1wyt8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Slides</a>,
            <a key="dq01" href="./questions/dq01/">Discussion Questions</a>
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
            // { 
            //   citation: (<>Galef, J. (2016, June). <em>Why you think you&apos;re right—even if you&apos;re wrong</em> [Video]. TED Conferences. </>), 
            //   url: "https://www.ted.com/talks/julia_galef_why_you_think_you_re_right_even_if_you_re_wrong"
            // }
          ]
        },
        {
          date: "Tu, Aug 26",
          topic: "Why is evidence-based communication important? Communicating science in a polarized world"
        },
        {
          date: "Th, Aug 28",
          topic: "Lab 1: Analyze a public communication campaign",
        }
      ]
    },
    {
      id: 2,
      title: "Visualizating & Communicating Quantitative Data",
      description: "All the data stuff...",
      meetings: [
        {
          date: "Tu, Sep 2",
          topic: "What is the purpose of data visualization?",
          activities: ["Data Concepts: Qualitative and quantitative data, provenance, representation, bias", "Theory: Burtin, Tufte", "Quant Practice: Google Sheets; Observable", "Qual Practice: Digital Storytelling"],
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
          date: "Th, Sep 4",
          topic: "Lab 2: Create a database from scratch",
        },
        {
          date: "Tu, Sep 9",
          topic: "Discussion of good and bad visualizations",
        },
        {
          date: "Th, Sep 11",
          topic: "Lab 3: Google Sheets",
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
          date: "Th, Sep 16",
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
      id: 3,
      title: " Challenges Unique to Environmental Data",
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
      id: 4,
      title: "Designing for Understanding",
      description: "Visualizing data to support decision-making",
      meetings: [
        {
          date: "Tu, Oct 21",
          topic: "Design Part 1: Visual Design",
        },
        {
          date: "Th, Oct 23",
          topic: "Lab",
        },
        {
          date: "Tu, Oct 28",
          topic: "Design Part 2: Usability & Design Patterns",
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
      id: 5,
      title: "Community Engagement",
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