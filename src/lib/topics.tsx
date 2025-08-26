const topics = [
    {
      id: 1,
      title: "Science Communication",
      description: "Examining the importance of evidence-based communication, including the role of science communication in a democratic society.",
      meetings: [
        {
          date: "Tu, Aug 19",
          topic: "Course overview and introduction",
          description: "Welcome to the course!",
          activities: [
            {
              title: "Slides",
              url: "https://docs.google.com/presentation/d/1hutd4lpwzqO-RZKIL1GDzUOc_O5UYFVdwxOpOBuBkJI/edit?usp=sharing",
              draft: 0
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
          description: "These readings introduce two different moments in the history of science communication: early arguments for why the public should understand science, and current debates about how science communication research and practice should move forward",
          activities: [{
            title: "Slides",
            url: "https://docs.google.com/presentation/d/1-sJCYIeiRY0Ipx0xwzy0MESvKaExJEU8MdmzxG1wyt8/edit?usp=sharing",
            draft: 0
          },
          {
            title: "Discussion Questions",
            url: "/activities/communication01/",
            draft: 0
          }
          ],
          readings: [
            {
              citation: (<>Thomas, G., & Durant, J. (1987). <em>Why should we promote the public understanding of science?</em> Scientific literacy papers, 1, 1-14.</>), 
              url: "https://ocw.mit.edu/courses/sts-014-principles-and-practice-of-science-communication-spring-2006/9a2dfa5e9d69b2c0bd06b38606827f1c_durant_promote.pdf"
            },
            {
              citation: (<>Druckman, J. N., Ellenbogen, K. M., Scheufele, D. A., & Yanovitzky, I. (2025). <em>An agenda for science communication research and practice</em>. Proceedings of the National Academy of Sciences, 122(27), e2400932122.</>), 
              url: "https://www.pnas.org/doi/epdf/10.1073/pnas.2400932122"
            },
          ],
          optionalReadings: [
            {
              citation: (<>Stilgoe, J., Lock, S. J., & Wilsdon, J. (2014). <em>Why should we promote public engagement with science?.</em> Public understanding of science (Bristol, England), 23(1), 4-15.</>), 
              url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5753839/"
            },
            {
              citation: (<>Simis MJ, Madden H, Cacciatore MA, Yeo SK. <em>The lure of rationality: Why does the deficit model persist in science communication?</em> Public Underst Sci. 2016 May;25(4):400-14.</>), 
              url: "https://journals.sagepub.com/doi/10.1177/0963662516629749"
            }
          ],
        },
        {
          date: "Tu, Aug 26",
          topic: "Communicating science in politicized environments",
          description: "In politicized environments, science communication is complicated by conflicting values, interests, and social identities. Communicators must balance accuracy with transparency while remaining attentive to the broader political context.",
          activities: [
            { 
              title: "Slides",
              url: "https://docs.google.com/presentation/d/1DimSgHSduEtvL6AiFOoXcVX2IYNNK6UEIcAZ86VX5WA/edit?usp=sharing",
              draft: 0
            },
            { 
              title: "Politicized Science Communication Activity",
              url: "/activities/communication02/",
              draft: 0
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
              citation: (<><em>ClimateTalk: Science and Solutions</em> | Susan Joy Hassol | TEDxUMontana. 2015.</>), 
              url: "https://www.youtube.com/watch?v=V-tEmE85QDE"
            },
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
            url: "/assignments/hw01/",
            draft: 0
          }
        },
        {
          date: "Th, Aug 28",
          topic: "Communication is a dialog",
          description: "Communication is a dialog, not a monologue. Given this, it is important to consider how decisionmakers can ensure that science is responsive to diverse perspectives and lived experiences, especially from communities most affected by its outcomes.",
          activities: [
            {
              title: "Slides",
              url: "#",
              draft: 1
            }
          ],
          readings: [
            {
              citation: (<>Fan, F. ti, & Chen, S. L. (2019). Citizen, Science, and Citizen Science. East Asian Science, Technology and Society: An International Journal, 13(2), 181-193.</>),
              url: "https://www.tandfonline.com/doi/full/10.1215/18752160-7542643"
            },
          ],
          optionalReadings: [
            {
              citation: (<>Reincke, C. M., Bredenoord, A. L., & van Mil, M. H. (2020). <em>From deficit to dialogue in science communication: The dialogue communication model requires additional roles from scientists.</em> EMBO reports, 21(9), e51278.</>), 
              url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7506985/"
            },
            {
              citation: (<>Nadkarni, N. M., Weber, C. Q., Goldman, S. V., Schatz, D. L., Allen, S., & Menlove, R. (2019). <em>Beyond the deficit model: The ambassador approach to public engagement</em>. BioScience, 69(4), 305-313.</>),
              url: "https://d1wqtxts1xzle7.cloudfront.net/89134373/biz018-libre.pdf?1659220295=&response-content-disposition=inline%3B+filename%3DBeyond_the_Deficit_Model_The_Ambassador.pdf&Expires=1755690837&Signature=F0xRhp9IVo0oE2TDN3NYjNIILdNgJocJVXdqQ~e6Cyf5P~PRBjd5U4Dx4OeXI-uqU92wiayAzLSITsE0E5IxoKB5bofThukN92j5vyhf1UPqrejTsFJ5rPYHtLo0iUoPeK8XG-WPaibTcaEKLiagcKZu8VOAoayRulThWjjdAfyc79wUzT-CyPA2Qu9pEX8rvDiyAiyT55lvGISQC3zWrfIcZntj8rZf4M8iYkc1KLrhnPtb35s3bj9AMj4kSoHvgVV5dsprpn4rz-4E-9sv41bo8KfR1~eoxjAb2t96br1g4K4u3ZaEBPlDzEQXGr6CL50lXs9twXlw970Wjwigiw__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA"
            }
          ]
        },
      ]
    },
    {
      id: 2,
      title: "Data",
      description: "An overview of data types, schemas, metadata, provenance, and potential sources and consequences of data bias.",
      meetings: [
        {
          date: "Tu, Sep 2",
          topic: "Data fundamentals",
          readings: [
            {
              citation: (<>Gitelman, Lisa. &quot;Raw Data&quot; is an Oxymoron (Introduction)</>),
              url: "https://dsl.lsu.edu/nehtextualdata/wp-content/uploads/2017/11/RawData.pdf"
            },
            {
              citation: (<>Available through the Ramsey Library: Chapter 1. Conceptualising Data. Kitchin, R. (2014). <em>The data revolution: Big data, open data, data infrastructures and their consequences</em>. Sage.</>),
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
          date: "Th, Sep 4",
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
          date: "Tu, Sep 9",
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
          date: "Th, Sep 11",
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
          date: "Tu, Sep 16",
          topic: "Good and bad data visualizations",
          
        },
        {
          date: "Th, Sep 18",
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
      ]
    },
    {
      id: 4,
      title: "Visualization Tools & Technologies",
      description: "An overview of tools and technologies for creating interactive visualizations.",
      meetings: [ 
        {
          date: "Tu, Sep 23",
          topic: "Other visualization techniques (visualizing uncertainty; geospatial visualizations)",          
        },
        {
          date: "Th, Sep 25",
          topic: "Introduction to HTML and CSS",
          due: {
            titleShort: "Homework 2",
            title: "Critique an information visualization in the news",
            url: "./assignments/hw02/",
            draft: 1
          }
        },
        {
          date: "Tu, Sep 30",
          topic: "Lab 2: HTML and CSS",
        },
        {
          date: "Th, Oct 2",
          topic: "Introduction to Observable (and JavaScript)",
        },
        {
          date: "Tu, Oct 7",
          holiday: true,
          topic: "Fall Break - No class",
        },
        {
          date: "Th, Oct 9",
          topic: "Lab 3: Building charts with observable",
        },
        {
          date: "Tu, Oct 14",
          topic: "Interaction with Observable"
        },
        {
          date: "Th, Oct 16",
          topic: "Lab 4: Interactive charts and maps with Observable",
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
          topic: "TBD",
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