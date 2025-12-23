// 测试题目数据
const questions = [
    {
        id: 1,
        text: "当你收到喜欢的人发来的消息时，你会？",
        options: [
            { id: 1, text: "秒回！必须秒回！就算在洗澡也要擦干手回！", score: 5, type: "romantic" },
            { id: 2, text: "等个几分钟再回，不能让对方觉得我很闲", score: 3, type: "practical" },
            { id: 3, text: "先截图发闺蜜群/兄弟群，让大家帮忙分析一下再回", score: 4, type: "social" },
            { id: 4, text: "假装没看见，等想起的时候已经是第二天了", score: 1, type: "independent" }
        ]
    },
    {
        id: 2,
        text: "约会时对方迟到了半小时，你会？",
        options: [
            { id: 1, text: "已经在心里演完了一整部分手大戏", score: 2, type: "dramatic" },
            { id: 2, text: "理解，路上总会有各种意外", score: 4, type: "understanding" },
            { id: 3, text: "先点好自己的那份吃的，不等了", score: 3, type: "practical" },
            { id: 4, text: "发个定位给他，并配文：“我在XXX，最后5分钟”", score: 5, type: "romantic" }
        ]
    },
    {
        id: 3,
        text: "你认为最好的表白方式是？",
        options: [
            { id: 1, text: "直接说“我喜欢你”，简单粗暴", score: 5, type: "direct" },
            { id: 2, text: "写一封深情的情书，字里行间都是爱", score: 4, type: "romantic" },
            { id: 3, text: "通过共同朋友暗示，让对方主动", score: 3, type: "indirect" },
            { id: 4, text: "用行动证明，比如默默为对方付出", score: 2, type: "practical" }
        ]
    },
    {
        id: 4,
        text: "当你和伴侣吵架时，你会？",
        options: [
            { id: 1, text: "必须争个对错，不然睡不着觉", score: 2, type: "logical" },
            { id: 2, text: "先道歉，哄好对方再说，对错不重要", score: 5, type: "romantic" },
            { id: 3, text: "冷战，看谁先忍不住", score: 1, type: "dramatic" },
            { id: 4, text: "冷静分析问题，找到解决方案", score: 3, type: "practical" }
        ]
    },
    {
        id: 5,
        text: "你最喜欢的约会地点是？",
        options: [
            { id: 1, text: "浪漫的餐厅，最好有烛光晚餐", score: 5, type: "romantic" },
            { id: 2, text: "在家做饭，温馨又省钱", score: 3, type: "practical" },
            { id: 3, text: "游乐园，一起疯一起玩", score: 4, type: "fun" },
            { id: 4, text: "图书馆，安静又有文化氛围", score: 2, type: "intellectual" }
        ]
    },
    {
        id: 6,
        text: "当你看到情侣秀恩爱时，你会？",
        options: [
            { id: 1, text: "“awsl”，太甜了，我也想要", score: 5, type: "romantic" },
            { id: 2, text: "“啧，又在撒狗粮”，但其实有点羡慕", score: 3, type: "neutral" },
            { id: 3, text: "“这有什么好秀的”，内心毫无波澜", score: 1, type: "independent" },
            { id: 4, text: "拿出手机拍照，发给单身的朋友看", score: 2, type: "humorous" }
        ]
    },
    {
        id: 7,
        text: "你认为爱情中最重要的是什么？",
        options: [
            { id: 1, text: "忠诚，必须100%忠诚", score: 5, type: "serious" },
            { id: 2, text: "理解和包容", score: 4, type: "mature" },
            { id: 3, text: "共同话题和兴趣", score: 3, type: "compatible" },
            { id: 4, text: "颜值和身材，毕竟是看脸的时代", score: 2, type: "superficial" }
        ]
    },
    {
        id: 8,
        text: "当你暗恋一个人时，你会？",
        options: [
            { id: 1, text: "默默关注，不敢表白，怕被拒绝", score: 2, type: "shy" },
            { id: 2, text: "制造各种偶遇，让对方注意到自己", score: 3, type: "strategic" },
            { id: 3, text: "直接表白，成不成都要试一下", score: 5, type: "brave" },
            { id: 4, text: "通过朋友了解对方的喜好，投其所好", score: 4, type: "thoughtful" }
        ]
    },
    {
        id: 9,
        text: "你最喜欢的爱情电影是？",
        options: [
            { id: 1, text: "《泰坦尼克号》，经典中的经典", score: 5, type: "romantic" },
            { id: 2, text: "《喜剧之王》，“我养你啊！”", score: 4, type: "sentimental" },
            { id: 3, text: "《大话西游》，“如果非要在这份爱上加一个期限，我希望是一万年”", score: 3, type: "dramatic" },
            { id: 4, text: "《失恋33天》，失恋也要笑着活下去", score: 2, type: "realistic" }
        ]
    },
    {
        id: 10,
        text: "当你的伴侣忘记了你们的纪念日，你会？",
        options: [
            { id: 1, text: "生气！非常生气！这都能忘？", score: 2, type: "dramatic" },
            { id: 2, text: "提醒他/她，如果补过就算了", score: 3, type: "practical" },
            { id: 3, text: "假装也忘记了，看谁先忍不住", score: 1, type: "playful" },
            { id: 4, text: "理解，毕竟大家都很忙", score: 4, type: "understanding" }
        ]
    },
    {
        id: 11,
        text: "你认为异地恋能成功吗？",
        options: [
            { id: 1, text: "能，真爱无敌！", score: 5, type: "optimistic" },
            { id: 2, text: "很难，但不是不可能", score: 3, type: "realistic" },
            { id: 3, text: "不能，距离产生的不是美，是小三", score: 1, type: "pessimistic" },
            { id: 4, text: "看情况，取决于两个人的感情基础", score: 4, type: "neutral" }
        ]
    },
    {
        id: 12,
        text: "当你发现伴侣在看其他异性时，你会？",
        options: [
            { id: 1, text: "生气，质问他/她为什么看别人", score: 2, type: "jealous" },
            { id: 2, text: "也看过去，一起讨论颜值", score: 4, type: "open" },
            { id: 3, text: "假装没看见，但心里有点不舒服", score: 3, type: "insecure" },
            { id: 4, text: "理解，爱美之心人皆有之", score: 5, type: "confident" }
        ]
    },
    {
        id: 13,
        text: "你最喜欢的爱情歌曲是？",
        options: [
            { id: 1, text: "《月亮代表我的心》，经典永流传", score: 5, type: "classic" },
            { id: 2, text: "《小幸运》，“原来你是我最想留住的幸运”", score: 4, type: "sentimental" },
            { id: 3, text: "《恋爱ing》，“恋爱ing，happy ing”", score: 3, type: "energetic" },
            { id: 4, text: "《单身情歌》，“找一个最爱的深爱的想爱的亲爱的人来告别单身”", score: 2, type: "single" }
        ]
    },
    {
        id: 14,
        text: "当你收到伴侣的礼物时，你会？",
        options: [
            { id: 1, text: "非常开心，马上发朋友圈炫耀", score: 5, type: "excited" },
            { id: 2, text: "开心，但更在意礼物背后的心意", score: 4, type: "thoughtful" },
            { id: 3, text: "表面开心，心里想着实用性", score: 3, type: "practical" },
            { id: 4, text: "如果不是自己喜欢的，会有点失望", score: 2, type: "honest" }
        ]
    },
    {
        id: 15,
        text: "你认为婚姻是爱情的坟墓吗？",
        options: [
            { id: 1, text: "不是，婚姻是爱情的升华", score: 5, type: "romantic" },
            { id: 2, text: "看情况，经营得好就是天堂，不好就是坟墓", score: 4, type: "realistic" },
            { id: 3, text: "有点道理，婚姻会磨平爱情的激情", score: 3, type: "cynical" },
            { id: 4, text: "是，所以我选择不婚", score: 1, type: "independent" }
        ]
    },
    {
        id: 16,
        text: "当你和伴侣有不同意见时，你会？",
        options: [
            { id: 1, text: "坚持自己的观点，说服对方", score: 2, type: "stubborn" },
            { id: 2, text: "听取对方的意见，寻找共同点", score: 5, type: "compromising" },
            { id: 3, text: "各持己见，互不干涉", score: 3, type: "independent" },
            { id: 4, text: "找第三方调解", score: 4, type: "practical" }
        ]
    },
    {
        id: 17,
        text: "你认为最好的爱情状态是？",
        options: [
            { id: 1, text: "天天粘在一起，形影不离", score: 5, type: "clingy" },
            { id: 2, text: "有各自的空间，但心里想着对方", score: 4, type: "balanced" },
            { id: 3, text: "一起成长，共同进步", score: 3, type: "ambitious" },
            { id: 4, text: "平平淡淡，细水长流", score: 2, type: "calm" }
        ]
    },
    {
        id: 18,
        text: "当你失恋时，你会？",
        options: [
            { id: 1, text: "大哭一场，然后重新开始", score: 4, type: "resilient" },
            { id: 2, text: "沉浸在悲伤中，久久不能自拔", score: 2, type: "sensitive" },
            { id: 3, text: "马上开始下一段恋情，忘记过去", score: 3, type: "rebound" },
            { id: 4, text: "反思自己，总结经验教训", score: 5, type: "mature" }
        ]
    },
    {
        id: 19,
        text: "你认为爱情需要测试吗？",
        options: [
            { id: 1, text: "需要，不测试怎么知道对方是不是真心", score: 2, type: "suspicious" },
            { id: 2, text: "不需要，爱情需要信任", score: 5, type: "trusting" },
            { id: 3, text: "偶尔测试一下可以增加情趣", score: 3, type: "playful" },
            { id: 4, text: "看情况，如果对方有可疑行为", score: 4, type: "cautious" }
        ]
    },
    {
        id: 20,
        text: "你认为一见钟情靠谱吗？",
        options: [
            { id: 1, text: "靠谱，我就是这样找到真爱的", score: 5, type: "romantic" },
            { id: 2, text: "不靠谱，爱情需要时间培养", score: 2, type: "practical" },
            { id: 3, text: "有点靠谱，但还需要深入了解", score: 4, type: "balanced" },
            { id: 4, text: "看颜值，如果长得好看就靠谱", score: 3, type: "superficial" }
        ]
    }
];

// 测试结果数据
const results = [
    {
        id: 1,
        type: "romantic",
        name: "浪漫主义者",
        description: "你是一个不折不扣的浪漫主义者！你相信真爱无敌，对爱情充满憧憬和幻想。你喜欢用各种浪漫的方式表达爱意，也期待收到同样浪漫的回应。在爱情中，你愿意为对方付出一切，追求轰轰烈烈的爱情故事。",
        scoreRange: [80, 100],
        image: "https://p3-doubao-search-sign.byteimg.com/labis/0d3789974a7cb04cd7a4801d245a8a55~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1779954532&x-signature=fvomUI1FM5fSu5MxERiF6xDavWg%3D",
        memes: [
            "https://p3-doubao-search-sign.byteimg.com/labis/image/d1ac4033dae35a5b7b0e26e1ab354f0f~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1779954532&x-signature=PZO%2F2FLLTgFrVAjtR40boi45a8s%3D",
            "https://p3-doubao-search-sign.byteimg.com/labis/042654e4675dfd9c4fd689da32505462~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1779954532&x-signature=hwTnbWv0OyqQhG7V%2BCiJ%2FSz0uIg%3D"
        ],
        interpretation: "作为浪漫主义者，你在爱情中充满激情和创造力，能够为伴侣带来惊喜和感动。但有时可能过于理想化，对爱情抱有不切实际的期待。建议在保持浪漫的同时，也要理性看待爱情中的问题，不要让幻想掩盖了现实。记住，真正的爱情不仅有鲜花和烛光，更需要两个人共同努力经营。"
    },
    {
        id: 2,
        type: "practical",
        name: "实用主义者",
        description: "你是一个实用主义者！在爱情中，你注重实际和现实，不会被花言巧语迷惑。你认为爱情需要建立在稳定的基础上，更看重对方的性格、能力和责任感。你不喜欢搞虚的，更愿意用实际行动来表达爱意，比如为对方解决问题、提供帮助。",
        scoreRange: [60, 79],
        image: "https://p11-doubao-search-sign.byteimg.com/labis/92bc22ffc58c67df3626d1c46ba980d7~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1779954532&x-signature=zlJK%2Bfh1qMXpu0CMSUOt1rzuB0A%3D",
        memes: [
            "https://p3-doubao-search-sign.byteimg.com/labis/45f6b18feb76d7375418e3d6c7610788~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1779954532&x-signature=LIdsbcicFnIxbRJLMmE4PJAJ11g%3D",
            "https://p3-doubao-search-sign.byteimg.com/pgc-image/RzVKaABB6yTQSY~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1779954532&x-signature=XSq7SQHZU4jw%2Breq83Kc9s1mMBg%3D"
        ],
        interpretation: "作为实用主义者，你在爱情中非常可靠和理性，能够为关系提供稳定的基础。但有时可能过于现实，缺乏浪漫和激情，让对方觉得你不够投入。建议在保持理性的同时，也要学会表达情感，偶尔制造一些小惊喜，让爱情更加丰富多彩。记住，爱情需要物质基础，也需要精神滋养。"
    },
    {
        id: 3,
        type: "independent",
        name: "独立主义者",
        description: "你是一个独立主义者！在爱情中，你保持着自己的个性和空间，不会因为恋爱而失去自我。你认为两个人在一起应该是互相尊重、互相支持，而不是互相依赖。你有自己的生活和兴趣，不会把所有时间都花在对方身上，也不希望对方这样做。",
        scoreRange: [40, 59],
        image: "https://p3-doubao-search-sign.byteimg.com/labis/image/f5073f648a8a4d52534e2364c24560e4~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1779954533&x-signature=rdrHaUm9rFoKELRz557h4qjtTGM%3D",
        memes: [
            "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-6w9my0ksvp/6f3f39e796d84176be51952ec5903096~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1779954532&x-signature=9lC0xIFzuKVjpRGgRz2QWDVv3iY%3D",
            "https://p3-doubao-search-sign.byteimg.com/pgc-image/2a47c2241f2a4b9db4798df9026aa7ca~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1779954532&x-signature=HvJWr%2BZVAng31MWKitr9W0oivUo%3D"
        ],
        interpretation: "作为独立主义者，你在爱情中保持着清醒的头脑和独立的人格，这非常难得。但有时可能过于强调自我，给对方造成距离感，让对方觉得你不够在乎。建议在保持独立的同时，也要学会依赖和信任对方，适当表达自己的情感需求。记住，爱情需要两个人共同参与，而不是一个人的独角戏。"
    },
    {
        id: 4,
        type: "dramatic",
        name: "戏剧女王/国王",
        description: "你是一个戏剧女王/国王！在爱情中，你喜欢追求刺激和变化，不喜欢平淡无奇的生活。你的情绪起伏较大，容易陷入极端的快乐或悲伤中。你喜欢被关注和呵护，也擅长用各种方式吸引对方的注意力。在你的爱情故事中，永远不缺精彩的情节和转折。",
        scoreRange: [20, 39],
        image: "https://p3-doubao-search-sign.byteimg.com/labis/image/167dbf6b33d9cdeecbdb141a3206b35d~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1779954533&x-signature=z9cs09KKlcusGT%2BQvBgFptKHQD4%3D",
        memes: [
            "https://p3-doubao-search-sign.byteimg.com/labis/cb46f1e83dbc861a7fe7af4b8534cea4~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1779954533&x-signature=atqxt%2FEpXOKavvU4QlxqqczkKZg%3D",
            "https://p3-doubao-search-sign.byteimg.com/labis/image/a3371bd6cae95c5e2d3ebec58327a74f~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1779954533&x-signature=h%2F731Yzam4pWe7O91FxdU3LVB7o%3D"
        ],
        interpretation: "作为戏剧女王/国王，你在爱情中充满活力和激情，能够为关系带来很多乐趣和惊喜。但有时可能过于情绪化，容易小题大做，给对方造成压力。建议学会控制自己的情绪，理性看待爱情中的问题，不要让小事演变成大的冲突。记住，爱情需要平淡中的真实，而不是永远的高潮迭起。"
    }
];

// DOM元素
const pages = {
    home: document.getElementById('home'),
    quiz: document.getElementById('quiz'),
    result: document.getElementById('result')
};

const buttons = {
    start: document.getElementById('start-test'),
    prev: document.getElementById('prev-btn'),
    next: document.getElementById('next-btn'),
    share: document.getElementById('share-btn'),
    restart: document.getElementById('restart-btn'),
    closeModal: document.getElementById('close-modal'),
    copyLink: document.getElementById('copy-link-btn')
};

const elements = {
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    resultContent: document.getElementById('result-content'),
    resultInterpretation: document.getElementById('result-interpretation'),
    interpretationText: document.getElementById('interpretation-text'),
    shareModal: document.getElementById('share-modal'),
    shareResultText: document.getElementById('share-result-text')
};

// 音效元素
const sounds = {
    click: document.getElementById('click-sound'),
    next: document.getElementById('next-sound'),
    result: document.getElementById('result-sound')
};

// 测试状态
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let resultType = '';

// 初始化
function init() {
    // 绑定事件
    buttons.start.addEventListener('click', startTest);
    buttons.prev.addEventListener('click', goToPrevQuestion);
    buttons.next.addEventListener('click', goToNextQuestion);
    buttons.share.addEventListener('click', openShareModal);
    buttons.restart.addEventListener('click', restartTest);
    buttons.closeModal.addEventListener('click', closeShareModal);
    buttons.copyLink.addEventListener('click', copyResultLink);
    
    // 预加载音效
    preloadSounds();
}

// 预加载音效
function preloadSounds() {
    Object.values(sounds).forEach(sound => {
        sound.load();
    });
}

// 播放音效
function playSound(sound) {
    if (sound && sound.paused) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log('Error playing sound:', e));
    }
}

// 开始测试
function startTest() {
    playSound(sounds.click);
    showPage('quiz');
    showQuestion(currentQuestionIndex);
}

// 显示指定页面
function showPage(pageId) {
    Object.keys(pages).forEach(key => {
        pages[key].classList.add('hidden');
        pages[key].classList.remove('active');
    });
    
    pages[pageId].classList.remove('hidden');
    pages[pageId].classList.add('active');
}

// 显示当前问题
function showQuestion(index) {
    const question = questions[index];
    elements.questionText.textContent = question.text;
    elements.optionsContainer.innerHTML = '';
    
    // 创建选项
    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.dataset.optionId = option.id;
        
        // 检查是否已选择此选项
        const isSelected = userAnswers[currentQuestionIndex] === option.id;
        if (isSelected) {
            optionElement.classList.add('selected');
        }
        
        optionElement.innerHTML = `
            <div class="option-icon">${option.id}</div>
            <div class="option-text">${option.text}</div>
        `;
        
        optionElement.addEventListener('click', () => selectOption(option.id));
        elements.optionsContainer.appendChild(optionElement);
    });
    
    // 更新进度
    updateProgress();
    
    // 更新导航按钮状态
    updateNavigationButtons();
}

// 选择选项
function selectOption(optionId) {
    playSound(sounds.click);
    
    // 记录答案
    userAnswers[currentQuestionIndex] = optionId;
    
    // 更新选项样式
    const options = elements.optionsContainer.querySelectorAll('.option');
    options.forEach(option => {
        if (parseInt(option.dataset.optionId) === optionId) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
}

// 更新进度
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    elements.progressFill.style.width = `${progress}%`;
    elements.progressText.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
}

// 更新导航按钮状态
function updateNavigationButtons() {
    buttons.prev.classList.toggle('hidden', currentQuestionIndex === 0);
    
    if (currentQuestionIndex === questions.length - 1) {
        buttons.next.textContent = '查看结果';
        buttons.next.innerHTML = '<span>查看结果</span><i class="fas fa-check"></i>';
    } else {
        buttons.next.innerHTML = '<span>下一题</span><i class="fas fa-arrow-right"></i>';
    }
}

// 上一题
function goToPrevQuestion() {
    playSound(sounds.click);
    
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

// 下一题
function goToNextQuestion() {
    playSound(sounds.next);
    
    // 如果是最后一题，计算结果
    if (currentQuestionIndex === questions.length - 1) {
        calculateResult();
        showResult();
        return;
    }
    
    // 如果没有选择选项，提示用户
    if (userAnswers[currentQuestionIndex] === undefined) {
        alert('请选择一个选项！');
        return;
    }
    
    // 否则继续下一题
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

// 计算结果
function calculateResult() {
    // 计算总分
    score = 0;
    userAnswers.forEach((answerId, index) => {
        const question = questions[index];
        const selectedOption = question.options.find(option => option.id === answerId);
        if (selectedOption) {
            score += selectedOption.score;
        }
    });
    
    // 确定结果类型
    for (const result of results) {
        if (score >= result.scoreRange[0] && score <= result.scoreRange[1]) {
            resultType = result.type;
            break;
        }
    }
    
    // 如果没有匹配到结果（理论上不会发生），默认第一个结果
    if (!resultType) {
        resultType = results[0].type;
    }
}

// 显示结果
function showResult() {
    playSound(sounds.result);
    showPage('result');
    
    // 获取结果数据
    const result = results.find(r => r.type === resultType);
    
    // 显示结果内容
    elements.resultContent.innerHTML = `
        <img src="${result.image}" alt="${result.name}" class="result-image">
        <h3 class="result-type">${result.name}</h3>
        <p class="result-description">${result.description}</p>
        <p class="result-score">你的恋爱得分：${score}/${questions.length * 5}</p>
        
        <div class="result-memes">
            <img src="${result.memes[0]}" alt="搞笑表情包" class="result-meme">
            <img src="${result.memes[1]}" alt="搞笑表情包" class="result-meme">
        </div>
    `;
    
    // 显示结果解读
    elements.interpretationText.textContent = result.interpretation;
    elements.resultInterpretation.classList.remove('hidden');
    
    // 更新分享内容
    elements.shareResultText.textContent = `${result.name}（得分：${score}/${questions.length * 5}）`;
}

// 打开分享弹窗
function openShareModal() {
    playSound(sounds.click);
    elements.shareModal.classList.add('active');
}

// 关闭分享弹窗
function closeShareModal() {
    playSound(sounds.click);
    elements.shareModal.classList.remove('active');
}

// 复制结果链接
function copyResultLink() {
    playSound(sounds.click);
    
    // 创建一个包含结果的链接（模拟）
    const resultUrl = `${window.location.href}?result=${resultType}&score=${score}`;
    
    // 复制到剪贴板
    navigator.clipboard.writeText(resultUrl)
        .then(() => {
            alert('链接已复制到剪贴板！');
        })
        .catch(err => {
            console.error('无法复制链接: ', err);
            alert('复制失败，请手动复制链接。');
        });
}

// 重新测试
function restartTest() {
    playSound(sounds.click);
    
    // 重置状态
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    resultType = '';
    
    // 返回首页
    showPage('home');
}

// 初始化应用
init();
