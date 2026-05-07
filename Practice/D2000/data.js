const TOPICS = [
  {
    id: "immigration",
    title: "Immigration",
    sentences: [
      {
        id: "imm1",
        text: "Most immigrants move to foreign countries either for better employment opportunities and income or for an improved living environment.",
        glossary: [
          { word: "immigrants", ja: "移民", note: "外国に移り住む人" },
          { word: "opportunities", ja: "機会・チャンス", note: "opportunity の複数形" },
          { word: "improved", ja: "改善された", note: "improve（改善する）の過去分詞" }
        ]
      },
      {
        id: "imm2",
        text: "While many immigrants relocate to be better off financially, research suggests that the movement of labor between borders also improves the stability of the global economy and helps it to flourish.",
        glossary: [
          { word: "relocate", ja: "移転する・引っ越す", note: "re-（再び）+ locate（位置づける）" },
          { word: "better off", ja: "より豊かな・暮らしが良い", note: "financially と組み合わせ「経済的に豊か」" },
          { word: "stability", ja: "安定性", note: "stable（安定した）の名詞形" },
          { word: "flourish", ja: "繁栄する・栄える", note: "thrive と同義。名詞は flourishing" }
        ]
      },
      {
        id: "imm3",
        text: "It is argued that this is because immigrants bring diverse and scarce skills and abilities to the countries to which they immigrate. They also fulfill the eternal demand for unskilled labor in these countries.",
        glossary: [
          { word: "diverse", ja: "多様な", note: "diversity（多様性）の形容詞形" },
          { word: "scarce", ja: "希少な・乏しい", note: "scarcity（希少性）の形容詞形" },
          { word: "fulfill", ja: "満たす・応える", note: "fulfill demand で「需要を満たす」" },
          { word: "eternal", ja: "永続的な・絶えない", note: "ここでは「いつの時代も続く」という意味" },
          { word: "unskilled labor", ja: "非熟練労働", note: "専門技術を要しない労働" }
        ]
      },
      {
        id: "imm4",
        text: "As an illustration, Australia has supported the view that the liberty of movement is a core and innate human rights principle rather than a privilege. Thanks to this, the country has prospered economically.",
        glossary: [
          { word: "as an illustration", ja: "例として", note: "for example と同義のフォーマル表現" },
          { word: "liberty", ja: "自由", note: "freedom と似るが、よりフォーマル・法的なニュアンス" },
          { word: "innate", ja: "生まれながらの・本質的な", note: "生得的、本来備わっているという意味" },
          { word: "privilege", ja: "特権", note: "一部の人にだけ与えられる権利" },
          { word: "prospered", ja: "繁栄した", note: "prosper（繁栄する）の過去形" }
        ]
      }
    ]
  },
  {
    id: "linguistics",
    title: "Linguistics",
    sentences: [
      {
        id: "ling1",
        text: "Linguistics is the scientific inquiry into and study of language. It involves the analysis of language form and meaning as well as language in context.",
        glossary: [
          { word: "linguistics", ja: "言語学", note: "言語を科学的に研究する学問" },
          { word: "inquiry", ja: "研究・探究", note: "scientific inquiry で「科学的探究」" },
          { word: "analysis", ja: "分析", note: "analyze（分析する）の名詞形" }
        ]
      },
      {
        id: "ling2",
        text: "Traditionally, linguistics endeavors to analyze language by studying and comparing the elements of sound and meaning. This process has subsequently led to the division of linguistics into various disciplines including phonetics, semantics, syntax, and pragmatics.",
        glossary: [
          { word: "endeavors", ja: "努める・取り組む", note: "tries hard の フォーマル表現" },
          { word: "subsequently", ja: "その後・結果として", note: "after that / as a result のフォーマル表現" },
          { word: "phonetics", ja: "音声学", note: "言語の音を研究する分野" },
          { word: "semantics", ja: "意味論", note: "言語の意味を研究する分野" },
          { word: "syntax", ja: "統語論・構文論", note: "文の構造・文法規則を研究する分野" },
          { word: "pragmatics", ja: "語用論", note: "文脈における言語使用を研究する分野" }
        ]
      },
      {
        id: "ling3",
        text: "Given its scientific nature, the field of linguistics is descriptive and neutral and does not attach subjective value judgments to the features or use of language.",
        glossary: [
          { word: "given", ja: "〜を踏まえると", note: "considering と同義のフォーマル表現" },
          { word: "descriptive", ja: "記述的な", note: "あるがままを記述する（規範的でない）" },
          { word: "neutral", ja: "中立的な", note: "どちらかに偏らない" },
          { word: "subjective", ja: "主観的な", note: "objective（客観的）の反対語" },
          { word: "value judgments", ja: "価値判断", note: "良い・悪いなどの判断を下すこと" }
        ]
      },
      {
        id: "ling4",
        text: "The study of the different accents and dialects of English spoken by communities within the United Kingdom offers a prime example of this attitude. No way of speaking is held by linguists to be superior, acceptable, or correct.",
        glossary: [
          { word: "dialects", ja: "方言", note: "地域特有の言語変種" },
          { word: "prime example", ja: "典型的な例", note: "perfect/ideal example と同義" },
          { word: "linguists", ja: "言語学者", note: "linguistics の研究者" },
          { word: "superior", ja: "優れた・上位の", note: "ここでは「より正しい」というニュアンス" }
        ]
      }
    ]
  },
  {
    id: "anthropology",
    title: "Anthropology",
    sentences: [
      {
        id: "anth1",
        text: "The purpose of anthropology is mainly to shed light on the origins and development of humans. It includes the study of how the emergence of humans is related to the development of other primates such as apes and monkeys.",
        glossary: [
          { word: "anthropology", ja: "人類学", note: "人間の起源・社会・文化を研究する学問" },
          { word: "shed light on", ja: "〜を明らかにする・解明する", note: "重要熟語。illuminate と同義" },
          { word: "origins", ja: "起源・始まり", note: "origin の複数形" },
          { word: "emergence", ja: "出現・誕生", note: "emerge（現れる）の名詞形" },
          { word: "primates", ja: "霊長類", note: "apes（類人猿）、monkeys（猿）を含む動物群" }
        ]
      },
      {
        id: "anth2",
        text: "While many disciplines have trended toward dissolving into increasingly confined areas of specialization, anthropology has maintained its status as a fusion of humanity-related studies, investigating manifold fields including commerce, linguistics, and archaeology.",
        glossary: [
          { word: "disciplines", ja: "学問分野", note: "academic disciplines で「学術分野」" },
          { word: "dissolving", ja: "解体する・細分化される", note: "ここでは「より細かい分野に分かれていく」" },
          { word: "confined", ja: "限定された・狭い", note: "narrow と同義のフォーマル表現" },
          { word: "specialization", ja: "専門化", note: "特定分野への集中・特化" },
          { word: "fusion", ja: "融合・統合", note: "複数の分野が合わさること" },
          { word: "manifold", ja: "多岐にわたる・多様な", note: "various/diverse の文語的表現" }
        ]
      },
      {
        id: "anth3",
        text: "For instance, the anthropological study of money has extended our understanding of the shifting role of currency throughout history, therefore assisting in predicting the impact of burgeoning currencies such as Bitcoin and Ethereum on commercial transactions.",
        glossary: [
          { word: "anthropological", ja: "人類学的な", note: "anthropology の形容詞形" },
          { word: "shifting", ja: "変化する・移り変わる", note: "changing のフォーマル表現" },
          { word: "burgeoning", ja: "急成長している・急拡大の", note: "rapidly growing と同義" },
          { word: "commercial transactions", ja: "商取引・取引", note: "ビジネス上の売買やりとり" }
        ]
      },
      {
        id: "anth4",
        text: "This example illustrates how obtaining a more complete and cohesive view of humanity offers perspective on our current condition and helps us foresee where we are heading. For this reason, the value of anthropology should not be underestimated.",
        glossary: [
          { word: "illustrates", ja: "示す・説明する", note: "demonstrates と同義" },
          { word: "cohesive", ja: "まとまりのある・統一された", note: "coherent と似る。断片的でなく全体的な" },
          { word: "foresee", ja: "予見する・予測する", note: "predict と同義のフォーマル表現" },
          { word: "underestimated", ja: "過小評価される", note: "underestimate（過小評価する）の受動態" }
        ]
      }
    ]
  },
  {
    id: "archaeology",
    title: "Archaeology",
    sentences: [
      {
        id: "arch1",
        text: "Archaeology is the study of historical human activity through the recovery, inspection, and analysis of material remains that are usually concealed, such as graves, tools, and pottery.",
        glossary: [
          { word: "archaeology", ja: "考古学", note: "遺物から過去の人間活動を研究する学問" },
          { word: "recovery", ja: "発掘・回収", note: "埋まっているものを掘り出すこと" },
          { word: "inspection", ja: "検査・調査", note: "詳しく調べること" },
          { word: "concealed", ja: "隠された・埋もれた", note: "hidden と同義" },
          { word: "pottery", ja: "陶器・土器", note: "粘土を焼いて作った器" }
        ]
      },
      {
        id: "arch2",
        text: "At a practical level, archaeology usually involves the surveying of sites and the removal, analysis, and preservation of fragile recovered items. The analysis typically relies on cross-disciplinary research that often sheds light on ancient civilizations.",
        glossary: [
          { word: "surveying", ja: "調査・測量", note: "現地を系統的に調べること" },
          { word: "preservation", ja: "保存・保護", note: "preserve（保存する）の名詞形" },
          { word: "fragile", ja: "壊れやすい・繊細な", note: "delicate と同義" },
          { word: "cross-disciplinary", ja: "学際的な", note: "複数の学問分野にまたがる" },
          { word: "civilizations", ja: "文明", note: "civilization の複数形" }
        ]
      },
      {
        id: "arch3",
        text: "Stonehenge, for example, one of the first archaeological discoveries, was especially critical for providing an understanding about a now-extinct ancient society, for which no written records or documentation exist.",
        glossary: [
          { word: "archaeological", ja: "考古学的な", note: "archaeology の形容詞形" },
          { word: "critical", ja: "重要な・不可欠な", note: "crucial/essential と同義" },
          { word: "extinct", ja: "絶滅した・消滅した", note: "もはや存在しないという意味" },
          { word: "documentation", ja: "文書記録・資料", note: "書面による記録・証拠" }
        ]
      },
      {
        id: "arch4",
        text: "Therefore, this discipline is very important in furthering our visual understanding of the way ancient humans lived, engaged, and interacted. It also shows us how this ancient history has shaped our lives today.",
        glossary: [
          { word: "discipline", ja: "学問分野", note: "field of study と同義" },
          { word: "furthering", ja: "促進する・深める", note: "advancing と同義" },
          { word: "engaged", ja: "関わった・交流した", note: "ここでは「社会的に活動した」という意味" },
          { word: "shaped", ja: "形作った・影響を与えた", note: "influence のフォーマル表現" }
        ]
      }
    ]
  },
  {
    id: "art",
    title: "Art",
    sentences: [
      {
        id: "art1",
        text: "In essence, the majority of art consists of three classical branches: painting, sculpture, and architecture.",
        glossary: [
          { word: "in essence", ja: "本質的に・要するに", note: "essentially/basically のフォーマル表現" },
          { word: "sculpture", ja: "彫刻", note: "3次元の造形芸術" },
          { word: "architecture", ja: "建築（学）", note: "ここでは芸術の一形態として" }
        ]
      },
      {
        id: "art2",
        text: "More broadly speaking, the definition of art also includes the deliberate production, compiling, and publication of music, film, dance, literature, and interactive media.",
        glossary: [
          { word: "broadly speaking", ja: "広い意味では", note: "generally speaking と同義" },
          { word: "deliberate", ja: "意図的な・意識的な", note: "intentional と同義" },
          { word: "compiling", ja: "編集・編纂", note: "素材を集めて一つにまとめること" },
          { word: "interactive media", ja: "インタラクティブメディア", note: "ゲームなど双方向性のある媒体" }
        ]
      },
      {
        id: "art3",
        text: "As typified by the debate over graffiti's classification as either art or vandalism, whether or not something is classified as art is often the subject of controversy, particularly in contemporary times. Indeed, some people proclaim that the definition of art is too vague.",
        glossary: [
          { word: "typified by", ja: "〜に典型的に示されるように", note: "exemplified by と同義" },
          { word: "graffiti", ja: "落書き・グラフィティ", note: "公共の場に描かれた絵や文字" },
          { word: "vandalism", ja: "器物損壊・公共物破壊", note: "意図的に財産を傷つける行為" },
          { word: "controversy", ja: "論争・議論", note: "意見が分かれる激しい議論" },
          { word: "proclaim", ja: "宣言する・主張する", note: "declare と同義のフォーマル表現" },
          { word: "vague", ja: "曖昧な・不明確な", note: "unclear と同義" }
        ]
      },
      {
        id: "art4",
        text: "This persistent ambiguity in classifying something as art is amplified by subtle differences in what people find aesthetically pleasing and how strictly they define the term.",
        glossary: [
          { word: "persistent", ja: "根強い・継続する", note: "continuing to exist のフォーマル表現" },
          { word: "ambiguity", ja: "曖昧さ・多義性", note: "vagueness と同義。ambiguous の名詞形" },
          { word: "amplified", ja: "増幅された・強調された", note: "made stronger/greater のフォーマル表現" },
          { word: "aesthetically pleasing", ja: "美的に好ましい・美しい", note: "aesthetic（美的）+ pleasing（好ましい）" }
        ]
      }
    ]
  },
  {
    id: "architecture",
    title: "Architecture",
    sentences: [
      {
        id: "archi1",
        text: "Architecture is the process and outcome of planning, designing, and constructing buildings as well as other artificial structures.",
        glossary: [
          { word: "outcome", ja: "結果・成果", note: "result と同義のフォーマル表現" },
          { word: "constructing", ja: "建設する・建造する", note: "building のフォーマル表現" },
          { word: "artificial", ja: "人工の・人為的な", note: "man-made と同義" }
        ]
      },
      {
        id: "archi2",
        text: "Architecture styles differ widely among various geographical locations as a result of the influence of history, culture, and climate.",
        glossary: [
          { word: "geographical", ja: "地理的な", note: "geography（地理）の形容詞形" },
          { word: "as a result of", ja: "〜の結果として", note: "due to / because of のフォーマル表現" }
        ]
      },
      {
        id: "archi3",
        text: "It is interesting to note that structures have become much more complex over the last few decades, reflected in the remarkable increase in the number of spectacular and magnificent buildings with regionally specific designs. This is exemplified by buildings such as The Shard in London.",
        glossary: [
          { word: "remarkable", ja: "著しい・注目すべき", note: "notable/significant と同義" },
          { word: "spectacular", ja: "壮観な・見事な", note: "impressive と同義" },
          { word: "magnificent", ja: "壮大な・素晴らしい", note: "grand/impressive のフォーマル表現" },
          { word: "regionally specific", ja: "地域に特有の", note: "その地域独自のデザイン" },
          { word: "exemplified", ja: "典型的に示される", note: "typified by と同義" }
        ]
      },
      {
        id: "archi4",
        text: "Some of the key causes behind this increased complexity are advancements in energy, building materials, and construction methods, and workers becoming more proficient.",
        glossary: [
          { word: "advancements", ja: "進歩・発展", note: "progress/developments と同義" },
          { word: "proficient", ja: "熟練した・堪能な", note: "skilled/expert と同義" }
        ]
      }
    ]
  },
  {
    id: "performing_arts",
    title: "Performing Arts",
    sentences: [
      {
        id: "perf1",
        text: "Performing arts are a type of art typically enacted in front of live audiences and delivered by performers using their voices or bodies. Examples include theater, dance, and opera.",
        glossary: [
          { word: "enacted", ja: "上演される・演じられる", note: "performed と同義のフォーマル表現" },
          { word: "audiences", ja: "観客・聴衆", note: "ライブで見ている人たち" }
        ]
      },
      {
        id: "perf2",
        text: "While it is often believed that we need to attend specialized schools to learn performing arts, educational opportunities are now easy to pursue at most secondary schools and universities.",
        glossary: [
          { word: "specialized", ja: "専門的な", note: "specific/expert のフォーマル表現" },
          { word: "pursue", ja: "追求する・取り組む", note: "follow/seek と同義" },
          { word: "secondary schools", ja: "中等教育学校・高校", note: "UK英語で中学・高校に相当" }
        ]
      },
      {
        id: "perf3",
        text: "This increase in accessibility is in response to research that suggests that performing arts offer many benefits to students, in spite of the fact that they may not lead directly to employment opportunities.",
        glossary: [
          { word: "accessibility", ja: "アクセスのしやすさ・利用しやすさ", note: "accessible（利用しやすい）の名詞形" },
          { word: "in response to", ja: "〜に応えて・〜を受けて", note: "as a response to と同義" },
          { word: "in spite of", ja: "〜にもかかわらず", note: "despite と同義。重要熟語" }
        ]
      },
      {
        id: "perf4",
        text: "For instance, studies have indicated that students often find that performing arts allow them to freely express emotions that they might otherwise feel uncomfortable revealing.",
        glossary: [
          { word: "indicated", ja: "示した・明らかにした", note: "shown/demonstrated と同義" },
          { word: "otherwise", ja: "そうでなければ", note: "if not for this と同義" },
          { word: "revealing", ja: "さらけ出す・表現する", note: "showing/exposing と同義" }
        ]
      }
    ]
  }
];
