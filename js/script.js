var app = new Vue ({
  el: "#root",
  data: {
    scrollPosition: false,
    imgPath: 'img/',
    features: [
      {
        img: 'people',
        imgExt: '.png',
        title: 'Human Capital',
        p: 'Humanizing business: Harness the power of technology to improve the way people work.'
      },
      {
        img: 'pie-chart',
        imgExt: '.png',
        title: 'Core Business',
        p: 'It takes innovative approaches to transform, modernize, and run existing platforms.'
      },
      {
        img: 'speedometer',
        imgExt: '.png',
        title: 'Performance',
        p: 'Achieving maximum impact and value from investments in finance and supply chain.'
      }
    ],
    about: [
      {
        img: 'ribbon',
        imgExt: '.png',
        title: 'Tradition',
        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        img: 'lock',
        imgExt: '.png',
        title: 'Security',
        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        img: 'edit',
        imgExt: '.png',
        title: 'Certificate',
        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        img: 'graduate',
        imgExt: '.png',
        title: 'Expertise',
        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      }
    ],
    services: [
      {
        img: 'organization',
        imgExt: '.png',
        title: 'Audit & Assurance',
        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        img: 'case',
        imgExt: '.png',
        title: 'Financial ADvisory',
        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        img: 'chart',
        imgExt: '.png',
        title: 'Analytics and M&A',
        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        img: 'plane',
        imgExt: '.png',
        title: 'Middle Marketing',
        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        img: 'globe',
        imgExt: '.png',
        title: 'Legal Consulting',
        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        img: 'inbox',
        imgExt: '.png',
        title: 'Regulatory Risk',
        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      }
    ],
    pricing: [
      {
        img: 'rocket',
        imgExt: '.png',
        title: 'Standard',
        price: '490',
        li: [
          {
            feature: 'Standard Accounting',
            included: true
          },
          {
            feature: 'Platform Access',
            included: true
          },
          {
            feature: 'Business Orientation',
            included: false
          },
          {
            feature: 'Dedicated Consultant',
            included: false
          },
          {
            feature: 'Personal Assistance',
            included: false
          }
        ]
      },
      {
        img: 'case',
        imgExt: '.png',
        title: 'Professional',
        price: '890',
        li: [
          {
            feature: 'Standard Accounting',
            included: true
          },
          {
            feature: 'Platform Access',
            included: true
          },
          {
            feature: 'Business Orientation',
            included: true
          },
          {
            feature: 'Dedicated Consultant',
            included: false
          },
          {
            feature: 'Personal Assistance',
            included: false
          }
        ]
      },
      {
        img: 'diamond',
        imgExt: '.png',
        title: 'Ultimate',
        price: '1.390',
        li: [
          {
            feature: 'Standard Accounting',
            included: true
          },
          {
            feature: 'Platform Access',
            included: true
          },
          {
            feature: 'Business Orientation',
            included: true
          },
          {
            feature: 'Dedicated Consultant',
            included: true
          },
          {
            feature: 'Personal Assistance',
            included: true
          }
        ]
      }
    ],
    offers: [
      {
        title: 'About',
        li: [
          {
            offer: 'The Company'
          },
          {
            offer: 'Institutional'
          },
          {
            offer: 'Social & Events'
          },
          {
            offer: 'Innovation'
          },
          {
            offer: 'Environment'
          },
          {
            offer: 'Technology'
          }
        ]
      },
      {

        title: 'Services',
        li: [
          {
            offer: 'Audit & Assurance'
          },
          {
            offer: 'Financial Advisory'
          },
          {
            offer: 'Analytics M&A'
          },
          {
            offer: 'Middle Marketing'
          },
          {
            offer: 'Legal Consulting'
          },
          {
            offer: 'Regulatory Risk'
          }
        ]
      },
      {

        title: 'Support',
        li: [
          {
            offer: 'Responsibility'
          },
          {
            offer: 'Terms of Use'
          },
          {
            offer: 'About Cookies'
          },
          {
            offer: 'Privacy Policy'
          },
          {
            offer: 'Accessibility'
          },
          {
            offer: 'Information'
          }
        ]
      }
    ],
    blog: [
      {
        img: 'news-1',
        imgExt: '.jpg',
        name: 'Andrea Miller',
        date: '2 Days Ago',
        title: 'Increasing creativity is possible for everyone',
        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        img: 'news-2',
        imgExt: '.jpg',
        name: 'John Smith',
        date: '9 Days Ago',
        title: 'Because market research is part of the business plan',
        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        img: 'news-3',
        imgExt: '.jpg',
        name: 'Andrea Miller',
        date: '16 Days Ago',
        title: 'Working from home is now a trend',
        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      }
    ]
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY;
       console.log(this.scrollPosition);
    },
    scrollTop() {
      window.scrollTo(0, window.offsetTop);
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
});
