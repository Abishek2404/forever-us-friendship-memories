export interface Memory {
  id: number;
  image: string;
  title?: string;
  caption?: string;
  category: 'people' | 'group' | 'candid' | 'celebration' | 'poster'|'School photo'|'Abi Photo'|'Abishek Photo'|'Deva Photo'|'Gowtham Photo'|'Jaga Photo'|'Tharani Photo';
  alt: string;
}

export const memories: Memory[] = [
  {
    id: 1,
    image: '/Forever_Us_Project_Images/01_group_memory_1.png',
    title: 'Good Friends',
    caption: 'Better Days',
    category: 'group',
    alt: 'Group of friends having a great time together',
  },
  {
    id: 2,
    image: '/Forever_Us_Project_Images/02_group_memory_2.png',
    title: 'Same Vibes',
    caption: 'Unforgettable',
    category: 'candid',
    alt: 'Candid memory of the group laughing',
  },
  {
    id: 3,
    image: '/Forever_Us_Project_Images/03_group_memory_3.png',
    title: 'Together Always',
    caption: 'The best crew',
    category: 'celebration',
    alt: 'Friends celebrating a special moment',
  },
  {
    id: 4,
    image: '/Forever_Us_Project_Images/04_group_memory_4.png',
    title: 'Memories For Life',
    caption: 'Endless stories',
    category: 'group',
    alt: 'Gathered together making memories',
  },
  {
    id: 5,
    image: '/Forever_Us_Project_Images/05_group_memory_5.png',
    title: 'Brothers',
    caption: 'Through it all',
    category: 'people',
    alt: 'Close friends posing for a picture',
  },
  {
    id: 6,
    image: '/Forever_Us_Project_Images/06_group_memory_6.png',
    title: 'Friendship ∞',
    caption: 'Forever Us',
    category: 'candid',
    alt: 'Natural moment caught on camera',
  },
  {
    id: 7,
    image: '/Forever_Us_Project_Images/07_group_memory_7.png',
    caption: 'Just us being us',
    category: 'people',
    alt: 'Friends hanging out',
  },
  {
    id: 8,
    image: '/Forever_Us_Project_Images/08_group_memory_8.jpg',
    title: 'The Poster',
    caption: 'Our story',
    category: 'poster',
    alt: 'The cinematic poster of our friendship',
  },
  {
    id: 9,
    image: '/Forever_Us_Project_Images/school-1.jpeg',
    caption: 'Just us being us',
    category: 'School photo',
    alt: 'School Photo'
  },
  {
    id: 10,
    image: '/Forever_Us_Project_Images/school-2.jpeg',
    caption: 'Just us being us',
    category: 'School photo',
    alt: 'School Photo'
  },{
    id: 11,
    image: '/Forever_Us_Project_Images/abi.jpeg',
    caption: 'Just us being us',
    category: 'Abi Photo',
    alt: 'Abi Photo'
  },{
    id: 12,
    image: '/Forever_Us_Project_Images/abishek.jpeg',
    caption: 'Just us being us',
    category: 'Abishek Photo',
    alt: 'School Photo'
  },
  {
    id: 13,
    image: '/Forever_Us_Project_Images/deva.jpeg',
    caption: 'Just us being us',
    category: 'Deva Photo',
    alt: 'School Photo'
  },{
     id: 14,
    image: '/Forever_Us_Project_Images/gowtham.png',
    caption: 'Just us being us',
    category: 'Gowtham Photo',
    alt: 'School Photo'
  },
  {
    id: 15,
    image: '/Forever_Us_Project_Images/jaga.jpeg',
    caption: 'Just us being us',
    category: 'Jaga Photo',
    alt: 'School Photo'
  },
  {
    id: 16,
    image: '/Forever_Us_Project_Images/tharani.jpeg',
    caption: 'Just us being us',
    category: 'Tharani Photo',
    alt: 'School Photo'
  },
  {
    
    id: 17,
    image: '/Forever_Us_Project_Images/pooja.png',
    caption: 'Just us being us',
    category: 'Tharani Photo',
    alt: 'School Photo'
  }
];
