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
          activities: ["Politics", "Legibility", "Epistemic considerations: Whose evidence?", "Presences and absences."],
          readings: [
            {
              citation: (<>Druckman, J. N., Ellenbogen, K. M., Scheufele, D. A., & Yanovitzky, I. (2025). <em>An agenda for science communication research and practice</em>. Proceedings of the National Academy of Sciences, 122(27), e2400932122.</>), 
              url: "https://www.pnas.org/doi/epdf/10.1073/pnas.2400932122"
            },
            {
              citation: (<>Thomas, G., & Durant, J. (1987). <em>Why should we promote the public understanding of science?</em> Scientific literacy papers, 1, 1-14.</>), 
              url: "https://ocw.mit.edu/courses/sts-014-principles-and-practice-of-science-communication-spring-2006/9a2dfa5e9d69b2c0bd06b38606827f1c_durant_promote.pdf"
            },
            { 
              citation: (<>Galef, J. (2016, June). <em>Why you think you&apos;re right—even if you&apos;re wrong</em> [Video]. TED Conferences. </>), 
              url: "https://www.ted.com/talks/julia_galef_why_you_think_you_re_right_even_if_you_re_wrong"
            }
          ]
        },
        {
          date: "Tu, Aug 26",
          topic: "Why is evidence-based communication important? Communicating science in a polarized world"
        },
        {
          date: "Th, Aug 28",
          topic: "Lab 1",
        }
      ]
    },
    {
      id: 2,
      title: "Visualizating Qualitative & Quantitative Data",
      description: "All the data stuff...",
      meetings: [
        {
          date: "Tu, Sep 2",
          topic: "Data visualization foundations I",
          activities: ["Data Concepts: Qualitative and quantitative data, provenance, representation, bias", "Theory: Burtin, Tufte", "Quant Practice: Google Sheets; Observable", "Qual Practice: Digital Storytelling"],
        },
        {
          date: "Th, Sep 4",
          topic: "Lab 2",
        },
        {
          date: "Tu, Sep 9",
          topic: "Data visualization foundations II",
        },
        {
          date: "Th, Sep 11",
          topic: "Lab 3",
        },
        {
          date: "Tu, Sep 16",
          topic: "Data visualization foundations III",
        },
        {
          date: "Th, Sep 16",
          topic: "Lab 4",          
        },
        {
          date: "Tu, Sep 23",
          topic: "Data visualization foundations IV",
        },
        {
          date: "Th, Sep 25",
          topic: "Lab 5",
        },
        {
          date: "Tu, Sep 30",
          topic: "Topic 9",
        },
        {
          date: "Th, Oct 2",
          topic: "Topic 10",
        },
      ]
    },
    {
      id: 3,
      title: " Challenges Unique to Environmental Data",
      description: "Uncertainty, scale, complexity, time, and geospatial",
      meetings: [
        
        {
          date: "Tu, Oct 7",
          holiday: true,
          topic: "Fall Break",
        },
        {
          date: "Th, Oct 9",
          topic: "Uncertainty",
        },
        {
          date: "Tu, Oct 14",
          topic: "Data about time and space"
        },
        
      ]
    },
    {
      id: 4,
      title: "Designing for Understanding",
      description: "Visualizing data to support decision-making",
      meetings: [
        {
          date: "Th, Oct 16",
          topic: "Design Part 1: Visual Design",
        },
        {
          date: "Tu, Oct 21",
          topic: "Design Part 3: Usability & Design Patterns",
        },
        {
          date: "Th, Oct 23",
          topic: "Design Part 3: Accessibility",
        },
        {
          date: "Tu, Oct 28",
          topic: "Design Part 4: Heuristic Evaluation",
        },
        {
          date: "Th, Oct 30",
          topic: "Wireframing with Figma",
        },
        {
          date: "Tu, Nov 4",
          topic: "TBD",
        },
        {
          date: "Th, Nov 6",
          topic: "TBD"
        },
        {
          date: "Tu, Nov 11",
          topic: "TBD"
        },
        {
          date: "Th, Nov 13",
          topic: "TBD"
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
          topic: "Symposium"
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
          topic: "Thanksgiving Break",
        },
        {
          date: "Tu, Dec 2",
          topic: "Last day of class",
        },

      ]
    }
  ];

export default topics;