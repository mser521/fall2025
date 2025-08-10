import PageHeader from '@/components/PageHeader';

export default function SchedulePage() {
  const topics = [
    {
      id: 1,
      title: "Evidence-Based Communication: Why and For Whom?",
      description: "Understanding the importance and audience of evidence-based communication",
      meetings: [
        {
          date: "Tu, Aug 20",
          topic: "Course overview and introduction to evidence-based communication",
          activities: ["Course overview", "Introduction to evidence-based communication"],
        },
        {
          date: "Th, Aug 22",
          topic: "Environmental systems thinking and sustainability principles",
          activities: ["Environmental systems thinking", "Sustainability principles"],
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
        }
      ]
    },
    {
      id: 2,
      title: "Scientific Methodology and Research Design",
      description: "Understanding research methods and data collection approaches",
      meetings: [
        {
          date: "Tu, Aug 27",
          topic: "Research methods and data collection",
          activities: ["Research methods", "Data collection strategies"],
          readings: [
            {citation: (<>Chapter 3, Theis & Tomkin</>), url: ""}
          ]
        },
        {
          date: "Th, Aug 29",
          topic: "Statistical analysis and interpretation",
          activities: ["Statistical analysis", "Data interpretation"],
          readings: [
            {citation: (<>Selected journal articles on statistical methods</>), url: ""}
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Environmental Assessment and Field Work",
      description: "Preparing for and conducting environmental assessments",
      meetings: [
        {
          date: "Tu, Sep 3",
          topic: "Field work preparation and assessment frameworks",
          activities: ["Field work preparation", "Assessment frameworks"],
          readings: [
            {citation: (<>Selected journal articles on environmental assessment</>), url: ""}
          ]
        },
        {
          date: "Th, Sep 5",
          topic: "Assignment 1 due and field work review",
          activities: ["Assignment 1 due", "Field work review"],
          readings: [
            {citation: (<>Assignment guidelines and rubric</>), url: ""}
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Climate Science Fundamentals",
      description: "Understanding atmospheric composition and climate drivers",
      meetings: [
        {
          date: "Tu, Sep 10",
          topic: "Atmospheric composition and climate drivers",
          activities: ["Atmospheric composition", "Climate drivers"],
          readings: [
            {citation: (<>Chapters 4-5, Pittock</>), url: ""}
          ]
        },
        {
          date: "Th, Sep 12",
          topic: "Historical climate data and trends",
          activities: ["Historical climate data", "Climate trends analysis"],
          readings: [
            {citation: (<>IPCC historical data reports</>), url: ""}
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Climate Change Mechanisms",
      description: "Understanding greenhouse effects and climate models",
      meetings: [
        {
          date: "Tu, Sep 17",
          topic: "Greenhouse effect and feedback loops",
          activities: ["Greenhouse effect", "Feedback loops"],
          readings: [
            {citation: (<>IPCC reports, selected sections</>), url: ""}
          ]
        },
        {
          date: "Th, Sep 19",
          topic: "Climate models and predictions",
          activities: ["Climate models", "Prediction methods"],
          readings: [
            {citation: (<>Climate modeling literature</>), url: ""}
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Climate Impacts and Adaptation",
      description: "Understanding ecosystem responses and adaptation strategies",
      meetings: [
        {
          date: "Tu, Sep 24",
          topic: "Ecosystem responses and human impacts",
          activities: ["Ecosystem responses", "Human impacts"],
          readings: [
            {citation: (<>Nature Climate Change articles</>), url: ""}
          ]
        },
        {
          date: "Th, Sep 26",
          topic: "Adaptation strategies and resilience",
          activities: ["Adaptation strategies", "Resilience planning"],
          readings: [
            {citation: (<>Adaptation and resilience literature</>), url: ""}
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Midterm Review and Preparation",
      description: "Comprehensive review of course material",
      meetings: [
        {
          date: "Tu, Oct 1",
          topic: "Review sessions and practice problems",
          activities: ["Review sessions", "Practice problems"],
          readings: [
            {citation: (<>All previous materials</>), url: ""}
          ]
        },
        {
          date: "Th, Oct 3",
          topic: "Study groups and final review",
          activities: ["Study groups", "Final review"],
          readings: [
            {citation: (<>Study guide and practice questions</>), url: ""}
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Midterm and Renewable Energy",
      description: "Midterm examination and energy fundamentals",
      meetings: [
        {
          date: "Tu, Oct 8",
          topic: "Fall Break",
        },
        {
          date: "Th, Oct 10",
          topic: "Energy fundamentals and Assignment 2 due",
          activities: ["Energy fundamentals", "Assignment 2 due"],
          readings: [
            {citation: (<>Chapters 6-7, Theis & Tomkin</>), url: ""}
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Sustainable Technologies",
      description: "Exploring renewable energy technologies",
      meetings: [
        {
          date: "Tu, Oct 15",
          topic: "Solar energy and wind power",
          activities: ["Solar energy", "Wind power"],
          readings: [
            {citation: (<>Technical reports and case studies</>), url: ""}
          ]
        },
        {
          date: "Th, Oct 17",
          topic: "Energy storage and grid integration",
          activities: ["Energy storage", "Grid integration"],
          readings: [
            {citation: (<>Energy storage literature</>), url: ""}
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Urban Sustainability",
      description: "Sustainable urban development and planning",
      meetings: [
        {
          date: "Tu, Oct 22",
          topic: "Green infrastructure and smart cities",
          activities: ["Green infrastructure", "Smart cities"],
          readings: [
            {citation: (<>Urban planning literature</>), url: ""}
          ]
        },
        {
          date: "Th, Oct 24",
          topic: "Community planning and engagement",
          activities: ["Community planning", "Public engagement"],
          readings: [
            {citation: (<>Community planning case studies</>), url: ""}
          ]
        }
      ]
    },
    {
      id: 11,
      title: "Circular Economy",
      description: "Waste reduction and resource efficiency",
      meetings: [
        {
          date: "Tu, Oct 29",
          topic: "Waste reduction and resource efficiency",
          activities: ["Waste reduction", "Resource efficiency"],
          readings: [
            {citation: (<>Circular economy principles</>), url: ""}
          ]
        },
        {
          date: "Th, Oct 31",
          topic: "Business models and implementation",
          activities: ["Business models", "Implementation strategies"],
          readings: [
            {citation: (<>Circular economy business cases</>), url: ""}
          ]
        }
      ]
    },
    {
      id: 12,
      title: "Environmental Policy",
      description: "Policy frameworks and international agreements",
      meetings: [
        {
          date: "Tu, Nov 5",
          topic: "Policy frameworks and international agreements",
          activities: ["Policy frameworks", "International agreements"],
          readings: [
            {citation: (<>Policy analysis literature</>), url: ""}
          ]
        },
        {
          date: "Th, Nov 7",
          topic: "Assignment 3 due and policy review",
          activities: ["Assignment 3 due", "Policy review"],
          readings: [
            {citation: (<>Assignment guidelines and policy examples</>), url: ""}
          ]
        }
      ]
    },
    {
      id: 13,
      title: "Policy Implementation",
      description: "Stakeholder engagement and implementation strategies",
      meetings: [
        {
          date: "Tu, Nov 12",
          topic: "Stakeholder engagement and implementation strategies",
          activities: ["Stakeholder engagement", "Implementation strategies"],
          readings: [
            {citation: (<>Implementation research</>), url: ""}
          ]
        },
        {
          date: "Th, Nov 14",
          topic: "Case studies and best practices",
          activities: ["Case studies", "Best practices"],
          readings: [
            {citation: (<>Implementation case studies</>), url: ""}
          ]
        }
      ]
    },
    {
      id: 14,
      title: "Community Engagement",
      description: "Public participation and communication strategies",
      meetings: [
        {
          date: "Tu, Nov 19",
          topic: "Public participation and communication strategies",
          activities: ["Public participation", "Communication strategies"],
          readings: [
            {citation: (<>Community engagement literature</>), url: ""}
          ]
        },
        {
          date: "Th, Nov 21",
          topic: "Project work and community planning",
          activities: ["Project work", "Community planning"],
          readings: [
            {citation: (<>Community planning resources</>), url: ""}
          ]
        }
      ]
    },
    {
      id: 15,
      title: "Final Project Development",
      description: "Project development and peer review",
      meetings: [
        {
          date: "Tu, Nov 26",
          topic: "Project development and peer review",
          activities: ["Project development", "Peer review"],
          readings: [
            {citation: (<>Project-specific materials</>), url: ""}
          ]
        },
        {
          date: "Th, Dec 3",
          topic: "Final presentations and project feedback",
          activities: ["Final presentations", "Project feedback"],
          readings: [
            {citation: (<>Presentation guidelines</>), url: ""}
          ]
        }
      ]
    },
    {
      id: 16,
      title: "Course Wrap-up",
      description: "Final project presentations and course evals",
      meetings: [
        {
          date: "Tu, Dec 5",
          topic: "Final project presentations and course evals",
          activities: ["Final project presentations", "Course evals"],
        },

      ]
    }
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Course Schedule" excerpt="Topic-based schedule with specific meeting dates" />
      
      <div className="space-y-8">
        {topics.map((topic) => (
          <div key={topic.id} className="py-4">
            {/* <div className="mb-6"> */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Topic {topic.id}: {topic.title}
              </h2>
              <p className="!mb-0 pb-4">{topic.description}</p>
            {/* </div> */}
            
              {topic.meetings.map((meeting, index) => (
                <div className="grid grid-cols-6 border-t border-black py-4" key={index}>
                  <strong className="font-bold">{meeting.date}</strong>
                  <div className="col-span-5">
                    <p>{meeting.topic}</p>
 
                    <div>
                    {meeting.activities ? <strong>Activities</strong> : ``}
                      <ul className="space-y-1">
                        {meeting.activities?.map((activity, index) => (
                          <li key={index}>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      {meeting.readings ? <strong>Readings</strong> : ``}
                      <ul className="space-y-1 !pl-8 !list-none">
                        {
                          meeting.readings?.map((reading, index) => {
                            return (
                              <li className="-indent-8 mb-4" key={index}>
                                {reading.citation} {" "}
                                <a href={reading.url} target="_blank" rel="noopener noreferrer">Link</a>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );

} 