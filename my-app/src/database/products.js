const statusColorMap = {
  "in-stock": "success",
  "out-of-stock": "danger",
  "incoming": "warning",
};

const tags = {
  newArrival: "New Arrival",
  customerPick: "Customer Pick",
  sale: "Sale",
  none: "None",
}

let products = [
  {
    productID: 1,
    name: "Taylor Swift",
    artist: "Taylor Swift",
    genre: "Country",
    description: "'Taylor Swift' is the debut studio album by the American singer-songwriter Taylor Swift. Under Big Machine Records, it was released in North America on October 24, 2006, and elsewhere on March 18, 2008. Swift had signed with Sony/ATV Tree publishing house in 2004, at age 14, to pursue a career as a country musician. Her contract with Big Machine Records in 2005 enabled her to work on the album during her second year of high school.",
    price: 9.99,
    status: "in-stock",
    tracklist: [
      {
        id: "1",
        name: "Tim McGraw",
      },
      {
        id: "2",
        name: "Picture To Burn",
      },
      {
        id: "3",
        name: "Teardrops On My Guitar",
      },
      {
        id: "4",
        name: "A Place In This World",
      },
      {
        id: "5",
        name: "Cold As You",
      },
      {
        id: "6",
        name: "The Outside",
      },
      {
        id: "7",
        name: "Tied Together With A Smile",
      },
      {
        id: "8",
        name: "Stay Beautiful",
      },
      {
        id: "9",
        name: "Should've Said No",
      },
      {
        id: "10",
        name: "Mary's Song (Oh My My My)",
      },
      {
        id: "11",
        name: "Our Song",
      },
      {
        id: "12",
        name: "I'm Only Me When I'm With You",
      },
      {
        id: "13",
        name: "Invisible",
      },
      {
        id: "14",
        name: "A Perfectly Good Heart",
      }
    ],
    image: "taylor_swift-debut.jpg",
    tag: tags.sale,
  },
  {
    productID: 2,
    name: "Fearless",
    artist: "Taylor Swift",
    genre: "Country",
    description: "'Fearless' is the second studio album by the American singer-songwriter Taylor Swift. Under Big Machine Records imprint, it was released in the U.S. and Canada on November 11, 2008, and elsewhere on March 9, 2009. Written predominantly by Swift while she was promoting her 2006 self-titled debut album in 2007-2008, Fearless features additional songwriting credits from Liz Rose, Hillary Lindsey, Colbie Caillat, and John Rich. Swift wrote seven of the standard edition's 13 tracks by herself and, in her debut as a record producer, co-produced the album with Nathan Chapman.",
    price: 11.99,
    status: "in-stock",
    tracklist: [
      {
        id: "1",
        name: "Fearless",
      },
      {
        id: "2",
        name: "Fifteen",
      },
      {
        id: "3",
        name: "Love Story",
      },
      {
        id: "4",
        name: "Hey Stephen",
      },
      {
        id: "5",
        name: "White Horse",
      },
      {
        id: "6",
        name: "You Belong With Me",
      },
      {
        id: "7",
        name: "Breathe",
      },
      {
        id: "8",
        name: "Tell Me Why",
      },
      {
        id: "9",
        name: "You're Not Sorry",
      },
      {
        id: "10",
        name: "The Way I Loved You",
      },
      {
        id: "11",
        name: "Forever & Always",
      },
      {
        id: "12",
        name: "The Best Day",
      },
      {
        id: "13",
        name: "Change",
      }
    ],
    image: "taylor_swift-fearless.jpg",
    tag: tags.sale,
  }
  , {
    productID: 3,
    name: "Speak Now",
    artist: "Taylor Swift",
    genre: "Country",
    description: "Inspired by Swift's transition from adolescence into adulthood, 'Speak Now' is a loose concept album consisting of confessional songs mostly about love and heartbreak that explore past relationships and depart from the youthful optimism on her past albums. Some tracks were inspired by her rising stardom and public experience, and they have lyrics about confrontation against her critics and adversaries. Produced by Swift and Nathan Chapman, the album combines country pop, pop rock, and power pop. Its songs incorporate prominent rock stylings, and their melodies are characterized by acoustic instruments intertwined with chiming electric guitars, dramatic strings, and drums.",
    price: 10.99,
    status: "in-stock",
    tracklist: [
      {
        id: "1",
        name: "Mine",
      },
      {
        id: "2",
        name: "Sparks Fly",
      },
      {
        id: "3",
        name: "Back To December",
      },
      {
        id: "4",
        name: "Speak Now",
      },
      {
        id: "5",
        name: "Dear John",
      },
      {
        id: "6",
        name: "Mean",
      },
      {
        id: "7",
        name: "The Story Of Us",
      },
      {
        id: "8",
        name: "Never Grow Up",
      },
      {
        id: "9",
        name: "Enchanted",
      },
      {
        id: "10",
        name: "Better Than Revenge",
      },
      {
        id: "11",
        name: "Innocent",
      },
      {
        id: "12",
        name: "Haunted",
      },
      {
        id: "13",
        name: "Last Kiss",
      },
      {
        id: "14",
        name: "Long Live",
      }
    ],
    image: "taylor_swift-speak_now.jpg",
    tag: tags.sale,
  },
  {
    productID: 4,
    name: "Red",
    artist: "Taylor Swift",
    genre: "Country",
    description: "'Red' is the fourth studio album by the American singer-songwriter Taylor Swift. It was released on October 22, 2012, by Big Machine Records. The album's title refers to the tumultuous, 'red' emotions Swift experienced during the album's conception; its songs discuss the complex and conflicting feelings resulting from fading romance.",
    price: 13.99,
    status: "in-stock",
    tracklist: [
      {
        id: "1",
        name: "State Of Grace",
      },
      {
        id: "2",
        name: "Red",
      },
      {
        id: "3",
        name: "Treacherous",
      },
      {
        id: "4",
        name: "I Knew You Were Trouble",
      },
      {
        id: "5",
        name: "All Too Well",
      },
      {
        id: "6",
        name: "22",
      },
      {
        id: "7",
        name: "I Almost Do",
      },
      {
        id: "8",
        name: "We Are Never Ever Getting Back Together",
      },
      {
        id: "9",
        name: "Stay Stay Stay",
      },
      {
        id: "10",
        name: "The Last Time (feat. Gary Lightbody)"
      },
      {
        id: "11",
        name: "Holy Ground",
      },
      {
        id: "12",
        name: "Sad Beautiful Tragic",
      },
      {
        id: "13",
        name: "The Lucky One",
      },
      {
        id: "14",
        name: "Everything Has Changed",
      },
      {
        id: "15",
        name: "Starlight",
      },
      {
        id: "16",
        name: "Begin Again",
      }
    ],
    image: "taylor_swift-red.jpg",
    tag: tags.sale,
  },
  {
    productID: 5,
    name: "1989",
    artist: "Taylor Swift",
    genre: "Synth-pop",
    description: "'1989' is the fifth studio album by the American singer-songwriter Taylor Swift, released on October 27, 2014, by Big Machine Records. Inspired by 1980s synth-pop, Swift conceived 1989 to recalibrate her artistry to pop after critics disputed her status as a country musician when she released the cross-genre Red (2012) to country radio. She titled 1989 after her birth year as a symbolic artistic rebirth and enlisted Max Martin, who produced Red's electronic-influenced pop tracks, as co-executive producer.",
    price: 11.99,
    status: "in-stock",
    tracklist: [
      {
        id: "1",
        name: "Welcome To New York",
      },
      {
        id: "2",
        name: "Blank Space",
      },
      {
        id: "3",
        name: "Style",
      },
      {
        id: "4",
        name: "Out Of The Woods",
      },
      {
        id: "5",
        name: "All You Had To Do Was Stay",
      },
      {
        id: "6",
        name: "Shake It Off",
      },
      {
        id: "7",
        name: "I Wish You Would",
      },
      {
        id: "8",
        name: "Bad Blood",
      },
      {
        id: "9",
        name: "Wildest Dreams",
      },
      {
        id: "10",
        name: "How You Get The Girl"
      },
      {
        id: "11",
        name: "This Love",
      },
      {
        id: "12",
        name: "I Know Places",
      },
      {
        id: "13",
        name: "Clean",
      }
    ],
    image: "taylor_swift-1989.jpg",
    tag: tags.sale,
  },
  {
    productID: 6,
    name: "reputation",
    artist: "Taylor Swift",
    genre: "Electropop",
    description: "'reputation' is the sixth studio album by the American singer-songwriter Taylor Swift. It was released on November 10, 2017, as her last album with Big Machine Records. She conceived 'reputation' as a response to the media scrutiny on her private life and public image after her previous album, '1989' (2014), propelled her toward global stardom.",
    price: 12.99,
    status: "in-stock",
    tracklist: [
      {
        id: "1",
        name: "...Ready For It?",
      },
      {
        id: "2",
        name: "End Game (feat. Ed Sheeran & Future)",
      },
      {
        id: "3",
        name: "I Did Something Bad",
      },
      {
        id: "4",
        name: "Don't Blame Me",
      },
      {
        id: "5",
        name: "Delicate",
      },
      {
        id: "6",
        name: "Look What You Made Me Do",
      },
      {
        id: "7",
        name: "So It Goes...",
      },
      {
        id: "8",
        name: "Gorgeous",
      },
      {
        id: "9",
        name: "Getaway Car",
      },
      {
        id: "10",
        name: "King Of My Heart",
      },
      {
        id: "11",
        name: "Dancing With Our Hands Tied",
      },
      {
        id: "12",
        name: "Dress",
      },
      {
        id: "13",
        name: "This Is Why We Can't Have Nice Things",
      },
      {
        id: "14",
        name: "Call It What You Want",
      },
      {
        id: "15",
        name: "New Year's Day",
      }
    ],
    image: "taylor_swift-reputation.png",
    tag: tags.customerPick,
  },
  {
    productID: 7,
    name: "Lover",
    artist: "Taylor Swift",
    genre: "Pop",
    description: "'Lover' is the seventh studio album by the American singer-songwriter Taylor Swift, released on August 23, 2019, by Republic Records. It is her first album after her departure from Big Machine Records, which caused a public dispute over the ownership of Swift's past albums. As the executive producer, Swift worked with producers Jack Antonoff, Joel Little, Louis Bell, Frank Dukes, and Sounwave on the album.",
    price: 13.99,
    status: "in-stock",
    tracklist: [
      {
        id: "1",
        name: "I Forgot That You Existed",
      },
      {
        id: "2",
        name: "Cruel Summer",
      },
      {
        id: "3",
        name: "Lover",
      },
      {
        id: "4",
        name: "The Man",
      },
      {
        id: "5",
        name: "The Archer",
      },
      {
        id: "6",
        name: "I Think He Knows",
      },
      {
        id: "7",
        name: "Miss Americana & The Heartbreak Prince",
      },
      {
        id: "8",
        name: "Paper Rings",
      },
      {
        id: "9",
        name: "Cornelia Street",
      },
      {
        id: "10",
        name: "Death By A Thousand Cuts",
      },
      {
        id: "11",
        name: "London Boy",
      },
      {
        id: "12",
        name: "Soon You'll Get Better (feat. Dixie Chicks)",
      },
      {
        id: "13",
        name: "False God",
      },
      {
        id: "14",
        name: "You Need To Calm Down",
      },
      {
        id: "15",
        name: "Afterglow",
      },
      {
        id: "16",
        name: "ME! (feat. Brendon Urie)",
      },
      {
        id: "17",
        name: "It's Nice To Have A Friend",
      },
      {
        id: "18",
        name: "Daylight",
      }
    ],
    image: "taylor_swift-lover.jpg",
    tag: tags.customerPick,
  },
  {
    productID: 8,
    name: "folklore",
    artist: "Taylor Swift",
    genre: "Alternative",
    description: "'folklore' is the eighth studio album by the American singer-songwriter Taylor Swift. It was a surprise album, released on July 24, 2020, via Republic Records. Following the outbreak of the COVID-19 pandemic in early 2020, Swift canceled the concert tour for her seventh studio album Lover (2019). She conceived 'folklore' during quarantine as 'a collection of songs and stories that flowed like a stream of consciousness', working with producers Aaron Dessner and Jack Antonoff virtually; Dessner and Antonoff operated from recording studios in the Hudson Valley and New York City, respectively, while Swift recorded her vocals in a home studio at her Los Angeles residence.",
    price: 11.99,
    status: "in-stock",
    tracklist: [
      {
        id: "1",
        name: "the 1",
      },
      {
        id: "2",
        name: "cardigan",
      },
      {
        id: "3",
        name: "the last great american dynasty",
      },
      {
        id: "4",
        name: "exile (feat. Bon Iver)",
      },
      {
        id: "5",
        name: "my tears ricochet",
      },
      {
        id: "6",
        name: "mirrorball",
      },
      {
        id: "7",
        name: "seven",
      },
      {
        id: "8",
        name: "august",
      },
      {
        id: "9",
        name: "this is me trying",
      },
      {
        id: "10",
        name: "illicit affairs",
      },
      {
        id: "11",
        name: "invisible string",
      },
      {
        id: "12",
        name: "mad woman",
      },
      {
        id: "13",
        name: "epiphany",
      },
      {
        id: "14",
        name: "betty",
      },
      {
        id: "15",
        name: "peace",
      },
      {
        id: "16",
        name: "hoax",
      }
    ],
    image: "taylor_swift-folklore.png",
    tag: tags.customerPick,
  },
  {
    productID: 9,
    name: "evermore (deluxe version)",
    artist: "Taylor Swift",
    genre: "Alternative/Folk",
    description: "'evermore' is the ninth studio album by the American singer-songwriter Taylor Swift. It was a surprise album released on December 11, 2020, via Republic Records, less than five months after her previous studio album Folklore. 'evermore' was a spontaneous product of Swift's extended collaboration with her Folklore collaborator Aaron Dessner, mainly recorded at his Long Pond Studio in the Hudson Valley.",
    price: 11.99,
    status: "in-stock",
    tracklist: [
      {
        id: "1",
        name: "willow",
      },
      {
        id: "2",
        name: "champagne problems",
      },
      {
        id: "3",
        name: "gold rush",
      },
      {
        id: "4",
        name: "'tis the damn season",
      },
      {
        id: "5",
        name: "tolerate it",
      },
      {
        id: "6",
        name: "no body, no crime (feat. HAIM)",
      },
      {
        id: "7",
        name: "happiness",
      },
      {
        id: "8",
        name: "dorothea",
      },
      {
        id: "9",
        name: "coney island (feat. The National)",
      },
      {
        id: "10",
        name: "ivy",
      },
      {
        id: "11",
        name: "cowboy like me",
      },
      {
        id: "12",
        name: "long story short",
      },
      {
        id: "13",
        name: "marjorie",
      },
      {
        id: "14",
        name: "closure",
      },
      {
        id: "15",
        name: "evermore (feat. Bon Iver)",
      },
      {
        id: "16",
        name: "right where you left me",
      },
      {
        id: "17",
        name: "it's time to go",
      }
    ],
    image: "taylor_swift-evermore.jpg",
    tag: tags.customerPick,
  },
  {
    productID: 10,
    name: "Fearless (Taylor's Version)",
    artist: "Taylor Swift",
    genre: "Country",
    description: "'Fearless (Taylor's Version)' is the first re-recorded album by the American singer-songwriter Taylor Swift, released on April 9, 2021, by Republic Records. It is part of Swift's re-recording projects following the 2019 dispute over the ownership of her back catalog released by Big Machine Records. 'Fearless (Taylor's Version)' comprises re-recordings of the tracks on Swift's second studio album, Fearless (2008), the soundtrack single 'Today Was a Fairytale' for the 2010 film Valentine's Day, and six previously unreleased 'From The Vault' tracks.",
    price: 13.99,
    status: "in-stock",
    tracklist: [
      {
        id: "1",
        name: "Fearless (Taylor's Version)",
      },
      {
        id: "2",
        name: "Fifteen (Taylor's Version)",
      },
      {
        id: "3",
        name: "Love Story (Taylor's Version)",
      },
      {
        id: "4",
        name: "Hey Stephen (Taylor's Version)",
      },
      {
        id: "5",
        name: "White Horse (Taylor's Version)",
      },
      {
        id: "6",
        name: "You Belong With Me (Taylor's Version)",
      },
      {
        id: "7",
        name: "Breathe (feat. Colbie Caillat) (Taylor's Version)",
      },
      {
        id: "8",
        name: "Tell Me Why (Taylor's Version)",
      },
      {
        id: "9",
        name: "You're Not Sorry (Taylor's Version)",
      },
      {
        id: "10",
        name: "The Way I Loved You (Taylor's Version)",
      },
      {
        id: "11",
        name: "Forever & Always (Taylor's Version)",
      },
      {
        id: "12",
        name: "The Best Day (Taylor's Version)",
      },
      {
        id: "13",
        name: "Change (Taylor's Version)",
      },
      {
        id: "14",
        name: "Jump Then Fall (Taylor's Version)",
      },
      {
        id: "15",
        name: "Untouchable (Taylor's Version)",
      },
      {
        id: "16",
        name: "Forever & Always (Piano Version) (Taylor's Version)",
      },
      {
        id: "17",
        name: "Come In With The Rain (Taylor's Version)",
      },
      {
        id: "18",
        name: "Superstar (Taylor's Version)",
      },
      {
        id: "19",
        name: "The Other Side Of The Door (Taylor's Version)",
      },
      {
        id: "20",
        name: "Today Was A Fairytale (Taylor's Version)",
      },
      {
        id: "21",
        name: "You All Over Me (feat. Maren Morris) (Taylor's Version) (From The Vault)",
      },
      {
        id: "22",
        name: "Mr. Perfectly Fine (Taylor's Version) (From The Vault)",
      },
      {
        id: "23",
        name: "We Were Happy (Taylor's Version) (From The Vault)",
      },
      {
        id: "24",
        name: "That's When (feat. Keith Urban) (Taylor's Version) (From The Vault)",
      },
      {
        id: "25",
        name: "Don't You (Taylor's Version) (From The Vault)",
      },
      {
        id: "26",
        name: "Bye Bye Baby (Taylor's Version) (From The Vault)",
      }
    ],
    image: "taylor_swift-fearlessTV.jpg",
    tag: tags.customerPick,
  },
  {
    productID: 11,
    name: "Red (Taylor's Version)",
    artist: "Taylor Swift",
    genre: "Country",
    description: "CD",
    price: 13.99,
    status: "in-stock",
    tracklist: [
      {
        id: "1",
        name: "State Of Grace (Taylor's Version)",
      },
      {
        id: "2",
        name: "Red (Taylor's Version)",
      },
      {
        id: "3",
        name: "Treacherous (Taylor's Version)",
      },
      {
        id: "4",
        name: "I Knew You Were Trouble (Taylor's Version)",
      },
      {
        id: "5",
        name: "All Too Well (Taylor's Version)",
      },
      {
        id: "6",
        name: "22 (Taylor's Version)",
      },
      {
        id: "7",
        name: "I Almost Do (Taylor's Version)",
      },
      {
        id: "8",
        name: "We Are Never Ever Getting Back Together (Taylor's Version)",
      },
      {
        id: "9",
        name: "Stay Stay Stay (Taylor's Version)",
      },
      {
        id: "10",
        name: "The Last Time (feat. Gary Lightbody) (Taylor's Version)",
      },
      {
        id: "11",
        name: "Holy Ground (Taylor's Version)",
      },
      {
        id: "12",
        name: "Sad Beautiful Tragic (Taylor's Version)",
      },
      {
        id: "13",
        name: "The Lucky One (Taylor's Version)",
      },
      {
        id: "14",
        name: "Everything Has Changed (feat. Ed Sheeran) (Taylor's Version)",
      },
      {
        id: "15",
        name: "Starlight (Taylor's Version)"
      },
      {
        id: "16",
        name: "Begin Again (Taylor's Version)"
      },
      {
        id: "17",
        name: "The Moment I Knew (Taylor's Version)"
      },
      {
        id: "18",
        name: "Come Back... Be Here (Taylor's Version)"
      },
      {
        id: "19",
        name: "Girl At Home (Taylor's Version)"
      },
      {
        id: "20",
        name: "State Of Grace (Acoustic Version) (Taylor's Version)"
      },
      {
        id: "21",
        name: "Ronan (Taylor's Version)"
      },
      {
        id: "22",
        name: "Better Man (Taylor's Version) (From The Vault)"
      },
      {
        id: "23",
        name: "Nothing New (feat. Phoebe Bridgers) (Taylor's Version) (From The Vault)"
      },
      {
        id: "24",
        name: "Babe (Taylor's Version) (From The Vault)"
      },
      {
        id: "25",
        name: "Message In A Bottle (Taylor's Version) (From The Vault)"
      },
      {
        id: "26",
        name: "I Bet You Think About Me (feat. Chris Stapleton) (Taylor's Version) (From The Vault)"
      },
      {
        id: "27",
        name: "Forever Winter (Taylor's Version) (From The Vault)"
      },
      {
        id: "28",
        name: "Run (feat. Ed Sheeran) (Taylor's Version) (From The Vault)"
      },
      {
        id: "29",
        name: "The Very First Night (Taylor's Version) (From The Vault)"
      },
      {
        id: "30",
        name: "All Too Well (10 Minute Version) (Taylor's Version)"
      },
    ],
    image: "taylor_swift-redTV.jpg",
    tag: tags.newArrival,
  },
  {
    productID: 12,
    name: "Midnights",
    artist: "Taylor Swift",
    genre: "Pop",
    description: "'Midnights' is the tenth studio album by the American singer-songwriter Taylor Swift, released on October 21, 2022, by Republic Records. Swift conceived it as a concept album about nocturnal ruminations inspired by her sleepless nights. The autobiographical songwriting explores broad emotions such as regrets, self-criticism, fantasies, heartbreak, and infatuation, using confessional yet cryptic lyrics that allude to her personal life and public image.",
    price: 12.99,
    status: "in-stock",
    tracklist: [
      {
        id: "1",
        name: "Lavender Haze",
      },
      {
        id: "2",
        name: "Maroon",
      },
      {
        id: "3",
        name: "Anti-Hero",
      },
      {
        id: "4",
        name: "Snow On The Beach (feat. Lana Del Rey)",
      },
      {
        id: "5",
        name: "You're On Your Own, Kid",
      },
      {
        id: "6",
        name: "Midnight Rain",
      },
      {
        id: "7",
        name: "Question...?",
      },
      {
        id: "8",
        name: "Vigilante Shit",
      },
      {
        id: "9",
        name: "Bejeweled",
      },
      {
        id: "10",
        name: "Labyrinth",
      },
      {
        id: "11",
        name: "Karma",
      },
      {
        id: "12",
        name: "Sweet Nothing",
      },
      {
        id: "13",
        name: "Mastermind",
      },
    ],
    image: "taylor_swift-midnights.jpg",
    tag: tags.newArrival,
  },
  {
    productID: 13,
    name: "Speak Now (Taylor's Version)",
    artist: "Taylor Swift",
    genre: "Country",
    description: "'Speak Now (Taylor's Version)' is the third re-recorded album by the American singer-songwriter Taylor Swift, released on July 7, 2023, by Republic Records. It is a re-recording of Swift's third studio album, 'Speak Now' (2010), part of Swift's counteraction to a 2019 masters dispute regarding the ownership of her back catalog. The album was announced on May 5, 2023, at the first Nashville show of her Eras Tour.",
    price: 12.99,
    status: "in-stock",
    tracklist: [
      {
        id: "1",
        name: "Mine (Taylor's Version)",
      },
      {
        id: "2",
        name: "Sparks Fly (Taylor's Version)",
      },
      {
        id: "3",
        name: "Back To December (Taylor's Version)",
      },
      {
        id: "4",
        name: "Speak Now (Taylor's Version)",
      },
      {
        id: "5",
        name: "Dear John (Taylor's Version)",
      },
      {
        id: "6",
        name: "Mean (Taylor's Version)",
      },
      {
        id: "7",
        name: "The Story Of Us (Taylor's Version)",
      },
      {
        id: "8",
        name: "Never Grow Up (Taylor's Version)",
      },
      {
        id: "9",
        name: "Enchanted (Taylor's Version)",
      },
      {
        id: "10",
        name: "Better Than Revenge (Taylor's Version)",
      },
      {
        id: "11",
        name: "Innocent (Taylor's Version)",
      },
      {
        id: "12",
        name: "Haunted (Taylor's Version)",
      },
      {
        id: "13",
        name: "Last Kiss (Taylor's Version)",
      },
      {
        id: "14",
        name: "Long Live (Taylor's Version)",
      },
      {
        id: "15",
        name: "Ours (Taylor's Version)",
      },
      {
        id: "16",
        name: "Superman (Taylor's Version)",
      },
      {
        id: "17",
        name: "Electric Touch (feat. Fall Out Boy) (Taylor's Version) (From The Vault)",
      },
      {
        id: "18",
        name: "When Emma Falls In Love (Taylor's Version) (From The Vault)",
      },
      {
        id: "19",
        name: "I Can See You (Taylor's Version) (From The Vault)",
      },
      {
        id: "20",
        name: "Castles Crumbling (feat. Hayley Williams) (Taylor's Version) (From The Vault)",
      },
      {
        id: "21",
        name: "Foolish One (Taylor's Version) (From The Vault)",
      },
      {
        id: "22",
        name: "Timeless (Taylor's Version) (From The Vault)"
      }
    ],
    image: "taylor_swift-speak_nowTV.jpg",
    tag: tags.newArrival,
  },
  {
    productID: 14,
    name: "1989 (Taylor's Version)",
    artist: "Taylor Swift",
    genre: "Synth-pop",
    description: "1989 (Taylor's Version) is the fourth re-recorded album by the American singer-songwriter Taylor Swift. It is a re-recording of Swift's fifth studio album, 1989 (2014), and was released on October 27, 2023, by Republic Records. The album is part of Swift's ongoing response to a 2019 dispute regarding the masters of her back catalog. It was announced at the final Los Angeles show of the Eras Tour on August 9, 2023.",
    price: 13.99,
    status: "in-stock",
    tracklist: [
      {
        id: "1",
        name: "Welcome To New York (Taylor's Version)",
      },
      {
        id: "2",
        name: "Blank Space (Taylor's Version)",
      },
      {
        id: "3",
        name: "Style (Taylor's Version)",
      },
      {
        id: "4",
        name: "Out Of The Woods (Taylor's Version)",
      },
      {
        id: "5",
        name: "All You Had To Do Was Stay (Taylor's Version)",
      },
      {
        id: "6",
        name: "Shake It Off (Taylor's Version)",
      },
      {
        id: "7",
        name: "I Wish You Would (Taylor's Version)",
      },
      {
        id: "8",
        name: "Bad Blood (Taylor's Version)",
      },
      {
        id: "9",
        name: "Wildest Dreams (Taylor's Version)",
      },
      {
        id: "10",
        name: "How You Get The Girl (Taylor's Version)",
      },
      {
        id: "11",
        name: "This Love (Taylor's Version)",
      },
      {
        id: "12",
        name: "I Know Places (Taylor's Version)",
      },
      {
        id: "13",
        name: "Clean (Taylor's Version)",
      },
      {
        id: "14",
        name: "Wonderland (Taylor's Version)",
      },
      {
        id: "15",
        name: "You Are In Love (Taylor's Version)",
      },
      {
        id: "16",
        name: "New Romantics (Taylor's Version)",
      },
      {
        id: "17",
        name: "\"Slut!\" (Taylor\'s Version) (From The Vault)",
      },
      {
        id: "18",
        name: "Say Don't Go (Taylor's Version) (From The Vault)",
      },
      {
        id: "19",
        name: "Now That We Don't Talk (Taylor's Version) (From The Vault)",
      },
      {
        id: "20",
        name: "Suburban Legends (Taylor's Version) (From The Vault)",
      },
      {
        id: "21",
        name: "Is It Over Now? (Taylor's Version) (From The Vault)",
      },
      {
        id: "22",
        name: "Sweeter Than Fiction (Taylor’s Version)",
      }
    ],
    image: "taylor_swift-1989TV.jpg",
    tag: tags.newArrival,
  },
  {
    productID: 15,
    name: "THE TORTURED POETS DEPARTMENT",
    artist: "Taylor Swift",
    genre: "Synth-pop",
    description: "CD",
    price: 14.99,
    status: "in-stock",
    tracklist: [
      {
        id: "1",
        name: "Fornight (feat. Post Malone)",
      },
      {
        id: "2",
        name: "The Tortured Poets Department",
      }
    ],
    image: "taylor_swift-ttpd.png",
    tag: tags.newArrival,
  },
];

export { products, statusColorMap };