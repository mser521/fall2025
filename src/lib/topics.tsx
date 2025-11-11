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
              url: "/syllabus/",
            },
            {
              title: "AI Policy Activity",
              url: "/activities/ai-policy/",
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
            },
            { 
              title: "HTML Activity",
              url: "/activities/html01/",
              draft: 0
            }
          ],
          readings: [
            { 
              citation: (<>A. Lupia, Communicating science in politicized environments, Proc. Natl. Acad. Sci. U.S.A. 110 (supplement_3) 14048-14054 (2013).</>), 
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
              citation: "T. Bolsen, J. N. Druckman, Do partisanship and politicization undermine the impact of a scientific consensus message about climate change? Group Process Intergr. Relat. 21, 389-402 (2018).",
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
          topic: "Communication is a dialog: public participation in science",
          description: "Communication is a dialog, not a monologue. This means we must consider how everyday people engage with science, not just receive information from it. One way this happens is through citizen science or participatory science, where members of the public take part in scientific processes in various ways. These efforts can serve different purposes—such as addressing gaps in scientific knowledge or influencing research priorities—and they can also be sites of negotiation, debate, and even contestation over what counts as valid knowledge.",
          activities: [
            {
              title: "Slides",
              url: "https://docs.google.com/presentation/d/1cw3sV3Ub7JGgkBYE6XvSJWK_uiFBe9JQtlJd0jvBkI8/edit?usp=sharing",
              draft: 0
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
              citation: (<>Van Wart, S.J., Lanouette, K., Parikh, T.S. (2020). <em>Scripts and counterscripts in community-based data science: Participatory digital mapping and the pursuit of a third space</em>. Journal of the Learning Sciences.</>),
              url: "https://www.researchgate.net/profile/Kathryn-Lanouette/publication/337550012_Scripts_and_Counterscripts_in_Community-Based_Data_Science_Participatory_Digital_Mapping_and_the_Pursuit_of_a_Third_Space/links/5de1bc73299bf10bc3314696/Scripts-and-Counterscripts-in-Community-Based-Data-Science-Participatory-Digital-Mapping-and-the-Pursuit-of-a-Third-Space.pdf"
            },
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
              citation: (<>Gitelman, L. & Jackson, V. (2013). <em>Introduction: Raw data is an oxymoron.</em> In L. Gitelman (Ed.), Raw data is an oxymoron (pp. 1-14). MIT Press.</>),
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
              url: "https://docs.google.com/presentation/d/1rkNTkJ2Z82lXXa7JcqrStTkcmx1WMzfvOs8gEtb07LU/edit?usp=sharing",
              draft: 0
            },
            { 
              title: "HTML Activity",
              url: "/activities/html01",
              draft: 0
            }
          ],
          due: {
            titleShort: "Homework 1",
            title: "Analyze a public communication campaign",
            url: "/assignments/hw01",
            draft: 0
          }
        },
        {
          date: "Th, Sep 4",
          topic: "Lab 1: Concepts in Data Organization",
          activities: [
            {
              title: "'Raw Data' is an Oxymoron Discussion",
              url: "/activities/data01",
              draft: 0
            },
            {
              title: "Lab 1: Introduction to Data",
              url: "/assignments/lab01",
              draft: 0
            }
          ],
        },
        {
          date: "Tu, Sep 9",
          topic: "Bias, Categorization, and Classification",
          description: "This meeting will focus on the sources and consequences of data bias, with a particular emphasis on the role of social constructs in data collection and analysis.",
          activities: [
            {
              title: "Slides",
              url: "https://docs.google.com/presentation/d/17gPwFHLRP5IDCjmJnxkDP6-ZGg0sHqKE0LWlM252pTo/edit?usp=sharing",
              draft: 0
            },
            {
              title: "Discussion Questions",
              url: "/activities/data02/",
              draft: 0
            }
          ],
          readings: [
            {
              citation: (<>[49:30] Video: “The Trouble with Bias” (2017, Dec) - Kate Crawford</>),
              url: "https://www.youtube.com/watch?v=fMym_BKWQzk"
            },
            {
              citation: (<>[33:22] Video: Noble, S. U. (2019, July). Imagining a future free from the algorithms of oppression [Conference keynote]. Association for Computational Linguistics (ACL 2019), Florence, Italy.</>),
              url: "https://www.youtube.com/watch?v=tNi_U1Bb1S0&t=772s"
            },
            {
              citation: (<>[24:16] Video: Thorn, Abigail (2021, July). Social Constructs (YouTube Video). Philosophy Tube.</>),
              url: "https://www.youtube.com/watch?v=koud7hgGyQ8" 
            }
          ],
          optionalReadings: [
            {
              citation: (<>D&apos;Ignazio, C., & Klein, L. (2020). 6. The numbers don&apos;t speak for themselves. Data feminism.</>),
              url: "https://direct.mit.edu/books/book/4660/chapter/213291/The-Numbers-Don-t-Speak-for-Themselves"
            },
          ],
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
          description: "Intro to the purpose of data visualization, and the principles of graphical excellence and graphical integrity.",
          activities: [
            {
              title: "Slides",
              url: "https://docs.google.com/presentation/d/18YEmR55Ignbw9GqSqLHnjHlpIwjpMAWKLUfkjSM0H7U/edit?usp=sharing",
              draft: 0
            },
            {
              title: "Hand-Drawn Charts Activity",
              url: "/activities/vis01",
              draft: 0
            }
          ],
          readings: [
            {
              citation: (<>Chapter 1: Graphical Excellence, In The Visual Display of Quantitative Information. Tufte.</>),            
            },
            {
              citation: (<>Chapter 2: Graphical Integrity, In The Visual Display of Quantitative Information. Tufte.</>),
            }
          ],

          due: {
            titleShort: "Lab 1",
            title: "Concepts in Data Organization",
            url: "/assignments/lab01",
            draft: 0
          }
        },
        {
          date: "Tu, Sep 16",
          topic: "Visualization Dos and Don'ts",
          description: "What to do / not to do when creating data visualizations.",
          activities: [
            {
              title: "Slides",
              url: "https://docs.google.com/presentation/d/1sPRjPw7f0_c2_X_mAfyZjtA6aPpm0DkCe2rGODD6oks/edit?usp=sharing",
              draft: 0
            },
            {
              title: "Redesign Activity",
              url: "/activities/vis02",
              draft: 0
            }
          ],
          readings: [            
            {
              citation: (<>Chapter 3: Sources of Graphical Integrity, In The Visual Display of Quantitative Information. Tufte.</>),            
            },
            {
              citation: (<>Chapter 4: Data-Ink and Graphical Redesign, In The Visual Display of Quantitative Information. Tufte.</>),
            },
            {
              citation: (<>Chapter 5: Chartjunk, In The Visual Display of Quantitative Information. Tufte.</>),
            }
          ],
          assigned: {
            titleShort: "Homework 2",
            title: "Critique an information visualization in the news",
            url: "/assignments/hw02/",
            draft: 0
          }
        },
        {
          date: "Th, Sep 18",
          topic: "Perception",
          description: "Psychological principles that influence how we perceive data visualizations.",
          activities: [
            {
              title: "Slides",
              url: "https://docs.google.com/presentation/d/114ov6B6L6UodILR5ZS9xv5NyrCDlcHQAAiF4eYFHFJI/edit?usp=sharing",
              draft: 0
            },
          ],
          readings: [
            {
              citation: (<><em>Perception in Visualization</em>. Christopher G. Healey. Department of Computer Science, North Carolina State University.</>),
              url: "https://www.csc2.ncsu.edu/faculty/healey/PP/"
            },
          ],
          optionalReadings: [
            {
              citation: (<>Durand, F. (2002, July). <em>Perceptual and artistic principles for effective computer depiction</em> [Course materials]. SIGGRAPH 2002, San Antonio, Texas. Massachusetts Institute of Technology.</>),
              url: "https://people.csail.mit.edu/fredo/SIG02_ArtScience/"
            }
          ]
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
          topic: "Introduction to Tableau", 
          activities: [
            {
              title: "Slides",
              url: "#",
              draft: 1
            },
            {
              title: "Lab 2: Intro to Tableau Public",
              url: "/assignments/lab02",
              draft: 0
            }
          ], 
          due: {
            titleShort: "Homework 2",
            title: "Critique an information visualization in the news",
            url: "/assignments/hw02",
            draft: 0
          }        
        },
        {
          date: "Th, Sep 25",
          topic: "Tableau Continued",
          activities: [
            {
              title: "Geospatial Visualization Activity",
              url: "/activities/vis03",
              draft: 0
            }
          ],
        },
        {
          date: "Tu, Sep 30",
          topic: "HTML + GitHub Lab",
          activities: [
            {
              title: "Slides from HTML Lecture",
              url: "https://docs.google.com/presentation/d/1hZ1fDB2bEBQvWieqKQD-mp-8qnrUKpo7mHKk-yuYFMg/edit?slide=id.g378bcfc7f86_0_0#slide=id.g378bcfc7f86_0_0",
              draft: 0
            },
            {
              title: "Today's Slides",
              url: "https://docs.google.com/presentation/d/1RJ3077a6vAYrl77jQPGzV0WKsFfqtiU-/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true",
              draft: 0
            },
            {
              title: "Activity: Configuring GitHub",
              url: "/activities/github",
              draft: 0
            },
          ],
        },
        {
          date: "Th, Oct 2",
          topic: "HTML Continued",
          activities: [
            {
              title: "Slides",
              url: "https://docs.google.com/presentation/d/1q3TIUw9Fh1P6aygcKg4vHaynIFX84OFE/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true",
              draft: 0
            },
            {
              title: "Lab 3: Intro to HTML & CSS",
              url: "/assignments/lab03",
              draft: 0
            },
            {
              title: "Activity: Linking",
              url: "/downloads/activities/linking-activity.zip",
              draft: 0
            },
          ],
        },
        {
          date: "Tu, Oct 7",
          holiday: true,
          topic: "Fall Break - No class",
        },
        {
          date: "Th, Oct 9",
          topic: "Intro to CSS and Responsive Design",
          description: "Intro to CSS and layout techniques.",
          activities: [
            {
              title: "Slides",
              url: "https://docs.google.com/presentation/d/15bYEixF3LYEARx-rtKYQ8vwkMrH39FaD/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true",
              draft: 0
            },
            {
              title: "Photo Gallery Activity",
              url: "/activities/css01/",
              draft: 0
            },
          ],
          due: {
            titleShort: "Lab 3",
            title: "HTML + CSS Lab",
            url: "/assignments/lab03",
            draft: 0
          }
        },
        {
          date: "Tu, Oct 14",
          topic: "Lab 4: CSS",
          description: "The goal of this lab is to get you familiar with CSS layout techniques.",
          activities: [
          {
            title: "Slides",
            url: "https://docs.google.com/presentation/d/1RARJYCCSgurwVkvT-hBXYE57GoIT7Yqi/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true",
            draft: 0
          },
          {
            title: "CSS Layout Activity",
            url: "/activities/css02/",
            draft: 0
          },
          {
            title: "Lab 4: CSS Lab",
            url: "/assignments/lab04",
            draft: 0
          }]
        },
        {
          date: "Th, Oct 16",
          topic: "Lab 4 Continued",
          description: "Today will will spend some time working on the lab and creating a homepage. You will also be sharing out your HW3 Presentations.",
          activities: [
            {
              title: "Slides",
              url: "https://docs.google.com/presentation/d/1kTUosyGL5qHgmT0SQ0qWB3Wz7QeEYyrE/edit?usp=sharing&rtpof=true&sd=true",
              draft: 0
            },
            {
              title: "Activity: Homepage",
              url: "/activities/html02",
              draft: 0
            },
          ]
        },
        {
          date: "Tu, Oct 21",
          topic: "CSS Flourishes",
          description: "An overview of some techniques to add visual interest to your website.",
          activities: [
            {
              title: "Slides",
              url: "https://docs.google.com/presentation/d/1HmaecghrgmCwfvXzAddrz1X3yvKWpC6l/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true",
              draft: 0
            },
            {
              title: "Demo Files",
              url: "/downloads/activities/css-flourishes-demos.zip",
              draft: 0
            },
            {
              title: "Activity: CSS Flourishes",
              url: "/activities/css03",
              draft: 0
            },
          ]
        },
      ]
    },
    {
      id: 6,
      title: "JavaScript",
      description: "An overview of design principles and techniques for creating effective visualizations.",
      meetings: [
        
        {
          date: "Th, Oct 23",
          topic: "Intro to JavaScript",
          description: "An overview of JavaScript and its use in web development.",
          activities: [
            {
              title: "Slides",
              url: "https://docs.google.com/presentation/d/1gVaCiW9abReMbq8-gYRfMDleDa4t9c1k/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true",
              draft: 0
            },
            {
              title: "Activity: Online DOM Tester",
              url: "/downloads/dom-tester/index.html",
              draft: 0
            },
            {
              title: "Activity: Introductory JavaScript Exercises",
              url: "/activities/js01",
              draft: 0
            },
          ]
        },
        {
          date: "Tu, Oct 28",
          topic: "Lab 5: JavaScript DOM Manipulation",
          activities: [
            {
              title: "Slides",
              url: "https://docs.google.com/presentation/d/15J_LOZvPqkmNVcJZqzqWfIa0yyW8MnsQ/edit?usp=sharing&ouid=113376576186080604800&rtpof=true&sd=true",
              draft: 0
            },
            {
                title: "Sign up for a project proposal meeting",
                url: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0WlhbiJDcZXnMdgIYBxag1M22tER2wiUT8D1R--ITr766TsnobDhjZAO1u9DsxSMAIbysB1zel"
            },
            {
              title: "Lab 5: JavaScript DOM Manipulation",
              url: "/assignments/lab05",
              draft: 0
            }
          ]
        },
        {
          date: "Th, Nov 6",
          topic: "Working with Data + JavaScript Libraries",
          activities: [
            {
              title: "Slides",
              url: "https://docs.google.com/presentation/d/1iy2jKlFnM-Z8YGqD9Iu9MHdx8wtIO9HsaWMN510ziZo/edit?usp=sharing",
              draft: 0
            },
            {
              title: "Lab 6: JavaScript DOM Manipulation",
              url: "/assignments/lab06",
              draft: 0
            }
          ],
          assigned: {
            titleShort: "Midterm Project",
            title: "Build a Scroll-Based Website",
            url: "/assignments/midterm/",
            draft: 0
          }
        },
        {
          date: "Tu, Nov 11",
          topic: "Lab 6: Build an Interactive Chart + Map with Javascript",
          activities: [
            {
              title: "Slides",
              url: "https://docs.google.com/presentation/d/11EsdXYMXe1rW_2yc5YGSYEza1HrAO0nHdMPEmNRXZFY/edit?usp=sharing",
              draft: 0
            },
            {
              title: "Activity: Intro to Charts Warmup",
              url: "/downloads/activities/css-flourishes-activity.zip",
              draft: 0
            },
            {
                title: "Spreadsheet Fun",
                url: "https://docs.google.com/spreadsheets/d/1rteYnB3u5jGWbiSqLCv02f1mwbGv119GJKOsq6tATN0/edit?usp=sharing",
                draft: 0
            }
          ]
        },
        {
          date: "Th, Nov 13",
          topic: "'Data wrangling' + Spreadsheet Integration",
        },
        {
            date: "Tu, Nov 18",
            holiday: true,
            topic: "Symposium - No class"
        },
      ]
    },
    {
      id: 7,
      title: "Special Topics",
      description: "An overview of design principles and techniques for creating effective visualizations.",
      meetings: [
        
        {
          date: "Th, Nov 20",
          topic: "Fundamentals of design + scrollytelling",
          readings: [
            {
              citation: (<>Norman, D. A. (1994). <em>Things that make us smart</em>. Basic Books. <em>Chapter 3: The Power of Representation</em></>),
              url: "https://hci.ucsd.edu/220/representation.pdf"
            }
          ]
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
          topic: "Final Project Presentations",
        },

      ]
    }
  ];

export default topics;