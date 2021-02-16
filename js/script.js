var app = new Vue ({
  el: "#root",
  data: {
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
    ]
  },
  methods: {

  }
});
