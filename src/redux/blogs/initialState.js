const initialState = [{ Id: 1,
        Title : 'Boost your conversion rate',
        Category : 'Article',
        Author : 'Learn With Sumit',
        ReadTime : 6,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/73503432',
        PublishDay : '11 Jul, 2022' 
    },{ Id: 2,
        Title : 'How to use search engine optimization to drive sales',
        Category : 'Technology',
        Author : 'Tonmoy Das',
        ReadTime : 7,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/25247456',
        PublishDay : '14 Jul, 2021' 
    },{ Id: 3,
        Title : 'Improve your customer experience',
        Category : 'Article',
        Author : 'Raihan',
        ReadTime : 12,
        BlogImage : 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/60396716',
        PublishDay : '14 Jul, 2021'  
    },{ Id: 4,
        Title : 'Asia Cup 2022',
        Category : 'Sports',
        Author : 'Ali Hasan',
        ReadTime : 17,
        BlogImage : 'https://media.istockphoto.com/photos/closeup-of-red-cricket-ball-and-bat-sitting-on-grass-picture-id177427917?b=1&k=20&m=177427917&s=170667a&w=0&h=EDjuygOLoDdEJ8NxfB8NrSEj_awRE5Ag7mAnpphJecg=',
        AuthorImage : 'https://avatars.githubusercontent.com/u/16849849',
        PublishDay : '14 Jul, 2021'  
    },{ Id: 5,
        Title : 'How to use search engine optimization to drive sales',
        Category : 'Technology',
        Author : 'Tonmoy Das',
        ReadTime : 7,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/25247456',
        PublishDay : '14 Jul, 2021'  
    },{ Id: 6,
        Title : 'Asia Cup 2022',
        Category : 'Sports',
        Author : 'Ali Hasan',
        ReadTime : 17,
        BlogImage : 'https://media.istockphoto.com/photos/closeup-of-red-cricket-ball-and-bat-sitting-on-grass-picture-id177427917?b=1&k=20&m=177427917&s=170667a&w=0&h=EDjuygOLoDdEJ8NxfB8NrSEj_awRE5Ag7mAnpphJecg=',
        AuthorImage : 'https://avatars.githubusercontent.com/u/16849849',
        PublishDay : '14 Jul, 2021'  
    },{ Id: 7,
        Title : 'Nobel prize winner says the U.S. needs a 1950s-style productivity boom',
        Category : 'Article',
        Author : 'Learn With Sumit',
        ReadTime : 6,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/73503432' ,
        PublishDay : '14 Jul, 2021' 
    },{ Id: 8,
        Title : 'Google Updates Article Structured Data Guidelines',
        Category : 'Article',
        Author : 'Learn With Sumit',
        ReadTime : 6,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/73503432' ,
        PublishDay : '14 Jul, 2021' 
    },{ Id: 9,
        Title : 'How to use search engine optimization to drive sales',
        Category : 'Technology',
        Author : 'Tonmoy Das',
        ReadTime : 7,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/25247456' ,
        PublishDay : '14 Jul, 2021' 
    },{ Id: 10,
        Title : 'Google Deletes References To AMP',
        Category : 'Article',
        Author : 'Learn With Sumit',
        ReadTime : 6,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/73503432' ,
        PublishDay : '14 Jul, 2021' 
    },{ Id: 11,
        Title : 'Structured Data No Longer Required For Top Stories',
        Category : 'Article',
        Author : 'Learn With Sumit',
        ReadTime : 6,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/73503432' ,
        PublishDay : '14 Jul, 2021' 
    },{ Id: 12,
        Title : 'How to use search engine optimization to drive sales',
        Category : 'Technology',
        Author : 'Tonmoy Das',
        ReadTime : 7,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/25247456' ,
        PublishDay : '14 Jul, 2021' 
    },{ Id: 13,
        Title : 'Improve your customer experience',
        Category : 'Article',
        Author : 'Raihan',
        ReadTime : 12,
        BlogImage : 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/60396716' ,
        PublishDay : '14 Jul, 2021' 
    },{ Id: 14,
        Title : 'Stokes opens up on taking medication for anxiety',
        Category : 'Sports',
        Author : 'Ali Hasan',
        ReadTime : 17,
        BlogImage : 'https://media.istockphoto.com/photos/closeup-of-red-cricket-ball-and-bat-sitting-on-grass-picture-id177427917?b=1&k=20&m=177427917&s=170667a&w=0&h=EDjuygOLoDdEJ8NxfB8NrSEj_awRE5Ag7mAnpphJecg=',
        AuthorImage : 'https://avatars.githubusercontent.com/u/16849849',
        PublishDay : '14 Jul, 2021'  
    },{ Id: 15,
        Title : 'How to use search engine optimization to drive sales',
        Category : 'Technology',
        Author : 'Tonmoy Das',
        ReadTime : 7,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/25247456',
        PublishDay : '14 Jul, 2021'  
    },{ Id: 16,
        Title : 'Robinson replaces Potts for Manchester Test',
        Category : 'Sports',
        Author : 'Ali Hasan',
        ReadTime : 17,
        BlogImage : 'https://media.istockphoto.com/photos/closeup-of-red-cricket-ball-and-bat-sitting-on-grass-picture-id177427917?b=1&k=20&m=177427917&s=170667a&w=0&h=EDjuygOLoDdEJ8NxfB8NrSEj_awRE5Ag7mAnpphJecg=',
        AuthorImage : 'https://avatars.githubusercontent.com/u/16849849',
        PublishDay : '14 Jul, 2021'  
    },{ Id: 17,
        Title : 'Dravid tests positive for COVID-19',
        Category : 'Sports',
        Author : 'Learn With Sumit',
        ReadTime : 6,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/73503432',
        PublishDay : '14 Jul, 2021'  
    },{ Id: 18,
        Title : 'VVS Laxman joins Asia Cup team in Dubai',
        Category : 'Sports',
        Author : 'Learn With Sumit',
        ReadTime : 6,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/73503432',
        PublishDay : '14 Jul, 2021'  
    },{ Id: 19,
        Title : 'How to use search engine optimization to drive sales',
        Category : 'Technology',
        Author : 'Tonmoy Das',
        ReadTime : 7,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/25247456',
        PublishDay : '14 Jul, 2021'  
    },{ Id: 20,
        Title : 'Boost your conversion rate',
        Category : 'Article',
        Author : 'Learn With Sumit',
        ReadTime : 6,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/73503432',
        PublishDay : '14 Jul, 2021'  
    },{ Id: 21,
        Title : 'Boost your conversion rate',
        Category : 'Article',
        Author : 'Learn With Sumit',
        ReadTime : 6,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/73503432',
        PublishDay : '14 Jul, 2021'  
    },{ Id: 22,
        Title : 'How to use search engine optimization to drive sales',
        Category : 'Technology',
        Author : 'Tonmoy Das',
        ReadTime : 7,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/25247456' ,
        PublishDay : '14 Jul, 2021' 
    },{ Id: 23,
        Title : 'Improve your customer experience',
        Category : 'Article',
        Author : 'Raihan',
        ReadTime : 12,
        BlogImage : 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/60396716',
        PublishDay : '14 Jul, 2021'  
    },{ Id: 24,
        Title : 'BCCI plea to be referred to Justice Chandrachud-led bench',
        Category : 'Sports',
        Author : 'Ali Hasan',
        ReadTime : 17,
        BlogImage : 'https://media.istockphoto.com/photos/closeup-of-red-cricket-ball-and-bat-sitting-on-grass-picture-id177427917?b=1&k=20&m=177427917&s=170667a&w=0&h=EDjuygOLoDdEJ8NxfB8NrSEj_awRE5Ag7mAnpphJecg=',
        AuthorImage : 'https://avatars.githubusercontent.com/u/16849849',
        PublishDay : '14 Jul, 2021'  
    },{ Id: 25,
        Title : 'Man Utd. Signed Casemiro',
        Category : 'Sports',
        Author : 'Tonmoy Das',
        ReadTime : 7,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/25247456',
        PublishDay : '14 Jul, 2021'  
    },{ Id: 26,
        Title : 'Strapy is the new weapon',
        Category : 'Technology',
        Author : 'Ali Hasan',
        ReadTime : 17,
        BlogImage : 'https://media.istockphoto.com/photos/closeup-of-red-cricket-ball-and-bat-sitting-on-grass-picture-id177427917?b=1&k=20&m=177427917&s=170667a&w=0&h=EDjuygOLoDdEJ8NxfB8NrSEj_awRE5Ag7mAnpphJecg=',
        AuthorImage : 'https://avatars.githubusercontent.com/u/16849849',
        PublishDay : '14 Jul, 2021'  
    },{ Id: 27,
        Title : 'Woo Do Hwan, WJSN Bona and Cha Hakyeon confirmed as leads for MBCs',
        Category : 'Drama',
        Author : 'Learn With Sumit',
        ReadTime : 6,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/73503432' ,
        PublishDay : '14 Jul, 2021' 
    },{ Id: 28,
        Title : 'Hero Alom launch a new song',
        Category : 'Drama',
        Author : 'Learn With Sumit',
        ReadTime : 6,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/73503432' ,
        PublishDay : '14 Jul, 2021' 
    },{ Id: 29,
        Title : 'Blockchain settlement without having to wait for any blocks',
        Category : 'Technology',
        Author : 'Tonmoy Das',
        ReadTime : 7,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/25247456',
        PublishDay : '14 Jul, 2021'  
    },{ Id: 30,
        Title : 'Settlements with Bitcoin as complex cash',
        Category : 'Technology',
        Author : 'Learn With Sumit',
        ReadTime : 6,
        BlogImage : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        AuthorImage : 'https://avatars.githubusercontent.com/u/73503432' ,
        PublishDay : '14 Jul, 2021' 
    }
];
export default initialState;
