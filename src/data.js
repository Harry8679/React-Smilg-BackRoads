import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.x.com", icon: "fab fa-twitter" },
  { id: 2, href: "https://facebook.com", icon: "fab fa-facebook" },
  { id: 3, href: "https://www.youtube.com", icon: "fab fa-squarespace" },
];

export const services = [
    {
        id: 1,
        icon: 'fas fa-wallet fa-fw',
        title: 'Saving money',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    },
    {
        id: 2,
        icon: 'fas fa-tree fa-fw',
        title: 'Endless hiking',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    },
    {
        id: 3,
        icon: 'fas fa-socks fa-fw',
        title: 'Amazing comfort',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    }
]

export const tours = [
    {
        id: 1,
        image: tour1,
        alt: 'tour 1',
        date: 'august 26th, 2025',
        title: 'Tibet Adventure',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'China',
        howLong: '6 days',
        from: 'from $2100'
    },
    {
        id: 2,
        image: tour2,
        alt: 'tour 2',
        date: 'october 1th, 2025',
        title: 'best of java',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'indonesia',
        howLong: '11 days',
        from: 'from $1400'
    },
    {
        id: 3,
        image: tour3,
        alt: 'tour 3',
        date: 'september 15th, 2025',
        title: 'explore hong kong',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'hong kong',
        howLong: '8 days',
        from: 'from $5000'
    },
    {
        id: 4,
        image: tour4,
        alt: 'tour 4',
        date: 'december 5th, 2025',
        title: 'kenya highlights',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        country: 'Kenya',
        howLong: '20 days',
        from: 'from $3300'
    }
]
