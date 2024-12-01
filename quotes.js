const localQuotes = [
  {
    text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    author: 'Thomas Edison',
  },
  {
    text: 'You can observe a lot just by watching.',
    author: 'Yogi Berra',
  },
  {
    text: 'A house divided against itself cannot stand.',
    author: 'Abraham Lincoln',
  },
  {
    text: 'Difficulties increase the nearer we get to the goal.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'Fate is in your hands and no one elses',
    author: 'Byron Pulsifer',
  },
  {
    text: 'Be the chief but never the lord.',
    author: 'Lao Tzu',
  },
  {
    text: 'Nothing happens unless first we dream.',
    author: 'Carl Sandburg',
  },
  {
    text: 'Well begun is half done.',
    author: 'Aristotle',
  },
  {
    text: 'Life is a learning experience, only if you learn.',
    author: 'Yogi Berra',
  },
  {
    text: 'Self-complacency is fatal to progress.',
    author: 'Margaret Sangster',
  },
  {
    text: 'Peace comes from within. Do not seek it without.',
    author: 'Buddha',
  },
  {
    text: 'What you give is what you get.',
    author: 'Byron Pulsifer',
  },
  {
    text: 'We can only learn to love by loving.',
    author: 'Iris Murdoch',
  },
  {
    text: 'Life is change. Growth is optional. Choose wisely.',
    author: 'Karen Clark',
  },
  {
    text: "You'll see it when you believe it.",
    author: 'Wayne Dyer',
  },
  {
    text: 'Today is the tomorrow we worried about yesterday.',
    author: null,
  },
  {
    text: "It's easier to see the mistakes on someone else's paper.",
    author: null,
  },
  {
    text: 'Every man dies. Not every man really lives.',
    author: null,
  },
  {
    text: 'To lead people walk behind them.',
    author: 'Lao Tzu',
  },
  {
    text: 'Having nothing, nothing can he lose.',
    author: 'William Shakespeare',
  },
  {
    text: 'Trouble is only opportunity in work clothes.',
    author: 'Henry J. Kaiser',
  },
  {
    text: 'A rolling stone gathers no moss.',
    author: 'Publilius Syrus',
  },
  {
    text: 'Ideas are the beginning points of all fortunes.',
    author: 'Napoleon Hill',
  },
  {
    text: 'Everything in life is luck.',
    author: 'Donald Trump',
  },
  {
    text: 'Doing nothing is better than being busy doing nothing.',
    author: 'Lao Tzu',
  },
  {
    text: 'Trust yourself. You know more than you think you do.',
    author: 'Benjamin Spock',
  },
  {
    text: 'Study the past, if you would divine the future.',
    author: 'Confucius',
  },
  {
    text: 'The day is already blessed, find peace within it.',
    author: null,
  },
  {
    text: 'From error to error one discovers the entire truth.',
    author: 'Sigmund Freud',
  },
  {
    text: 'Well done is better than well said.',
    author: 'Benjamin Franklin',
  },
  {
    text: 'Bite off more than you can chew, then chew it.',
    author: 'Ella Williams',
  },
  {
    text: 'Work out your own salvation. Do not depend on others.',
    author: 'Buddha',
  },
  {
    text: 'One today is worth two tomorrows.',
    author: 'Benjamin Franklin',
  },
  {
    text: 'Once you choose hope, anythings possible.',
    author: 'Christopher Reeve',
  },
  {
    text: 'God always takes the simplest way.',
    author: 'Albert Einstein',
  },
  {
    text: 'One fails forward toward success.',
    author: 'Charles Kettering',
  },
  {
    text: 'From small beginnings come great things.',
    author: null,
  },
  {
    text: 'Learning is a treasure that will follow its owner everywhere',
    author: 'Chinese proverb',
  },
  {
    text: 'Be as you wish to seem.',
    author: 'Socrates',
  },
  {
    text: 'The world is always in movement.',
    author: 'V. Naipaul',
  },
  {
    text: 'Never mistake activity for achievement.',
    author: 'John Wooden',
  },
  {
    text: 'What worries you masters you.',
    author: 'Haddon Robinson',
  },
  {
    text: 'One faces the future with ones past.',
    author: 'Pearl Buck',
  },
  {
    text: 'Goals are the fuel in the furnace of achievement.',
    author: 'Brian Tracy',
  },
  {
    text: 'Who sows virtue reaps honour.',
    author: 'Leonardo da Vinci',
  },
  {
    text: 'Be kind whenever possible. It is always possible.',
    author: 'Dalai Lama',
  },
  {
    text: "Talk doesn't cook rice.",
    author: 'Chinese proverb',
  },
  {
    text: 'He is able who thinks he is able.',
    author: 'Buddha',
  },
  {
    text: 'A goal without a plan is just a wish.',
    author: 'Larry Elder',
  },
  {
    text: 'To succeed, we must first believe that we can.',
    author: 'Michael Korda',
  },
  {
    text: 'Learn from yesterday, live for today, hope for tomorrow.',
    author: 'Albert Einstein',
  },
  {
    text: 'A weed is no more than a flower in disguise.',
    author: 'James Lowell',
  },
  {
    text: 'Do, or do not. There is no try.',
    author: 'Yoda',
  },
  {
    text: 'All serious daring starts from within.',
    author: 'Harriet Beecher Stowe',
  },
  {
    text: 'The best teacher is experience learned from failures.',
    author: 'Byron Pulsifer',
  },
  {
    text: 'Think how hard physics would be if particles could think.',
    author: 'Murray Gell-Mann',
  },
  {
    text: "Love is the flower you've got to let grow.",
    author: 'John Lennon',
  },
  {
    text: "Don't wait. The time will never be just right.",
    author: 'Napoleon Hill',
  },
  {
    text: 'Time is the wisest counsellor of all.',
    author: 'Pericles',
  },
  {
    text: 'You give before you get.',
    author: 'Napoleon Hill',
  },
  {
    text: 'Wisdom begins in wonder.',
    author: 'Socrates',
  },
  {
    text: 'Without courage, wisdom bears no fruit.',
    author: 'Baltasar Gracian',
  },
  {
    text: 'Change in all things is sweet.',
    author: 'Aristotle',
  },
  {
    text: 'What you fear is that which requires action to overcome.',
    author: 'Byron Pulsifer',
  },
  {
    text: 'When performance exceeds ambition, the overlap is called success.',
    author: 'Cullen Hightower',
  },
  {
    text: 'When deeds speak, words are nothing.',
    author: 'African proverb',
  },
  {
    text: 'Real magic in relationships means an absence of judgement of others.',
    author: 'Wayne Dyer',
  },
  {
    text: 'I never think of the future. It comes soon enough.',
    author: 'Albert Einstein',
  },
  {
    text: 'Skill to do comes of doing.',
    author: 'Ralph Emerson',
  },
  {
    text: 'Wisdom is the supreme part of happiness.',
    author: 'Sophocles',
  },
  {
    text: 'I believe that every person is born with talent.',
    author: 'Maya Angelou',
  },
  {
    text: 'Important principles may, and must, be inflexible.',
    author: 'Abraham Lincoln',
  },
  {
    text: 'The undertaking of a new action brings new strength.',
    author: 'Richard Evans',
  },
  {
    text: 'The years teach much which the days never know.',
    author: 'Ralph Emerson',
  },
  {
    text: 'Our distrust is very expensive.',
    author: 'Ralph Emerson',
  },
  {
    text: 'All know the way; few actually walk it.',
    author: 'Bodhidharma',
  },
  {
    text: 'Great talent finds happiness in execution.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'Faith in oneself is the best and safest course.',
    author: 'Michelangelo',
  },
  {
    text: 'Courage is going from failure to failure without losing enthusiasm.',
    author: 'Winston Churchill',
  },
  {
    text: 'The two most powerful warriors are patience and time.',
    author: 'Leo Tolstoy',
  },
  {
    text: 'Anticipate the difficult by managing the easy.',
    author: 'Lao Tzu',
  },
  {
    text: 'Those who are free of resentful thoughts surely find peace.',
    author: 'Buddha',
  },
  {
    text: 'A short saying often contains much wisdom.',
    author: 'Sophocles',
  },
  {
    text: 'It takes both sunshine and rain to make a rainbow.',
    author: null,
  },
  {
    text: 'A beautiful thing is never perfect.',
    author: null,
  },
  {
    text: 'Only do what your heart tells you.',
    author: 'Princess Diana',
  },
  {
    text: 'Life is movement-we breathe, we eat, we walk, we move!',
    author: 'John Pierrakos',
  },
  {
    text: 'No one can make you feel inferior without your consent.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'Argue for your limitations, and sure enough theyre yours.',
    author: 'Richard Bach',
  },
  {
    text: 'Luck is what happens when preparation meets opportunity.',
    author: 'Seneca',
  },
  {
    text: 'Victory belongs to the most persevering.',
    author: 'Napoleon Bonaparte',
  },
  {
    text: 'Love all, trust a few, do wrong to none.',
    author: 'William Shakespeare',
  },
  {
    text: 'In order to win, you must expect to win.',
    author: 'Richard Bach',
  },
  {
    text: 'A goal is a dream with a deadline.',
    author: 'Napoleon Hill',
  },
  {
    text: 'You can do it if you believe you can!',
    author: 'Napoleon Hill',
  },
  {
    text: "Set your goals high, and don't stop till you get there.",
    author: 'Bo Jackson',
  },
  {
    text: 'Every new day is another chance to change your life.',
    author: null,
  },
  {
    text: 'Smile, breathe, and go slowly.',
    author: 'Thich Nhat Hanh',
  },
  {
    text: 'Nobody will believe in you unless you believe in yourself.',
    author: 'Liberace',
  },
  {
    text: 'Do more than dream: work.',
    author: 'William Arthur Ward',
  },
  {
    text: 'No man was ever wise by chance.',
    author: 'Seneca',
  },
  {
    text: 'Some pursue happiness, others create it.',
    author: null,
  },
  {
    text: 'He that is giddy thinks the world turns round.',
    author: 'William Shakespeare',
  },
  {
    text: "Don't ruin the present with the ruined past.",
    author: 'Ellen Gilchrist',
  },
  {
    text: 'Do something wonderful, people may imitate it.',
    author: 'Albert Schweitzer',
  },
  {
    text: 'We do what we do because we believe.',
    author: null,
  },
  {
    text: 'Do one thing every day that scares you.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'If you cannot be silent be brilliant and thoughtful.',
    author: 'Byron Pulsifer',
  },
  {
    text: 'Who looks outside, dreams; who looks inside, awakes.',
    author: 'Carl Jung',
  },
  {
    text: 'What we think, we become.',
    author: 'Buddha',
  },
  {
    text: 'The shortest answer is doing.',
    author: 'Lord Herbert',
  },
  {
    text: 'All our knowledge has its origins in our perceptions.',
    author: 'Leonardo da Vinci',
  },
  {
    text: 'The harder you fall, the higher you bounce.',
    author: null,
  },
  {
    text: 'Trusting our intuition often saves us from disaster.',
    author: 'Anne Wilson Schaef',
  },
  {
    text: 'Truth is powerful and it prevails.',
    author: 'Sojourner Truth',
  },
  {
    text: 'Light tomorrow with today!',
    author: 'Elizabeth Browning',
  },
  {
    text: 'Silence is a fence around wisdom.',
    author: 'German proverb',
  },
  {
    text: 'Society develops wit, but its contemplation alone forms genius.',
    author: 'Madame de Stael',
  },
  {
    text: 'The simplest things are often the truest.',
    author: 'Richard Bach',
  },
  {
    text: 'Everyone smiles in the same language.',
    author: null,
  },
  {
    text: 'Yesterday I dared to struggle. Today I dare to win.',
    author: 'Bernadette Devlin',
  },
  {
    text: 'No alibi will save you from accepting the responsibility.',
    author: 'Napoleon Hill',
  },
  {
    text: 'If you can dream it, you can do it.',
    author: 'Walt Disney',
  },
  {
    text: 'It is better to travel well than to arrive.',
    author: 'Buddha',
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: 'Anais Nin',
  },
  {
    text: 'You have to believe in yourself.',
    author: 'Sun Tzu',
  },
  {
    text: 'Our intention creates our reality.',
    author: 'Wayne Dyer',
  },
  {
    text: 'Silence is a true friend who never betrays.',
    author: 'Confucius',
  },
  {
    text: 'Character develops itself in the stream of life.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'From little acorns mighty oaks do grow.',
    author: 'American proverb',
  },
  {
    text: "You can't stop the waves, but you can learn to surf.",
    author: 'Jon Kabat-Zinn',
  },
  {
    text: 'Reality does not conform to the ideal, but confirms it.',
    author: 'Gustave Flaubert',
  },
  {
    text: 'Speak low, if you speak love.',
    author: 'William Shakespeare',
  },
  {
    text: 'A really great talent finds its happiness in execution.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'Reality leaves a lot to the imagination.',
    author: 'John Lennon',
  },
  {
    text: 'The greatest remedy for anger is delay.',
    author: 'Seneca',
  },
  {
    text: 'Growth itself contains the germ of happiness.',
    author: 'Pearl Buck',
  },
  {
    text: "You can do what's reasonable or you can decide what's possible.",
    author: null,
  },

    {
      "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "author": "Winston Churchill"
    },
    {
      "text": "It does not matter how slowly you go as long as you do not stop.",
      "author": "Confucius"
    },
    {
      "text": "Your time is limited, so don’t waste it living someone else’s life.",
      "author": "Steve Jobs"
    },
    {
      "text": "The only way to do great work is to love what you do.",
      "author": "Steve Jobs"
    },
    {
      "text": "The harder you work for something, the greater you’ll feel when you achieve it.",
      "author": "Unknown"
    },
    {
      "text": "Failure is simply the opportunity to begin again, this time more intelligently.",
      "author": "Henry Ford"
    },
    {
      "text": "Don’t watch the clock; do what it does. Keep going.",
      "author": "Sam Levenson"
    },
    {
      "text": "Believe you can and you’re halfway there.",
      "author": "Theodore Roosevelt"
    },
    {
      "text": "The only limit to our realization of tomorrow is our doubts of today.",
      "author": "Franklin D. Roosevelt"
    },
    {
      "text": "Success usually comes to those who are too busy to be looking for it.",
      "author": "Henry David Thoreau"
    },
    {
      "text": "Opportunities don't happen, you create them.",
      "author": "Chris Grosser"
    },
    {
      "text": "The way to get started is to quit talking and begin doing.",
      "author": "Walt Disney"
    },
    {
      "text": "Success is the sum of small efforts, repeated day in and day out.",
      "author": "Robert Collier"
    },
    {
      "text": "I find that the harder I work, the more luck I seem to have.",
      "author": "Thomas Jefferson"
    },
    {
      "text": "Don’t be afraid to give up the good to go for the great.",
      "author": "John D. Rockefeller"
    },
    {
      "text": "I am not a product of my circumstances. I am a product of my decisions.",
      "author": "Stephen Covey"
    },
    {
      "text": "A person who never made a mistake never tried anything new.",
      "author": "Albert Einstein"
    },
    {
      "text": "The best way to predict the future is to create it.",
      "author": "Abraham Lincoln"
    },
    {
      "text": "In the middle of every difficulty lies opportunity.",
      "author": "Albert Einstein"
    },
    {
      "text": "Act as if what you do makes a difference. It does.",
      "author": "William James"
    },
      {
        "text": "Life is 10% what happens to us and 90% how we react to it.",
        "author": "Charles R. Swindoll"
      },
      {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
      },
      {
        "text": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "author": "Albert Schweitzer"
      },
      {
        "text": "If you want to live a happy life, tie it to a goal, not to people or things.",
        "author": "Albert Einstein"
      },
      {
        "text": "The best time to plant a tree was 20 years ago. The second best time is now.",
        "author": "Chinese Proverb"
      },
      {
        "text": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King Jr."
      },
      {
        "text": "Success is the sum of small efforts, repeated day in and day out.",
        "author": "Robert Collier"
      },
      {
        "text": "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "author": "Zig Ziglar"
      },
      {
        "text": "Everything you can imagine is real.",
        "author": "Pablo Picasso"
      },
      {
        "text": "It’s not whether you get knocked down, it’s whether you get up.",
        "author": "Vince Lombardi"
      },
      {
        "text": "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
        "author": "Bill Gates"
      },
      {
        "text": "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
        "author": "Ralph Waldo Emerson"
      },
      {
        "text": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
        "author": "Steve Jobs"
      },
      {
        "text": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        "author": "Aristotle"
      },
      {
        "text": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        "author": "Ralph Waldo Emerson"
      },
      {
        "text": "The only impossible journey is the one you never begin.",
        "author": "Tony Robbins"
      },
      {
        "text": "Don’t count the days, make the days count.",
        "author": "Muhammad Ali"
      },
      {
        "text": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt"
      },
      {
        "text": "You have to be odd to be number one.",
        "author": "Dr. Seuss"
      },
      {
        "text": "The only place where success comes before work is in the dictionary.",
        "author": "Vidal Sassoon"
      },
  
        { "text": "The only way to do great work is to love what you do.", "author": "Steve Jobs" },
        { "text": "The best way to predict the future is to invent it.", "author": "Alan Kay" },
        { "text": "It always seems impossible until it's done.", "author": "Nelson Mandela" },
        { "text": "Life is 10% what happens to us and 90% how we react to it.", "author": "Charles R. Swindoll" },
        { "text": "The mind is everything. What you think you become.", "author": "Buddha" },
        { "text": "What you do today can improve all your tomorrows.", "author": "Ralph Marston" },
        { "text": "The harder you work for something, the greater you'll feel when you achieve it.", "author": "Unknown" },
        { "text": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson" },
        { "text": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt" },
        { "text": "Success is not the key to happiness. Happiness is the key to success.", "author": "Albert Schweitzer" },

          { "text": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt" },
          { "text": "Hardships often prepare ordinary people for an extraordinary destiny.", "author": "C.S. Lewis" },
          { "text": "You are never too old to set another goal or to dream a new dream.", "author": "C.S. Lewis" },
          { "text": "Success is not how high you have climbed, but how you make a positive difference to the world.", "author": "Roy T. Bennett" },
          { "text": "The best time to plant a tree was 20 years ago. The second best time is now.", "author": "Chinese Proverb" },
          { "text": "It's not whether you get knocked down, it's whether you get up.", "author": "Vince Lombardi" },
          { "text": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt" },
          { "text": "Keep your face always toward the sunshine—and shadows will fall behind you.", "author": "Walt Whitman" },
          { "text": "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.", "author": "Helen Keller" },
          { "text": "Don't let yesterday take up too much of today.", "author": "Will Rogers" },
          
            { "text": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt" },
            { "text": "Hardships often prepare ordinary people for an extraordinary destiny.", "author": "C.S. Lewis" },
            { "text": "You are never too old to set another goal or to dream a new dream.", "author": "C.S. Lewis" },
            { "text": "Success is not how high you have climbed, but how you make a positive difference to the world.", "author": "Roy T. Bennett" },
            { "text": "The best time to plant a tree was 20 years ago. The second best time is now.", "author": "Chinese Proverb" },
            { "text": "It's not whether you get knocked down, it's whether you get up.", "author": "Vince Lombardi" },
            { "text": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt" },
            { "text": "Keep your face always toward the sunshine—and shadows will fall behind you.", "author": "Walt Whitman" },
            { "text": "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.", "author": "Helen Keller" },
            { "text": "Don't let yesterday take up too much of today.", "author": "Will Rogers" },
            
              { "text": "Do not watch the clock. Do what it does. Keep going.", "author": "Sam Levenson" },
              { "text": "A journey of a thousand miles must begin with a single step.", "author": "Lao Tzu" },
              { "text": "The only impossible journey is the one you never begin.", "author": "Tony Robbins" },
              { "text": "Don't judge each day by the harvest you reap but by the seeds that you plant.", "author": "Robert Louis Stevenson" },
              { "text": "The best way to predict your future is to create it.", "author": "Peter Drucker" },
              { "text": "Your time is limited, don't waste it living someone else's life.", "author": "Steve Jobs" },
              { "text": "The purpose of our lives is to be happy.", "author": "Dalai Lama" },
              { "text": "You have within you right now, everything you need to deal with whatever the world can throw at you.", "author": "Brian Tracy" },
              { "text": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt" },
              { "text": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson" },
            
              {
                "text": "The only source of knowledge is experience.",
                "author": "Albert Einstein"
            },
            {
                "text": "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
                "author": "Albert Einstein"
            },
            {
                "text": "Science without religion is lame, religion without science is blind.",
                "author": "Albert Einstein"
            },
            {
                "text": "Logic will get you from A to Z; imagination will get you everywhere.",
                "author": "Albert Einstein"
            },
            {
                "text": "The mind is everything. What you think you become.",
                "author": "Buddha"
            },
            {
                "text": "In three words I can sum up everything I've learned about life: it goes on.",
                "author": "Robert Frost"
            },
            {
                "text": "The only way to do great work is to love what you do.",
                "author": "Steve Jobs"
            },
            {
                "text": "The future belongs to those who believe in the beauty of their dreams.",
                "author": "Eleanor Roosevelt"
            },
            {
                "text": "It does not matter how slowly you go as long as you do not stop.",
                "author": "Confucius"
            },
            {
                "text": "The only person you are destined to become is the person you decide to be.",
                "author": "Ralph Waldo Emerson"
            }       
          
        
            
];
